const transcriptPane = document.getElementById("transcriptPane");
const transcriptList = document.getElementById("transcriptList");
const recordButton = document.getElementById("recordButton");
const promptSeed = document.getElementById("promptSeed");
const appFrame = document.querySelector(".app-frame");

const menuButton = document.getElementById("menuButton");
const menuDrawer = document.getElementById("menuDrawer");
const menuScrim = document.getElementById("menuScrim");
const menuClose = document.getElementById("menuClose");
const startupNameButton = document.getElementById("startupNameButton");
const settingsButton = document.getElementById("settingsButton");

const startupNameModal = document.getElementById("startupNameModal");
const startupNameInput = document.getElementById("startupNameInput");
const startupNameSave = document.getElementById("startupNameSave");

const settingsModal = document.getElementById("settingsModal");
const settingsStartupName = document.getElementById("settingsStartupName");
const settingsRename = document.getElementById("settingsRename");
const settingsUserName = document.getElementById("settingsUserName");
const settingsUserEmail = document.getElementById("settingsUserEmail");
const settingsPayment = document.getElementById("settingsPayment");
const settingsSubscription = document.getElementById("settingsSubscription");
const voiceRepliesToggle = document.getElementById("voiceRepliesToggle");

const editUserName = document.getElementById("editUserName");
const editUserEmail = document.getElementById("editUserEmail");
const editPayment = document.getElementById("editPayment");
const editSubscription = document.getElementById("editSubscription");

const accountModal = document.getElementById("accountModal");
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");
const accountPayment = document.getElementById("accountPayment");
const accountSubscription = document.getElementById("accountSubscription");
const accountSave = document.getElementById("accountSave");

const textInputModal = document.getElementById("textInputModal");
const textInputField = document.getElementById("textInputField");
const textInputSend = document.getElementById("textInputSend");

const STORAGE_KEYS = {
  startupName: "anna:startupName",
  userName: "anna:userName",
  userEmail: "anna:userEmail",
  paymentMethod: "anna:paymentMethod",
  subscription: "anna:subscription",
  voiceReplies: "anna:voiceReplies"
};

let transcriptEntries = [];
let speechRecognizer = null;
let interimText = "";
let hasStarted = false;

let interimEl = null;
const pendingEls = new Map();

let conversation = [];

let isListeningNow = false;
let lastToggleAt = 0;

let ttsSessionId = 0;
let ttsQueue = [];
let ttsIsPlaying = false;
let ttsCurrentAudio = null;
let ttsCurrentUrl = null;

function getVoiceRepliesEnabled() {
  return (localStorage.getItem(STORAGE_KEYS.voiceReplies) || "true") === "true";
}

function setVoiceRepliesEnabled(enabled) {
  localStorage.setItem(STORAGE_KEYS.voiceReplies, enabled ? "true" : "false");
  if (voiceRepliesToggle) {
    voiceRepliesToggle.checked = enabled;
  }

  if (!enabled) {
    stopAllTts();
  }
}

function stopAllTts() {
  ttsSessionId += 1;
  ttsQueue = [];
  ttsIsPlaying = false;

  if (ttsCurrentAudio) {
    try {
      ttsCurrentAudio.pause();
      ttsCurrentAudio.src = "";
    } catch {
      // ignore
    }
  }
  ttsCurrentAudio = null;

  if (ttsCurrentUrl) {
    try {
      URL.revokeObjectURL(ttsCurrentUrl);
    } catch {
      // ignore
    }
  }
  ttsCurrentUrl = null;
}

