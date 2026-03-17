const transcriptPane = document.getElementById("transcriptPane");
const transcriptList = document.getElementById("transcriptList");
const audioNotice = document.getElementById("audioNotice");
const audioNoticeText = document.getElementById("audioNoticeText");
const audioNoticeAction = document.getElementById("audioNoticeAction");
const recordButton = document.getElementById("recordButton");
const recordStack = document.getElementById("recordStack");
const promptSeed = document.getElementById("promptSeed");
const appFrame = document.querySelector(".app-frame");
const typeInstead = document.getElementById("typeInstead");
const promptTryText = document.getElementById("promptTryText");

const startupTitle = document.getElementById("startupTitle");
const startupPageLink = document.getElementById("startupPageLink");
const taskContextBanner = document.getElementById("taskContextBanner");
const taskContextText = document.getElementById("taskContextText");
const taskContextBackLink = document.getElementById("taskContextBackLink");

const startupNameText = document.getElementById("startupNameText");
const lastUpdatedEl = document.getElementById("lastUpdated");
const projectsLeftEl = document.getElementById("projectsLeft");
const startupTasksEl = document.getElementById("startupTasks");

const taskStage = document.getElementById("taskStage");
const taskPageTitle = document.getElementById("taskPageTitle");
const taskPageStatus = document.getElementById("taskPageStatus");
const taskDoneToggle = document.getElementById("taskDoneToggle");
const taskNotesInput = document.getElementById("taskNotesInput");
const taskTalkButton = document.getElementById("taskTalkButton");
const voiceTriggerButton = document.getElementById("voiceTriggerButton");
const inlineVoiceButton = voiceTriggerButton || taskTalkButton;
const taskBackLink = document.getElementById("taskBackLink");
const taskRelatedList = document.getElementById("taskRelatedList");
const taskSubtaskInput = document.getElementById("taskSubtaskInput");
const taskSubtaskAdd = document.getElementById("taskSubtaskAdd");
const taskSubtaskList = document.getElementById("taskSubtaskList");
const inlineVoiceTray = document.getElementById("inlineVoiceTray");
const inlineVoiceList = document.getElementById("inlineVoiceList");
const inlineVoiceClose = document.getElementById("inlineVoiceClose");

const listSheet = document.getElementById("listSheet");
const listSheetScrim = document.getElementById("listSheetScrim");
const listSheetClose = document.getElementById("listSheetClose");
const listSheetTitle = document.getElementById("listSheetTitle");
const listSheetBody = document.getElementById("listSheetBody");

const typeComposer = document.getElementById("typeComposer");
const typeComposerInput = document.getElementById("typeComposerInput");
const typeComposerSend = document.getElementById("typeComposerSend");
const typeComposerClose = document.getElementById("typeComposerClose");

const volumeWrap = document.getElementById("volumeWrap");
const volumeButton = document.getElementById("volumeButton");
const volumePanel = document.getElementById("volumePanel");
const volumeSlider = document.getElementById("volumeSlider");
const volumeThumb = document.getElementById("volumeThumb");
const volumeFill = document.getElementById("volumeFill");
const volumeScrim = document.getElementById("volumeScrim");

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
const settingsProfile = document.getElementById("settingsProfile");
const editProfile = document.getElementById("editProfile");
const historyButton = document.getElementById("historyButton");
const voiceRepliesToggle = document.getElementById("voiceRepliesToggle");
const settingsVoice = document.getElementById("settingsVoice");
const chooseVoice = document.getElementById("chooseVoice");

const historyModal = document.getElementById("historyModal");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");

const voiceModal = document.getElementById("voiceModal");
const voiceStatus = document.getElementById("voiceStatus");
const voiceList = document.getElementById("voiceList");

const accountModal = document.getElementById("accountModal");
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");
const accountPayment = document.getElementById("accountPayment");
const accountSubscriptionButton = document.getElementById("accountSubscriptionButton");
const accountSave = document.getElementById("accountSave");

const subscriptionModal = document.getElementById("subscriptionModal");
const subscriptionOptionButtons = Array.from(document.querySelectorAll("[data-subscription-option]"));

const textInputModal = document.getElementById("textInputModal");
const textInputField = document.getElementById("textInputField");
const textInputSend = document.getElementById("textInputSend");

const authModal = document.getElementById("authModal");
const authPanelSignIn = document.getElementById("authPanelSignIn");
const authPanelSignUp = document.getElementById("authPanelSignUp");
const authError = document.getElementById("authError");

const authSignInEmail = document.getElementById("authSignInEmail");
const authSignInPassword = document.getElementById("authSignInPassword");
const authSignInButton = document.getElementById("authSignInButton");
const authToSignUp = document.getElementById("authToSignUp");

const authSignUpName = document.getElementById("authSignUpName");
const authSignUpEmail = document.getElementById("authSignUpEmail");
const authSignUpPassword = document.getElementById("authSignUpPassword");
const authSignUpConfirm = document.getElementById("authSignUpConfirm");
const authSignUpButton = document.getElementById("authSignUpButton");
const authToSignIn = document.getElementById("authToSignIn");

const STORAGE_KEYS = {
  startupName: "anna:startupName",
  userName: "anna:userName",
  userEmail: "anna:userEmail",
  paymentMethod: "anna:paymentMethod",
  subscription: "anna:subscription",
  voiceReplies: "anna:voiceReplies",
  elevenVoiceId: "anna:elevenVoiceId",
  elevenVoiceName: "anna:elevenVoiceName",
  outputVolume: "anna:outputVolume",
  outputMuted: "anna:outputMuted",
  authUsers: "anna:authUsers",
  authUser: "anna:authUser",
  memoryLog: "anna:memoryLog",
  chatSessions: "anna:chatSessions",
  startupLists: "anna:startupLists",
  taskState: "anna:taskState",
  activeTask: "anna:activeTask"
};

let transcriptEntries = [];
let speechRecognizer = null;
let interimText = "";
let hasStarted = false;

let interimEl = null;
const pendingEls = new Map();

let conversation = [];
let currentChatSessionId = "";
let expandedHistorySessionId = "";

const CHAT_SESSION_MERGE_GAP_MS = 45 * 60 * 1000;

let isListeningNow = false;
let persistentListeningEnabled = false;
let pendingResumeListening = false;
let lastToggleAt = 0;
let pendingSpeechCommitTimer = null;
let finalSpeechBuffer = "";
let typeComposerAllowBlur = false;
let singleTurnVoiceMode = false;
let wakeWordRecognizer = null;
let wakeWordListeningNow = false;
let passiveWakeWordEnabled = false;
let wakeWordRestartTimer = null;
let wakeWordDetectedAt = 0;
let inlineVoiceHideTimer = null;
let supabaseClient = null;
let supabaseConfigured = false;
let supabaseInitPromise = null;
let remoteStateLoadedForUser = null;
let remoteSaveTimer = null;
let isApplyingRemoteSnapshot = false;

let ttsSessionId = 0;
let ttsQueue = [];
let ttsIsPlaying = false;
let ttsCurrentAudio = null;
let ttsCurrentUrl = null;
let ttsAudioEl = null;
let ttsFetchInFlight = 0;
let annaReplyInFlight = false;
let ttsNeedsUnlock = false;
let audioUnlockAttempted = false;
let audioCtx = null;
let ttsFetchChain = Promise.resolve();

let isAdjustingVolume = false;

function updateListeningUi() {
  const isActive = persistentListeningEnabled || isListeningNow;
  recordButton?.classList.toggle("listening", isActive);
  inlineVoiceButton?.classList.toggle("is-listening", isActive);
  appFrame?.classList.toggle("is-listening", isActive);
}

function clearInlineVoiceHideTimer() {
  if (inlineVoiceHideTimer) {
    window.clearTimeout(inlineVoiceHideTimer);
    inlineVoiceHideTimer = null;
  }
}

function setInlineVoiceTrayOpen(isOpen) {
  if (!inlineVoiceTray) {
    return;
  }
  inlineVoiceTray.classList.toggle("open", isOpen);
  inlineVoiceTray.classList.toggle("hidden", !isOpen);
  inlineVoiceTray.setAttribute("aria-hidden", String(!isOpen));
}

function scheduleInlineVoiceTrayHide(delay = 7200) {
  if (!inlineVoiceTray) {
    return;
  }
  clearInlineVoiceHideTimer();
  if (isListeningNow || annaReplyInFlight) {
    return;
  }
  inlineVoiceHideTimer = window.setTimeout(() => {
    if (isListeningNow || annaReplyInFlight) {
      return;
    }
    setInlineVoiceTrayOpen(false);
  }, delay);
}

function showInlineVoiceStatus(message, delay = 2600) {
  if (!inlineVoiceList) {
    return;
  }
  clearInlineVoiceHideTimer();
  inlineVoiceList.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.className = "transcript-line inline-voice-status ai";
  paragraph.textContent = `“${String(message || "").trim()}”`;
  inlineVoiceList.appendChild(paragraph);
  setInlineVoiceTrayOpen(true);
  scheduleInlineVoiceTrayHide(delay);
}

function clearPendingSpeechCommit() {
  if (pendingSpeechCommitTimer) {
    window.clearTimeout(pendingSpeechCommitTimer);
    pendingSpeechCommitTimer = null;
  }
}

function clearBufferedSpeech() {
  clearPendingSpeechCommit();
  finalSpeechBuffer = "";
  interimText = "";
  setInterim("");
}

function getSpeechCommitDelay(text, hasInterim = false) {
  const normalized = String(text || "").trim().toLowerCase();
  if (!normalized) {
    return 1400;
  }

  const words = normalized.split(/\s+/).filter(Boolean);
  const lastWord = words[words.length - 1] || "";
  const soundsIncomplete = /^(and|but|or|so|because|if|then|to|for|with|about|of|the|a|an|my|your|our)$/i.test(lastWord);
  const endsDecisively = /[.!?]$/.test(normalized);

  let delay = 1200;
  if (words.length <= 3) {
    delay = 2100;
  } else if (words.length <= 7) {
    delay = 1700;
  } else if (words.length <= 14) {
    delay = 1350;
  }

  if (soundsIncomplete) {
    delay += 450;
  }
  if (hasInterim) {
    delay += 400;
  }
  if (endsDecisively) {
    delay -= 250;
  }

  return Math.max(900, delay);
}

