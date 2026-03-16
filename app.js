const transcriptStack = document.getElementById("transcriptStack");
const recordButton = document.getElementById("recordButton");
const promptSeed = document.getElementById("promptSeed");
const appFrame = document.querySelector(".app-frame");

const menuButton = document.getElementById("menuButton");
const menuDrawer = document.getElementById("menuDrawer");
const menuScrim = document.getElementById("menuScrim");
const menuClose = document.getElementById("menuClose");
const startupNameButton = document.getElementById("startupNameButton");

const STORAGE_KEYS = {
  startupName: "anna:startupName"
};

let transcriptEntries = [];
let speechRecognizer = null;
let interimText = "";
let hasStarted = false;

let conversation = [];

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

function renderTranscript() {
  if (!transcriptStack) {
    return;
  }

  transcriptStack.innerHTML = "";

  const lines = interimText
    ? [{ role: "user", text: interimText, interim: true }, ...transcriptEntries]
    : transcriptEntries;

  const display = lines.slice(0, 4);

  display.forEach((entry, index) => {
    const paragraph = document.createElement("p");
    paragraph.className = `transcript-line ${entry.role}`;
    paragraph.textContent = `“${entry.text}”`;
    paragraph.style.setProperty("--line-offset", `${index * 3.2}rem`);
    paragraph.style.setProperty("--line-opacity", String(1 - index * 0.22));
    transcriptStack.appendChild(paragraph);
  });
}

function pushEntry(role, text) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }

  transcriptEntries = [{ role, text: cleaned }, ...transcriptEntries].slice(0, 8);
  renderTranscript();
}

function pushPendingAnna() {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const pending = { role: "ai", text: "…", pendingId: id };
  const next = transcriptEntries.slice();
  const insertAfterIndex = next.findIndex((entry) => entry.role === "user");
  if (insertAfterIndex === -1) {
    next.unshift(pending);
  } else {
    next.splice(insertAfterIndex + 1, 0, pending);
  }
  transcriptEntries = next.slice(0, 8);
  renderTranscript();
  return id;
}

function resolvePendingAnna(pendingId, text) {
  transcriptEntries = transcriptEntries.map((entry) => {
    if (entry.pendingId !== pendingId) {
      return entry;
    }
    return { role: "ai", text: String(text || "").trim().toLowerCase() || "…" };
  });
  renderTranscript();
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
      if (data?.error) {
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
        interimText = "";
        pushEntry("user", text);

        conversation = [...conversation, { role: "user", content: text }].slice(-16);
        const pendingId = pushPendingAnna();

        fetchAnnaReply()
          .then((reply) => {
            const normalized = reply.toLowerCase();
            conversation = [...conversation, { role: "assistant", content: normalized }].slice(-16);
            resolvePendingAnna(pendingId, normalized);
          })
          .catch(() => {
            resolvePendingAnna(pendingId, "openai isn't configured yet. open the menu and set the key in .env, then refresh."
            );
          });
      } else {
        nextInterim = text;
      }
    }

    interimText = nextInterim;
    renderTranscript();
  };

  recognizer.onerror = () => {
    // keep it quiet; user can tap to stop/retry
  };

  recognizer.onend = () => {
    if (recordButton?.classList.contains("listening")) {
      // safari/chrome may end unexpectedly; don't auto-restart aggressively
      recordButton.classList.remove("listening");
      appFrame?.classList.remove("is-listening");
    }
  };

  return recognizer;
}

function setListening(isListening) {
  if (!recordButton || !transcriptStack) {
    return;
  }

  recordButton.classList.toggle("listening", isListening);
  appFrame?.classList.toggle("is-listening", isListening);

  if (!hasStarted) {
    hasStarted = true;
    appFrame?.classList.add("has-started");
  }

  if (isListening) {
    transcriptStack.classList.remove("hidden");
    renderTranscript();

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
    const typed = window.prompt("say something to anna");
    if (typed) {
      const lower = String(typed).trim().toLowerCase();
      pushEntry("user", lower);

      conversation = [...conversation, { role: "user", content: lower }].slice(-16);
      const pendingId = pushPendingAnna();

      fetchAnnaReply()
        .then((reply) => {
          const normalized = reply.toLowerCase();
          conversation = [...conversation, { role: "assistant", content: normalized }].slice(-16);
          resolvePendingAnna(pendingId, normalized);
        })
        .catch(() => {
          resolvePendingAnna(pendingId, "openai isn't configured yet. open the menu and set the key in .env, then refresh."
          );
        });
    }
    recordButton.classList.remove("listening");
    appFrame?.classList.remove("is-listening");
    return;
  }

  interimText = "";
  renderTranscript();
  if (speechRecognizer) {
    try {
      speechRecognizer.stop();
    } catch {
      // ignore
    }
  }
}

recordButton?.addEventListener("click", () => {
  const isListening = recordButton.classList.contains("listening");
  setListening(!isListening);
});

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

function renderStartupName() {
  if (!startupNameButton) {
    return;
  }
  const name = getStartupName();
  startupNameButton.textContent = name ? name : "name your startup";
}

startupNameButton?.addEventListener("click", () => {
  const current = getStartupName();
  const next = window.prompt("what should anna call your startup?", current || "");
  if (!next) {
    return;
  }
  localStorage.setItem(STORAGE_KEYS.startupName, next.trim());
  renderStartupName();
  setMenuOpen(false);
});

initBrandLogoImages();
renderStartupName();