function playNextTts() {
  if (ttsIsPlaying) {
    return;
  }
  const next = ttsQueue.shift();
  if (!next) {
    return;
  }
  const { url, sessionId } = next;
  if (sessionId !== ttsSessionId) {
    try {
      URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
    return playNextTts();
  }

  ttsIsPlaying = true;
  ttsCurrentUrl = url;
  const audio = new Audio(url);
  ttsCurrentAudio = audio;

  audio.onended = () => {
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    if (ttsCurrentUrl) {
      try {
        URL.revokeObjectURL(ttsCurrentUrl);
      } catch {
        // ignore
      }
    }
    ttsCurrentUrl = null;
    playNextTts();
  };

  audio.onerror = () => {
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    if (ttsCurrentUrl) {
      try {
        URL.revokeObjectURL(ttsCurrentUrl);
      } catch {
        // ignore
      }
    }
    ttsCurrentUrl = null;
    playNextTts();
  };

  audio.play().catch(() => {
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    if (ttsCurrentUrl) {
      try {
        URL.revokeObjectURL(ttsCurrentUrl);
      } catch {
        // ignore
      }
    }
    ttsCurrentUrl = null;
    playNextTts();
  });
}

async function enqueueElevenLabsTts(text) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }
  if (!getVoiceRepliesEnabled()) {
    return;
  }
  if (isListeningNow) {
    return;
  }

  const mySession = ttsSessionId;
  try {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: cleaned })
    });
    if (!res.ok) {
      return;
    }
    const blob = await res.blob();
    if (mySession !== ttsSessionId) {
      return;
    }
    const url = URL.createObjectURL(blob);
    ttsQueue.push({ url, sessionId: mySession });
    playNextTts();
  } catch {
    // ignore
  }
}

function initBrandLogoImages() {
  const logoImages = document.querySelectorAll("img.logo-image");

  logoImages.forEach((img) => {
    const parentLogo = img.closest(".anna-logo");
    const markLoaded = () => {
      if (parentLogo) {
        parentLogo.classList.add("image-loaded");
      }
    };

    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
      return;
    }

    img.addEventListener("load", markLoaded);
  });
}

function scrollTranscriptIfNeeded() {
  if (!transcriptPane) {
    return;
  }
  const stickToBottom =
    transcriptPane.scrollHeight - transcriptPane.scrollTop - transcriptPane.clientHeight < 28;
  if (isListeningNow || stickToBottom) {
    requestAnimationFrame(() => {
      transcriptPane.scrollTop = transcriptPane.scrollHeight;
    });
  }
}

function appendLine(role, text, opts = {}) {
  if (!transcriptList) {
    return null;
  }
  const paragraph = document.createElement("p");
  paragraph.className = `transcript-line ${role}${opts.interim ? " interim" : ""}`;
  paragraph.textContent = `“${text}”`;
  if (opts.pendingId) {
    paragraph.dataset.pendingId = opts.pendingId;
  }
  transcriptList.appendChild(paragraph);
  scrollTranscriptIfNeeded();
  return paragraph;
}

function setInterim(nextText) {
  const cleaned = String(nextText || "").trim().toLowerCase();
  interimText = cleaned;
  if (!cleaned) {
    if (interimEl && interimEl.remove) {
      interimEl.remove();
    }
    interimEl = null;
    return;
  }

  if (!interimEl) {
    interimEl = appendLine("user", cleaned, { interim: true });
    return;
  }
  interimEl.textContent = `“${cleaned}”`;
  scrollTranscriptIfNeeded();
}

function pushEntry(role, text) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }

  // finalize interim before appending
  if (interimEl && interimEl.remove) {
    interimEl.remove();
  }
  interimEl = null;
  interimText = "";

  transcriptEntries = [...transcriptEntries, { role, text: cleaned }].slice(-80);
  appendLine(role, cleaned);
}

function pushPendingAnna() {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  transcriptEntries = [...transcriptEntries, { role: "ai", text: "…", pendingId: id }].slice(-80);
  const el = appendLine("ai", "…", { pendingId: id });
  if (el) {
    pendingEls.set(id, el);
  }
  return id;
}

function setPendingAnnaText(pendingId, text) {
  const cleaned = String(text || "").trim().toLowerCase() || "…";
  transcriptEntries = transcriptEntries.map((entry) => {
    if (entry.pendingId !== pendingId) {
      return entry;
    }
    return { role: "ai", text: cleaned, pendingId };
  });

  const el =
    pendingEls.get(pendingId) ||
    (transcriptList &&
      transcriptList.querySelector &&
      transcriptList.querySelector(`[data-pending-id="${pendingId}"]`));
  if (el) {
    el.textContent = `“${cleaned}”`;
  }
  scrollTranscriptIfNeeded();
}

function resolvePendingAnna(pendingId, text) {
  const cleaned = String(text || "").trim().toLowerCase() || "…";
  transcriptEntries = transcriptEntries.map((entry) => {
    if (entry.pendingId !== pendingId) {
      return entry;
    }
    return { role: "ai", text: cleaned };
  });

  const el = pendingEls.get(pendingId) || (transcriptList && transcriptList.querySelector && transcriptList.querySelector(`[data-pending-id="${pendingId}"]`));
  if (el) {
    el.textContent = `“${cleaned}”`;
  }
  pendingEls.delete(pendingId);
  scrollTranscriptIfNeeded();
}