function normalizeBufferedSpeechParts(parts) {
  return parts
    .map((part) => String(part || "").trim().toLowerCase())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function submitRecognizedUserText(text) {
  const normalized = String(text || "").trim().toLowerCase();
  if (!normalized) {
    return;
  }

  clearBufferedSpeech();
  ensureStartedUi();
  if (!ensureSignedIn()) {
    persistentListeningEnabled = false;
    setListening(false);
    return;
  }

  const localCommand = maybeHandleLocalVoiceCommand(normalized);
  if (localCommand?.handled) {
    pushEntry("user", normalized);
    appendToMemory("user", normalized);

    if (localCommand.stopSession) {
      stopAllTts();
      pendingResumeListening = false;
      persistentListeningEnabled = false;
      singleTurnVoiceMode = false;
      setListening(false);
      if (localCommand.reply) {
        pushEntry("ai", localCommand.reply);
        appendToMemory("assistant", localCommand.reply);
      }
      startWakeWordMonitoring();
      return;
    }

    if (persistentListeningEnabled) {
      pauseListeningForReply();
    }
    if (localCommand.reply) {
      pushEntry("ai", localCommand.reply);
      appendToMemory("assistant", localCommand.reply);
      if (isVoiceOutputEnabled()) {
        enqueueElevenLabsTts(localCommand.reply);
      }
    }
    maybeResumeListeningAfterReply();
    return;
  }

  pushEntry("user", normalized);
  appendToMemory("user", normalized);

  pauseListeningForReply();

  conversation = [...conversation, { role: "user", content: normalized }].slice(-16);
  const pendingId = pushPendingAnna();

  startStreamingAnnaReply(pendingId)
    .then((reply) => {
      const rawReply = String(reply || "").trim();
      const answer = rawReply.toLowerCase();
      conversation = [...conversation, { role: "assistant", content: answer }].slice(-16);
      appendToMemory("assistant", answer);
    })
    .catch((err) => {
      const msg = err && err.message ? String(err.message) : "anna couldn't reply";
      resolvePendingAnna(pendingId, `anna couldn't reply: ${msg}`);
    })
    .finally(() => {
      maybeResumeListeningAfterReply();
    });
}

function scheduleBufferedSpeechCommit() {
  const buffered = normalizeBufferedSpeechParts([finalSpeechBuffer]);
  if (!buffered || pendingResumeListening) {
    return;
  }

  clearPendingSpeechCommit();
  const delay = getSpeechCommitDelay(buffered, Boolean(interimText));
  pendingSpeechCommitTimer = window.setTimeout(() => {
    pendingSpeechCommitTimer = null;
    if (pendingResumeListening || !persistentListeningEnabled || !finalSpeechBuffer.trim()) {
      return;
    }
    if (interimText.trim()) {
      scheduleBufferedSpeechCommit();
      return;
    }
    submitRecognizedUserText(finalSpeechBuffer);
  }, delay);
}

function stopSpeechRecognizer() {
  if (!speechRecognizer) {
    return;
  }
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

function clearWakeWordRestart() {
  if (wakeWordRestartTimer) {
    window.clearTimeout(wakeWordRestartTimer);
    wakeWordRestartTimer = null;
  }
}

function shouldUseWakeWordMode() {
  return Boolean(inlineVoiceButton && inlineVoiceList && !recordButton);
}

function stopWakeWordListeningSession() {
  clearWakeWordRestart();
  if (!wakeWordRecognizer) {
    wakeWordListeningNow = false;
    return;
  }
  try {
    wakeWordRecognizer.abort();
  } catch {
    try {
      wakeWordRecognizer.stop();
    } catch {
      // ignore
    }
  }
  wakeWordListeningNow = false;
}

function heardWakeWord(text) {
  const normalized = String(text || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return /(?:^|\b)(?:hi|hey)\s+an{1,2}a\b/.test(normalized);
}

function scheduleWakeWordRestart(delay = 450) {
  if (!passiveWakeWordEnabled || !shouldUseWakeWordMode()) {
    return;
  }
  clearWakeWordRestart();
  wakeWordRestartTimer = window.setTimeout(() => {
    startWakeWordMonitoring();
  }, delay);
}

function startInlineVoiceCapture(source = "tap") {
  if (!shouldUseWakeWordMode()) {
    return;
  }
  unlockAudioFromGesture();
  const isStopping = persistentListeningEnabled || isListeningNow;
  if (source === "tap" && isStopping) {
    singleTurnVoiceMode = false;
    pendingResumeListening = false;
    persistentListeningEnabled = false;
    setListening(false);
    startWakeWordMonitoring();
    return;
  }
  if (!ensureSignedIn()) {
    scheduleWakeWordRestart(900);
    return;
  }
  if (source === "tap") {
    const now = Date.now();
    if (now - lastToggleAt < 260) {
      return;
    }
    lastToggleAt = now;
  }
  stopWakeWordListeningSession();
  clearInlineVoiceHideTimer();
  setInlineVoiceTrayOpen(true);
  singleTurnVoiceMode = false;
  persistentListeningEnabled = true;
  pendingResumeListening = false;
  playRecordBeep(true);
  setListening(true);
}

function isWakeSessionExitPhrase(text) {
  return /(?:^|\b)(?:bye|goodbye)\s+anna\b/.test(String(text || "").trim().toLowerCase());
}

function findTaskDoneIntent(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized || !/(?:done|finished|complete|completed)/.test(normalized)) {
    return "";
  }

  const activeTitle = getCurrentTaskTitle();
  if (
    activeTitle &&
    (getCurrentPageLabel() === "task" || /\b(this|it|current task|this task|the task)\b/.test(normalized) || /\bi(?:'m| am)? done\b/.test(normalized))
  ) {
    return activeTitle;
  }

  const taskTitles = getTaskEntriesForUser().map((entry) => normalizeTaskTitle(entry.title)).filter(Boolean);
  return taskTitles.find((title) => normalized.includes(title)) || "";
}

function maybeHandleLocalVoiceCommand(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return { handled: false };
  }

  if (shouldUseWakeWordMode() && isWakeSessionExitPhrase(normalized)) {
    return {
      handled: true,
      stopSession: true,
      reply: "okay. say hi anna when you want me again."
    };
  }

  const doneTitle = findTaskDoneIntent(normalized);
  if (doneTitle) {
    const entry = readTaskEntry(doneTitle);
    if (!entry.completed) {
      updateTaskEntry(doneTitle, (current) => ({ ...current, completed: true }));
      renderTaskWorkspace();
      renderStartupDashboard();
    }
    return {
      handled: true,
      reply: `${doneTitle} is marked done.`
    };
  }

  return { handled: false };
}

function ensureWakeWordRecognizer() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return null;
  }

  const recognizer = new SpeechRecognition();
  recognizer.continuous = true;
  recognizer.interimResults = true;
  recognizer.lang = "en-US";

  recognizer.onresult = (event) => {
    const heardParts = [];
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const text = String(result[0]?.transcript || "").trim().toLowerCase();
      if (text) {
        heardParts.push(text);
      }
    }
    const combined = normalizeBufferedSpeechParts(heardParts);
    if (!combined || !heardWakeWord(combined)) {
      return;
    }
    const now = Date.now();
    if (now - wakeWordDetectedAt < 1600) {
      return;
    }
    wakeWordDetectedAt = now;
    startInlineVoiceCapture("wake");
  };

  recognizer.onerror = (event) => {
    wakeWordListeningNow = false;
    if (event?.error === "not-allowed" || event?.error === "service-not-allowed") {
      passiveWakeWordEnabled = false;
      showInlineVoiceStatus("tap anna once to enable the mic here.", 4200);
      return;
    }
    scheduleWakeWordRestart(1200);
  };

  recognizer.onend = () => {
    wakeWordListeningNow = false;
    if (passiveWakeWordEnabled && !isListeningNow && !persistentListeningEnabled && !annaReplyInFlight) {
      scheduleWakeWordRestart(500);
    }
  };

  return recognizer;
}

function startWakeWordMonitoring() {
  if (!shouldUseWakeWordMode()) {
    return;
  }
  passiveWakeWordEnabled = true;
  if (isListeningNow || annaReplyInFlight || (persistentListeningEnabled && !singleTurnVoiceMode)) {
    return;
  }
  if (!wakeWordRecognizer) {
    wakeWordRecognizer = ensureWakeWordRecognizer();
  }
  if (!wakeWordRecognizer || wakeWordListeningNow) {
    return;
  }
  try {
    wakeWordRecognizer.start();
    wakeWordListeningNow = true;
  } catch {
    scheduleWakeWordRestart(800);
  }
}

function resumePersistentListeningSoon(delay = 140) {
  window.setTimeout(() => {
    if (!persistentListeningEnabled || !pendingResumeListening || isListeningNow || !speechRecognizer) {
      return;
    }
    setListening(true);
  }, delay);
}

function maybeResumeListeningAfterReply() {
  if (!persistentListeningEnabled || !pendingResumeListening || isListeningNow) {
    return;
  }
  if (annaReplyInFlight) {
    return;
  }
  if (ttsIsPlaying || ttsQueue.length || ttsCurrentAudio || ttsFetchInFlight > 0) {
    return;
  }
  if (singleTurnVoiceMode) {
    singleTurnVoiceMode = false;
    pendingResumeListening = false;
    persistentListeningEnabled = false;
    updateListeningUi();
    scheduleInlineVoiceTrayHide(2400);
    startWakeWordMonitoring();
    return;
  }
  resumePersistentListeningSoon(120);
}

function pauseListeningForReply() {
  if (!persistentListeningEnabled) {
    setListening(false);
    return;
  }
  clearPendingSpeechCommit();
  pendingResumeListening = true;
  isListeningNow = false;
  interimText = "";
  setInterim("");
  updateListeningUi();
  stopSpeechRecognizer();
}

const REMOTE_SYNC_TEXT_KEYS = new Set([
  STORAGE_KEYS.startupName,
  STORAGE_KEYS.userName,
  STORAGE_KEYS.userEmail,
  STORAGE_KEYS.paymentMethod,
  STORAGE_KEYS.subscription
]);

const REMOTE_SYNC_JSON_KEYS = new Set([
  STORAGE_KEYS.memoryLog,
  STORAGE_KEYS.chatSessions,
  STORAGE_KEYS.startupLists,
  STORAGE_KEYS.taskState,
  STORAGE_KEYS.activeTask
]);

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    scheduleRemoteStateSave(key);
  } catch {
    // ignore
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, String(value ?? ""));
    scheduleRemoteStateSave(key);
  } catch {
    // ignore
  }
}

function removeStoredValue(key) {
  try {
    localStorage.removeItem(key);
    scheduleRemoteStateSave(key);
  } catch {
    // ignore
  }
}

function clearAuthSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.authUser);
  } catch {
    // ignore
  }
}

function getPersistedSnapshot() {
  const strings = {};
  const json = {};

  REMOTE_SYNC_TEXT_KEYS.forEach((key) => {
    strings[key] = localStorage.getItem(key) || "";
  });

  REMOTE_SYNC_JSON_KEYS.forEach((key) => {
    json[key] = readJson(key, key === STORAGE_KEYS.activeTask ? null : key === STORAGE_KEYS.taskState ? {} : []);
  });

  return { strings, json };
}

function applyPersistedSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    return;
  }

  isApplyingRemoteSnapshot = true;
  try {
    const strings = snapshot.strings && typeof snapshot.strings === "object" ? snapshot.strings : {};
    REMOTE_SYNC_TEXT_KEYS.forEach((key) => {
      const value = String(strings[key] || "");
      if (value) {
        localStorage.setItem(key, value);
      } else {
        localStorage.removeItem(key);
      }
    });

    const json = snapshot.json && typeof snapshot.json === "object" ? snapshot.json : {};
    REMOTE_SYNC_JSON_KEYS.forEach((key) => {
      const fallback = key === STORAGE_KEYS.activeTask ? null : key === STORAGE_KEYS.taskState ? {} : [];
      const value = key in json ? json[key] : fallback;
      if (value == null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    });
  } finally {
    isApplyingRemoteSnapshot = false;
  }
}

async function initSupabaseClient() {
  if (supabaseInitPromise) {
    return supabaseInitPromise;
  }

  supabaseInitPromise = (async () => {
    try {
      if (!window.supabase || typeof window.supabase.createClient !== "function") {
        return null;
      }
      const res = await fetch("/api/public-config", { method: "GET" });
      if (!res.ok) {
        return null;
      }
      const data = await res.json();
      const url = String(data?.supabaseUrl || "").trim();
      const anonKey = String(data?.supabaseAnonKey || "").trim();
      if (!url || !anonKey) {
        return null;
      }

      supabaseClient = window.supabase.createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
      supabaseConfigured = true;
      return supabaseClient;
    } catch {
      return null;
    }
  })();

  return supabaseInitPromise;
}

async function getSupabaseClient() {
  return initSupabaseClient();
}

async function getSupabaseAccessToken() {
  const client = await getSupabaseClient();
  if (!client) {
    return "";
  }
  const { data } = await client.auth.getSession();
  return String(data?.session?.access_token || "").trim();
}

async function loadRemoteStateForCurrentUser() {
  const client = await getSupabaseClient();
  const user = getAuthUser();
  if (!client || !user?.email) {
    return;
  }
  if (remoteStateLoadedForUser === user.email) {
    return;
  }

  let loaded = false;
  const accessToken = await getSupabaseAccessToken();
  try {
    const res = await fetch(`/api/state?email=${encodeURIComponent(user.email)}`, {
      method: "GET",
      headers: accessToken ? { "x-supabase-access-token": accessToken } : undefined
    });
    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data?.state) {
        applyPersistedSnapshot(data.state);
      } else {
        await saveRemoteStateNow();
      }
      loaded = true;
    }
  } catch {
    // fall through to direct client fallback
  }

  if (!loaded) {
    const { data, error } = await client
      .from("anna_user_state")
      .select("state")
      .eq("email", user.email)
      .maybeSingle();

    if (error) {
      throw new Error(error.message || "couldn't load account state");
    }

    if (data?.state) {
      applyPersistedSnapshot(data.state);
    } else {
      await saveRemoteStateNow();
    }
  }

  remoteStateLoadedForUser = user.email;
}

async function saveRemoteStateNow() {
  if (isApplyingRemoteSnapshot) {
    return;
  }
  const client = await getSupabaseClient();
  const user = getAuthUser();
  if (!client || !user?.email) {
    return;
  }

  const payload = {
    email: user.email,
    name: String(user.name || "").trim(),
    state: getPersistedSnapshot(),
    updated_at: new Date().toISOString()
  };

  const accessToken = await getSupabaseAccessToken();
  try {
    const res = await fetch("/api/state", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(accessToken ? { "x-supabase-access-token": accessToken } : {})
      },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      return;
    }
  } catch {
    // fall through to direct client fallback
  }

  const { error } = await client.from("anna_user_state").upsert(payload, { onConflict: "email" });
  if (error) {
    throw new Error(error.message || "couldn't save account state");
  }
}

function scheduleRemoteStateSave(changedKey) {
  if (isApplyingRemoteSnapshot) {
    return;
  }
  if (!REMOTE_SYNC_TEXT_KEYS.has(changedKey) && !REMOTE_SYNC_JSON_KEYS.has(changedKey)) {
    return;
  }
  if (!supabaseConfigured || !getAuthUser()?.email) {
    return;
  }
  if (remoteSaveTimer) {
    window.clearTimeout(remoteSaveTimer);
  }
  remoteSaveTimer = window.setTimeout(() => {
    saveRemoteStateNow().catch(() => {
      // ignore background sync errors; auth flows surface explicit errors separately
    });
  }, 260);
}

function normalizeEmail(raw) {
  return String(raw || "").trim().toLowerCase();
}

function getAuthUser() {
  const user = readJson(STORAGE_KEYS.authUser, null);
  if (!user || typeof user !== "object") {
    return null;
  }
  const email = normalizeEmail(user.email);
  if (!email) {
    return null;
  }
  return {
    name: String(user.name || "").trim(),
    email,
    createdAt: Number(user.createdAt || 0) || 0
  };
}

function setAuthSession(user) {
  const name = String(user?.name || "").trim();
  const email = normalizeEmail(user?.email);
  if (!email) {
    return;
  }
  writeJson(STORAGE_KEYS.authUser, { name, email, createdAt: Date.now() });
}

function readAuthUsers() {
  const users = readJson(STORAGE_KEYS.authUsers, {});
  return users && typeof users === "object" ? users : {};
}

function writeAuthUsers(users) {
  writeJson(STORAGE_KEYS.authUsers, users && typeof users === "object" ? users : {});
}

function hasAnyAuthUsers() {
  if (supabaseConfigured) {
    return true;
  }
  const users = readAuthUsers();
  return Object.keys(users).length > 0;
}

async function sha256Hex(text) {
  const input = String(text || "");
  const enc = new TextEncoder();
  const buf = enc.encode(input);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hashPassword(email, password) {
  const e = normalizeEmail(email);
  const p = String(password || "");
  return sha256Hex(`anna|${e}|${p}`);
}

function setAuthMode(mode) {
  const isSignIn = mode === "sign-in";
  authPanelSignIn?.classList.toggle("hidden", !isSignIn);
  authPanelSignUp?.classList.toggle("hidden", isSignIn);
  if (authError) {
    authError.textContent = "";
  }
}

function setAuthError(message) {
  if (!authError) {
    return;
  }
  authError.textContent = String(message || "").trim();
}

function openAuthModal(mode) {
  if (!authModal) {
    return;
  }
  closeAllModals();
  setModalOpen(authModal, true);

  const effectiveMode = mode || (supabaseConfigured ? "sign-in" : hasAnyAuthUsers() ? "sign-in" : "sign-up");
  setAuthMode(effectiveMode);

  if (effectiveMode === "sign-in") {
    if (authSignInEmail) authSignInEmail.value = "";
    if (authSignInPassword) authSignInPassword.value = "";
    requestAnimationFrame(() => authSignInEmail?.focus?.());
  } else {
    if (authSignUpName) authSignUpName.value = "";
    if (authSignUpEmail) authSignUpEmail.value = "";
    if (authSignUpPassword) authSignUpPassword.value = "";
    if (authSignUpConfirm) authSignUpConfirm.value = "";
    requestAnimationFrame(() => authSignUpEmail?.focus?.());
  }
}

async function signUpWithPassword() {
  const name = String(authSignUpName?.value || "").trim();
  const email = normalizeEmail(authSignUpEmail?.value);
  const password = String(authSignUpPassword?.value || "");
  const confirm = String(authSignUpConfirm?.value || "");

  if (!email) {
    authSignUpEmail?.focus?.();
    throw new Error("email required");
  }
  if (!password || password.length < 8) {
    authSignUpPassword?.focus?.();
    throw new Error("password must be at least 8 characters");
  }
  if (password !== confirm) {
    authSignUpConfirm?.focus?.();
    throw new Error("passwords don't match");
  }

  const client = await getSupabaseClient();
  if (client) {
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const signupRes = await fetch("/api/auth-signup", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password, name, redirectTo })
    });
    const signupData = await signupRes.json().catch(() => null);
    if (!signupRes.ok || !signupData?.ok) {
      throw new Error(signupData?.error || "couldn't sign up");
    }

    if (signupData.autoConfirmed) {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) {
        throw new Error(error.message || "account created, but sign in failed");
      }
      setAuthSession({
        name: String(data?.user?.user_metadata?.name || name || "").trim(),
        email: data?.user?.email || email
      });
    } else {
      throw new Error(
        "email confirmation is still on in supabase. either disable it or add SUPABASE_SERVICE_ROLE_KEY / SUPABASE_SECRET_KEY so signups can auto-confirm."
      );
    }

    await loadRemoteStateForCurrentUser();
    return;
  }

  const users = readAuthUsers();
  if (users[email]) {
    throw new Error("account already exists. sign in instead.");
  }

  const passwordHash = await hashPassword(email, password);
  users[email] = { name, email, passwordHash, createdAt: Date.now() };
  writeAuthUsers(users);
  setAuthSession({ name, email });
}

async function signInWithPassword() {
  const email = normalizeEmail(authSignInEmail?.value);
  const password = String(authSignInPassword?.value || "");

  if (!email) {
    authSignInEmail?.focus?.();
    throw new Error("email required");
  }
  if (!password) {
    authSignInPassword?.focus?.();
    throw new Error("password required");
  }

  const client = await getSupabaseClient();
  if (client) {
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) {
      throw new Error(error.message || "couldn't sign in");
    }
    setAuthSession({
      name: String(data?.user?.user_metadata?.name || "").trim(),
      email: data?.user?.email || email
    });
    await loadRemoteStateForCurrentUser();
    return;
  }

  const users = readAuthUsers();
  const user = users[email];
  if (!user || !user.passwordHash) {
    throw new Error("no account found. sign up first.");
  }
  const passwordHash = await hashPassword(email, password);
  if (passwordHash !== String(user.passwordHash)) {
    throw new Error("incorrect password");
  }
  setAuthSession({ name: String(user.name || "").trim(), email });
}

function ensureSignedIn() {
  if (!authModal) {
    return true;
  }
  const user = getAuthUser();
  if (user) {
    return true;
  }
  openAuthModal();
  return false;
}

function getCurrentUserId() {
  const user = getAuthUser();
  return user ? user.email : "anonymous";
}

function normalizeTaskTitle(raw) {
  return String(raw || "").trim().toLowerCase();
}

function makeTaskKey(raw) {
  const normalized = normalizeTaskTitle(raw)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
  return normalized || "task";
}

function buildTaskHref(title) {
  const normalized = normalizeTaskTitle(title);
  return normalized ? `task.html?task=${encodeURIComponent(normalized)}` : "task.html";
}

function buildTalkHref(title) {
  const normalized = normalizeTaskTitle(title);
  return normalized ? `index.html?task=${encodeURIComponent(normalized)}` : "index.html";
}

function readTaskStateStore() {
  const store = readJson(STORAGE_KEYS.taskState, {});
  return store && typeof store === "object" ? store : {};
}

function writeTaskStateStore(store) {
  writeJson(STORAGE_KEYS.taskState, store && typeof store === "object" ? store : {});
}

function getTaskStateMap(userId = getCurrentUserId()) {
  const store = readTaskStateStore();
  const map = store && typeof store[userId] === "object" ? store[userId] : {};
  return map && typeof map === "object" ? map : {};
}

function normalizeSubtaskList(rawList) {
  if (!Array.isArray(rawList)) {
    return [];
  }
  return rawList
    .map((item, index) => {
      const title = normalizeTaskTitle(item?.title);
      if (!title) {
        return null;
      }
      return {
        id: String(item?.id || `subtask-${index + 1}`),
        title,
        completed: Boolean(item?.completed)
      };
    })
    .filter(Boolean)
    .slice(0, 40);
}

function readTaskEntry(title, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(title);
  const key = makeTaskKey(normalized);
  const map = getTaskStateMap(userId);
  const entry = map[key] && typeof map[key] === "object" ? map[key] : {};
  return {
    key,
    title: normalized,
    completed: Boolean(entry.completed),
    notes: String(entry.notes || ""),
    subtasks: normalizeSubtaskList(entry.subtasks),
    updatedAt: Number(entry.updatedAt || 0) || 0
  };
}

function updateTaskEntry(title, updater, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    return readTaskEntry(title, userId);
  }

  const key = makeTaskKey(normalized);
  const store = readTaskStateStore();
  const userMap = store && typeof store[userId] === "object" ? store[userId] : {};
  const current = readTaskEntry(normalized, userId);
  const nextValue = typeof updater === "function" ? updater(current) : updater;
  const nextEntry = {
    title: normalized,
    completed: Boolean(nextValue?.completed),
    notes: String(nextValue?.notes || ""),
    subtasks: normalizeSubtaskList(nextValue?.subtasks),
    updatedAt: Date.now()
  };

  store[userId] = {
    ...userMap,
    [key]: nextEntry
  };
  writeTaskStateStore(store);
  return { key, ...nextEntry };
}

function toggleTaskCompleted(title, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => ({ ...current, completed: !current.completed }),
    userId
  );
}

function setTaskNotes(title, notes, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => ({ ...current, notes: String(notes || "") }),
    userId
  );
}

function addTaskSubtask(title, subtaskTitle, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(subtaskTitle);
  if (!normalized) {
    return readTaskEntry(title, userId);
  }
  return updateTaskEntry(
    title,
    (current) => ({
      ...current,
      subtasks: [...normalizeSubtaskList(current.subtasks), {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: normalized,
        completed: false
      }]
    }),
    userId
  );
}

function toggleTaskSubtask(title, subtaskId, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => ({
      ...current,
      subtasks: normalizeSubtaskList(current.subtasks).map((item) =>
        item.id === subtaskId ? { ...item, completed: !item.completed } : item
      )
    }),
    userId
  );
}

function getSubscriptionLabel(value) {
  const normalized = String(value || "starter").trim().toLowerCase();
  if (normalized === "team") {
    return "team";
  }
  if (normalized === "pro") {
    return "pro";
  }
  return "starter";
}

function getLatestStartupListForUser(userId = getCurrentUserId()) {
  const lists = readStartupLists().filter((l) => String(l?.userId || "") === userId);
  return lists.length ? lists[lists.length - 1] : null;
}

function getLatestStartupItems(userId = getCurrentUserId()) {
  const latest = getLatestStartupListForUser(userId);
  return latest && Array.isArray(latest.items) ? latest.items : [];
}

function readActiveTaskContext() {
  const data = readJson(STORAGE_KEYS.activeTask, null);
  if (!data || typeof data !== "object") {
    return null;
  }
  const currentUserId = getCurrentUserId();
  const title = normalizeTaskTitle(data.title);
  const userId = String(data.userId || "");
  if (!title || userId !== currentUserId) {
    return null;
  }
  return {
    title,
    userId,
    href: buildTaskHref(title),
    talkHref: buildTalkHref(title),
    updatedAt: Number(data.updatedAt || 0) || 0
  };
}

function setActiveTaskContext(title) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    removeStoredValue(STORAGE_KEYS.activeTask);
    return null;
  }
  const context = {
    title: normalized,
    userId: getCurrentUserId(),
    updatedAt: Date.now()
  };
  writeJson(STORAGE_KEYS.activeTask, context);
  return { ...context, href: buildTaskHref(normalized), talkHref: buildTalkHref(normalized) };
}

function syncTaskContextFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const task = normalizeTaskTitle(params.get("task"));
  if (!task) {
    return readActiveTaskContext();
  }
  return setActiveTaskContext(task);
}

function getCurrentTaskTitle() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = normalizeTaskTitle(params.get("task"));
  if (fromUrl) {
    return fromUrl;
  }
  return readActiveTaskContext()?.title || "";
}

function getSessionPrimaryTime(session) {
  return Number(session?.updatedAt || session?.startedAt || 0) || 0;
}

function isSameCalendarDay(a, b) {
  if (!a || !b) {
    return false;
  }
  try {
    const left = new Date(a);
    const right = new Date(b);
    return (
      left.getFullYear() === right.getFullYear() &&
      left.getMonth() === right.getMonth() &&
      left.getDate() === right.getDate()
    );
  } catch {
    return false;
  }
}

function readChatSessions() {
  const sessions = readJson(STORAGE_KEYS.chatSessions, []);
  return Array.isArray(sessions) ? sessions : [];
}

function writeChatSessions(sessions) {
  writeJson(STORAGE_KEYS.chatSessions, Array.isArray(sessions) ? sessions : []);
}

function getChatSessionsForUser(userId = getCurrentUserId()) {
  return readChatSessions()
    .filter((session) => String(session?.userId || "") === userId)
    .map((session) => ({
      id: String(session?.id || ""),
      userId: String(session?.userId || ""),
      startedAt: Number(session?.startedAt || 0) || 0,
      updatedAt: Number(session?.updatedAt || 0) || 0,
      page: String(session?.page || "talk").trim() || "talk",
      title: String(session?.title || "").trim(),
      entries: Array.isArray(session?.entries)
        ? session.entries
            .map((entry) => ({
              role: entry?.role === "user" ? "user" : "ai",
              text: String(entry?.text || "").trim(),
              ts: Number(entry?.ts || 0) || 0
            }))
            .filter((entry) => entry.text)
            .slice(-80)
        : []
    }))
    .filter((session) => session.id);
}

function shouldMergeChatSessions(previousSession, nextSession) {
  const previousTime = getSessionPrimaryTime(previousSession);
  const nextTime = getSessionPrimaryTime(nextSession);
  if (!previousTime || !nextTime) {
    return false;
  }
  if (!isSameCalendarDay(previousTime, nextTime)) {
    return false;
  }
  return Math.max(0, nextTime - previousTime) <= CHAT_SESSION_MERGE_GAP_MS;
}

function getMergedChatSessionsForUser(userId = getCurrentUserId()) {
  const sessions = getChatSessionsForUser(userId)
    .slice()
    .sort((a, b) => getSessionPrimaryTime(a) - getSessionPrimaryTime(b));

  const merged = [];
  sessions.forEach((session) => {
    const last = merged[merged.length - 1];
    if (!last || !shouldMergeChatSessions(last, session)) {
      merged.push({
        ...session,
        sourceIds: [session.id]
      });
      return;
    }

    const title = String(session.title || "").trim();
    const lastTitle = String(last.title || "").trim();
    const mergedEntries = [...(Array.isArray(last.entries) ? last.entries : []), ...(Array.isArray(session.entries) ? session.entries : [])]
      .sort((a, b) => (Number(a?.ts || 0) || 0) - (Number(b?.ts || 0) || 0))
      .slice(-160);

    last.startedAt = Math.min(Number(last.startedAt || 0) || Date.now(), Number(session.startedAt || 0) || Date.now());
    last.updatedAt = Math.max(Number(last.updatedAt || 0), Number(session.updatedAt || 0));
    last.page = String(session.page || last.page || "talk").trim() || "talk";
    last.title = title || lastTitle || last.page || "anna";
    last.entries = mergedEntries;
    last.sourceIds = [...(Array.isArray(last.sourceIds) ? last.sourceIds : []), session.id];
  });

  return merged.sort((a, b) => getSessionPrimaryTime(b) - getSessionPrimaryTime(a));
}

function getCurrentPageLabel() {
  const path = String(window.location.pathname || "").toLowerCase();
  if (path.endsWith("startup.html")) {
    return "startup";
  }
  if (path.endsWith("task.html")) {
    return "task";
  }
  return "talk";
}

function findReusableChatSession(userId = getCurrentUserId()) {
  const now = Date.now();
  const sessions = getChatSessionsForUser(userId)
    .slice()
    .sort((a, b) => getSessionPrimaryTime(b) - getSessionPrimaryTime(a));
  const latest = sessions[0];
  if (!latest) {
    return null;
  }
  const latestTime = getSessionPrimaryTime(latest);
  if (!latestTime || !isSameCalendarDay(latestTime, now)) {
    return null;
  }
  if (now - latestTime > CHAT_SESSION_MERGE_GAP_MS) {
    return null;
  }
  if (Array.isArray(latest.entries) && latest.entries.length >= 80) {
    return null;
  }
  return latest;
}