async function fetchAnnaReply() {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 20000);

  let response;
  try {
    response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ messages: conversation }),
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let message = `http ${response.status}`;
    try {
      const data = await response.json();
      if (data?.detail) {
        message = String(data.detail);
      } else if (data?.error) {
        message = String(data.error);
      }
    } catch {
      try {
        const text = await response.text();
        if (text) {
          message = text;
        }
      } catch {
        // ignore
      }
    }
    throw new Error(message);
  }

  const data = await response.json();
  return String(data.reply || "").trim();
}

async function fetchAnnaReplyStream(onDelta) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 30000);

  let response;
  try {
    response = await fetch("/api/chat-stream", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ messages: conversation }),
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok || !response.body || !response.body.getReader) {
    // fallback to non-stream
    const full = await fetchAnnaReply();
    if (typeof onDelta === "function") {
      onDelta(full);
    }
    return full;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    if (!chunk) {
      continue;
    }
    fullText += chunk;
    if (typeof onDelta === "function") {
      onDelta(chunk);
    }
  }

  return fullText.trim();
}

function splitIntoSpeakableSegments(buffer) {
  const out = [];
  let remaining = buffer;

  // split on sentence-ish boundaries while keeping it snappy
  const re = /([\s\S]*?[.!?]+)(\s+|$)/g;
  let match;
  let lastIndex = 0;
  while ((match = re.exec(buffer))) {
    const sentence = String(match[1] || "").trim();
    if (sentence) {
      out.push(sentence);
      lastIndex = re.lastIndex;
    }
    // cap queueing per pass
    if (out.length >= 4) {
      break;
    }
  }

  if (out.length > 0) {
    remaining = buffer.slice(lastIndex);
  }

  return { segments: out, remaining };
}

async function startStreamingAnnaReply(pendingId) {
  if (getVoiceRepliesEnabled() && !isListeningNow) {
    stopAllTts();
  }

  let displayFull = "";
  let speakBuffer = "";

  const sessionAtStart = ttsSessionId;

  const final = await fetchAnnaReplyStream((delta) => {
    displayFull += delta;
    setPendingAnnaText(pendingId, displayFull);

    if (!getVoiceRepliesEnabled() || isListeningNow || sessionAtStart !== ttsSessionId) {
      return;
    }

    speakBuffer += delta;
    const { segments, remaining } = splitIntoSpeakableSegments(speakBuffer);
    speakBuffer = remaining;
    segments.forEach((seg) => enqueueElevenLabsTts(seg));
  });

  const cleanedFinal = String(final || "").trim();
  resolvePendingAnna(pendingId, cleanedFinal);

  if (getVoiceRepliesEnabled() && !isListeningNow && sessionAtStart === ttsSessionId) {
    const leftover = String(speakBuffer || "").trim();
    if (leftover) {
      enqueueElevenLabsTts(leftover);
    }
  }

  return cleanedFinal;
}

function ensureSpeechRecognizer() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return null;
  }

  const recognizer = new SpeechRecognition();
  recognizer.continuous = true;
  recognizer.interimResults = true;
  recognizer.lang = "en-US";

  recognizer.onresult = (event) => {
    let nextInterim = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const text = String(result[0]?.transcript || "").trim().toLowerCase();
      if (!text) {
        continue;
      }

      if (result.isFinal) {
        setInterim("");
        pushEntry("user", text);

        conversation = [...conversation, { role: "user", content: text }].slice(-16);
        const pendingId = pushPendingAnna();

        startStreamingAnnaReply(pendingId)
          .then((reply) => {
            const normalized = String(reply || "").trim().toLowerCase();
            conversation = [...conversation, { role: "assistant", content: normalized }].slice(-16);
          })
          .catch((err) => {
            const msg = err && err.message ? String(err.message) : "anna couldn't reply";
            resolvePendingAnna(pendingId, `anna couldn't reply: ${msg}`);
          });
      } else {
        nextInterim = text;
      }
    }

    setInterim(nextInterim);
  };

  recognizer.onerror = () => {
    // keep it quiet; user can tap to stop/retry
  };

  recognizer.onend = () => {
    if (recordButton?.classList.contains("listening")) {
      // safari/chrome may end unexpectedly; don't auto-restart aggressively
      recordButton.classList.remove("listening");
      appFrame?.classList.remove("is-listening");
      isListeningNow = false;
    }
  };

  return recognizer;
}