function ensureCurrentChatSession() {
  const userId = getCurrentUserId();
  const sessions = readChatSessions();
  const existing = sessions.find(
    (session) => session && session.id === currentChatSessionId && String(session.userId || "") === userId
  );
  if (existing) {
    return existing;
  }

  const reusable = findReusableChatSession(userId);
  if (reusable) {
    currentChatSessionId = reusable.id;
    return reusable;
  }

  const now = Date.now();
  const session = {
    id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
    userId,
    startedAt: now,
    updatedAt: now,
    page: getCurrentPageLabel(),
    title: getCurrentTaskTitle() || getStartupName() || "anna",
    entries: []
  };

  currentChatSessionId = session.id;
  writeChatSessions([...sessions, session].slice(-60));
  return session;
}

function appendChatSessionEntry(role, text) {
  const normalizedRole = role === "user" ? "user" : "ai";
  const cleaned = (
    normalizedRole === "ai" ? sanitizeAnnaReplyText(text) : String(text || "")
  ).trim();
  if (!cleaned) {
    return;
  }

  const session = ensureCurrentChatSession();
  const sessions = readChatSessions();
  const nextSessions = sessions.map((item) => {
    if (!item || item.id !== session.id) {
      return item;
    }
    const nextEntries = [
      ...(Array.isArray(item.entries) ? item.entries : []),
      { role: role === "user" ? "user" : "ai", text: cleaned, ts: Date.now() }
    ].slice(-80);
    return {
      ...item,
      userId: getCurrentUserId(),
      updatedAt: Date.now(),
      page: getCurrentPageLabel(),
      title: getCurrentTaskTitle() || getStartupName() || item.title || "anna",
      entries: nextEntries.map((entry) => ({
        ...entry,
        text: entry.role === "ai" ? sanitizeAnnaReplyText(entry.text) : entry.text
      }))
    };
  });
  writeChatSessions(nextSessions.slice(-60));
}

function formatSessionTimestamp(ts) {
  if (!ts) {
    return "recent";
  }
  try {
    return new Date(ts).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  } catch {
    return "recent";
  }
}

function formatHistoryDayLabel(ts) {
  if (!ts) {
    return "recent";
  }
  try {
    const value = new Date(ts);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (isSameCalendarDay(value, today)) {
      return "today";
    }
    if (isSameCalendarDay(value, yesterday)) {
      return "yesterday";
    }
    return value.toLocaleDateString([], {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  } catch {
    return "recent";
  }
}

function getHistorySessionSnippet(session) {
  const entries = Array.isArray(session?.entries) ? session.entries.slice(-2) : [];
  const snippet = entries
    .map((entry) => `${entry.role === "user" ? "you" : "anna"}: ${String(entry.text || "").trim()}`)
    .join(" • ");
  return snippet.slice(0, 220) || "open to view messages";
}

function getTaskEntriesForUser(userId = getCurrentUserId()) {
  const orderedTitles = [];
  const seen = new Set();

  getLatestStartupItems(userId).forEach((title) => {
    const normalized = normalizeTaskTitle(title);
    if (!normalized || seen.has(normalized)) {
      return;
    }
    seen.add(normalized);
    orderedTitles.push(normalized);
  });

  Object.values(getTaskStateMap(userId))
    .sort((a, b) => (Number(b?.updatedAt || 0) || 0) - (Number(a?.updatedAt || 0) || 0))
    .forEach((entry) => {
      const normalized = normalizeTaskTitle(entry?.title);
      if (!normalized || seen.has(normalized)) {
        return;
      }
      seen.add(normalized);
      orderedTitles.push(normalized);
    });

  return orderedTitles.map((title) => readTaskEntry(title, userId)).filter((entry) => entry?.title);
}

function buildTaskBoardContext(userId = getCurrentUserId(), limit = 18) {
  return getTaskEntriesForUser(userId)
    .slice(0, limit)
    .map((entry) => {
      const pieces = [`${entry.completed ? "[done]" : "[todo]"} ${entry.title}`];
      const note = String(entry.notes || "").trim();
      const subtasks = Array.isArray(entry.subtasks) ? entry.subtasks : [];
      if (subtasks.length) {
        const completedCount = subtasks.filter((item) => item.completed).length;
        pieces.push(`subtasks ${completedCount}/${subtasks.length}`);
        const preview = subtasks.slice(0, 4).map((item) => `${item.completed ? "[done]" : "[todo]"} ${item.title}`).join(", ");
        if (preview) {
          pieces.push(`subtask preview: ${preview}`);
        }
      }
      if (note) {
        pieces.push(`notes: ${note.slice(0, 220)}`);
      }
      return `- ${pieces.join(" · ")}`;
    })
    .join("\n");
}

function buildChatHistorySummary(userId = getCurrentUserId()) {
  return getMergedChatSessionsForUser(userId)
    .filter((session) => !Array.isArray(session.sourceIds) || !session.sourceIds.includes(currentChatSessionId))
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 5)
    .map((session) => {
      const sample = session.entries.slice(-4).map((entry) => `${entry.role}: ${entry.text.slice(0, 120)}`).join(" | ");
      const title = session.title || session.page || "anna";
      return `- ${formatSessionTimestamp(session.updatedAt)} · ${title}: ${sample}`;
    })
    .filter(Boolean)
    .join("\n");
}

function readMemoryLog() {
  const log = readJson(STORAGE_KEYS.memoryLog, []);
  return Array.isArray(log) ? log : [];
}

function appendToMemory(role, content) {
  const text = (role === "user" ? String(content || "") : sanitizeAnnaReplyText(content)).trim();
  if (!text) {
    return;
  }
  const userId = getCurrentUserId();
  const log = readMemoryLog();
  const entry = {
    role,
    content: text,
    ts: Date.now(),
    userId
  };
  const next = [...log, entry].slice(-600);
  writeJson(STORAGE_KEYS.memoryLog, next);
}

function formatRelativeTime(msAgo) {
  const sec = Math.max(0, Math.round(msAgo / 1000));
  if (sec < 90) return "just now";
  const min = Math.round(sec / 60);
  if (min < 90) return `${min} minutes ago`;
  const hr = Math.round(min / 60);
  if (hr < 36) return `${hr} hours ago`;
  const day = Math.round(hr / 24);
  if (day < 10) return `${day} days ago`;
  const wk = Math.round(day / 7);
  return `${wk} weeks ago`;
}

function buildMessagesForApi() {
  const nowIso = new Date().toISOString();
  const user = getAuthUser();
  const profileName = getAccountValue(STORAGE_KEYS.userName);
  const subscription = getAccountValue(STORAGE_KEYS.subscription);
  const log = readMemoryLog();
  const currentUserId = getCurrentUserId();
  const activeTask = readActiveTaskContext();
  const startupName = getStartupName();
  const latestStartupItems = getLatestStartupItems(currentUserId).slice(0, 18);
  const startupTaskLines = latestStartupItems
    .map((title) => `${readTaskEntry(title, currentUserId).completed ? "[done]" : "[todo]"} ${title}`)
    .join("\n");
  const taskBoardContext = buildTaskBoardContext(currentUserId, 18);
  const activeTaskState = activeTask?.title ? readTaskEntry(activeTask.title, currentUserId) : null;
  const activeTaskNotes = String(activeTaskState?.notes || "").trim();
  const activeSubtasks = Array.isArray(activeTaskState?.subtasks)
    ? activeTaskState.subtasks
        .slice(0, 12)
        .map((item) => `${item.completed ? "[done]" : "[todo]"} ${item.title}`)
        .join("\n")
    : "";
  const chatHistorySummary = buildChatHistorySummary(currentUserId);

  const now = Date.now();
  const older = [];
  for (let i = log.length - 1; i >= 0; i -= 1) {
    const e = log[i];
    if (!e || !e.ts || !e.content) continue;
    if (String(e.userId || "") !== currentUserId) continue;
    // skip very recent items; they are in conversation already
    if (now - Number(e.ts) < 10 * 60 * 1000) continue;
    older.push(e);
    if (older.length >= 8) break;
  }

  const memoryLines = older
    .reverse()
    .map((e) => {
      const when = formatRelativeTime(now - Number(e.ts));
      const who = e.role === "user" ? "user" : "anna";
      const snippet = String(e.content).slice(0, 180);
      return `- ${when}: ${who} said "${snippet}"`;
    })
    .join("\n");

  const sysParts = [`current time: ${nowIso}`];
  if (user?.email) {
    sysParts.push(`signed in as: ${user.email}`);
  }
  if (profileName) {
    sysParts.push(`user name: ${profileName}`);
  }
  if (subscription) {
    sysParts.push(`subscription plan: ${subscription}`);
  }
  if (startupName) {
    sysParts.push(`startup name: ${startupName}`);
  }
  if (activeTask?.title) {
    sysParts.push(`active task the user is working on: ${activeTask.title}`);
    sysParts.push("if the user says this task, this, the task i'm on, or what i'm doing right now, they mean the active task above unless they explicitly name a different task.");
  }
  if (getCurrentPageLabel() === "task") {
    sysParts.push("the user is currently inside the task workspace for the active task above. default to helping with that task and do not ask which task they mean unless they explicitly name a different one.");
    sysParts.push("for task help, keep replies short by default, usually 1 to 3 sentences or a tight bullet list. only go long when the user asks for detail or the problem genuinely needs it.");
    sysParts.push("if you suggest concrete next steps for the active task, prefer a short bullet list so the app can turn them into subtasks. if you want to save a working note, include a line that starts with 'notes:' followed by the note.");
  }
  if (startupTaskLines) {
    sysParts.push("current startup to-do list:\n" + startupTaskLines);
  }
  if (taskBoardContext) {
    sysParts.push("full saved task board with completion state, subtasks, and notes:\n" + taskBoardContext);
  }
  if (activeTaskNotes) {
    sysParts.push(`active task notes:\n${activeTaskNotes.slice(0, 900)}`);
  }
  if (activeSubtasks) {
    sysParts.push("active task subtasks:\n" + activeSubtasks);
  }
  if (memoryLines) {
    sysParts.push("memory (older context):\n" + memoryLines);
  }
  if (chatHistorySummary) {
    sysParts.push("saved chat history from earlier sessions:\n" + chatHistorySummary);
  }
  sysParts.push("when the user references time (yesterday, last week, tomorrow), use the timestamps above to reason about it.");
  sysParts.push("if the user asks what is on the to-do list, what they were working on, or what happened earlier, answer directly from the saved task board, notes, and chat history above. do not ask them to repeat information that is already present.");
  sysParts.push("match the depth to the ask: casual when the user wants quick help, but go deep when they want to build, diagnose, or decide something important.");
  sysParts.push("when going deep, think like a real cofounder: define the problem, state a point of view, show tradeoffs, and turn the answer into concrete priorities, experiments, or next moves.");
  sysParts.push("for deeper business answers, naturally cover what is happening, what you recommend, and what the user should do next, but do not force obvious section labels unless they improve readability.");
  sysParts.push("you do have access to saved memory, prior chat history, startup tasks, and task notes included above. use them, and do not claim you can't remember when the information is present.");

  return [{ role: "system", content: sysParts.join("\n\n") }, ...conversation];
}

function ensureStartedUi() {
  if (!hasStarted) {
    hasStarted = true;
    appFrame?.classList.add("has-started");
  }
  transcriptPane?.classList.remove("hidden");
  if (inlineVoiceTray && (persistentListeningEnabled || isListeningNow || annaReplyInFlight)) {
    setInlineVoiceTrayOpen(true);
  }
}

function setListSheetOpen(isOpen) {
  if (!listSheet) {
    return;
  }
  listSheet.classList.toggle("open", isOpen);
  listSheet.setAttribute("aria-hidden", String(!isOpen));
}

function renderTaskContextBanner() {
  if (!taskContextBanner) {
    return;
  }
  taskContextBanner.classList.add("hidden");
  taskContextBanner.setAttribute("aria-hidden", "true");
}

function escapeText(text) {
  const s = String(text ?? "");
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function extractListFromText(text) {
  const raw = String(text || "").trim();
  if (!raw) {
    return null;
  }

  const lines = raw.split(/\r?\n/).map((l) => l.trim());
  const items = [];
  for (const line of lines) {
    if (!line) continue;
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    const content = (bullet && bullet[1]) || (numbered && numbered[1]);
    if (content && content.trim()) {
      items.push(content.trim());
    }
  }
  if (items.length >= 2) {
    return { title: "to do", items };
  }

  // fallback: detect multiple links
  const urls = raw.match(/https?:\/\/[^\s)\]]+/g) || [];
  if (urls.length >= 2) {
    return { title: "resources", items: urls.slice(0, 12) };
  }

  return null;
}

function isProbablyUrl(text) {
  return /^https?:\/\//i.test(String(text || "").trim());
}

function createTaskCheckButton(title, className, onToggle) {
  const state = readTaskEntry(title);
  const button = document.createElement("button");
  button.type = "button";
  button.className = `${className}${state.completed ? " is-complete" : ""}`;
  button.setAttribute(
    "aria-label",
    state.completed ? "mark task incomplete" : "mark task complete"
  );
  button.textContent = state.completed ? "✓" : "";
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTaskCompleted(title);
    renderStartupDashboard();
    renderTaskWorkspace();
    renderTaskContextBanner();
    if (typeof onToggle === "function") {
      onToggle();
    }
  });
  return button;
}

function createTaskLink(title, className) {
  const link = document.createElement("a");
  link.href = buildTaskHref(title);
  link.className = className;
  link.textContent = normalizeTaskTitle(title);
  link.addEventListener("click", () => {
    setActiveTaskContext(title);
  });
  return link;
}

function renderSheetList(extracted) {
  if (!listSheetBody) {
    return;
  }
  listSheetBody.innerHTML = "";

  const list = document.createElement("div");
  list.className = "sheet-list";

  extracted.items.slice(0, 12).forEach((itemText) => {
    const text = String(itemText || "").trim().toLowerCase();
    if (!text) {
      return;
    }

    if (String(extracted.title || "") === "resources" && isProbablyUrl(text)) {
      const link = document.createElement("a");
      link.href = text;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.className = "sheet-item sheet-item-link";
      link.textContent = text;
      list.appendChild(link);
      return;
    }

    const row = document.createElement("div");
    const state = readTaskEntry(text);
    row.className = `sheet-task-row${state.completed ? " is-complete" : ""}`;

    const link = createTaskLink(text, "sheet-item sheet-item-task");
    const check = createTaskCheckButton(text, "sheet-item-check", () => renderSheetList(extracted));

    row.appendChild(link);
    row.appendChild(check);
    list.appendChild(row);
  });

  listSheetBody.appendChild(list);
}

function maybeShowListSheetFromAnna(text) {
  if (!listSheetBody || !listSheetTitle) {
    return;
  }
  const extracted = extractListFromText(text);
  if (!extracted) {
    return;
  }

  listSheetTitle.textContent = extracted.title;
  renderSheetList(extracted);
  setListSheetOpen(true);

  persistStartupList(extracted);
}

function maybeApplyTaskWorkspaceSuggestionsFromAnna(text) {
  if (getCurrentPageLabel() !== "task") {
    return;
  }
  const activeTitle = getCurrentTaskTitle();
  if (!activeTitle) {
    return;
  }

  let changed = false;
  const extracted = extractListFromText(text);
  if (extracted && String(extracted.title || "").trim().toLowerCase() !== "resources") {
    const existing = new Set(
      readTaskEntry(activeTitle).subtasks.map((item) => normalizeTaskTitle(item.title)).filter(Boolean)
    );
    extracted.items.forEach((item) => {
      const normalized = normalizeTaskTitle(item);
      if (!normalized || existing.has(normalized)) {
        return;
      }
      addTaskSubtask(activeTitle, normalized);
      existing.add(normalized);
      changed = true;
    });
  }

  const noteMatch = String(text || "").match(/(?:^|\n)notes:\s*([\s\S]{1,500})/i);
  const noteText = String(noteMatch?.[1] || "")
    .split(/\n\n|\n[-*•]\s+/)[0]
    .trim();
  if (noteText) {
    const currentNotes = String(readTaskEntry(activeTitle).notes || "").trim();
    if (!currentNotes.toLowerCase().includes(noteText.toLowerCase())) {
      const nextNotes = currentNotes ? `${currentNotes}\n\n${noteText}` : noteText;
      setTaskNotes(activeTitle, nextNotes.slice(0, 4000));
      changed = true;
    }
  }

  if (changed) {
    renderTaskWorkspace();
    renderStartupDashboard();
  }
}

function readStartupLists() {
  const lists = readJson(STORAGE_KEYS.startupLists, []);
  return Array.isArray(lists) ? lists : [];
}

function writeStartupLists(lists) {
  writeJson(STORAGE_KEYS.startupLists, Array.isArray(lists) ? lists : []);
}

function persistStartupList(extracted) {
  const userId = getCurrentUserId();
  if (userId === "anonymous") {
    return;
  }
  const title = String(extracted?.title || "").trim().toLowerCase();
  const items = Array.isArray(extracted?.items)
    ? extracted.items
        .map((x) => String(x || "").trim().toLowerCase())
        .filter(Boolean)
        .slice(0, 24)
    : [];

  if (!items.length) {
    return;
  }

  const log = readStartupLists();
  const entry = { title, items, ts: Date.now(), userId };
  const next = [...log, entry].slice(-80);
  writeStartupLists(next);
}

function renderStartupDashboard() {
  if (!startupTasksEl && !projectsLeftEl && !lastUpdatedEl) {
    return;
  }

  const userId = getCurrentUserId();
  const latest = getLatestStartupListForUser(userId);
  const items = latest && Array.isArray(latest.items) ? latest.items : [];
  const remainingCount = items.filter((item) => !readTaskEntry(item, userId).completed).length;

  if (projectsLeftEl) {
    projectsLeftEl.textContent = String(remainingCount);
  }

  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = latest?.ts
      ? formatRelativeTime(Date.now() - Number(latest.ts))
      : "not yet";
  }

  if (!startupTasksEl) {
    return;
  }

  startupTasksEl.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "startup-empty";
    empty.textContent = "no tasks yet. ask anna for a to do list and it’ll show up here.";
    startupTasksEl.appendChild(empty);
    return;
  }

  items.slice(0, 18).forEach((titleText) => {
    const title = String(titleText || "").trim();
    if (!title) return;

    const state = readTaskEntry(title, userId);

    const row = document.createElement("div");
    row.className = `startup-task${state.completed ? " is-complete" : ""}`;

    const a = createTaskLink(title, "startup-task-title");

    const check = createTaskCheckButton(title, "startup-task-check", () => renderStartupDashboard());
    row.appendChild(a);
    row.appendChild(check);
    startupTasksEl.appendChild(row);
  });
}

function renderTaskRelatedList(currentTitle) {
  if (!taskRelatedList) {
    return;
  }
  const items = getLatestStartupItems();
  taskRelatedList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "startup-empty";
    empty.textContent = "no startup tasks yet. ask anna for a to do list first.";
    taskRelatedList.appendChild(empty);
    return;
  }

  items.slice(0, 18).forEach((taskTitle) => {
    const normalized = normalizeTaskTitle(taskTitle);
    const state = readTaskEntry(normalized);

    const row = document.createElement("div");
    row.className = `task-related-item${normalized === currentTitle ? " is-active" : ""}${state.completed ? " is-complete" : ""}`;

    const link = createTaskLink(normalized, "task-related-link");
    const check = createTaskCheckButton(normalized, "task-related-check", () => {
      renderTaskRelatedList(currentTitle);
      renderTaskWorkspace();
    });

    row.appendChild(link);
    row.appendChild(check);
    taskRelatedList.appendChild(row);
  });
}

function renderTaskSubtasks(title) {
  if (!taskSubtaskList) {
    return;
  }

  const state = readTaskEntry(title);
  taskSubtaskList.innerHTML = "";

  if (!state.subtasks.length) {
    const empty = document.createElement("div");
    empty.className = "startup-empty";
    empty.textContent = "add subtasks here so this task turns into something you can actually work through.";
    taskSubtaskList.appendChild(empty);
    return;
  }

  state.subtasks.forEach((subtask) => {
    const row = document.createElement("div");
    row.className = `task-subtask-item${subtask.completed ? " is-complete" : ""}`;

    const label = document.createElement("div");
    label.className = "task-subtask-title";
    label.textContent = subtask.title;

    const check = document.createElement("button");
    check.type = "button";
    check.className = `task-subtask-check${subtask.completed ? " is-complete" : ""}`;
    check.textContent = subtask.completed ? "✓" : "";
    check.setAttribute(
      "aria-label",
      subtask.completed ? "mark subtask incomplete" : "mark subtask complete"
    );
    check.addEventListener("click", () => {
      toggleTaskSubtask(title, subtask.id);
      renderTaskWorkspace();
      renderStartupDashboard();
    });

    row.appendChild(label);
    row.appendChild(check);
    taskSubtaskList.appendChild(row);
  });
}

function renderTaskWorkspace() {
  if (!taskStage && !taskPageTitle && !taskNotesInput) {
    return;
  }

  const title = getCurrentTaskTitle() || normalizeTaskTitle(getLatestStartupItems()[0]);
  if (!title) {
    if (taskPageTitle) {
      taskPageTitle.textContent = "no task selected";
    }
    if (taskPageStatus) {
      taskPageStatus.textContent = "ask anna for a to do list first";
    }
    if (taskNotesInput) {
      taskNotesInput.value = "";
      taskNotesInput.disabled = true;
    }
    if (taskSubtaskInput) {
      taskSubtaskInput.value = "";
      taskSubtaskInput.disabled = true;
    }
    if (taskSubtaskAdd) {
      taskSubtaskAdd.disabled = true;
    }
    if (taskDoneToggle) {
      taskDoneToggle.disabled = true;
      taskDoneToggle.textContent = "no task yet";
    }
    if (taskSubtaskList) {
      taskSubtaskList.innerHTML = "";
    }
    renderTaskRelatedList("");
    return;
  }

  setActiveTaskContext(title);
  const state = readTaskEntry(title);
  const completedSubtasks = state.subtasks.filter((item) => item.completed).length;
  const subtaskStatus = state.subtasks.length
    ? `${completedSubtasks}/${state.subtasks.length} subtasks done`
    : "no subtasks yet";

  if (taskPageTitle) {
    taskPageTitle.textContent = title;
  }
  if (taskPageStatus) {
    taskPageStatus.textContent = `${state.completed ? "done" : "in progress"} · ${subtaskStatus}`;
  }
  if (taskDoneToggle) {
    taskDoneToggle.disabled = false;
    taskDoneToggle.classList.toggle("is-complete", state.completed);
    taskDoneToggle.textContent = state.completed ? "✓ done" : "mark done";
    taskDoneToggle.setAttribute(
      "aria-label",
      state.completed ? "mark task incomplete" : "mark task complete"
    );
  }
  if (taskNotesInput) {
    taskNotesInput.disabled = false;
    if (document.activeElement !== taskNotesInput) {
      taskNotesInput.value = state.notes;
    }
  }
  if (taskSubtaskInput) {
    taskSubtaskInput.disabled = false;
  }
  if (taskSubtaskAdd) {
    taskSubtaskAdd.disabled = false;
  }
  if (taskTalkButton) {
    if (taskTalkButton.tagName === "A") {
      taskTalkButton.href = buildTalkHref(title);
    }
  }
  if (taskBackLink) {
    taskBackLink.href = "startup.html";
  }

  renderTaskRelatedList(title);
  renderTaskSubtasks(title);
}

function clamp01(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return 0;
  }
  return Math.max(0, Math.min(1, num));
}

function getStoredVolume() {
  const raw = localStorage.getItem(STORAGE_KEYS.outputVolume);
  if (raw == null || raw === "") {
    return 0.85;
  }
  return clamp01(raw);
}

function getMuted() {
  return (localStorage.getItem(STORAGE_KEYS.outputMuted) || "false") === "true";
}

function getOutputVolume() {
  if (getMuted()) {
    return 0;
  }
  const stored = getStoredVolume();
  return stored <= 0.001 ? 0.85 : stored;
}

function setMuted(isMuted) {
  setStoredValue(STORAGE_KEYS.outputMuted, isMuted ? "true" : "false");
  renderVolumeUi();

  renderVoiceRepliesSettingUi();
  if (isMuted) {
    stopAllTts();
  }

  if (ttsCurrentAudio) {
    try {
      ttsCurrentAudio.volume = getOutputVolume();
    } catch {
      // ignore
    }
  }
}

function setStoredVolume(next) {
  setStoredValue(STORAGE_KEYS.outputVolume, String(clamp01(next)));
  renderVolumeUi();
  if (ttsCurrentAudio) {
    try {
      ttsCurrentAudio.volume = getOutputVolume();
    } catch {
      // ignore
    }
  }
}

function setVolumePanelOpen(isOpen) {
  if (!volumePanel) {
    return;
  }
  volumePanel.classList.toggle("open", isOpen);
  volumePanel.setAttribute("aria-hidden", String(!isOpen));

  if (volumeScrim) {
    volumeScrim.classList.toggle("open", isOpen);
    volumeScrim.setAttribute("aria-hidden", String(!isOpen));
  }
}

function renderVolumeUi() {
  const vol01 = getStoredVolume();
  const vol100 = Math.round(vol01 * 100);

  if (volumeSlider) {
    volumeSlider.setAttribute("aria-valuenow", String(vol100));
  }

  if (volumeThumb && volumeSlider) {
    const rect = volumeSlider.getBoundingClientRect();
    const thumbH = 22;
    const topPx = (1 - vol01) * Math.max(1, rect.height - thumbH);
    volumeThumb.style.top = `${topPx}px`;
  }

  if (volumeFill) {
    volumeFill.style.height = `${Math.max(0, Math.min(100, vol100))}%`;
  }

  if (volumeButton) {
    volumeButton.classList.toggle("is-muted", getMuted());
  }
}

function setVolumeFromClientY(clientY) {
  if (!volumeSlider) {
    return;
  }
  const rect = volumeSlider.getBoundingClientRect();
  const y = Math.max(rect.top, Math.min(rect.bottom, clientY));
  const vol01 = clamp01(1 - (y - rect.top) / Math.max(1, rect.height));
  setStoredVolume(vol01);
}

function setTypeComposerOpen(isOpen) {
  if (!typeComposer) {
    return;
  }
  appFrame?.classList.toggle("is-typing", isOpen);
  recordStack?.classList.toggle("is-hidden-by-composer", isOpen);
  typeComposer.classList.toggle("open", isOpen);
  typeComposer.setAttribute("aria-hidden", String(!isOpen));
  typeComposerAllowBlur = !isOpen;
  if (!isOpen) {
    typeComposer.style.bottom = "";
  } else {
    updateTypeComposerKeyboardOffset();
  }
}

function updateTypeComposerKeyboardOffset() {
  if (!typeComposer || !typeComposer.classList.contains("open")) {
    return;
  }
  const vv = window.visualViewport;
  if (!vv) {
    return;
  }
  // Approx keyboard height on mobile (iOS/Android): innerHeight - visualViewport.height - offsetTop
  const keyboardPx = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
  const padding = 16;
  const bottomPx = Math.max(padding, keyboardPx + padding);
  typeComposer.style.bottom = `${bottomPx}px`;
}

const SILENT_WAV_DATA_URI =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";

function ensureTtsAudioElement() {
  if (ttsAudioEl) {
    return ttsAudioEl;
  }
  const audio = document.createElement("audio");
  audio.preload = "auto";
  audio.playsInline = true;
  audio.setAttribute("playsinline", "");
  audio.setAttribute("webkit-playsinline", "");
  audio.setAttribute("aria-hidden", "true");
  audio.style.position = "fixed";
  audio.style.width = "1px";
  audio.style.height = "1px";
  audio.style.opacity = "0";
  audio.style.pointerEvents = "none";
  audio.style.left = "-9999px";
  audio.volume = getOutputVolume();
  (document.body || document.documentElement).appendChild(audio);
  ttsAudioEl = audio;
  return audio;
}