function setListening(isListening) {
  if (!recordButton || !transcriptPane) {
    return;
  }

  isListeningNow = isListening;
  if (isListening) {
    try {
      stopAllTts();
    } catch {
      // ignore
    }
  }

  recordButton.classList.toggle("listening", isListening);
  appFrame?.classList.toggle("is-listening", isListening);

  if (!hasStarted) {
    hasStarted = true;
    appFrame?.classList.add("has-started");
  }

  if (isListening) {
    transcriptPane.classList.remove("hidden");
    scrollTranscriptIfNeeded();

    if (!speechRecognizer) {
      speechRecognizer = ensureSpeechRecognizer();
    }

    if (speechRecognizer) {
      try {
        speechRecognizer.start();
      } catch {
        // ignore: start can throw if called twice quickly
      }
      return;
    }

    // fallback: typed line via prompt (still real input)
    // fallback if speech recognition isn't available
      closeAllModals();
      if (textInputField) {
        textInputField.value = "";
        requestAnimationFrame(() => {
          textInputField.focus();
        });
      }
      setModalOpen(textInputModal, true);
    recordButton.classList.remove("listening");
    appFrame?.classList.remove("is-listening");
    return;
  }

  interimText = "";
  setInterim("");
  if (speechRecognizer) {
    try {
      speechRecognizer.abort();
    } catch {
      try {
        speechRecognizer.stop();
      } catch {
        // ignore
      }
    }
  }
}

function toggleListeningFromTap(event) {
  event?.preventDefault?.();
  const now = Date.now();
  if (now - lastToggleAt < 260) {
    return;
  }
  lastToggleAt = now;

  const isListening = recordButton?.classList.contains("listening");
  setListening(!isListening);
}

// single source of truth for tap handling (prevents double-fire)
if (recordButton) {
  if ("PointerEvent" in window) {
    recordButton.addEventListener("pointerup", toggleListeningFromTap);
  } else {
    recordButton.addEventListener("click", toggleListeningFromTap);
  }
}

function setMenuOpen(isOpen) {
  if (!menuDrawer) {
    return;
  }

  menuDrawer.classList.toggle("open", isOpen);
  menuDrawer.setAttribute("aria-hidden", String(!isOpen));
}

menuButton?.addEventListener("click", () => setMenuOpen(true));
menuScrim?.addEventListener("click", () => setMenuOpen(false));
menuClose?.addEventListener("click", () => setMenuOpen(false));

function getStartupName() {
  return localStorage.getItem(STORAGE_KEYS.startupName) || "";
}

function getAccountValue(key) {
  return localStorage.getItem(key) || "";
}

function renderStartupName() {
  if (!startupNameButton) {
    return;
  }
  const name = getStartupName();
  startupNameButton.textContent = name ? name : "name your startup";
  if (settingsStartupName) {
    settingsStartupName.textContent = name ? name : "not set";
  }

  const userName = getAccountValue(STORAGE_KEYS.userName);
  const userEmail = getAccountValue(STORAGE_KEYS.userEmail);
  const payment = getAccountValue(STORAGE_KEYS.paymentMethod);
  const subscription = getAccountValue(STORAGE_KEYS.subscription) || "starter";

  if (settingsUserName) settingsUserName.textContent = userName || "not set";
  if (settingsUserEmail) settingsUserEmail.textContent = userEmail || "not set";
  if (settingsPayment) settingsPayment.textContent = payment || "not set";
  if (settingsSubscription) settingsSubscription.textContent = subscription;
}

voiceRepliesToggle?.addEventListener("change", () => {
  setVoiceRepliesEnabled(Boolean(voiceRepliesToggle.checked));
});

function setModalOpen(modal, isOpen) {
  if (!modal) {
    return;
  }
  modal.classList.toggle("open", isOpen);
  modal.setAttribute("aria-hidden", String(!isOpen));
}

function closeAllModals() {
  setModalOpen(startupNameModal, false);
  setModalOpen(settingsModal, false);
    setModalOpen(textInputModal, false);
  setModalOpen(accountModal, false);
  }