async function routeTtsAudioToSystemOutput(audio) {
  if (!audio || typeof audio.setSinkId !== "function") {
    return;
  }
  try {
    await audio.setSinkId("default");
  } catch {
    // ignore unsupported or blocked sink changes
  }
}

function setAudioNotice(message) {
  const text = String(message || "").trim();
  if (audioNotice && audioNoticeText) {
    audioNoticeText.textContent = text;
    audioNotice.classList.toggle("hidden", !text);
    audioNotice.setAttribute("aria-hidden", String(!text));
  }
  if (audioNoticeAction) {
    audioNoticeAction.disabled = !text;
  }
  if (voiceStatus && text) {
    voiceStatus.textContent = text;
  }
}

function clearAudioNotice() {
  if (audioNotice) {
    audioNotice.classList.add("hidden");
    audioNotice.setAttribute("aria-hidden", "true");
  }
  if (audioNoticeText) {
    audioNoticeText.textContent = "";
  }
  if (audioNoticeAction) {
    audioNoticeAction.disabled = true;
  }
}

function unlockAudioFromGesture() {
  if (audioUnlockAttempted && !ttsNeedsUnlock) {
    return;
  }
  audioUnlockAttempted = true;

  try {
    audioCtx?.resume?.();
  } catch {
    // ignore
  }

  // HTMLAudio unlock (also helps on mobile)
  try {
    const a = ensureTtsAudioElement();
    const previousSrc = a.currentSrc || a.src || "";
    const previousVolume = a.volume;
    routeTtsAudioToSystemOutput(a);
    a.src = SILENT_WAV_DATA_URI;
    a.load();
    a.volume = 0;
    const p = a.play();
    if (p && p.catch) {
      p.catch(() => {
        // ignore
      });
    }
    setTimeout(() => {
      try {
        a.pause();
        a.removeAttribute("src");
        a.load();
        a.volume = previousVolume;
        if (previousSrc) {
          a.src = previousSrc;
        }
      } catch {
        // ignore
      }
    }, 60);
  } catch {
    // ignore
  }

  ttsNeedsUnlock = false;
  clearAudioNotice();
  playNextTts();
}

function primeAudioUnlockOnFirstGesture() {
  const once = () => {
    unlockAudioFromGesture();
    startWakeWordMonitoring();
    document.removeEventListener("pointerdown", once, true);
    document.removeEventListener("touchstart", once, true);
    document.removeEventListener("click", once, true);
  };

  document.addEventListener("pointerdown", once, true);
  document.addEventListener("touchstart", once, true);
  document.addEventListener("click", once, true);
}

function getVoiceRepliesEnabled() {
  return !getMuted();
}

function isVoiceOutputEnabled() {
  return !getMuted();
}

function renderVoiceRepliesSettingUi() {
  if (!voiceRepliesToggle) {
    return;
  }
  voiceRepliesToggle.checked = !getMuted();
  voiceRepliesToggle.disabled = true;
}

function setVoiceRepliesEnabled(_enabled) {
  renderVoiceRepliesSettingUi();
  if (!isVoiceOutputEnabled()) {
    stopAllTts();
  }
}

function getSelectedVoiceId() {
  return (localStorage.getItem(STORAGE_KEYS.elevenVoiceId) || "").trim();
}

function getSelectedVoiceName() {
  return (localStorage.getItem(STORAGE_KEYS.elevenVoiceName) || "").trim();
}

function setSelectedVoice(voiceId, voiceName) {
  const id = String(voiceId || "").trim();
  const name = String(voiceName || "").trim();
  if (id) {
    setStoredValue(STORAGE_KEYS.elevenVoiceId, id);
  } else {
    removeStoredValue(STORAGE_KEYS.elevenVoiceId);
  }
  if (name) {
    setStoredValue(STORAGE_KEYS.elevenVoiceName, name);
  } else {
    removeStoredValue(STORAGE_KEYS.elevenVoiceName);
  }
  renderVoiceSetting();
}

let defaultVoiceSelectionPromise = null;

async function ensureDefaultVoiceSelection() {
  // If the user never picked a voice, choose Bella if available.
  if (getSelectedVoiceId()) {
    return;
  }
  if (defaultVoiceSelectionPromise) {
    return defaultVoiceSelectionPromise;
  }

  defaultVoiceSelectionPromise = (async () => {
  try {
    const res = await fetch("/api/voices", { method: "GET" });
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    const allVoices = Array.isArray(data?.voices) ? data.voices : [];
    const females = allVoices.filter((v) => String(v?.gender || "").toLowerCase() === "female");
    if (!females.length) {
      return;
    }
    const bella = females.find((v) => String(v?.name || "").trim().toLowerCase() === "bella");
    const chosen = bella || females[0];
    const id = String(chosen?.voice_id || "").trim();
    const name = String(chosen?.name || "").trim() || "bella";
    if (id) {
      setSelectedVoice(id, name);
    }
  } catch {
    // ignore
  }
  })();

  try {
    await defaultVoiceSelectionPromise;
  } finally {
    defaultVoiceSelectionPromise = null;
  }
}

function renderVoiceSetting() {
  if (!settingsVoice) {
    return;
  }
  const name = getSelectedVoiceName();
  settingsVoice.textContent = name ? name : "auto";
}

async function readApiErrorMessage(response) {
  if (!response) {
    return "unknown error";
  }
  try {
    const data = await response.json();
    const detail = data?.detail || data?.error || data?.message;
    if (detail) {
      return String(detail).trim();
    }
  } catch {
    // ignore
  }
  try {
    const text = await response.text();
    if (text) {
      return String(text).trim();
    }
  } catch {
    // ignore
  }
  return `http ${response.status}`;
}

function getTtsFailureNotice(detail) {
  const text = String(detail || "").trim();
  if (!text) {
    return "voice reply failed. elevenlabs didn't return audio.";
  }

  const normalized = text.toLowerCase();
  if (
    normalized.includes("credits remaining") ||
    normalized.includes("quota") ||
    normalized.includes("exceeds your api key")
  ) {
    return "voice reply is off because the elevenlabs account is out of credits.";
  }

  return "voice reply failed. elevenlabs didn't return audio.";
}

function stopAllTts() {
  ttsSessionId += 1;
  ttsQueue = [];
  ttsIsPlaying = false;
  ttsFetchInFlight = 0;
  ttsNeedsUnlock = false;
  ttsFetchChain = Promise.resolve();

  if (ttsCurrentAudio) {
    try {
      ttsCurrentAudio.pause();
      ttsCurrentAudio.removeAttribute("src");
      ttsCurrentAudio.load?.();
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
  if (ttsNeedsUnlock) {
    return;
  }
  const next = ttsQueue.shift();
  if (!next) {
    return;
  }
  const { url, sessionId } = next;
  if (sessionId !== ttsSessionId) {
    if (url) {
      try {
        URL.revokeObjectURL(url);
      } catch {
        // ignore
      }
    }
    return playNextTts();
  }

  ttsIsPlaying = true;
  ttsCurrentUrl = url;
  const audio = ensureTtsAudioElement();
  routeTtsAudioToSystemOutput(audio);
  audio.pause();
  audio.src = url;
  audio.load();
  audio.volume = getOutputVolume();
  ttsCurrentAudio = audio;

  if (singleTurnVoiceMode && shouldUseWakeWordMode() && !wakeWordListeningNow) {
    startWakeWordMonitoring();
  }

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
    maybeResumeListeningAfterReply();
  };

  audio.onerror = () => {
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    setAudioNotice("anna couldn't play that voice reply. try again in a second.");
    if (ttsCurrentUrl) {
      try {
        URL.revokeObjectURL(ttsCurrentUrl);
      } catch {
        // ignore
      }
    }
    ttsCurrentUrl = null;
    playNextTts();
    maybeResumeListeningAfterReply();
  };

  audio.play().catch(() => {
    // Likely autoplay policy. Keep this chunk and retry after unlock.
    console.warn("anna tts play() was blocked; waiting for next user gesture to retry audio");
    setAudioNotice("voice is ready, but your browser blocked playback. tap enable voice once, then anna will speak normally.");
    ttsNeedsUnlock = true;
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    if (ttsCurrentUrl) {
      ttsQueue.unshift({ url: ttsCurrentUrl, sessionId });
    }
    ttsCurrentUrl = null;
  });
}

async function enqueueElevenLabsTts(text, voiceIdOverride) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }
  if (!isVoiceOutputEnabled()) {
    return;
  }
  if (isListeningNow) {
    return;
  }

  const mySession = ttsSessionId;
  ttsFetchInFlight += 1;

  // Serialize fetches so audio enqueues in the same order as text segments.
  ttsFetchChain = ttsFetchChain
    .then(async () => {
      if (mySession !== ttsSessionId) {
        return;
      }

      if (!voiceIdOverride && !getSelectedVoiceId()) {
        await ensureDefaultVoiceSelection();
      }

      const voiceId = String(voiceIdOverride || getSelectedVoiceId() || "").trim();
      clearAudioNotice();
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(voiceId ? { text: cleaned, voiceId } : { text: cleaned })
      });
      if (!res.ok) {
        const detail = await readApiErrorMessage(res);
        console.error("anna elevenlabs tts failed:", detail);
        setAudioNotice(getTtsFailureNotice(detail));
        return;
      }
      const blob = await res.blob();
      if (mySession !== ttsSessionId) {
        return;
      }
      if (!blob.size) {
        console.error("anna elevenlabs tts failed: empty audio response");
        setAudioNotice("voice reply failed. elevenlabs returned empty audio.");
        return;
      }
      const url = URL.createObjectURL(blob);
      ttsQueue.push({ url, sessionId: mySession });
      playNextTts();
    })
    .catch((err) => {
      console.error("anna elevenlabs tts failed:", err);
      setAudioNotice("voice reply failed. elevenlabs isn't reachable right now.");
    })
    .finally(() => {
      ttsFetchInFlight = Math.max(0, ttsFetchInFlight - 1);
      maybeResumeListeningAfterReply();
    });
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

function getRenderedTranscriptHost() {
  return transcriptList || inlineVoiceList || null;
}

function appendLine(role, text, opts = {}) {
  const host = getRenderedTranscriptHost();
  if (!host) {
    return null;
  }
  const paragraph = document.createElement("p");
  paragraph.className = `transcript-line ${role}${opts.interim ? " interim" : ""}`;
  paragraph.textContent = `“${text}”`;
  if (opts.pendingId) {
    paragraph.dataset.pendingId = opts.pendingId;
  }
  if (host === inlineVoiceList) {
    host.innerHTML = "";
    setInlineVoiceTrayOpen(true);
    clearInlineVoiceHideTimer();
  }
  host.appendChild(paragraph);
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
  if (inlineVoiceTray && !transcriptList) {
    setInlineVoiceTrayOpen(true);
  }
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
  appendChatSessionEntry(role, cleaned);
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
    (getRenderedTranscriptHost() &&
      getRenderedTranscriptHost().querySelector &&
      getRenderedTranscriptHost().querySelector(`[data-pending-id="${pendingId}"]`));
  if (el) {
    el.textContent = `“${cleaned}”`;
  }
  if (!transcriptList) {
    setInlineVoiceTrayOpen(true);
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

  const host = getRenderedTranscriptHost();
  const el = pendingEls.get(pendingId) || (host && host.querySelector && host.querySelector(`[data-pending-id="${pendingId}"]`));
  if (el) {
    el.textContent = `“${cleaned}”`;
  }
  pendingEls.delete(pendingId);
  if (cleaned && cleaned !== "…") {
    appendChatSessionEntry("ai", cleaned);
  }
  scrollTranscriptIfNeeded();
}

function sanitizeAnnaReplyText(text) {
  return String(text || "")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u2013\u2014]/g, ", ")
    .replace(
      /(?:^|\s)(?:as an? (?:ai|text-based) (?:assistant|model)|i(?:'m| am) (?:just |all )?text(?:[- ]based|[- ]only)?(?: here)?|i (?:can't|cannot) speak(?: out loud)?|i do not have a voice here|i don't have a voice here|no voice here|you(?:'ll| will) need (?:a )?different setup for voice|voice (?:isn't|is not|isn’t) available here|i can only respond in text(?: here)?|unable to use voice here|can't do voice here)(?:[^.!?]*[.!?])?/gi,
      " "
    )
    .replace(/\s+,/g, ",")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
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
      body: JSON.stringify({ messages: buildMessagesForApi() }),
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
  return sanitizeAnnaReplyText(String(data.reply || "").trim());
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
      body: JSON.stringify({ messages: buildMessagesForApi() }),
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
  if (isVoiceOutputEnabled() && !isListeningNow) {
    stopAllTts();
  }

  let displayFull = "";
  let speakBuffer = "";

  const sessionAtStart = ttsSessionId;

  annaReplyInFlight = true;
  try {
    const final = await fetchAnnaReplyStream((delta) => {
      displayFull += delta;
      setPendingAnnaText(pendingId, sanitizeAnnaReplyText(displayFull) || "…");

      if (!isVoiceOutputEnabled() || isListeningNow || sessionAtStart !== ttsSessionId) {
        return;
      }

      speakBuffer += delta;
      const { segments, remaining } = splitIntoSpeakableSegments(speakBuffer);
      speakBuffer = remaining;
      segments.forEach((seg) => {
        const cleanedSeg = sanitizeAnnaReplyText(seg);
        if (cleanedSeg) {
          enqueueElevenLabsTts(cleanedSeg);
        }
      });
    });

    const cleanedFinal = sanitizeAnnaReplyText(final) || "i'm here. ask me what you want to work through.";
    resolvePendingAnna(pendingId, cleanedFinal);
    maybeShowListSheetFromAnna(cleanedFinal);
    maybeApplyTaskWorkspaceSuggestionsFromAnna(cleanedFinal);

    if (isVoiceOutputEnabled() && !isListeningNow && sessionAtStart === ttsSessionId) {
      const leftover = sanitizeAnnaReplyText(String(speakBuffer || "").trim());
      if (leftover) {
        enqueueElevenLabsTts(leftover);
      }
    }

    return cleanedFinal;
  } finally {
    annaReplyInFlight = false;
    maybeResumeListeningAfterReply();
  }
}