function wireModalClose(modal) {
  if (!modal) {
    return;
  }
  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.closest && target.closest("[data-modal-close]")) {
      setModalOpen(modal, false);
    }
  });
}

wireModalClose(startupNameModal);
wireModalClose(settingsModal);
wireModalClose(textInputModal);
wireModalClose(accountModal);

function openAccountModal(focusField) {
  if (accountName) accountName.value = getAccountValue(STORAGE_KEYS.userName);
  if (accountEmail) accountEmail.value = getAccountValue(STORAGE_KEYS.userEmail);
  if (accountPayment) accountPayment.value = getAccountValue(STORAGE_KEYS.paymentMethod);
  if (accountSubscription) accountSubscription.value = getAccountValue(STORAGE_KEYS.subscription) || "starter";

  closeAllModals();
  setModalOpen(accountModal, true);

  const fieldMap = {
    name: accountName,
    email: accountEmail,
    payment: accountPayment,
    subscription: accountSubscription
  };
  const field = fieldMap[focusField] || accountName;
  if (field && field.focus) {
    requestAnimationFrame(() => field.focus());
  }
}

function sendTypedToAnna(rawText) {
  const lower = String(rawText || "").trim().toLowerCase();
  if (!lower) {
    return;
  }

  pushEntry("user", lower);
  conversation = [...conversation, { role: "user", content: lower }].slice(-16);
  const pendingId = pushPendingAnna();

  startStreamingAnnaReply(pendingId)
    .then((reply) => {
      const normalized = String(reply || "").trim().toLowerCase();
      conversation = [...conversation, { role: "assistant", content: normalized }].slice(-16);
    })
    .catch((err) => {
      const msg = err && err.message ? String(err.message) : "anna couldn't reply";
      resolvePendingAnna(pendingId, `anna couldn't reply: ${msg}`);
    });
}

startupNameButton?.addEventListener("click", () => {
  const current = getStartupName();
  if (startupNameInput) {
    startupNameInput.value = current;
    startupNameInput.focus();
    startupNameInput.select();
  }
  setMenuOpen(false);
  closeAllModals();
  setModalOpen(startupNameModal, true);
});

startupNameSave?.addEventListener("click", () => {
  const value = String(startupNameInput?.value || "").trim();
  if (!value) {
    return;
  }
  localStorage.setItem(STORAGE_KEYS.startupName, value);
  renderStartupName();
  setModalOpen(startupNameModal, false);
});

settingsButton?.addEventListener("click", () => {
  renderStartupName();
  setMenuOpen(false);
  closeAllModals();
  setModalOpen(settingsModal, true);
});

settingsRename?.addEventListener("click", () => {
  setModalOpen(settingsModal, false);
  startupNameButton?.click();
});

editUserName?.addEventListener("click", () => openAccountModal("name"));
editUserEmail?.addEventListener("click", () => openAccountModal("email"));
editPayment?.addEventListener("click", () => openAccountModal("payment"));
editSubscription?.addEventListener("click", () => openAccountModal("subscription"));

accountSave?.addEventListener("click", () => {
  const nextName = String(accountName?.value || "").trim();
  const nextEmail = String(accountEmail?.value || "").trim();
  const nextPayment = String(accountPayment?.value || "").trim();
  const nextSub = String(accountSubscription?.value || "starter").trim();

  localStorage.setItem(STORAGE_KEYS.userName, nextName);
  localStorage.setItem(STORAGE_KEYS.userEmail, nextEmail);
  localStorage.setItem(STORAGE_KEYS.paymentMethod, nextPayment);
  localStorage.setItem(STORAGE_KEYS.subscription, nextSub || "starter");

  renderStartupName();
  setModalOpen(accountModal, false);
  setModalOpen(settingsModal, true);
});

  textInputSend?.addEventListener("click", () => {
    const value = String(textInputField?.value || "").trim();
    if (!value) {
      return;
    }
    setModalOpen(textInputModal, false);
    sendTypedToAnna(value);
  });

  textInputField?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    const value = String(textInputField?.value || "").trim();
    if (!value) {
      return;
    }
    setModalOpen(textInputModal, false);
    sendTypedToAnna(value);
  });

initBrandLogoImages();
renderStartupName();
setVoiceRepliesEnabled(getVoiceRepliesEnabled());