listSheetScrim?.addEventListener("click", () => setListSheetOpen(false));
listSheetClose?.addEventListener("click", () => setListSheetOpen(false));

async function loadVoicesIntoModal() {
  if (!voiceStatus || !voiceList) {
    return;
  }

  voiceStatus.textContent = "loading voices…";
  voiceList.innerHTML = "";

  try {
    const res = await fetch("/api/voices", { method: "GET" });
    if (!res.ok) {
      let msg = `couldn't load voices (http ${res.status})`;
      try {
        const data = await res.json();
        if (data?.error) {
          msg = String(data.error);
        }
      } catch {
        // ignore
      }
      voiceStatus.textContent = msg;
      return;
    }

    const data = await res.json();
    const allVoices = Array.isArray(data?.voices) ? data.voices : [];
    const voices = allVoices.filter((v) => String(v?.gender || "").toLowerCase() === "female");
    if (!voices.length) {
      voiceStatus.textContent = allVoices.length
        ? "no female voices found in your elevenlabs account"
        : "no voices found";
      return;
    }

    voiceStatus.textContent = "";
    const activeId = getSelectedVoiceId();

    voices.forEach((v) => {
      const id = String(v.voice_id || "").trim();
      const name = String(v.name || "").trim() || "voice";
      const category = String(v.category || "").trim();
      if (!id) {
        return;
      }

      const item = document.createElement("div");
      item.className = `voice-item${activeId && activeId === id ? " active" : ""}`;
      item.setAttribute("role", "listitem");

      const meta = document.createElement("div");
      meta.className = "voice-meta";
      const title = document.createElement("div");
      title.className = "voice-name";
      title.textContent = name;
      const sub = document.createElement("div");
      sub.className = "voice-category";
      sub.textContent = category ? category : "";
      meta.appendChild(title);
      meta.appendChild(sub);

      const actions = document.createElement("div");
      actions.className = "voice-actions";

      const play = document.createElement("button");
      play.type = "button";
      play.className = "voice-play";
      play.setAttribute("aria-label", "preview voice");
      play.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M9 7.5v9l8-4.5-8-4.5Z"/>
        </svg>
      `;
      play.addEventListener("click", (e) => {
        e.preventDefault();
        unlockAudioFromGesture();
        stopAllTts();
        enqueueElevenLabsTts("hi, i'm anna. how can i help?", id);
      });

      const choose = document.createElement("button");
      choose.type = "button";
      choose.className = "glass-button";
      choose.textContent = "use";
      choose.addEventListener("click", (e) => {
        e.preventDefault();
        setSelectedVoice(id, name);
        // rerender active state
        loadVoicesIntoModal();
      });

      actions.appendChild(play);
      actions.appendChild(choose);

      item.appendChild(meta);
      item.appendChild(actions);
      voiceList.appendChild(item);
    });
  } catch {
    voiceStatus.textContent = "couldn't load voices";
  }
}

function playRecordBeep(isStarting) {
  try {
    const volume = getOutputVolume();
    if (volume <= 0.001) {
      return;
    }
    const userActivation = navigator.userActivation;
    if (userActivation && !userActivation.isActive && !audioCtx) {
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      return;
    }
    audioCtx = audioCtx || new Ctx();
    audioCtx.resume?.();
    const ctx = audioCtx;

    const o = ctx.createOscillator();
    const g = ctx.createGain();

    const now = ctx.currentTime;
    const duration = 0.08;
    const freq = isStarting ? 880 : 440;

    o.type = "sine";
    o.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.07 * volume, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    o.connect(g);
    g.connect(ctx.destination);
    o.start(now);
    o.stop(now + duration);
  } catch {
    // ignore
  }
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
    const finalizedParts = [];
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const text = String(result[0]?.transcript || "").trim().toLowerCase();
      if (!text) {
        continue;
      }

      if (result.isFinal) {
        finalizedParts.push(text);
      } else {
        nextInterim = text;
      }
    }

    if (finalizedParts.length) {
      finalSpeechBuffer = normalizeBufferedSpeechParts([finalSpeechBuffer, ...finalizedParts]);
      nextInterim = "";
    }

    interimText = nextInterim;
    setInterim(nextInterim);

    if (finalSpeechBuffer) {
      scheduleBufferedSpeechCommit();
    }
  };

  recognizer.onerror = () => {
    // keep it quiet; user can tap to stop/retry
  };

  recognizer.onend = () => {
    isListeningNow = false;
    if (persistentListeningEnabled) {
      updateListeningUi();
      if (pendingResumeListening) {
        maybeResumeListeningAfterReply();
      } else {
        if (finalSpeechBuffer.trim() && !pendingSpeechCommitTimer) {
          scheduleBufferedSpeechCommit();
        }
        resumePersistentListeningSoon(180);
      }
      return;
    }
    updateListeningUi();
  };

  return recognizer;
}

function setListening(isListening) {
  if (!recordButton && !inlineVoiceButton && !transcriptPane && !inlineVoiceList) {
    return;
  }

  isListeningNow = isListening;
  if (isListening) {
    pendingResumeListening = false;
    clearInlineVoiceHideTimer();
  } else {
    clearBufferedSpeech();
  }
  if (isListening) {
    try {
      stopAllTts();
    } catch {
      // ignore
    }
  }

  updateListeningUi();

  ensureStartedUi();

  if (isListening) {
    // ensure transcript visible when starting voice
    ensureStartedUi();
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
      setModalOpen(textInputModal, true);
    } else {
      showInlineVoiceStatus("voice input isn't available in this browser.", 4200);
    }
    persistentListeningEnabled = false;
    singleTurnVoiceMode = false;
    updateListeningUi();
    startWakeWordMonitoring();
    return;
  }

  interimText = "";
  setInterim("");
  stopSpeechRecognizer();
  if (!transcriptList) {
    scheduleInlineVoiceTrayHide();
  }
}

typeInstead?.addEventListener("click", () => {
  unlockAudioFromGesture();
  setListening(false);
  closeAllModals();
  setVolumePanelOpen(false);
  ensureStartedUi();
  setTypeComposerOpen(true);
  if (typeComposerInput) {
    requestAnimationFrame(() => {
      typeComposerInput.focus();
    });
  }
  updateTypeComposerKeyboardOffset();
});

typeComposerSend?.addEventListener("click", () => {
  unlockAudioFromGesture();
  const value = String(typeComposerInput?.value || "").trim();
  if (!value) {
    return;
  }
  if (typeComposerInput) {
    typeComposerInput.value = "";
  }
  setTypeComposerOpen(false);
  sendTypedToAnna(value);
});

typeComposerClose?.addEventListener("click", () => {
  setTypeComposerOpen(false);
});

typeComposerInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  const value = String(typeComposerInput?.value || "").trim();
  if (!value) {
    return;
  }
  if (typeComposerInput) {
    typeComposerInput.value = "";
  }
  setTypeComposerOpen(false);
  sendTypedToAnna(value);
});

typeComposerInput?.addEventListener("blur", () => {
  if (!typeComposer?.classList.contains("open") || typeComposerAllowBlur) {
    return;
  }
  window.setTimeout(() => {
    if (!typeComposer?.classList.contains("open") || typeComposerAllowBlur) {
      return;
    }
    if (document.activeElement !== typeComposerInput) {
      typeComposerInput?.focus?.();
      updateTypeComposerKeyboardOffset();
    }
  }, 40);
});

let volumeHoldTimer = null;
let volumeHoldFired = false;
const VOLUME_HOLD_MS = 260;

function clearVolumeHold() {
  if (volumeHoldTimer) {
    window.clearTimeout(volumeHoldTimer);
    volumeHoldTimer = null;
  }
}

function toggleMuteFromTap() {
  unlockAudioFromGesture();
  setMuted(!getMuted());
}

function openVolumePanel() {
  unlockAudioFromGesture();
  setVolumePanelOpen(true);
  renderVolumeUi();
}

function closeVolumePanel() {
  setVolumePanelOpen(false);
}

// volume button:
// - quick tap: mute/unmute
// - press and hold: open slider
// - when open: tap closes
volumeButton?.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  e.stopPropagation();

  volumeHoldFired = false;
  clearVolumeHold();

  // if the slider is already open, don't start the hold-to-open timer.
  // (tap-to-mute should still work while open)
  if (volumePanel?.classList.contains("open")) {
    return;
  }

  volumeHoldTimer = window.setTimeout(() => {
    volumeHoldFired = true;
    openVolumePanel();
  }, VOLUME_HOLD_MS);
});

volumeButton?.addEventListener("pointerup", (e) => {
  e.preventDefault();
  e.stopPropagation();
  clearVolumeHold();
  if (volumeHoldFired) {
    return;
  }
  toggleMuteFromTap();
});

volumeButton?.addEventListener("pointercancel", () => {
  clearVolumeHold();
});

volumePanel?.addEventListener("pointerdown", (e) => {
  e.stopPropagation();
});

volumeScrim?.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  if (isAdjustingVolume) {
    return;
  }
  closeVolumePanel();
});

function beginAdjustingVolume(e) {
  if (!volumePanel || !volumePanel.classList.contains("open")) {
    return;
  }
  unlockAudioFromGesture();
  isAdjustingVolume = true;

  if (e && e.pointerId != null && volumePanel.setPointerCapture) {
    try {
      volumePanel.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  }
  try {
    e.preventDefault?.();
  } catch {
    // ignore
  }
  try {
    e.stopPropagation?.();
  } catch {
    // ignore
  }

  const clientY =
    e?.touches && e.touches[0] ? Number(e.touches[0].clientY) : Number(e?.clientY);
  if (Number.isFinite(clientY)) {
    setVolumeFromClientY(clientY);
  }
}

function moveAdjustingVolume(e) {
  if (!isAdjustingVolume) {
    return;
  }
  const clientY =
    e?.touches && e.touches[0] ? Number(e.touches[0].clientY) : Number(e?.clientY);
  if (Number.isFinite(clientY)) {
    setVolumeFromClientY(clientY);
  }
}

function endAdjustingVolume(e) {
  if (!isAdjustingVolume) {
    return;
  }
  isAdjustingVolume = false;

  if (e && e.pointerId != null && volumePanel?.releasePointerCapture) {
    try {
      volumePanel.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  }
}

// big hitbox: dragging anywhere inside the popup adjusts volume
volumePanel?.addEventListener("pointerdown", beginAdjustingVolume);
volumePanel?.addEventListener("pointermove", moveAdjustingVolume);
volumePanel?.addEventListener("pointerup", endAdjustingVolume);
volumePanel?.addEventListener("pointercancel", endAdjustingVolume);
volumePanel?.addEventListener("touchstart", beginAdjustingVolume, { passive: false });
volumePanel?.addEventListener("touchmove", moveAdjustingVolume, { passive: false });
volumePanel?.addEventListener("touchend", endAdjustingVolume);

volumeSlider?.addEventListener("keydown", (event) => {
  const step = event.shiftKey ? 0.1 : 0.04;
  if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    event.preventDefault();
    setStoredVolume(clamp01(getStoredVolume() + step));
  } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    event.preventDefault();
    setStoredVolume(clamp01(getStoredVolume() - step));
  }
});

document.addEventListener("pointerdown", (event) => {
  if (isAdjustingVolume) {
    return;
  }
  // volume panel closes via scrim only
});

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", updateTypeComposerKeyboardOffset);
  window.visualViewport.addEventListener("scroll", updateTypeComposerKeyboardOffset);
}

function randomizeTryPrompt() {
  if (!promptTryText) {
    return;
  }
  const prompts = [
    "hey anna, let's build our first startup",
    "anna, help me find a startup idea i can launch fast",
    "anna, what's a 7-day plan to validate my idea?",
    "anna, ask me 5 questions to pick a niche",
    "anna, help me write a landing page headline",
    "anna, what should i build this weekend?",
    "anna, help me price this product",
    "anna, give me a go-to-market plan"
  ];
  const idx = Math.floor(Math.random() * prompts.length);
  promptTryText.textContent = `“${prompts[idx]}”`;
}

function toggleListeningFromTap(event) {
  if (event?.type === "pointerup") {
    event.preventDefault?.();
  }
  unlockAudioFromGesture();
  const now = Date.now();
  if (now - lastToggleAt < 260) {
    return;
  }
  lastToggleAt = now;

  const nextActive = !persistentListeningEnabled;
  singleTurnVoiceMode = false;
  persistentListeningEnabled = nextActive;
  pendingResumeListening = false;
  playRecordBeep(nextActive);
  setListening(nextActive);
}

// single source of truth for tap handling (prevents double-fire)
if (recordButton) {
  recordButton.addEventListener("pointerdown", () => {
    unlockAudioFromGesture();
  });
  if ("PointerEvent" in window) {
    recordButton.addEventListener("pointerup", toggleListeningFromTap);
  } else {
    recordButton.addEventListener("click", toggleListeningFromTap);
  }
}

inlineVoiceButton?.addEventListener("pointerdown", () => {
  unlockAudioFromGesture();
});

inlineVoiceButton?.addEventListener("click", (event) => {
  event.preventDefault();
  startInlineVoiceCapture("tap");
});

inlineVoiceClose?.addEventListener("click", () => {
  clearInlineVoiceHideTimer();
  setInlineVoiceTrayOpen(false);
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

function getAccountValue(key) {
  return localStorage.getItem(key) || "";
}

function renderStartupName() {
  const name = getStartupName();
  if (startupNameButton) {
    startupNameButton.textContent = name ? name : "name your startup";
  }
  if (startupTitle) {
    startupTitle.textContent = name ? name : "your startup";
  }
  if (startupNameText) {
    startupNameText.textContent = name ? name : "startup";
  }
  if (settingsStartupName) {
    settingsStartupName.textContent = name ? name : "not set";
  }

  const userName = getAccountValue(STORAGE_KEYS.userName);
  const userEmail = getAccountValue(STORAGE_KEYS.userEmail);
  const payment = getAccountValue(STORAGE_KEYS.paymentMethod);
  const subscription = getAccountValue(STORAGE_KEYS.subscription) || "starter";

  if (settingsProfile) {
    const parts = [];
    if (userName) parts.push(userName);
    if (userEmail) parts.push(userEmail);
    if (payment) parts.push(payment);
    if (subscription) parts.push(subscription);
    settingsProfile.textContent = parts.length ? parts.join(" • ") : "not set";
  }
  renderVoiceSetting();
}

startupTitle?.addEventListener("click", () => {
  try {
    window.location.href = "startup.html";
  } catch {
    // ignore
  }
});

startupPageLink?.addEventListener("click", () => {
  setMenuOpen(false);
});

taskTalkButton?.addEventListener("click", () => {
  if (taskTalkButton?.tagName !== "A") {
    return;
  }
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  setActiveTaskContext(title);
  taskTalkButton.href = buildTalkHref(title);
});

taskDoneToggle?.addEventListener("click", (event) => {
  event.preventDefault();
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  toggleTaskCompleted(title);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskNotesInput?.addEventListener("input", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  setTaskNotes(title, taskNotesInput.value);
});

function addCurrentTaskSubtask() {
  const title = getCurrentTaskTitle();
  const subtaskTitle = String(taskSubtaskInput?.value || "").trim();
  if (!title || !subtaskTitle) {
    return;
  }
  addTaskSubtask(title, subtaskTitle);
  if (taskSubtaskInput) {
    taskSubtaskInput.value = "";
    taskSubtaskInput.focus();
  }
  renderTaskWorkspace();
}

taskSubtaskAdd?.addEventListener("click", addCurrentTaskSubtask);

taskSubtaskInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  event.preventDefault();
  addCurrentTaskSubtask();
});

// startup dashboard is driven by real lists captured from anna replies.

voiceRepliesToggle?.addEventListener("change", () => {
  renderVoiceRepliesSettingUi();
});

chooseVoice?.addEventListener("click", () => {
  renderVoiceSetting();
  setModalOpen(settingsModal, false);
  closeAllModals();
  setModalOpen(voiceModal, true);
  unlockAudioFromGesture();
  loadVoicesIntoModal();
});

function setModalOpen(modal, isOpen) {
  if (!modal) {
    return;
  }
  if (!isOpen) {
    const active = document.activeElement;
    if (active && modal.contains(active) && typeof active.blur === "function") {
      active.blur();
    }
  }
  modal.classList.toggle("open", isOpen);
  modal.setAttribute("aria-hidden", String(!isOpen));
}

function closeAllModals() {
  setModalOpen(startupNameModal, false);
  setModalOpen(settingsModal, false);
  setModalOpen(textInputModal, false);
  setModalOpen(accountModal, false);
  setModalOpen(authModal, false);
  setModalOpen(voiceModal, false);
  setModalOpen(subscriptionModal, false);
  setModalOpen(historyModal, false);
  setTypeComposerOpen(false);
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
wireModalClose(authModal);
wireModalClose(voiceModal);
wireModalClose(subscriptionModal);
wireModalClose(historyModal);

function renderHistoryModal() {
  if (!historyList) {
    return;
  }

  const sessions = getMergedChatSessionsForUser()
    .slice(0, 40);

  historyList.innerHTML = "";
  if (historyEmpty) {
    historyEmpty.classList.toggle("hidden", sessions.length > 0);
  }

  if (!sessions.find((session) => session.id === expandedHistorySessionId)) {
    expandedHistorySessionId = "";
  }

  const grouped = new Map();
  sessions.forEach((session) => {
    const label = formatHistoryDayLabel(getSessionPrimaryTime(session));
    const list = grouped.get(label) || [];
    list.push(session);
    grouped.set(label, list);
  });

  grouped.forEach((groupSessions, label) => {
    const daySection = document.createElement("section");
    daySection.className = "history-day-group";

    const dayTitle = document.createElement("div");
    dayTitle.className = "history-day-title";
    dayTitle.textContent = label;
    daySection.appendChild(dayTitle);

    const dayList = document.createElement("div");
    dayList.className = "history-day-list";

    groupSessions.forEach((session) => {
      const isExpanded = expandedHistorySessionId === session.id;
      const card = document.createElement("section");
      card.className = `history-session${isExpanded ? " is-expanded" : ""}`;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "history-session-toggle";
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.addEventListener("click", () => {
        expandedHistorySessionId = isExpanded ? "" : session.id;
        renderHistoryModal();
      });

      const header = document.createElement("div");
      header.className = "history-session-header";

      const title = document.createElement("div");
      title.className = "history-session-title";
      title.textContent = session.title || session.page || "anna";

      const meta = document.createElement("div");
      meta.className = "history-session-meta";
      const mergedCount = Array.isArray(session.sourceIds) ? session.sourceIds.length : 1;
      meta.textContent = `${formatSessionTimestamp(session.updatedAt)} · ${session.entries.length} messages${mergedCount > 1 ? ` · ${mergedCount} merged chats` : ""}`;

      const snippet = document.createElement("div");
      snippet.className = "history-session-snippet";
      snippet.textContent = getHistorySessionSnippet(session);

      header.appendChild(title);
      header.appendChild(meta);
      toggle.appendChild(header);
      toggle.appendChild(snippet);
      card.appendChild(toggle);

      if (isExpanded) {
        const body = document.createElement("div");
        body.className = "history-session-body";

        session.entries.forEach((entry) => {
          const row = document.createElement("div");
          row.className = `history-entry ${entry.role === "user" ? "user" : "ai"}`;

          const role = document.createElement("span");
          role.className = "history-entry-role";
          role.textContent = entry.role === "user" ? "you" : "anna";

          const text = document.createElement("p");
          text.className = "history-entry-text";
          text.textContent = entry.text;

          row.appendChild(role);
          row.appendChild(text);
          body.appendChild(row);
        });

        card.appendChild(body);
      }

      dayList.appendChild(card);
    });

    daySection.appendChild(dayList);
    historyList.appendChild(daySection);
  });
}

function getSelectedSubscription() {
  return getSubscriptionLabel(
    accountSubscriptionButton?.dataset.value || getAccountValue(STORAGE_KEYS.subscription) || "starter"
  );
}

function setSelectedSubscription(value) {
  const normalized = getSubscriptionLabel(value);
  if (accountSubscriptionButton) {
    accountSubscriptionButton.dataset.value = normalized;
    accountSubscriptionButton.textContent = normalized;
  }
  subscriptionOptionButtons.forEach((button) => {
    const isActive = getSubscriptionLabel(button.dataset.subscriptionOption) === normalized;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function refreshUiFromStoredState() {
  syncAuthIntoProfileFields();
  renderStartupName();
  renderTaskContextBanner();
  renderStartupDashboard();
  renderTaskWorkspace();
  setSelectedSubscription(getAccountValue(STORAGE_KEYS.subscription) || "starter");
  renderHistoryModal();
  startWakeWordMonitoring();
}

async function bootstrapAuthAndState() {
  const client = await initSupabaseClient();
  if (!client) {
    refreshUiFromStoredState();
    return;
  }

  const applySession = async (session) => {
    currentChatSessionId = "";
    if (session?.user?.email) {
      setAuthSession({
        email: session.user.email,
        name: String(session.user.user_metadata?.name || getAccountValue(STORAGE_KEYS.userName) || "").trim()
      });
      remoteStateLoadedForUser = null;
      await loadRemoteStateForCurrentUser();
    } else {
      clearAuthSession();
      remoteStateLoadedForUser = null;
    }
    refreshUiFromStoredState();
  };

  const { data } = await client.auth.getSession();
  await applySession(data?.session || null);

  client.auth.onAuthStateChange((_event, session) => {
    Promise.resolve(applySession(session)).catch((err) => {
      setAuthError(err?.message || "couldn't restore account");
    });
  });
}

accountSubscriptionButton?.addEventListener("click", () => {
  setSelectedSubscription(getSelectedSubscription());
  setModalOpen(subscriptionModal, true);
});

subscriptionOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSelectedSubscription(button.dataset.subscriptionOption);
    setModalOpen(subscriptionModal, false);
    requestAnimationFrame(() => accountSubscriptionButton?.focus?.());
  });
});

function syncAuthIntoProfileFields() {
  const user = getAuthUser();
  if (!user) {
    return;
  }
  if (user.email && !getAccountValue(STORAGE_KEYS.userEmail)) {
    setStoredValue(STORAGE_KEYS.userEmail, user.email);
  }
  if (user.name && !getAccountValue(STORAGE_KEYS.userName)) {
    setStoredValue(STORAGE_KEYS.userName, user.name);
  }
}

authToSignUp?.addEventListener("click", (e) => {
  e.preventDefault();
  setAuthMode("sign-up");
  requestAnimationFrame(() => authSignUpEmail?.focus?.());
});

authToSignIn?.addEventListener("click", (e) => {
  e.preventDefault();
  setAuthMode("sign-in");
  requestAnimationFrame(() => authSignInEmail?.focus?.());
});

authSignUpButton?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    setAuthError("");
    await signUpWithPassword();
    syncAuthIntoProfileFields();
    renderStartupName();
    renderStartupDashboard();
    setModalOpen(authModal, false);
  } catch (err) {
    setAuthError(err?.message || "couldn't sign up");
  }
});

authSignInButton?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    setAuthError("");
    await signInWithPassword();
    syncAuthIntoProfileFields();
    renderStartupName();
    renderStartupDashboard();
    setModalOpen(authModal, false);
  } catch (err) {
    setAuthError(err?.message || "couldn't sign in");
  }
});

authSignInPassword?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  authSignInButton?.click?.();
});

authSignUpConfirm?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  authSignUpButton?.click?.();
});

authSignUpPassword?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  authSignUpButton?.click?.();
});

function openAccountModal(focusField) {
  if (accountName) accountName.value = getAccountValue(STORAGE_KEYS.userName);
  if (accountEmail) accountEmail.value = getAccountValue(STORAGE_KEYS.userEmail);
  if (accountPayment) accountPayment.value = getAccountValue(STORAGE_KEYS.paymentMethod);
  setSelectedSubscription(getAccountValue(STORAGE_KEYS.subscription) || "starter");

  closeAllModals();
  setModalOpen(accountModal, true);

  const fieldMap = {
    name: accountName,
    email: accountEmail,
    payment: accountPayment,
    subscription: accountSubscriptionButton
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

  ensureStartedUi();
  if (!transcriptList) {
    setInlineVoiceTrayOpen(true);
  }
  if (!ensureSignedIn()) {
    return;
  }

  pushEntry("user", lower);
  appendToMemory("user", lower);
  conversation = [...conversation, { role: "user", content: lower }].slice(-16);
  const pendingId = pushPendingAnna();

  startStreamingAnnaReply(pendingId)
    .then((reply) => {
      const rawReply = String(reply || "").trim();
      const normalized = rawReply.toLowerCase();
      conversation = [...conversation, { role: "assistant", content: normalized }].slice(-16);
      appendToMemory("assistant", normalized);
    })
    .catch((err) => {
      const msg = err && err.message ? String(err.message) : "anna couldn't reply";
      resolvePendingAnna(pendingId, `anna couldn't reply: ${msg}`);
    });
}

startupNameButton?.addEventListener("click", () => {
  openStartupNameModal();
});

startupNameText?.addEventListener("click", () => {
  openStartupNameModal();
});

function openStartupNameModal() {
  const current = getStartupName();
  if (startupNameInput) {
    startupNameInput.value = current;
  }
  setMenuOpen(false);
  closeAllModals();
  setModalOpen(startupNameModal, true);
  requestAnimationFrame(() => {
    startupNameInput?.focus?.();
    startupNameInput?.select?.();
  });
}

startupNameSave?.addEventListener("click", () => {
  const value = String(startupNameInput?.value || "").trim();
  if (!value) {
    return;
  }
  setStoredValue(STORAGE_KEYS.startupName, value);
  renderStartupName();
  setModalOpen(startupNameModal, false);
});

settingsButton?.addEventListener("click", () => {
  renderStartupName();
  renderHistoryModal();
  setMenuOpen(false);
  closeAllModals();
  setModalOpen(settingsModal, true);
});

settingsRename?.addEventListener("click", () => {
  setModalOpen(settingsModal, false);
  openStartupNameModal();
});

editProfile?.addEventListener("click", () => openAccountModal("name"));

historyButton?.addEventListener("click", () => {
  expandedHistorySessionId = "";
  renderHistoryModal();
  setModalOpen(settingsModal, false);
  setModalOpen(historyModal, true);
});

audioNoticeAction?.addEventListener("click", () => {
  unlockAudioFromGesture();
});

accountSave?.addEventListener("click", () => {
  const nextName = String(accountName?.value || "").trim();
  const nextEmail = String(accountEmail?.value || "").trim();
  const nextPayment = String(accountPayment?.value || "").trim();
  const nextSub = getSelectedSubscription();

  setStoredValue(STORAGE_KEYS.userName, nextName);
  setStoredValue(STORAGE_KEYS.userEmail, nextEmail);
  setStoredValue(STORAGE_KEYS.paymentMethod, nextPayment);
  setStoredValue(STORAGE_KEYS.subscription, nextSub || "starter");

  // auth requires a password; keep it separate from profile edits.

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
syncTaskContextFromUrl();
primeAudioUnlockOnFirstGesture();
setVoiceRepliesEnabled(getVoiceRepliesEnabled());
renderVoiceSetting();
renderVolumeUi();
renderVoiceRepliesSettingUi();
randomizeTryPrompt();
refreshUiFromStoredState();
bootstrapAuthAndState().catch((err) => {
  setAuthError(err?.message || "couldn't load account");
  refreshUiFromStoredState();
});
ensureDefaultVoiceSelection();
startWakeWordMonitoring();
