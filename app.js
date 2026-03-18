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
const startupPulseSummary = document.getElementById("startupPulseSummary");
const startupPulseMeta = document.getElementById("startupPulseMeta");
const startupPlansSummary = document.getElementById("startupPlansSummary");
const startupPlansMeta = document.getElementById("startupPlansMeta");
const startupHealthSummary = document.getElementById("startupHealthSummary");
const startupHealthMeta = document.getElementById("startupHealthMeta");
const startupOperatorSummary = document.getElementById("startupOperatorSummary");
const startupOperatorMeta = document.getElementById("startupOperatorMeta");
const startupBriefingSummary = document.getElementById("startupBriefingSummary");
const startupBoardAlerts = document.getElementById("startupBoardAlerts");
const startupFocusList = document.getElementById("startupFocusList");
const startupWeeklyReviewSummary = document.getElementById("startupWeeklyReviewSummary");
const startupWeeklyReviewList = document.getElementById("startupWeeklyReviewList");
const startupMilestoneSummary = document.getElementById("startupMilestoneSummary");
const startupMilestoneList = document.getElementById("startupMilestoneList");
const startupTodayPlanSummary = document.getElementById("startupTodayPlanSummary");
const startupTodayPlanList = document.getElementById("startupTodayPlanList");
const startupTomorrowPlanSummary = document.getElementById("startupTomorrowPlanSummary");
const startupTomorrowPlanList = document.getElementById("startupTomorrowPlanList");
const startupRoadmapSummary = document.getElementById("startupRoadmapSummary");
const startupRoadmapList = document.getElementById("startupRoadmapList");
const startupRiskSummary = document.getElementById("startupRiskSummary");
const startupRiskList = document.getElementById("startupRiskList");
const startupMeetingSummary = document.getElementById("startupMeetingSummary");
const startupDecisionList = document.getElementById("startupDecisionList");
const startupStandupSummary = document.getElementById("startupStandupSummary");
const startupTimelineList = document.getElementById("startupTimelineList");
const startupTasksEl = document.getElementById("startupTasks");

const taskStage = document.getElementById("taskStage");
const taskPageTitle = document.getElementById("taskPageTitle");
const taskPageStatus = document.getElementById("taskPageStatus");
const taskOwnerSummary = document.getElementById("taskOwnerSummary");
const taskOwnerChips = document.getElementById("taskOwnerChips");
const taskWorkflowBadge = document.getElementById("taskWorkflowBadge");
const taskProgressText = document.getElementById("taskProgressText");
const taskProgressFill = document.getElementById("taskProgressFill");
const taskNextActionText = document.getElementById("taskNextActionText");
const taskBlockerText = document.getElementById("taskBlockerText");
const taskSessionText = document.getElementById("taskSessionText");
const taskReminderText = document.getElementById("taskReminderText");
const taskFocusText = document.getElementById("taskFocusText");
const taskRescueText = document.getElementById("taskRescueText");
const taskMeetingText = document.getElementById("taskMeetingText");
const taskDecisionList = document.getElementById("taskDecisionList");
const taskStartNowButton = document.getElementById("taskStartNowButton");
const taskFinishStepButton = document.getElementById("taskFinishStepButton");
const taskPauseButton = document.getElementById("taskPauseButton");
const taskUnblockButton = document.getElementById("taskUnblockButton");
const taskPlanButton = document.getElementById("taskPlanButton");
const taskRemindLaterButton = document.getElementById("taskRemindLaterButton");
const taskTomorrowButton = document.getElementById("taskTomorrowButton");
const taskDailyFollowupButton = document.getElementById("taskDailyFollowupButton");
const taskClearFollowupButton = document.getElementById("taskClearFollowupButton");
const taskActionToggle = document.getElementById("taskActionToggle");
const taskActionMenu = document.getElementById("taskActionMenu");
const taskActionSummary = document.getElementById("taskActionSummary");
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
  activeTask: "anna:activeTask",
  operatorRoadmap: "anna:operatorRoadmap",
  decisionLog: "anna:decisionLog",
  operatorState: "anna:operatorState"
};

let transcriptEntries = [];
let speechRecognizer = null;
let interimText = "";
let hasStarted = false;

let interimEl = null;
let liveUserLineEl = null;
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
let voiceActivationUnlocked = false;
let wakeWordRestartTimer = null;
let wakeWordDetectedAt = 0;
let wakeWordRecentTranscript = "";
let inlineVoiceHideTimer = null;
let speechStartTimer = null;
let speechStartConfirmed = false;
let speechStartRecoveryUsed = false;
let mediaRecorder = null;
let mediaRecorderStream = null;
let mediaRecorderChunks = [];
let mediaRecorderMimeType = "";
let mediaRecorderStopTimer = null;
let pendingTodoListGenerationRequest = false;
let pendingTodoListRedirectToStartup = false;
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
let ttsCurrentText = "";
let ttsAudioEl = null;
let ttsFetchInFlight = 0;
let annaReplyInFlight = false;
let ttsNeedsUnlock = false;
let audioUnlockAttempted = false;
let audioCtx = null;
let ttsFetchChain = Promise.resolve();
let bargeInListeningMode = false;

let isAdjustingVolume = false;
let operatorAutomationTimer = null;

function updateListeningUi() {
  const isActive = persistentListeningEnabled || isListeningNow;
  recordButton?.classList.toggle("listening", isActive);
  inlineVoiceButton?.classList.toggle("is-listening", isActive);
  appFrame?.classList.toggle("is-listening", isActive);
}

function supportsLiveSpeechRecognition() {
  return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
}

function hasActiveTtsPlayback() {
  return Boolean(ttsIsPlaying || ttsQueue.length || ttsCurrentAudio || ttsFetchInFlight > 0);
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

function normalizeVoiceUiState(state) {
  const normalized = String(state || "info").trim().toLowerCase();
  if (["listening", "thinking", "replying", "issue", "info"].includes(normalized)) {
    return normalized;
  }
  return "info";
}

function getVoiceUiStateLabel(state) {
  const normalized = normalizeVoiceUiState(state);
  if (normalized === "listening") {
    return "listening";
  }
  if (normalized === "thinking") {
    return "thinking";
  }
  if (normalized === "replying") {
    return "anna";
  }
  if (normalized === "issue") {
    return "voice issue";
  }
  return "voice";
}

function renderVoiceStatusContent(host, message, state = "info") {
  if (!host) {
    return;
  }
  const normalizedState = normalizeVoiceUiState(state);
  host.dataset.voiceState = normalizedState;
  host.textContent = String(message || "").trim();
}

function showInlineVoiceStatus(message, delay = 2600, options = {}) {
  if (!inlineVoiceList) {
    return;
  }
  clearInlineVoiceHideTimer();
  inlineVoiceList.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.className = "transcript-line inline-voice-status ai";
  renderVoiceStatusContent(paragraph, message, options.state);
  inlineVoiceList.appendChild(paragraph);
  setInlineVoiceTrayOpen(true);
  scheduleInlineVoiceTrayHide(delay);
}

function clearInlineVoiceStatus(options = {}) {
  if (!inlineVoiceList) {
    return;
  }
  clearInlineVoiceHideTimer();
  inlineVoiceList.innerHTML = "";
  if (options.hide !== false) {
    setInlineVoiceTrayOpen(false);
  }
}

function showSpeechStatus(message, delay = 2600, options = {}) {
  const text = String(message || "").trim().toLowerCase();
  if (!text) {
    clearAudioNotice();
    clearInlineVoiceStatus();
    return;
  }
  if (transcriptList) {
    setAudioNotice(text, options);
    return;
  }
  showInlineVoiceStatus(text, delay, options);
}

function getCurrentLiveUserText(overrideInterim = interimText) {
  return normalizeBufferedSpeechParts([finalSpeechBuffer, overrideInterim]);
}

function clearLiveUserLine() {
  if (liveUserLineEl && liveUserLineEl.remove) {
    liveUserLineEl.remove();
  }
  liveUserLineEl = null;
}

function ensureLiveUserLine(text) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    clearLiveUserLine();
    return null;
  }

  if (!liveUserLineEl) {
    liveUserLineEl = appendLine("user", cleaned, { interim: true });
  } else {
    liveUserLineEl.textContent = `“${cleaned}”`;
  }

  liveUserLineEl.className = "transcript-line user interim";
  return liveUserLineEl;
}

function clearSpeechStartTimer() {
  if (speechStartTimer) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }
}

function clearMediaRecorderStopTimer() {
  if (mediaRecorderStopTimer) {
    window.clearTimeout(mediaRecorderStopTimer);
    mediaRecorderStopTimer = null;
  }
}

function stopMediaStream(stream) {
  if (!stream || typeof stream.getTracks !== "function") {
    return;
  }
  try {
    stream.getTracks().forEach((track) => track.stop());
  } catch {
    // ignore
  }
}

function finalizeSpeechFailure(message, delay = 4200) {
  clearSpeechStartTimer();
  clearMediaRecorderStopTimer();
  speechStartConfirmed = false;
  isListeningNow = false;
  persistentListeningEnabled = false;
  pendingResumeListening = false;
  singleTurnVoiceMode = false;
  updateListeningUi();
  showSpeechStatus(message, delay, { state: "issue" });
  startWakeWordMonitoring();
}

function getSpeechFailureMessage(errorCode, permissionState = "") {
  const code = String(errorCode || "").trim().toLowerCase();
  if (code === "not-allowed" || code === "service-not-allowed" || permissionState === "denied") {
    return "microphone access is blocked in chrome or mac settings. allow chrome in system settings > privacy and security > microphone, then tap anna again.";
  }
  if (code === "audio-capture") {
    return "anna couldn't find a working microphone. reconnect your mic and tap anna again.";
  }
  if (code === "network") {
    return "speech recognition hit a browser network error. tap anna again.";
  }
  if (code === "no-speech") {
    return "anna didn't hear anything. try again and speak right away.";
  }
  return "voice input didn't start. tap anna again.";
}

function hasRecordedVoiceFallback() {
  return Boolean(
    typeof window !== "undefined" &&
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === "function" &&
      typeof window.MediaRecorder === "function"
  );
}

function isRecordedVoiceCaptureActive() {
  return Boolean(mediaRecorder && mediaRecorder.state && mediaRecorder.state !== "inactive");
}

function getPreferredRecorderMimeType() {
  const Recorder = window.MediaRecorder;
  if (!Recorder || typeof Recorder.isTypeSupported !== "function") {
    return "";
  }
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/mpeg"];
  return candidates.find((value) => Recorder.isTypeSupported(value)) || "";
}

function cleanupRecordedVoiceCapture() {
  clearMediaRecorderStopTimer();
  if (mediaRecorder) {
    try {
      mediaRecorder.ondataavailable = null;
      mediaRecorder.onerror = null;
      mediaRecorder.onstop = null;
    } catch {
      // ignore
    }
  }
  stopMediaStream(mediaRecorderStream);
  mediaRecorder = null;
  mediaRecorderStream = null;
  mediaRecorderChunks = [];
  mediaRecorderMimeType = "";
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = String(reader.result || "");
      const commaIndex = result.indexOf(",");
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result);
    };
    reader.onerror = () => {
      reject(new Error("couldn't read recorded audio"));
    };
    reader.readAsDataURL(blob);
  });
}

async function transcribeAudioBlob(blob) {
  const audioBase64 = await blobToBase64(blob);
  const res = await fetch("/api/transcribe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      audioBase64,
      mimeType: blob.type || mediaRecorderMimeType || "audio/webm"
    })
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const detail = String(data?.detail || data?.error || `http ${res.status}`);
    throw new Error(detail);
  }

  const text = String(data?.text || "").trim().toLowerCase();
  if (!text) {
    throw new Error("empty transcript");
  }
  return text;
}

async function startRecordedVoiceCapture() {
  if (isRecordedVoiceCaptureActive()) {
    return true;
  }
  if (!hasRecordedVoiceFallback()) {
    return false;
  }

  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const preferredMimeType = getPreferredRecorderMimeType();
    const recorder = preferredMimeType ? new MediaRecorder(stream, { mimeType: preferredMimeType }) : new MediaRecorder(stream);

    mediaRecorder = recorder;
    mediaRecorderStream = stream;
    mediaRecorderChunks = [];
    mediaRecorderMimeType = preferredMimeType || recorder.mimeType || "audio/webm";

    recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        mediaRecorderChunks.push(event.data);
      }
    };

    recorder.onerror = () => {
      cleanupRecordedVoiceCapture();
      finalizeSpeechFailure("voice recording failed. tap anna again.");
    };

    recorder.onstop = async () => {
      const chunks = mediaRecorderChunks.slice();
      const mimeType = mediaRecorderMimeType || recorder.mimeType || "audio/webm";
      const keepSessionAlive = persistentListeningEnabled;
      cleanupRecordedVoiceCapture();
      isListeningNow = false;
      if (!keepSessionAlive) {
        pendingResumeListening = false;
        singleTurnVoiceMode = false;
      }
      updateListeningUi();

      if (!chunks.length) {
        if (keepSessionAlive) {
          showSpeechStatus("anna didn't hear anything. still listening.", 2200, { state: "listening" });
          resumePersistentListeningSoon(220);
        } else {
          showSpeechStatus("anna didn't hear anything. try again and speak right away.", 3200, { state: "issue" });
        }
        return;
      }

      showSpeechStatus("thinking", 12000, { state: "thinking" });
      try {
        const transcript = await transcribeAudioBlob(new Blob(chunks, { type: mimeType }));
        clearAudioNotice();
        if (!transcriptList) {
          showInlineVoiceStatus("thinking", 2200, { state: "thinking" });
        }
        submitRecognizedUserText(transcript);
      } catch (error) {
        const detail = String(error?.message || "couldn't transcribe audio").trim().toLowerCase();
        finalizeSpeechFailure(`voice transcription failed: ${detail}`);
      }
    };

    recorder.start();
    speechStartConfirmed = true;
    clearSpeechStartTimer();
    isListeningNow = true;
    updateListeningUi();
    showSpeechStatus("listening", 15000, { state: "listening" });
    clearMediaRecorderStopTimer();
    mediaRecorderStopTimer = window.setTimeout(() => {
      stopRecordedVoiceCapture(true);
    }, 15000);
    return true;
  } catch (error) {
    stopMediaStream(stream);
    const code = String(error?.name || error?.message || "").trim().toLowerCase();
    finalizeSpeechFailure(getSpeechFailureMessage(code));
    return false;
  }
}

function stopRecordedVoiceCapture(autoStopped = false) {
  if (!isRecordedVoiceCaptureActive()) {
    return false;
  }
  clearMediaRecorderStopTimer();
  if (autoStopped || pendingResumeListening) {
    showSpeechStatus("thinking", 12000, { state: "thinking" });
  }
  try {
    mediaRecorder.stop();
    return true;
  } catch {
    cleanupRecordedVoiceCapture();
    finalizeSpeechFailure("voice recording failed to stop cleanly. tap anna again.");
    return false;
  }
}

async function retrySpeechStartAfterMicProbe() {
  const permissionState = await getMicrophonePermissionState();
  if (permissionState === "denied") {
    finalizeSpeechFailure(getSpeechFailureMessage("not-allowed", permissionState));
    return;
  }

  if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function") {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      const code = String(error?.name || error?.message || "").trim().toLowerCase();
      finalizeSpeechFailure(getSpeechFailureMessage(code, permissionState));
      return;
    } finally {
      stopMediaStream(stream);
    }
  }

  if (!persistentListeningEnabled || pendingResumeListening) {
    return;
  }

  if (await startRecordedVoiceCapture()) {
    return;
  }

  finalizeSpeechFailure("voice input didn't start. tap anna again.");
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
  clearLiveUserLine();
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

function countMeaningfulSpeechWords(text) {
  return normalizeBufferedSpeechParts([text])
    .split(/\s+/)
    .filter((word) => /[a-z0-9]/i.test(word))
    .length;
}

function isMeaningfulSpeechPhrase(text, options = {}) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return false;
  }

  const words = normalized.split(/\s+/).filter((word) => /[a-z0-9]/i.test(word));
  if (!words.length) {
    return false;
  }

  if (words.length >= 2) {
    return true;
  }

  if (options.allowSingleWord && words[0].length >= 3) {
    return true;
  }

  return normalized.length >= 8;
}

function isLikelyCurrentAnnaSpeech(text) {
  const heard = normalizeBufferedSpeechParts([text]);
  const current = normalizeBufferedSpeechParts([ttsCurrentText]);
  if (!heard || !current || heard.length < 8) {
    return false;
  }
  return current.includes(heard) || heard.includes(current);
}

function shouldInterruptTtsPlayback(interim, finalizedParts = []) {
  const finalText = normalizeBufferedSpeechParts(finalizedParts);
  if (isMeaningfulSpeechPhrase(finalText, { allowSingleWord: true }) && !isLikelyCurrentAnnaSpeech(finalText)) {
    return true;
  }

  const interimText = normalizeBufferedSpeechParts([interim]);
  if (isMeaningfulSpeechPhrase(interimText, { allowSingleWord: true }) && countMeaningfulSpeechWords(interimText) >= 1 && !isLikelyCurrentAnnaSpeech(interimText)) {
    return true;
  }

  return false;
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

  const preparedRequest = maybePrepareTaskBoardForUserRequest(normalized);
  if (preparedRequest?.handled) {
    pushEntry("user", normalized);
    appendToMemory("user", normalized);
    if (persistentListeningEnabled) {
      pauseListeningForReply();
    }
    if (preparedRequest.reply) {
      pushEntry("ai", preparedRequest.reply);
      appendToMemory("assistant", preparedRequest.reply);
      if (isVoiceOutputEnabled()) {
        enqueueElevenLabsTts(preparedRequest.reply);
      }
    }
    maybeResumeListeningAfterReply();
    return;
  }
  setPendingTodoListGeneration(Boolean(preparedRequest?.todoListRequest), {
    redirectToStartup: Boolean(preparedRequest?.redirectToStartup)
  });

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
  showSpeechStatus("thinking", 12000, { state: "thinking" });

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
  resetSpeechRecognizer();
}

function clearWakeWordRestart() {
  if (wakeWordRestartTimer) {
    window.clearTimeout(wakeWordRestartTimer);
    wakeWordRestartTimer = null;
  }
}

function shouldUseInlineVoiceMode() {
  return Boolean(inlineVoiceButton && inlineVoiceList && !recordButton);
}

function shouldUseWakeWordMode() {
  return shouldUseInlineVoiceMode();
}

function markVoiceActivationUnlocked() {
  voiceActivationUnlocked = true;
}

function stopWakeWordListeningSession() {
  clearWakeWordRestart();
  wakeWordRecentTranscript = "";
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
  return /(?:^|\b)(?:hi|hey|hello|yo|ok(?:ay)?|hey there)\s+an{1,2}(?:a|uh)\b/.test(normalized) || /(?:^|\b)an{1,2}(?:a|uh)\b/.test(normalized);
}

function scheduleWakeWordRestart(delay = 450) {
  if (!passiveWakeWordEnabled || !voiceActivationUnlocked || !shouldUseWakeWordMode()) {
    return;
  }
  clearWakeWordRestart();
  wakeWordRestartTimer = window.setTimeout(() => {
    startWakeWordMonitoring();
  }, delay);
}

function startInlineVoiceCapture(source = "tap") {
  if (!shouldUseInlineVoiceMode()) {
    return;
  }
  if (source === "tap") {
    markVoiceActivationUnlocked();
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
  speechStartRecoveryUsed = false;
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

function isBulkTaskDoneIntent(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return false;
  }

  const wantsCompletion = /(?:done|finished|complete|completed)/.test(normalized);
  const targetsAll = /\b(all|every|everything)\b/.test(normalized) && /\b(task|tasks|todo|to do|board|list)\b/.test(normalized);
  return wantsCompletion && targetsAll;
}

function mentionsTodoList(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (/\b(?:to\s*do|todo|to-do|checklist|task list|task board|to do list|todo list|to-do list)\b/.test(normalized)) {
    return true;
  }
  if (Boolean(getLatestStartupItems().length) && /\b(?:my|the|current|existing)\s+list\b/.test(normalized)) {
    return true;
  }
  return Boolean(getLatestStartupItems().length) && /\b(current|existing|old)\s+(?:to\s*do|todo|to-do|checklist|task list|task board|one)\b/.test(normalized);
}

function wantsNewTodoList(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized || !mentionsTodoList(normalized)) {
    return false;
  }
  return /\b(new|fresh|another)\b/.test(normalized) || /\b(make|create|build|generate|draft|write|give)\b(?:[\s\S]{0,24})\b(?:one|list|todo|to do|checklist)\b/.test(normalized);
}

function wantsClearTodoList(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized || !mentionsTodoList(normalized)) {
    return false;
  }
  return /get rid of|start over|replace|clear|remove|delete|wipe|reset|archive/.test(normalized);
}

function wantsShowTodoList(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized || !mentionsTodoList(normalized)) {
    return false;
  }
  return /\b(show|open|display|see|view|check)\b/.test(normalized) || /\b(?:pull|bring|pop)\b(?:[\s\S]{0,12})\bup\b/.test(normalized) || /what(?:'s| is) on/.test(normalized);
}

function openCurrentTodoListSheet() {
  const latest = getLatestNonEmptyStartupListForUser() || getLatestStartupListForUser();
  const items = Array.isArray(latest?.items) ? latest.items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
  if (!items.length || !listSheetBody || !listSheetTitle) {
    return false;
  }

  const extracted = {
    title: String(latest?.title || "to do").trim().toLowerCase() || "to do",
    items
  };

  listSheetTitle.textContent = extracted.title;
  renderSheetList(extracted);
  setListSheetOpen(true);
  return true;
}

function updateLatestStartupListForUser(mutator, userId = getCurrentUserId()) {
  const log = readStartupLists();
  const userIndexes = [...log]
    .map((entry, idx) => ({ entry, idx }))
    .filter(({ entry }) => String(entry?.userId || "") === userId);
  const nonEmptyIndex = userIndexes
    .filter(({ entry }) => Array.isArray(entry?.items) && entry.items.some((item) => normalizeTaskTitle(item)))
    .map(({ idx }) => idx)
    .pop();
  const index = nonEmptyIndex ?? userIndexes.map(({ idx }) => idx).pop();
  if (index == null) {
    return null;
  }

  const current = log[index] && typeof log[index] === "object" ? log[index] : null;
  if (!current) {
    return null;
  }

  const nextValue = typeof mutator === "function" ? mutator(current) : mutator;
  if (!nextValue || !Array.isArray(nextValue.items)) {
    return null;
  }

  const next = [...log];
  next[index] = {
    ...current,
    ...nextValue,
    title: String(nextValue.title || current.title || "to do").trim().toLowerCase() || "to do",
    items: nextValue.items.map((item) => normalizeTaskTitle(item)).filter(Boolean),
    ts: Date.now(),
    userId
  };
  writeStartupLists(next.slice(-80));
  renderStartupDashboard();
  renderTaskWorkspace();
  return next[index];
}

function ensureTaskInLatestStartupList(title, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    return false;
  }

  const latest = getLatestStartupListForUser(userId);
  if (!latest) {
    const next = [...readStartupLists(), { title: "to do", items: [normalized], ts: Date.now(), userId }].slice(-80);
    writeStartupLists(next);
    updateTaskEntry(normalized, (current) => ({ ...current, title: normalized }), userId);
    return true;
  }

  const currentItems = Array.isArray(latest.items) ? latest.items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
  if (currentItems.includes(normalized)) {
    return false;
  }

  updateLatestStartupListForUser((list) => ({
    ...list,
    items: [...currentItems, normalized]
  }), userId);
  updateTaskEntry(normalized, (current) => ({ ...current, title: normalized }), userId);
  return true;
}

function captureVoiceActionItem(actionText, taskTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const action = normalizeTaskTitle(actionText);
  if (!action) {
    return false;
  }
  const resolvedTask = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (resolvedTask) {
    const existing = new Set(readTaskEntry(resolvedTask, userId).subtasks.map((item) => normalizeTaskTitle(item.title)).filter(Boolean));
    if (existing.has(action)) {
      return false;
    }
    addTaskSubtask(resolvedTask, action, userId);
    return true;
  }
  return ensureTaskInLatestStartupList(action, userId);
}

function parseOperatorMetaLine(text) {
  const parts = String(text || "").split(/\s*[|;]\s*/).map((item) => String(item || "").trim()).filter(Boolean);
  if (!parts.length) {
    return null;
  }
  const fields = { summary: parts[0] };
  parts.slice(1).forEach((part) => {
    const match = part.match(/^(owner|why|rationale|follow(?:-|\s)?up|task|milestone|schedule|priority)\s*:\s*(.+)$/i);
    if (!match) {
      return;
    }
    const key = match[1].toLowerCase().replace(/\s+/g, "").replace("follow-up", "followup").replace("followup", "followUp");
    fields[key] = match[2].trim();
  });
  return fields;
}

function captureStructuredActionItem(rawText, fallbackTaskTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const parsed = parseOperatorMetaLine(rawText);
  if (!parsed?.summary) {
    return false;
  }
  const explicitTaskTitle = normalizeTaskTitle(parsed.task || "");
  const fallbackTitle = normalizeTaskTitle(fallbackTaskTitle || "");
  const targetTitle = explicitTaskTitle || (fallbackTitle ? resolveTaskReference(fallbackTitle, fallbackTitle, userId) : "");
  const created = captureVoiceActionItem(parsed.summary, targetTitle || "", userId);
  const effectiveTitle = targetTitle || normalizeTaskTitle(parsed.summary);
  if (!effectiveTitle) {
    return created;
  }
  if (parsed.owner || parsed.priority || parsed.milestone) {
    setTaskOwnershipState(effectiveTitle, {
      ownerName: parsed.owner || readTaskEntry(effectiveTitle, userId).ownerName,
      priority: parsed.priority ? normalizeTaskPriority(parsed.priority) : readTaskEntry(effectiveTitle, userId).priority,
      milestone: parsed.milestone ? normalizeTaskMilestone(parsed.milestone) : readTaskEntry(effectiveTitle, userId).milestone
    }, userId);
  }
  if (parsed.schedule) {
    const schedule = parseTaskSchedulePhrase(parsed.schedule);
    if (schedule) {
      setTaskPlanningState(effectiveTitle, { ...schedule, scheduledSource: "manual" }, userId);
    }
  }
  if (parsed.followUp) {
    const reminder = parseTaskReminderPhrase(parsed.followUp);
    if (reminder) {
      setTaskReminderState(effectiveTitle, reminder, userId);
    }
  }
  return created;
}

function findMatchingTaskTitle(text, userId = getCurrentUserId()) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return "";
  }

  const titles = getTaskEntriesForUser(userId).map((entry) => normalizeTaskTitle(entry.title)).filter(Boolean);
  const exact = titles.find((title) => title === normalized);
  if (exact) {
    return exact;
  }

  const containing = titles.filter((title) => normalized.includes(title) || title.includes(normalized));
  return containing.length === 1 ? containing[0] : "";
}

function renameTaskEverywhere(fromTitle, toTitle, userId = getCurrentUserId()) {
  const oldTitle = normalizeTaskTitle(fromTitle);
  const newTitle = normalizeTaskTitle(toTitle);
  if (!oldTitle || !newTitle || oldTitle === newTitle) {
    return false;
  }

  const store = readTaskStateStore();
  const userMap = store && typeof store[userId] === "object" ? { ...store[userId] } : {};
  const oldKey = makeTaskKey(oldTitle);
  const newKey = makeTaskKey(newTitle);
  const current = readTaskEntry(oldTitle, userId);
  const existing = userMap[newKey] && typeof userMap[newKey] === "object" ? userMap[newKey] : null;

  userMap[newKey] = {
    title: newTitle,
    completed: Boolean(existing?.completed ?? current.completed),
    notes: String(existing?.notes || current.notes || ""),
    subtasks: normalizeSubtaskList(existing?.subtasks || current.subtasks),
    ownerName: normalizeTaskTextField(existing?.ownerName || current.ownerName || "", 120),
    priority: normalizeTaskPriority(existing?.priority ?? current.priority),
    focusLabel: normalizeTaskFocusLabel(existing?.focusLabel || current.focusLabel),
    workflowStatus: normalizeTaskWorkflowStatus(existing?.workflowStatus || current.workflowStatus),
    nextAction: normalizeTaskTextField(existing?.nextAction || current.nextAction || "", 180),
    blocker: normalizeTaskTextField(existing?.blocker || current.blocker || "", 180),
    blockedAt: Number(existing?.blockedAt ?? current.blockedAt ?? 0) || 0,
    escalatedAt: Number(existing?.escalatedAt ?? current.escalatedAt ?? 0) || 0,
    progress: normalizeTaskProgress(existing?.progress ?? current.progress),
    sessionStartedAt: Number(existing?.sessionStartedAt ?? current.sessionStartedAt ?? 0) || 0,
    sessionEndsAt: Number(existing?.sessionEndsAt ?? current.sessionEndsAt ?? 0) || 0,
    reminderAt: Number(existing?.reminderAt ?? current.reminderAt ?? 0) || 0,
    reminderLabel: normalizeTaskTextField(existing?.reminderLabel || current.reminderLabel || "", 120),
    reminderCadence: normalizeTaskReminderCadence(existing?.reminderCadence || current.reminderCadence),
    lastReminderAt: Number(existing?.lastReminderAt ?? current.lastReminderAt ?? 0) || 0,
    dependsOn: normalizeTaskDependencyList(existing?.dependsOn || current.dependsOn),
    dueAt: Number(existing?.dueAt ?? current.dueAt ?? 0) || 0,
    dueLabel: String(existing?.dueLabel || current.dueLabel || "").trim().toLowerCase().slice(0, 80),
    updatedAt: Date.now()
  };
  delete userMap[oldKey];
  store[userId] = userMap;
  writeTaskStateStore(store);

  updateLatestStartupListForUser((list) => ({
    ...list,
    items: (Array.isArray(list.items) ? list.items : []).map((item) => (normalizeTaskTitle(item) === oldTitle ? newTitle : item))
  }), userId);

  const active = readActiveTaskContext();
  if (active?.title === oldTitle) {
    setActiveTaskContext(newTitle);
  }

  return true;
}

function replaceWordInCurrentTodoList(fromWord, toWord, userId = getCurrentUserId()) {
  const source = normalizeTaskTitle(fromWord);
  const target = normalizeTaskTitle(toWord);
  if (!source || !target || source === target) {
    return { changed: false };
  }

  const latest = getLatestNonEmptyStartupListForUser(userId) || getLatestStartupListForUser(userId);
  const items = Array.isArray(latest?.items) ? latest.items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
  const matches = items.filter((item) => item.includes(source));
  if (matches.length !== 1) {
    return { changed: false, ambiguous: matches.length > 1 };
  }

  const oldTitle = matches[0];
  const newTitle = normalizeTaskTitle(oldTitle.replace(source, target));
  if (!newTitle || newTitle === oldTitle) {
    return { changed: false };
  }

  return { changed: renameTaskEverywhere(oldTitle, newTitle, userId), oldTitle, newTitle };
}

function findMatchingSubtaskId(text, taskTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const normalized = normalizeBufferedSpeechParts([text]);
  const state = readTaskEntry(taskTitle, userId);
  const subtasks = Array.isArray(state.subtasks) ? state.subtasks : [];
  const exact = subtasks.find((item) => normalizeTaskTitle(item.title) === normalized);
  if (exact) {
    return exact.id;
  }
  const partial = subtasks.filter((item) => normalized.includes(normalizeTaskTitle(item.title)) || normalizeTaskTitle(item.title).includes(normalized));
  return partial.length === 1 ? partial[0].id : "";
}

function renameCurrentTaskSubtask(oldText, newText, taskTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const nextTitle = normalizeTaskTitle(newText);
  const subtaskId = findMatchingSubtaskId(oldText, taskTitle, userId);
  if (!taskTitle || !subtaskId || !nextTitle) {
    return false;
  }
  updateTaskEntry(
    taskTitle,
    (current) => ({
      ...current,
      subtasks: normalizeSubtaskList(current.subtasks).map((item) =>
        item.id === subtaskId ? { ...item, title: nextTitle } : item
      )
    }),
    userId
  );
  renderTaskWorkspace();
  renderStartupDashboard();
  return true;
}

function markCurrentTaskSubtaskDone(text, taskTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const subtaskId = findMatchingSubtaskId(text, taskTitle, userId);
  if (!taskTitle || !subtaskId) {
    return false;
  }
  const entry = readTaskEntry(taskTitle, userId);
  const target = entry.subtasks.find((item) => item.id === subtaskId);
  if (!target || target.completed) {
    return Boolean(target);
  }
  updateTaskEntry(
    taskTitle,
    (current) => ({
      ...current,
      subtasks: normalizeSubtaskList(current.subtasks).map((item) =>
        item.id === subtaskId ? { ...item, completed: true } : item
      )
    }),
    userId
  );
  renderTaskWorkspace();
  renderStartupDashboard();
  return true;
}

function resolveTaskReference(referenceText, fallbackTitle = getCurrentTaskTitle(), userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(referenceText);
  if (!normalized) {
    return fallbackTitle || "";
  }
  if (/^(?:this|current)(?: task)?$/.test(normalized) || /^(?:task i(?:'| a)m on|what i'm doing right now)$/.test(normalized)) {
    return fallbackTitle || "";
  }
  return findMatchingTaskTitle(normalized, userId) || normalized;
}

function parseTaskDuePhrase(rawText) {
  const cleaned = String(rawText || "")
    .trim()
    .toLowerCase()
    .replace(/^[\s,:-]+/, "")
    .replace(/[.?!]+$/, "");

  if (!cleaned) {
    return null;
  }

  const now = new Date();
  const dueDate = new Date(now);
  dueDate.setSeconds(0, 0);

  let explicitDay = false;
  let focusLabel = "";
  if (/\btomorrow\b/.test(cleaned)) {
    explicitDay = true;
    focusLabel = "tomorrow";
    dueDate.setDate(dueDate.getDate() + 1);
  } else if (/\btonight\b/.test(cleaned)) {
    explicitDay = true;
    focusLabel = "tonight";
  } else if (/\btoday\b/.test(cleaned)) {
    explicitDay = true;
    focusLabel = "today";
  }

  const timeMatch = cleaned.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/);
  if (timeMatch) {
    let hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2] || 0) || 0;
    const meridiem = timeMatch[3];

    if (meridiem === "am") {
      hour = hour === 12 ? 0 : hour;
    } else if (meridiem === "pm") {
      hour = hour === 12 ? 12 : hour + 12;
    } else if (hour !== 12 && (/\b(?:tonight|afternoon|evening)\b/.test(cleaned) || hour <= 7)) {
      hour += 12;
    }

    dueDate.setHours(hour === 24 ? 12 : hour, minute, 0, 0);
    if (!explicitDay && dueDate.getTime() < Date.now() - 5 * 60 * 1000) {
      dueDate.setDate(dueDate.getDate() + 1);
    }

    return {
      dueAt: dueDate.getTime(),
      dueLabel: cleaned,
      focusLabel: focusLabel || (explicitDay ? "" : "today")
    };
  }

  if (/\bmorning\b/.test(cleaned)) {
    dueDate.setHours(10, 0, 0, 0);
  } else if (/\bafternoon\b/.test(cleaned)) {
    dueDate.setHours(15, 0, 0, 0);
  } else if (/\bevening\b/.test(cleaned)) {
    dueDate.setHours(19, 0, 0, 0);
  } else if (/\btonight\b/.test(cleaned)) {
    dueDate.setHours(21, 0, 0, 0);
  } else {
    return {
      dueAt: 0,
      dueLabel: cleaned,
      focusLabel
    };
  }

  if (!explicitDay && dueDate.getTime() < Date.now() - 5 * 60 * 1000) {
    dueDate.setDate(dueDate.getDate() + 1);
  }

  return {
    dueAt: dueDate.getTime(),
    dueLabel: cleaned,
    focusLabel
  };
}

function getLatestStartupActivityTs(userId = getCurrentUserId()) {
  const latestListTs = readStartupLists()
    .filter((entry) => String(entry?.userId || "") === userId)
    .reduce((maxTs, entry) => Math.max(maxTs, Number(entry?.ts || 0) || 0), 0);

  const taskTs = Object.values(getTaskStateMap(userId)).reduce((maxTs, entry) => {
    return Math.max(maxTs, Number(entry?.updatedAt || 0) || 0);
  }, 0);

  const decisionTs = readDecisionLog(userId).reduce((maxTs, entry) => {
    return Math.max(maxTs, Number(entry?.ts || 0) || 0);
  }, 0);

  const operatorState = readOperatorState(userId);
  const operatorTs = Math.max(
    Number(operatorState.meetingStartedAt || 0) || 0,
    Number(operatorState.focusStartedAt || 0) || 0,
    Number(operatorState.focusEndsAt || 0) || 0,
    Number(operatorState.lastFocusNudgeAt || 0) || 0,
    Number(operatorState.lastAutoReplanAt || 0) || 0,
    ...(Array.isArray(operatorState.ritualLog)
      ? operatorState.ritualLog.map((item) => Number(item?.ts || 0) || 0)
      : [0])
  );

  return Math.max(latestListTs, taskTs, decisionTs, operatorTs);
}

function isCasualGreeting(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return false;
  }
  return /^(?:hi|hey|hello|yo|sup|what(?:'s| is) up|how(?:'s| is) it going)(?:\s+anna)?$/.test(normalized);
}

function buildGreetingReply() {
  const activeTask = getCurrentTaskTitle();
  const startupItems = getLatestStartupItems().map((item) => normalizeTaskTitle(item)).filter(Boolean);
  if (activeTask) {
    const state = readTaskEntry(activeTask);
    const ownership = buildTaskOwnershipParts(state);
    const nextMove = getTaskNextActionText(state);
    const subtaskPreview = state.subtasks.filter((item) => !item.completed).slice(0, 2).map((item) => item.title);
    if (normalizeTaskWorkflowStatus(state.workflowStatus) === "blocked" && state.blocker) {
      return `hey. ${activeTask} is blocked on ${state.blocker}. want me to reframe the next move or unblock it?`;
    }
    if (normalizeTaskWorkflowStatus(state.workflowStatus) === "active") {
      return `hey. we're already moving on ${activeTask}. next is ${nextMove}. ${formatTaskSessionText(state)}.`;
    }
    if (ownership.length && subtaskPreview.length) {
      return `hey. we're on ${activeTask}. ${ownership.join(", ")}. next up looks like ${subtaskPreview.join(" and ")}. want me to tighten the deadline or knock out the next step?`;
    }
    if (ownership.length) {
      return `hey. we're on ${activeTask}. ${ownership.join(", ")}. next is ${nextMove}. want me to break it down, tighten the notes, or move the target?`;
    }
    if (subtaskPreview.length) {
      return `hey. we're on ${activeTask}. next up looks like ${subtaskPreview.join(" and ")}. want me to help you knock one of those out?`;
    }
    return `hey. we're on ${activeTask}. next is ${nextMove}. want me to tighten the notes, break it into steps, or help you finish it?`;
  }
  if (startupItems.length) {
    const preview = startupItems.slice(0, 3).join(", ");
    return `hey. here's where i'd start: ${preview}. want to pick one and get moving, or should i clean up the list first?`;
  }
  return "hey. let's get moving. want me to make your next to-do list, tighten a task, or figure out the best next step?";
}

function clearCurrentStartupList(options = {}) {
  const userId = getCurrentUserId();
  const currentItems = getLatestStartupItems(userId).map((item) => normalizeTaskTitle(item)).filter(Boolean);
  if (!currentItems.length) {
    return 0;
  }

  const shouldMarkCompleted = options.markCompleted !== false;
  if (shouldMarkCompleted) {
    currentItems.forEach((title) => {
      updateTaskEntry(title, (current) => ({ ...current, completed: true }), userId);
    });
  }

  const activeTitle = readActiveTaskContext()?.title || "";
  if (activeTitle && currentItems.includes(activeTitle)) {
    setActiveTaskContext("");
  }

  const log = readStartupLists();
  const next = [...log, { title: "to do", items: [], ts: Date.now(), userId }].slice(-80);
  writeStartupLists(next);
  renderStartupDashboard();
  renderTaskWorkspace();
  return currentItems.length;
}

function setPendingTodoListGeneration(enabled, options = {}) {
  pendingTodoListGenerationRequest = Boolean(enabled);
  pendingTodoListRedirectToStartup = Boolean(enabled && options.redirectToStartup);
}

function maybePrepareTaskBoardForUserRequest(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return { continueToModel: true };
  }

  const explicitTodoRequest = wantsNewTodoList(normalized);
  if (!wantsClearTodoList(normalized)) {
    return {
      continueToModel: true,
      todoListRequest: explicitTodoRequest,
      redirectToStartup: explicitTodoRequest && getCurrentPageLabel() === "task"
    };
  }

  const clearedCount = clearCurrentStartupList({
    markCompleted: /\b(done|finished|completed)\b/.test(normalized) || !/\bkeep\b/.test(normalized)
  });

  if (explicitTodoRequest) {
    return {
      continueToModel: true,
      clearedCount,
      todoListRequest: true,
      redirectToStartup: getCurrentPageLabel() === "task" && clearedCount > 0
    };
  }

  return {
    continueToModel: false,
    handled: true,
    reply: clearedCount ? "cleared your current to-do list." : "you don't have a current to-do list to clear."
  };
}

function maybeHandleLocalVoiceCommand(text) {
  const normalized = normalizeBufferedSpeechParts([text]);
  if (!normalized) {
    return { handled: false };
  }
  const activeTaskTitle = getCurrentTaskTitle();
  const refreshTaskViews = () => {
    renderTaskWorkspace();
    renderStartupDashboard();
  };
  const respondWithCurrentNextMove = (taskTitle) => {
    const state = readTaskEntry(taskTitle);
    const nextMove = getTaskNextActionText(state);
    const blocker = normalizeTaskTextField(state.blocker || "", 180);
    if (blocker) {
      return `next move on ${taskTitle} is ${nextMove}, but it's blocked by ${blocker}.`;
    }
    return `next move on ${taskTitle} is ${nextMove}.`;
  };
  const getOverdueFollowupReply = () => {
    const overdue = getTaskEntriesForUser()
      .filter((entry) => isTaskReminderOverdue(entry))
      .slice(0, 5)
      .map((entry) => `${entry.title} (${formatTaskReminderSummary(entry)})`);
    return overdue.length ? `overdue follow-ups: ${overdue.join("; ")}.` : "nothing is overdue right now.";
  };
  const getTodayPlanCommandReply = () => buildTodayPlanReply();
  const getTomorrowPlanCommandReply = () => buildTomorrowPlanReply();
  const getMilestoneStatusReply = (target = "") => buildMilestoneStatusReply(target);
  const getWeeklyReviewReply = (section = "all") => buildWeeklyReviewReply(section);

  if (isCasualGreeting(normalized)) {
    return {
      handled: true,
      reply: buildGreetingReply()
    };
  }

  if (shouldUseWakeWordMode() && isWakeSessionExitPhrase(normalized)) {
    return {
      handled: true,
      stopSession: true,
      reply: "okay. say hi anna when you want me again."
    };
  }

  if (isBulkTaskDoneIntent(normalized)) {
    const taskEntries = getTaskEntriesForUser();
    const incompleteEntries = taskEntries.filter((entry) => entry && entry.title && !entry.completed);
    incompleteEntries.forEach((entry) => {
      updateTaskEntry(entry.title, (current) => ({ ...current, completed: true }));
    });
    renderTaskWorkspace();
    renderStartupDashboard();

    if (!taskEntries.length) {
      return {
        handled: true,
        reply: "you don't have any tasks to mark done."
      };
    }

    if (!incompleteEntries.length) {
      return {
        handled: true,
        reply: "all your tasks were already marked done."
      };
    }

    return {
      handled: true,
      reply: `marked ${incompleteEntries.length} task${incompleteEntries.length === 1 ? "" : "s"} done.`
    };
  }

  const renameCurrentTaskMatch = normalized.match(/(?:rename|change|edit|update)\s+(?:this|current)\s+task\s+(?:to|into)\s+(.+)/);
  if (renameCurrentTaskMatch && activeTaskTitle) {
    const nextTitle = normalizeTaskTitle(renameCurrentTaskMatch[1]);
    const changed = renameTaskEverywhere(activeTaskTitle, nextTitle);
    if (changed) {
      return {
        handled: true,
        reply: `updated this task to ${nextTitle}.`
      };
    }
  }

  const renameListMatch = normalized.match(/(?:rename|change|replace|edit)\s+(?:the\s+)?(?:task|item|todo|to do|step)?\s*(.+?)\s+(?:to|with)\s+(.+)/);
  if (renameListMatch && (mentionsTodoList(normalized) || /\btask\b/.test(normalized))) {
    const sourceTitle = findMatchingTaskTitle(renameListMatch[1]) || normalizeTaskTitle(renameListMatch[1]);
    const changed = renameTaskEverywhere(sourceTitle, renameListMatch[2]);
    if (changed) {
      openCurrentTodoListSheet();
      return {
        handled: true,
        reply: `updated that to-do list task to ${normalizeTaskTitle(renameListMatch[2])}.`
      };
    }
  }

  const replaceWordMatch = normalized.match(/(?:change|replace)\s+(?:the\s+word\s+)?(.+?)\s+(?:to|with)\s+(.+)/);
  if (replaceWordMatch && mentionsTodoList(normalized)) {
    const result = replaceWordInCurrentTodoList(replaceWordMatch[1], replaceWordMatch[2]);
    if (result.changed) {
      openCurrentTodoListSheet();
      return {
        handled: true,
        reply: `changed ${result.oldTitle} to ${result.newTitle}.`
      };
    }
    if (result.ambiguous) {
      return {
        handled: true,
        reply: "i found more than one task that matches that. say the full task name you want changed."
      };
    }
  }

  const removeListMatch = normalized.match(/(?:remove|delete|drop|take off)\s+(.+?)\s+(?:from\s+)?(?:my\s+|the\s+|current\s+)?(?:to\s*do\s+list|todo\s+list|list)/);
  if (removeListMatch && mentionsTodoList(normalized)) {
    const targetTitle = normalizeTaskTitle(removeListMatch[1]);
    const updated = updateLatestStartupListForUser((list) => ({
      ...list,
      items: (Array.isArray(list.items) ? list.items : []).filter((item) => normalizeTaskTitle(item) !== targetTitle)
    }));
    if (updated) {
      openCurrentTodoListSheet();
      return {
        handled: true,
        reply: `removed ${targetTitle} from the to-do list.`
      };
    }
  }

  const addListMatch = normalized.match(/(?:add|put)\s+(.+?)\s+(?:to|onto|on)\s+(?:my\s+|the\s+|current\s+)?(?:to\s*do\s+list|todo\s+list|list)/);
  if (addListMatch && mentionsTodoList(normalized)) {
    const newItem = normalizeTaskTitle(addListMatch[1]);
    const updated = updateLatestStartupListForUser((list) => ({
      ...list,
      items: [...(Array.isArray(list.items) ? list.items : []), newItem]
    }));
    if (updated) {
      updateTaskEntry(newItem, (current) => ({ ...current, title: newItem }));
      openCurrentTodoListSheet();
      return {
        handled: true,
        reply: `added ${newItem} to the to-do list.`
      };
    }
  }

  const focusAndDueMatch = normalized.match(/(?:work on|focus on|prioritize|tackle)\s+(.+?)\s+(today|tonight|tomorrow|this week)\s+(?:and|&)\s+(?:have|get|make|finish|need)\s+(?:(?:it|this|that)\s+)?(?:done|finished|complete|completed)?\s*(?:by|before)\s+(.+)/);
  if (focusAndDueMatch) {
    const taskTitle = resolveTaskReference(focusAndDueMatch[1], activeTaskTitle);
    const dueState = parseTaskDuePhrase(focusAndDueMatch[3]);
    if (taskTitle && dueState) {
      setTaskOwnershipState(taskTitle, {
        focusLabel: focusAndDueMatch[2],
        dueAt: dueState.dueAt,
        dueLabel: dueState.dueLabel
      });
      startTaskWorkSession(taskTitle, { minutes: 45 });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} is a ${focusAndDueMatch[2]} focus and due ${formatTaskDueLabel(dueState.dueAt, dueState.dueLabel)}.`
      };
    }
  }

  const focusMatch = normalized.match(/(?:work on|focus on|prioritize|tackle)\s+(.+?)\s+(today|tonight|tomorrow|this week)\b/);
  if (focusMatch) {
    const taskTitle = resolveTaskReference(focusMatch[1], activeTaskTitle);
    if (taskTitle) {
      setTaskOwnershipState(taskTitle, {
        focusLabel: focusMatch[2]
      });
      setTaskExecutionState(taskTitle, {
        workflowStatus: "active",
        nextAction: readTaskEntry(taskTitle).nextAction || getTaskNextActionText(readTaskEntry(taskTitle))
      });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} is now a ${focusMatch[2]} focus.`
      };
    }
  }

  const priorityMatch = normalized.match(/(?:make|set)\s+(.+?)\s+(top|highest|high|urgent|low)\s+priority/) || normalized.match(/(.+?)\s+(?:is|as)\s+(top|highest|high|urgent|low)\s+priority/);
  if (priorityMatch) {
    const taskTitle = resolveTaskReference(priorityMatch[1], activeTaskTitle);
    if (taskTitle) {
      const priority = normalizeTaskPriority(priorityMatch[2]);
      setTaskOwnershipState(taskTitle, { priority });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} is now ${priority === "top" ? "top priority" : `${priority} priority`}.`
      };
    }
  }

  const dueMatch = normalized.match(/(?:have|get|make|finish|need)\s+(.+?)\s+(?:done|finished|complete|completed)\s+(?:by|before)\s+(.+)/) || normalized.match(/(?:set|change|move|update)\s+(?:the\s+)?(?:deadline|due(?:\s+time)?)\s+(?:for\s+)?(.+?)\s+(?:to|for)\s+(.+)/) || normalized.match(/(.+?)\s+(?:is\s+)?due\s+(?:by|before|for)?\s+(.+)/);
  if (dueMatch) {
    const taskTitle = resolveTaskReference(dueMatch[1], activeTaskTitle);
    const dueState = parseTaskDuePhrase(dueMatch[2]);
    if (taskTitle && dueState) {
      setTaskOwnershipState(taskTitle, {
        dueAt: dueState.dueAt,
        dueLabel: dueState.dueLabel,
        focusLabel: dueState.focusLabel || readTaskEntry(taskTitle).focusLabel
      });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} is due ${formatTaskDueLabel(dueState.dueAt, dueState.dueLabel)}.`
      };
    }
  }

  const currentMilestoneMatch = normalized.match(/(?:this|it|this task|current task)\s+(?:belongs to|is in|is part of|goes in)\s+(?:the\s+)?(.+?)\s+milestone\b/);
  if (currentMilestoneMatch && activeTaskTitle) {
    const milestone = normalizeTaskMilestone(currentMilestoneMatch[1]);
    if (milestone) {
      setTaskPlanningState(activeTaskTitle, { milestone });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${activeTaskTitle} is now in the ${milestone} milestone.`
      };
    }
  }

  const milestoneMatch = normalized.match(/(?:put|move|assign|set)\s+(.+?)\s+(?:to|into|in)\s+(?:the\s+)?(.+?)\s+milestone\b/);
  if (milestoneMatch) {
    const taskTitle = resolveTaskReference(milestoneMatch[1], activeTaskTitle);
    const milestone = normalizeTaskMilestone(milestoneMatch[2]);
    if (taskTitle && milestone) {
      setTaskPlanningState(taskTitle, { milestone });
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} is now in the ${milestone} milestone.`
      };
    }
  }

  const scheduleCurrentMatch = normalized.match(/(?:put|move|schedule)\s+(?:this|it|this task|current task)\s+(?:on|onto|for|at|to)\s+(.+)/);
  if (scheduleCurrentMatch && activeTaskTitle) {
    const schedule = parseTaskSchedulePhrase(scheduleCurrentMatch[1]);
    if (schedule) {
      setTaskPlanningState(activeTaskTitle, schedule);
      refreshTaskViews();
      return {
        handled: true,
        reply: `locked. ${activeTaskTitle} is on the plan for ${formatTaskScheduleLabel(schedule.scheduledAt, schedule.scheduledLabel)}.`
      };
    }
  }

  const scheduleMatch = normalized.match(/(?:put|move|schedule)\s+(.+?)\s+(?:on|onto|for|at|to)\s+(.+)/);
  if (scheduleMatch) {
    const taskTitle = resolveTaskReference(scheduleMatch[1], activeTaskTitle);
    const schedule = parseTaskSchedulePhrase(scheduleMatch[2]);
    if (taskTitle && schedule) {
      setTaskPlanningState(taskTitle, schedule);
      refreshTaskViews();
      return {
        handled: true,
        reply: `locked. ${taskTitle} is on the plan for ${formatTaskScheduleLabel(schedule.scheduledAt, schedule.scheduledLabel)}.`
      };
    }
  }

  if (/(?:clear|remove|delete)\s+(?:the\s+)?(?:schedule|today(?:'s)?\s+plan)/.test(normalized) && activeTaskTitle) {
    setTaskPlanningState(activeTaskTitle, {
      scheduledAt: 0,
      scheduledLabel: ""
    });
    refreshTaskViews();
    return {
      handled: true,
      reply: `cleared the schedule for ${activeTaskTitle}.`
    };
  }

  if (/(?:clear|remove|delete)\s+(?:the\s+)?milestone/.test(normalized) && activeTaskTitle) {
    setTaskPlanningState(activeTaskTitle, { milestone: "" });
    refreshTaskViews();
    return {
      handled: true,
      reply: `cleared the milestone for ${activeTaskTitle}.`
    };
  }

  const nextActionMatch = normalized.match(/(?:set|make|change|update)\s+(?:the\s+)?(?:next\s+(?:step|move|action))(?:\s+for\s+(.+?))?\s+(?:to|as)\s+(.+)/);
  if (nextActionMatch) {
    const taskTitle = resolveTaskReference(nextActionMatch[1] || activeTaskTitle || "", activeTaskTitle);
    if (taskTitle) {
      setTaskNextAction(taskTitle, nextActionMatch[2]);
      refreshTaskViews();
      return {
        handled: true,
        reply: `locked. next move for ${taskTitle} is ${normalizeTaskTextField(nextActionMatch[2], 180)}.`
      };
    }
  }

  if (/(?:what(?:'s| is) next|next move|next step)/.test(normalized) && activeTaskTitle) {
    return {
      handled: true,
      reply: respondWithCurrentNextMove(activeTaskTitle)
    };
  }

  const blockedMatch = normalized.match(/(?:i(?:'| a)m|we(?:'| a)re)?\s*blocked(?:\s+on|\s+by|\s+because)?\s+(.+)/) || normalized.match(/(?:block|mark blocked)\s+(?:this|current|the task)?\s*(?:because|for)?\s+(.+)/);
  if (blockedMatch && activeTaskTitle) {
    blockTaskExecution(activeTaskTitle, blockedMatch[1]);
    const rescue = buildDependencyRescueData(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: `got it. ${activeTaskTitle} is blocked on ${normalizeTaskTextField(blockedMatch[1], 180)}.${rescue?.paths?.length ? ` unblock paths: ${rescue.paths.join("; ")}.` : ""}`.trim()
    };
  }

  if (/(?:unblock this|clear blocker|not blocked anymore|we're unblocked|i'm unblocked)/.test(normalized) && activeTaskTitle) {
    clearTaskBlocker(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: `${activeTaskTitle} is unblocked.`
    };
  }

  if (/(?:start working on|work on|start|resume)\s+(?:this|current task|this task|it)\s*(?:now)?$/.test(normalized) && activeTaskTitle) {
    startTaskWorkSession(activeTaskTitle, { minutes: 45 });
    refreshTaskViews();
    return {
      handled: true,
      reply: `on it. starting a 45 minute sprint on ${activeTaskTitle}. next is ${getTaskNextActionText(readTaskEntry(activeTaskTitle))}.`
    };
  }

  if (/(?:pause|hold)\s+(?:this|current task|this task|it)$/.test(normalized) && activeTaskTitle) {
    pauseTaskExecution(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: `paused ${activeTaskTitle}.`
    };
  }

  if (/(?:finish|complete|do|knock out)\s+(?:the\s+)?next\s+(?:step|subtask|thing)/.test(normalized) && activeTaskTitle) {
    const result = completeNextOpenSubtask(activeTaskTitle);
    if (result.changed) {
      refreshTaskViews();
      return {
        handled: true,
        reply: result.remaining ? `done. finished ${result.title}. next up is ${getTaskNextActionText(readTaskEntry(activeTaskTitle))}.` : `done. finished ${result.title} and wrapped the task.`
      };
    }
    return {
      handled: true,
      reply: `there isn't an open next step on ${activeTaskTitle} yet.`
    };
  }

  if (/(?:make a plan|build a plan|break this down|turn this into a plan|give me a plan for this)/.test(normalized) && activeTaskTitle) {
    const added = buildLocalTaskExecutionPlan(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: added ? `built a tighter attack plan for ${activeTaskTitle} and loaded the next move.` : `${activeTaskTitle} already has a working plan.`
    };
  }

  const reminderMatch = normalized.match(/(?:remind me|follow up|check in)(?:\s+on)?\s+(.*?)(?:\s+(?:at|by|in|tonight|tomorrow|tomorrow morning|this afternoon|this evening).*)$/) || normalized.match(/(?:remind me|follow up|check in)\s+(?:about\s+)?(.+)/);
  if (reminderMatch) {
    const taskTitle = activeTaskTitle || getCurrentTaskTitle();
    const parsed = parseTaskReminderPhrase(extractReminderTimingPhrase(normalized));
    if (taskTitle && parsed) {
      setTaskReminderState(taskTitle, parsed);
      refreshTaskViews();
      return {
        handled: true,
        reply: `locked. i'll follow up on ${taskTitle} ${formatTaskReminderSummary(readTaskEntry(taskTitle))}.`
      };
    }
  }

  const recurringMatch = normalized.match(/(?:check in|follow up|remind me)\s+(?:on\s+)?(?:this|it|this task)?\s*(?:every\s+day|everyday|every weekday|every week)/);
  if (recurringMatch && activeTaskTitle) {
    const parsed = parseTaskReminderPhrase(extractReminderTimingPhrase(normalized));
    if (parsed) {
      setTaskReminderState(activeTaskTitle, parsed);
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${activeTaskTitle} now has a recurring follow-up: ${formatTaskReminderSummary(readTaskEntry(activeTaskTitle))}.`
      };
    }
  }

  if (/(?:clear|remove|delete)\s+(?:the\s+)?(?:reminder|follow up|check in)/.test(normalized) && activeTaskTitle) {
    clearTaskReminderState(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: `cleared the follow-up for ${activeTaskTitle}.`
    };
  }

  if (/(?:what(?:'s| is) overdue|what needs follow up|what needs a follow up|which tasks are overdue)/.test(normalized)) {
    return {
      handled: true,
      reply: getOverdueFollowupReply()
    };
  }

  const decisionMatch = normalized.match(/(?:log|record|save)\s+(?:the\s+)?decision\s+(.+)/) || normalized.match(/decision\s*[:=-]\s*(.+)/);
  if (decisionMatch) {
    const parsedDecision = parseOperatorMetaLine(decisionMatch[1]) || { summary: decisionMatch[1] };
    if (appendDecisionLog({
      summary: parsedDecision.summary,
      taskTitle: normalizeTaskTitle(parsedDecision.task || "") || activeTaskTitle || "",
      owner: parsedDecision.owner || "",
      dueLabel: parsedDecision.schedule || "",
      rationale: parsedDecision.why || parsedDecision.rationale || "",
      followUp: parsedDecision.followUp || "",
      source: "voice"
    })) {
      refreshTaskViews();
      return {
        handled: true,
        reply: `saved that decision${activeTaskTitle ? ` for ${activeTaskTitle}` : ""}.`
      };
    }
  }

  const whyDecisionMatch = normalized.match(/why did we choose (?:this|that|it|(.+))/) || normalized.match(/why (?:did|do) we decide (.+)/);
  if (whyDecisionMatch) {
    const match = findDecisionLogMatch(whyDecisionMatch[1] || activeTaskTitle || "");
    if (match) {
      return {
        handled: true,
        reply: match.rationale ? `we chose it because ${match.rationale}.` : `the saved decision is: ${match.summary}.`
      };
    }
  }

  const actionCaptureMatch = normalized.match(/(?:log|capture|save|add)\s+(?:an?\s+)?action\s+(.+)/);
  if (actionCaptureMatch) {
    if (captureStructuredActionItem(actionCaptureMatch[1], activeTaskTitle || "")) {
      refreshTaskViews();
      return {
        handled: true,
        reply: activeTaskTitle ? `captured that as the next step on ${activeTaskTitle}.` : "captured that as a task on the board."
      };
    }
  }

  const brainstormMatch = normalized.match(/(?:capture|turn|convert)\s+(?:this\s+)?brainstorm\s+(?:into|to)\s+execution\s+(.+)/) || normalized.match(/brainstorm\s*[:=-]\s*(.+)/);
  if (brainstormMatch) {
    const chunks = brainstormMatch[1].split(/\s*(?:,| and | then )\s*/).map((item) => item.trim()).filter(Boolean);
    let captured = 0;
    chunks.forEach((chunk) => {
      if (captureStructuredActionItem(chunk, "")) {
        captured += 1;
      }
    });
    if (captured) {
      refreshTaskViews();
      return {
        handled: true,
        reply: `turned that brainstorm into ${captured} execution item${captured === 1 ? "" : "s"}.`
      };
    }
  }

  const meetingStartMatch = normalized.match(/(?:start|open|enter|turn on)\s+(?:meeting mode|meeting notes|meeting copilot)(?:\s+(?:for|on)\s+(.+))?/);
  if (meetingStartMatch) {
    setMeetingMode(true, meetingStartMatch[1] || activeTaskTitle || "");
    refreshTaskViews();
    return {
      handled: true,
      reply: getMeetingModeSummary()
    };
  }

  if (/(?:stop|end|exit|close|turn off)\s+(?:meeting mode|meeting notes|meeting copilot)/.test(normalized)) {
    setMeetingMode(false);
    refreshTaskViews();
    return {
      handled: true,
      reply: "meeting mode is off."
    };
  }

  if (/(?:decision log|show decisions|what did we decide|recent decisions)/.test(normalized)) {
    const decisions = readDecisionLog().slice(0, 4);
    return {
      handled: true,
      reply: decisions.length ? `recent decisions: ${decisions.map((item) => item.summary).join("; ")}.` : "no decisions logged yet."
    };
  }

  if (/(?:risk radar|what(?:'s| is) risky|what is at risk|what needs escalation)/.test(normalized)) {
    return {
      handled: true,
      reply: buildRiskRadarReply()
    };
  }

  const rescueMatch = normalized.match(/(?:dependency rescue|how do i unblock|rescue|unstick)\s+(.+)/);
  if (rescueMatch) {
    return {
      handled: true,
      reply: buildDependencyRescueReply(rescueMatch[1])
    };
  }

  if (/(?:rescue this|why is this stuck|how do i unblock this|what's blocking this)/.test(normalized) && activeTaskTitle) {
    return {
      handled: true,
      reply: buildDependencyRescueReply(activeTaskTitle)
    };
  }

  const escalateMatch = normalized.match(/(?:escalate|stuck task escalation)\s+(.+)/);
  if (escalateMatch) {
    return {
      handled: true,
      reply: buildStuckTaskEscalationReply(escalateMatch[1])
    };
  }

  if (/(?:escalate this|this is stuck)/.test(normalized) && activeTaskTitle) {
    return {
      handled: true,
      reply: buildStuckTaskEscalationReply(activeTaskTitle)
    };
  }

  const focusModeMatch = normalized.match(/(?:start|enter|turn on)\s+(?:focus mode|sprint captain)(?:\s+(?:on|for)\s+(.+))?/);
  if (focusModeMatch) {
    const focusTarget = resolveTaskReference(focusModeMatch[1] || activeTaskTitle || "", activeTaskTitle);
    const focusState = focusTarget ? startFocusMode(focusTarget, { minutes: extractOperatorDurationMinutes(normalized, 45) }) : null;
    if (focusState) {
      refreshTaskViews();
      return {
        handled: true,
        reply: getFocusModeSummary()
      };
    }
  }

  if (/(?:stop|end|exit|turn off)\s+(?:focus mode|sprint captain)/.test(normalized)) {
    clearFocusMode();
    refreshTaskViews();
    return {
      handled: true,
      reply: "focus mode is off."
    };
  }

  if (/(?:autonomous follow through|follow through on this|own this task|run follow through)/.test(normalized) && activeTaskTitle) {
    const result = runAutonomousFollowThrough(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: result ? `locked follow-through on ${result.title}. next is ${result.nextAction}. ${result.reminder !== "no follow-up set" ? `follow-up: ${result.reminder}.` : ""}`.trim() : "i couldn't lock follow-through on that task."
    };
  }

  if (/(?:morning brief|opening brief|start my day)/.test(normalized)) {
    refreshTaskViews();
    return {
      handled: true,
      reply: buildMorningBriefReply()
    };
  }

  if (/(?:midday reset|midday replan|reset my day)/.test(normalized)) {
    refreshTaskViews();
    return {
      handled: true,
      reply: buildMiddayResetReply()
    };
  }

  if (/(?:shutdown review|close out the day|end of day review|day shutdown)/.test(normalized)) {
    refreshTaskViews();
    return {
      handled: true,
      reply: buildShutdownReviewReply()
    };
  }

  if (/(?:daily auto replan|auto replan|replan today|reset today|rebalance today)/.test(normalized)) {
    const result = runDailyAutoReplan("voice command");
    refreshTaskViews();
    return {
      handled: true,
      reply: `${result.summary}${result.scheduled.length ? ` ${result.scheduled.slice(0, 4).join("; ")}.` : ""}`.trim()
    };
  }

  const dependencyMatch = normalized.match(/(.+?)\s+(?:depends on|is waiting on|waits on)\s+(.+)/);
  if (dependencyMatch) {
    const taskTitle = resolveTaskReference(dependencyMatch[1], activeTaskTitle);
    const dependencyTitle = resolveTaskReference(dependencyMatch[2], "", getCurrentUserId());
    if (taskTitle && dependencyTitle && taskTitle !== dependencyTitle) {
      updateTaskEntry(taskTitle, (current) => ({
        ...current,
        dependsOn: normalizeTaskDependencyList([...(current.dependsOn || []), dependencyTitle]),
        workflowStatus: current.completed ? "done" : "blocked"
      }));
      refreshTaskViews();
      return {
        handled: true,
        reply: `got it. ${taskTitle} now depends on ${dependencyTitle}.`
      };
    }
  }

  const clearDependencyMatch = normalized.match(/(?:clear|remove|delete)\s+(?:the\s+)?dependency\s+(?:on\s+)?(.+)/);
  if (clearDependencyMatch && activeTaskTitle) {
    const dependencyTitle = resolveTaskReference(clearDependencyMatch[1], "", getCurrentUserId());
    updateTaskEntry(activeTaskTitle, (current) => ({
      ...current,
      dependsOn: normalizeTaskDependencyList((current.dependsOn || []).filter((title) => title !== dependencyTitle)),
      workflowStatus: current.completed ? "done" : normalizeTaskDependencyList((current.dependsOn || []).filter((title) => title !== dependencyTitle)).length ? current.workflowStatus : "queued"
    }));
    refreshTaskViews();
    return {
      handled: true,
      reply: `removed that dependency from ${activeTaskTitle}.`
    };
  }

  if (/(?:daily briefing|brief me|what should i work on today|what do i hit today|what's the board look like)/.test(normalized)) {
    return {
      handled: true,
      reply: buildDailyBriefingReply()
    };
  }

  const specificMilestoneStatusMatch = normalized.match(/(?:is|what(?:'s| is)|how(?:'s| is))\s+(.+?)\s+milestone\s+(?:status|looking|doing|tracking|on track)/) || normalized.match(/(?:status|health)\s+(?:for|of)\s+(.+?)\s+milestone/);
  if (specificMilestoneStatusMatch) {
    return {
      handled: true,
      reply: getMilestoneStatusReply(specificMilestoneStatusMatch[1])
    };
  }

  if (/(?:milestone status|milestone health|which milestones are slipping|what's slipping|what is slipping|what milestones are off track)/.test(normalized)) {
    return {
      handled: true,
      reply: getMilestoneStatusReply()
    };
  }

  if (/(?:weekly review|week in review|this week review|operating review|weekly recap)/.test(normalized)) {
    return {
      handled: true,
      reply: getWeeklyReviewReply()
    };
  }

  if (/(?:wins this week|what shipped this week|what went well this week)/.test(normalized)) {
    return {
      handled: true,
      reply: getWeeklyReviewReply("wins")
    };
  }

  if (/(?:slips this week|what slipped this week|what went sideways this week)/.test(normalized)) {
    return {
      handled: true,
      reply: getWeeklyReviewReply("slips")
    };
  }

  if (/(?:next bets|what are the next bets|what should we bet on next)/.test(normalized)) {
    return {
      handled: true,
      reply: getWeeklyReviewReply("bets")
    };
  }

  if (/(?:build|make|create|rebuild|rebalance|auto(?:\s|-)?plan)\s+(?:my\s+)?today(?:'s)?\s+plan/.test(normalized) || /(?:plan out|slot out)\s+(?:my\s+)?day/.test(normalized)) {
    const result = buildAutoTodayPlan();
    refreshTaskViews();
    return {
      handled: true,
      reply: `${result.summary}${result.scheduled.length ? ` ${result.scheduled.slice(0, 4).join("; ")}.` : ""}`.trim()
    };
  }

  if (/(?:build|make|create|rebuild|auto(?:\s|-)?plan)\s+(?:my\s+)?tomorrow(?:'s)?\s+plan/.test(normalized) || /(?:plan out|slot out)\s+tomorrow/.test(normalized)) {
    const result = buildAutoTomorrowPlan();
    refreshTaskViews();
    return {
      handled: true,
      reply: `${result.summary}${result.scheduled.length ? ` ${result.scheduled.slice(0, 4).join("; ")}.` : ""}`.trim()
    };
  }

  if (/(?:roll over|carry over|move)\s+(?:today|today's work|today's plan)\s+(?:to|into)?\s*tomorrow/.test(normalized) || /(?:roll|carry)\s+this\s+into\s+tomorrow/.test(normalized)) {
    const result = rollOverTodayToTomorrow();
    refreshTaskViews();
    return {
      handled: true,
      reply: result.summary
    };
  }

  if (/(?:clear|remove|delete|reset)\s+(?:my\s+)?(?:auto|generated)\s+today(?:'s)?\s+plan/.test(normalized) || /(?:clear|reset)\s+auto(?:\s|-)?plan/.test(normalized)) {
    const cleared = clearAutoTodayPlan();
    refreshTaskViews();
    return {
      handled: true,
      reply: cleared ? `cleared ${cleared} auto-planned task slot${cleared === 1 ? "" : "s"}.` : "there wasn't an auto-planned slot to clear."
    };
  }

  if (/(?:what(?:'s| is) on today(?:'s)? plan|show me today(?:'s)? plan|today(?:'s)? plan)/.test(normalized)) {
    return {
      handled: true,
      reply: getTodayPlanCommandReply()
    };
  }

  if (/(?:what(?:'s| is) on tomorrow(?:'s)? plan|show me tomorrow(?:'s)? plan|what(?:'s| is) tomorrow looking like|tomorrow(?:'s)? plan)/.test(normalized)) {
    return {
      handled: true,
      reply: getTomorrowPlanCommandReply()
    };
  }

  if (/(?:standup|daily standup|give me a standup|what moved today|what changed today)/.test(normalized)) {
    return {
      handled: true,
      reply: buildBoardStandupReply()
    };
  }

  if (/(?:timeline|recent activity|what happened recently|what's been moving)/.test(normalized)) {
    const items = getBoardTimelineData().slice(0, 4).map((item) => `${item.title} ${item.kind} ${formatRelativeTime(Date.now() - item.ts)}`);
    return {
      handled: true,
      reply: items.length ? `recent board activity: ${items.join("; ")}.` : "no recent board activity yet."
    };
  }

  const progressMatch = normalized.match(/(?:set|make|move|update)\s+(?:the\s+)?progress(?:\s+for\s+(.+?))?\s+(?:to|at)\s+(\d{1,3})\s*(?:percent|%)/) || normalized.match(/(.+?)\s+is\s+(\d{1,3})\s*(?:percent|%)\s+done/);
  if (progressMatch) {
    const taskTitle = resolveTaskReference(progressMatch[1] || activeTaskTitle || "", activeTaskTitle);
    const nextProgress = Number(progressMatch[2]);
    if (taskTitle && Number.isFinite(nextProgress)) {
      setTaskProgressValue(taskTitle, nextProgress);
      refreshTaskViews();
      return {
        handled: true,
        reply: `set ${taskTitle} to ${normalizeTaskProgress(nextProgress)}% complete.`
      };
    }
  }

  if (/(?:move this forward|make progress on this|push this forward|nudge this forward)/.test(normalized) && activeTaskTitle) {
    advanceTaskProgress(activeTaskTitle, 10);
    startTaskWorkSession(activeTaskTitle, { minutes: 30 });
    refreshTaskViews();
    return {
      handled: true,
      reply: `moved ${activeTaskTitle} forward. progress is now ${getTaskProgressValue(readTaskEntry(activeTaskTitle))}% and the sprint is running.`
    };
  }

  const noteMatch = normalized.match(/(?:set|update|change|add)\s+(?:the\s+)?(?:working\s+)?notes?(?:\s+for\s+(?:this\s+task|the\s+task))?(?:\s+to|\s+with|\s+that\s+say)?\s+(.+)/);
  if (noteMatch && activeTaskTitle) {
    setTaskNotes(activeTaskTitle, noteMatch[1]);
    refreshTaskViews();
    return {
      handled: true,
      reply: "updated the working notes."
    };
  }

  const addSubtaskMatch = normalized.match(/(?:add|create)\s+(?:a\s+)?(?:subtask|step)(?:\s+called)?\s+(.+)/);
  if (addSubtaskMatch && activeTaskTitle) {
    addTaskSubtask(activeTaskTitle, addSubtaskMatch[1]);
    refreshTaskViews();
    return {
      handled: true,
      reply: `added ${normalizeTaskTitle(addSubtaskMatch[1])} as a step.`
    };
  }

  const deleteSubtaskMatch = normalized.match(/(?:delete|remove)\s+(?:the\s+)?(?:subtask|step)\s+(.+)/);
  if (deleteSubtaskMatch && activeTaskTitle) {
    const match = findSubtaskMatch(activeTaskTitle, deleteSubtaskMatch[1]);
    if (match) {
      deleteTaskSubtask(activeTaskTitle, match.id);
      refreshTaskViews();
      return {
        handled: true,
        reply: `deleted the step ${match.title}.`
      };
    }
  }

  const moveSubtaskMatch = normalized.match(/(?:move|reorder)\s+(?:the\s+)?(?:subtask|step)\s+(.+?)\s+(up|down|top|bottom)$/);
  if (moveSubtaskMatch && activeTaskTitle) {
    const match = findSubtaskMatch(activeTaskTitle, moveSubtaskMatch[1]);
    if (match) {
      moveTaskSubtask(activeTaskTitle, match.id, moveSubtaskMatch[2]);
      refreshTaskViews();
      return {
        handled: true,
        reply: `moved ${match.title} ${moveSubtaskMatch[2]}.`
      };
    }
  }

  const renameSubtaskMatch = normalized.match(/(?:rename|change|replace)\s+(?:the\s+)?(?:subtask|step)\s+(.+?)\s+(?:to|with)\s+(.+)/);
  if (renameSubtaskMatch && activeTaskTitle) {
    const changed = renameCurrentTaskSubtask(renameSubtaskMatch[1], renameSubtaskMatch[2]);
    if (changed) {
      return {
        handled: true,
        reply: `updated that step to ${normalizeTaskTitle(renameSubtaskMatch[2])}.`
      };
    }
  }


  const inlineRenameCurrentTaskMatch = normalized.match(/(?:rename|change|edit|update)\s+(?:this|current)\s+task\s+(?:to|into)\s+(.+)/);
  if (inlineRenameCurrentTaskMatch && activeTaskTitle) {
    const result = renameTask(activeTaskTitle, inlineRenameCurrentTaskMatch[1]);
    if (result.changed) {
      refreshTaskViews();
      return {
        handled: true,
        reply: `renamed ${activeTaskTitle} to ${normalizeTaskTitle(inlineRenameCurrentTaskMatch[1])}.`
      };
    }
  }

  const explicitRenameTaskMatch = normalized.match(/(?:rename|change|edit|update)\s+(?:the\s+)?task\s+(.+?)\s+(?:to|into)\s+(.+)/);
  if (explicitRenameTaskMatch) {
    const fromTitle = resolveTaskReference(explicitRenameTaskMatch[1], activeTaskTitle) || findMatchingTaskTitle(explicitRenameTaskMatch[1]);
    if (fromTitle) {
      const result = renameTask(fromTitle, explicitRenameTaskMatch[2]);
      if (result.changed) {
        refreshTaskViews();
        return {
          handled: true,
          reply: `renamed ${fromTitle} to ${normalizeTaskTitle(explicitRenameTaskMatch[2])}.`
        };
      }
    }
  }

  const deleteCurrentTaskMatch = activeTaskTitle && /(?:delete|remove)\s+(?:this|current)\s+task/.test(normalized);
  if (deleteCurrentTaskMatch && activeTaskTitle) {
    deleteTask(activeTaskTitle);
    refreshTaskViews();
    return {
      handled: true,
      reply: `deleted ${activeTaskTitle}.`
    };
  }

  const deleteTaskMatch = normalized.match(/(?:delete|remove)\s+(?:the\s+)?task\s+(.+)/);
  if (deleteTaskMatch) {
    const taskTitle = resolveTaskReference(deleteTaskMatch[1], activeTaskTitle) || findMatchingTaskTitle(deleteTaskMatch[1]);
    if (taskTitle) {
      deleteTask(taskTitle);
      refreshTaskViews();
      return {
        handled: true,
        reply: `deleted ${taskTitle}.`
      };
    }
  }

  const moveCurrentTaskMatch = activeTaskTitle ? normalized.match(/(?:move|reorder)\s+(?:this|current)\s+task\s+(up|down|top|bottom)$/) : null;
  if (moveCurrentTaskMatch && activeTaskTitle) {
    moveTaskInLatestStartupList(activeTaskTitle, moveCurrentTaskMatch[1]);
    refreshTaskViews();
    return {
      handled: true,
      reply: `moved ${activeTaskTitle} ${moveCurrentTaskMatch[1]}.`
    };
  }

  const moveTaskMatch = normalized.match(/(?:move|reorder)\s+(?:the\s+)?task\s+(.+?)\s+(up|down|top|bottom)$/);
  if (moveTaskMatch) {
    const taskTitle = resolveTaskReference(moveTaskMatch[1], activeTaskTitle) || findMatchingTaskTitle(moveTaskMatch[1]);
    if (taskTitle) {
      moveTaskInLatestStartupList(taskTitle, moveTaskMatch[2]);
      refreshTaskViews();
      return {
        handled: true,
        reply: `moved ${taskTitle} ${moveTaskMatch[2]}.`
      };
    }
  }
  const renameCurrentStepMatch = normalized.match(/(?:rename|change|edit|update)\s+(?:this|current)\s+(?:step|subtask)\s+(?:to|into)\s+(.+)/);
  if (renameCurrentStepMatch && activeTaskTitle) {
    const activeEntry = readTaskEntry(activeTaskTitle);
    const openSubtask = activeEntry.subtasks.find((item) => !item.completed) || activeEntry.subtasks[0];
    if (openSubtask) {
      const changed = renameCurrentTaskSubtask(openSubtask.title, renameCurrentStepMatch[1], activeTaskTitle);
      if (changed) {
        return {
          handled: true,
          reply: `updated that step to ${normalizeTaskTitle(renameCurrentStepMatch[1])}.`
        };
      }
    }
  }

  const doneStepMatch = normalized.match(/(?:mark|set).*(?:subtask|step)\s+(.+?)\s+(?:done|complete|completed|finished)/);
  if (doneStepMatch && activeTaskTitle) {
    const changed = markCurrentTaskSubtaskDone(doneStepMatch[1]);
    if (changed) {
      return {
        handled: true,
        reply: `marked ${normalizeTaskTitle(doneStepMatch[1])} done.`
      };
    }
  }

  const genericDoneMatch = normalized.match(/(?:mark|set|make)\s+(.+?)\s+(?:as\s+)?(?:done|complete|completed|finished)/);
  if (genericDoneMatch) {
    const subtaskChanged = activeTaskTitle ? markCurrentTaskSubtaskDone(genericDoneMatch[1], activeTaskTitle) : false;
    if (subtaskChanged) {
      return {
        handled: true,
        reply: `marked ${normalizeTaskTitle(genericDoneMatch[1])} done.`
      };
    }

    const taskTitle = findMatchingTaskTitle(genericDoneMatch[1]);
    if (taskTitle) {
      const entry = readTaskEntry(taskTitle);
      if (!entry.completed) {
        updateTaskEntry(taskTitle, (current) => ({ ...current, completed: true }));
        refreshTaskViews();
      }
      return {
        handled: true,
        reply: `${taskTitle} is marked done.`
      };
    }
  }

  if (wantsShowTodoList(normalized)) {
    const opened = openCurrentTodoListSheet();
    return {
      handled: true,
      reply: opened ? "here's your to-do list." : "you don't have a to-do list yet."
    };
  }

  const doneTitle = findTaskDoneIntent(normalized);
  if (doneTitle) {
    const entry = readTaskEntry(doneTitle);
    if (!entry.completed) {
      updateTaskEntry(doneTitle, (current) => ({ ...current, completed: true }));
      refreshTaskViews();
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
  recognizer.maxAlternatives = 3;

  recognizer.onresult = (event) => {
    const heardParts = [];
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      for (let altIndex = 0; altIndex < Math.min(result.length || 0, 3); altIndex += 1) {
        const text = String(result[altIndex]?.transcript || "").trim().toLowerCase();
        if (text) {
          heardParts.push(text);
        }
      }
    }
    const combined = normalizeBufferedSpeechParts([wakeWordRecentTranscript, ...heardParts]);
    if (!combined || !heardWakeWord(combined)) {
      wakeWordRecentTranscript = combined.slice(-80);
      return;
    }
    const now = Date.now();
    if (now - wakeWordDetectedAt < 1600) {
      return;
    }
    wakeWordRecentTranscript = "";
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
    wakeWordRecentTranscript = "";
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
  if (!voiceActivationUnlocked) {
    passiveWakeWordEnabled = true;
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
    wakeWordRecentTranscript = "";
    wakeWordRecognizer.start();
    wakeWordListeningNow = true;
  } catch {
    scheduleWakeWordRestart(800);
  }
}

function maybeStartBargeInListeningSoon(delay = 120) {
  window.setTimeout(() => {
    if (!persistentListeningEnabled || isListeningNow || !hasActiveTtsPlayback() || ttsNeedsUnlock) {
      return;
    }
    if (!supportsLiveSpeechRecognition()) {
      return;
    }
    setListening(true, { preserveTts: true, bargeIn: true });
  }, delay);
}

function resumePersistentListeningSoon(delay = 140) {
  window.setTimeout(() => {
    if (!persistentListeningEnabled || !pendingResumeListening || isListeningNow) {
      return;
    }
    if (!speechRecognizer && !hasRecordedVoiceFallback()) {
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
  if (isVoiceOutputEnabled() && hasActiveTtsPlayback()) {
    maybeStartBargeInListeningSoon(90);
    return;
  }
  if (isVoiceOutputEnabled() && ttsNeedsUnlock) {
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
  stopRecordedVoiceCapture();
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
  STORAGE_KEYS.activeTask,
  STORAGE_KEYS.operatorRoadmap,
  STORAGE_KEYS.decisionLog,
  STORAGE_KEYS.operatorState
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

const DEFAULT_OPERATOR_ROADMAP = [
  ["autonomous-follow-through", "autonomous follow-through", "anna turns loose tasks into next actions, subtasks, and follow-up loops."],
  ["meeting-mode", "meeting mode", "meeting conversations can capture decisions and actions directly into the app."],
  ["focus-mode", "focus mode / sprint captain", "anna can lock a sprint, watch drift, and keep the active task moving."],
  ["dependency-rescue", "dependency rescue", "anna detects blocked chains and suggests the fastest unblock path."],
  ["risk-radar", "risk radar", "the board surfaces overdue, stale, blocked, and escalation-risk work."],
  ["daily-auto-replan", "daily auto-replan", "anna can reset today’s plan based on what is actually ready right now."],
  ["decision-log", "decision log", "important calls are saved with timestamps so they don’t disappear in chat."],
  ["operating-rituals", "operating rituals", "morning brief, midday reset, and shutdown review are built-in commands."],
  ["voice-to-execution", "voice-to-execution", "anna can convert action lines from a reply into real tasks or subtasks."],
  ["stuck-task-escalation", "stuck-task escalation", "high-risk stuck tasks get explicit escalation guidance instead of vague summaries."]
].map(([key, title, description]) => ({ key, title, description, status: "live" }));

function readOperatorRoadmap() {
  const saved = readJson(STORAGE_KEYS.operatorRoadmap, []);
  if (Array.isArray(saved) && saved.length) {
    return DEFAULT_OPERATOR_ROADMAP.map((item) => {
      const match = saved.find((savedItem) => String(savedItem?.key || "") === item.key);
      return {
        ...item,
        status: normalizeTaskTextField(match?.status || item.status || "live", 40) || "live"
      };
    });
  }
  writeJson(STORAGE_KEYS.operatorRoadmap, DEFAULT_OPERATOR_ROADMAP);
  return DEFAULT_OPERATOR_ROADMAP;
}

function readDecisionLog(userId = getCurrentUserId()) {
  const entries = readJson(STORAGE_KEYS.decisionLog, []);
  if (!Array.isArray(entries)) {
    return [];
  }
  return entries
    .filter((entry) => String(entry?.userId || "") === userId)
    .map((entry) => ({
      id: String(entry?.id || "").trim(),
      summary: normalizeTaskTextField(entry?.summary || "", 220),
      taskTitle: normalizeTaskTitle(entry?.taskTitle || ""),
      owner: normalizeTaskTextField(entry?.owner || "", 120),
      dueLabel: normalizeTaskTextField(entry?.dueLabel || "", 120),
      rationale: normalizeTaskTextField(entry?.rationale || "", 260),
      followUp: normalizeTaskTextField(entry?.followUp || "", 180),
      source: normalizeTaskTextField(entry?.source || "voice", 40),
      ts: Number(entry?.ts || 0) || 0
    }))
    .filter((entry) => entry.summary)
    .sort((a, b) => (Number(b.ts || 0) || 0) - (Number(a.ts || 0) || 0));
}

function appendDecisionLog(entry, userId = getCurrentUserId()) {
  const summary = normalizeTaskTextField(entry?.summary || "", 220);
  const taskTitle = normalizeTaskTitle(entry?.taskTitle || "");
  if (!summary) {
    return false;
  }
  if (readDecisionLog(userId).some((item) => item.summary === summary && item.taskTitle === taskTitle)) {
    return false;
  }
  const next = [...readJson(STORAGE_KEYS.decisionLog, []), {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    summary,
    taskTitle,
    owner: normalizeTaskTextField(entry?.owner || "", 120),
    dueLabel: normalizeTaskTextField(entry?.dueLabel || "", 120),
    rationale: normalizeTaskTextField(entry?.rationale || "", 260),
    followUp: normalizeTaskTextField(entry?.followUp || "", 180),
    source: normalizeTaskTextField(entry?.source || "voice", 40) || "voice",
    ts: Date.now(),
    userId
  }].slice(-120);
  writeJson(STORAGE_KEYS.decisionLog, next);
  return true;
}

function readOperatorState(userId = getCurrentUserId()) {
  const store = readJson(STORAGE_KEYS.operatorState, {});
  const state = store && typeof store[userId] === "object" ? store[userId] : {};
  return {
    meetingActive: Boolean(state.meetingActive),
    meetingTopic: normalizeTaskTextField(state.meetingTopic || "", 120),
    meetingStartedAt: Number(state.meetingStartedAt || 0) || 0,
    focusTaskTitle: normalizeTaskTitle(state.focusTaskTitle || ""),
    focusStartedAt: Number(state.focusStartedAt || 0) || 0,
    focusEndsAt: Number(state.focusEndsAt || 0) || 0,
    lastFocusNudgeAt: Number(state.lastFocusNudgeAt || 0) || 0,
    lastAutoReplanAt: Number(state.lastAutoReplanAt || 0) || 0,
    ritualLog: Array.isArray(state.ritualLog)
      ? state.ritualLog
          .map((item) => ({
            kind: normalizeTaskTextField(item?.kind || "", 40),
            note: normalizeTaskTextField(item?.note || "", 220),
            ts: Number(item?.ts || 0) || 0
          }))
          .filter((item) => item.kind)
          .slice(-18)
      : []
  };
}

function writeOperatorStateForUser(nextState, userId = getCurrentUserId()) {
  const store = readJson(STORAGE_KEYS.operatorState, {});
  const current = readOperatorState(userId);
  store[userId] = {
    ...current,
    ...nextState,
    ritualLog: Array.isArray(nextState?.ritualLog) ? nextState.ritualLog.slice(-18) : current.ritualLog
  };
  writeJson(STORAGE_KEYS.operatorState, store);
  return store[userId];
}

function updateOperatorState(mutator, userId = getCurrentUserId()) {
  const current = readOperatorState(userId);
  return writeOperatorStateForUser(typeof mutator === "function" ? mutator(current) : mutator, userId);
}

function recordOperatorRitual(kind, note = "", userId = getCurrentUserId()) {
  return updateOperatorState((current) => ({
    ...current,
    ritualLog: [...(current.ritualLog || []), {
      kind: normalizeTaskTextField(kind || "ritual", 40),
      note: normalizeTaskTextField(note || "", 220),
      ts: Date.now()
    }].slice(-18)
  }), userId);
}

function setMeetingMode(active, topic = "", userId = getCurrentUserId()) {
  return updateOperatorState((current) => ({
    ...current,
    meetingActive: Boolean(active),
    meetingTopic: active ? normalizeTaskTextField(topic || current.meetingTopic || "", 120) : "",
    meetingStartedAt: active ? Date.now() : 0
  }), userId);
}

function startFocusMode(taskTitle, options = {}, userId = getCurrentUserId()) {
  const resolvedTitle = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (!resolvedTitle) {
    return null;
  }
  const minutes = Math.max(15, Math.min(120, Number(options.minutes || 45) || 45));
  startTaskWorkSession(resolvedTitle, { minutes }, userId);
  return updateOperatorState((current) => ({
    ...current,
    focusTaskTitle: resolvedTitle,
    focusStartedAt: Date.now(),
    focusEndsAt: Date.now() + minutes * 60 * 1000,
    lastFocusNudgeAt: Date.now()
  }), userId);
}

function clearFocusMode(userId = getCurrentUserId()) {
  return updateOperatorState((current) => ({
    ...current,
    focusTaskTitle: "",
    focusStartedAt: 0,
    focusEndsAt: 0,
    lastFocusNudgeAt: 0
  }), userId);
}

function getMeetingModeSummary(userId = getCurrentUserId()) {
  const state = readOperatorState(userId);
  if (!state.meetingActive) {
    return "meeting mode is off.";
  }
  return `meeting mode is live${state.meetingTopic ? ` on ${state.meetingTopic}` : ""}. anna will capture decisions and actions.`;
}

function getFocusModeSummary(userId = getCurrentUserId()) {
  const state = readOperatorState(userId);
  if (!state.focusTaskTitle || !state.focusEndsAt || state.focusEndsAt <= Date.now()) {
    return "focus mode is off.";
  }
  return `focus mode is on ${state.focusTaskTitle} until ${new Date(state.focusEndsAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  })}.`;
}

function extractOperatorDurationMinutes(text, fallback = 45) {
  const match = String(text || "").match(/(\d{1,3})\s*(?:m|min|mins|minute|minutes|h|hr|hrs|hour|hours)\b/);
  if (!match) {
    return fallback;
  }
  const amount = Number(match[1] || 0) || fallback;
  return /\b(?:h|hr|hrs|hour|hours)\b/.test(match[0]) ? amount * 60 : amount;
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

function normalizeTaskPriority(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["top", "highest", "urgent"].includes(normalized)) {
    return "top";
  }
  if (normalized === "high") {
    return "high";
  }
  if (normalized === "low") {
    return "low";
  }
  return "normal";
}

function normalizeTaskFocusLabel(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) {
    return "";
  }
  if (normalized.includes("tonight")) {
    return "tonight";
  }
  if (normalized.includes("today")) {
    return "today";
  }
  if (normalized.includes("tomorrow")) {
    return "tomorrow";
  }
  if (normalized.includes("this week")) {
    return "this week";
  }
  return normalized.slice(0, 40);
}

function normalizeTaskWorkflowStatus(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["active", "in progress", "working"].includes(normalized)) {
    return "active";
  }
  if (["blocked", "stuck"].includes(normalized)) {
    return "blocked";
  }
  if (["paused", "hold", "on hold"].includes(normalized)) {
    return "paused";
  }
  if (["queued", "backlog", "idle"].includes(normalized)) {
    return "queued";
  }
  if (["done", "complete", "completed", "finished"].includes(normalized)) {
    return "done";
  }
  return "queued";
}

function normalizeTaskTextField(value, maxLength = 180) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function normalizeTaskProgress(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round(num)));
}

function normalizeTaskReminderCadence(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["daily", "every day", "everyday"].includes(normalized)) {
    return "daily";
  }
  if (["weekday", "weekdays", "every weekday", "every workday"].includes(normalized)) {
    return "weekday";
  }
  if (["weekly", "every week"].includes(normalized)) {
    return "weekly";
  }
  return "";
}

function normalizeTaskDependencyList(rawList) {
  if (!Array.isArray(rawList)) {
    return [];
  }
  return Array.from(new Set(rawList.map((item) => normalizeTaskTitle(item)).filter(Boolean))).slice(0, 8);
}

function getNextReminderTimestampFromCadence(reminderAt, cadence) {
  const base = Number(reminderAt || 0) || 0;
  const normalizedCadence = normalizeTaskReminderCadence(cadence);
  if (!base || !normalizedCadence) {
    return 0;
  }
  const next = new Date(base);
  if (normalizedCadence === "daily") {
    next.setDate(next.getDate() + 1);
    return next.getTime();
  }
  if (normalizedCadence === "weekly") {
    next.setDate(next.getDate() + 7);
    return next.getTime();
  }
  do {
    next.setDate(next.getDate() + 1);
  } while (next.getDay() === 0 || next.getDay() === 6);
  return next.getTime();
}

function isTaskReminderOverdue(entry) {
  const reminderAt = Number(entry?.reminderAt || 0) || 0;
  return Boolean(reminderAt && !entry?.completed && reminderAt < Date.now());
}

function formatTaskReminderSummary(entry) {
  const reminderAt = Number(entry?.reminderAt || 0) || 0;
  const cadence = normalizeTaskReminderCadence(entry?.reminderCadence);
  if (!reminderAt) {
    return cadence ? `recurs ${cadence}` : "no follow-up set";
  }

  const label = formatTaskDueLabel(reminderAt, entry?.reminderLabel || "");
  if (isTaskReminderOverdue(entry)) {
    return cadence ? `overdue since ${label} · repeats ${cadence}` : `overdue since ${label}`;
  }
  return cadence ? `${label} · repeats ${cadence}` : label;
}

function isTaskScheduledForDay(entry, dayStart = getTodayStartTimestamp()) {
  const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
  return Boolean(scheduledAt && scheduledAt >= dayStart && scheduledAt < dayStart + 86400000);
}

function getTaskScheduleBucket(entry) {
  const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
  if (!scheduledAt) {
    return "";
  }
  const hour = new Date(scheduledAt).getHours();
  if (hour < 12) {
    return "morning";
  }
  if (hour < 17) {
    return "afternoon";
  }
  return "evening";
}

function getTaskDependencyState(entry, userId = getCurrentUserId()) {
  const dependencies = normalizeTaskDependencyList(entry?.dependsOn);
  const blocking = dependencies.filter((depTitle) => {
    const dep = readTaskEntry(depTitle, userId);
    return dep.title && !dep.completed;
  });
  return {
    dependencies,
    blocking,
    ready: !blocking.length
  };
}

function buildTaskDependencySummary(entry, userId = getCurrentUserId()) {
  const dependencyState = getTaskDependencyState(entry, userId);
  if (!dependencyState.dependencies.length) {
    return "";
  }
  if (dependencyState.blocking.length) {
    return `waiting on ${dependencyState.blocking.join(", ")}`;
  }
  return `deps clear: ${dependencyState.dependencies.join(", ")}`;
}

function getTaskBoardRank(entry, userId = getCurrentUserId()) {
  if (!entry || entry.completed) {
    return -999;
  }
  const dependencyState = getTaskDependencyState(entry, userId);
  const overdueReminder = isTaskReminderOverdue(entry);
  const dueSoon = Number(entry?.dueAt || 0) && Number(entry.dueAt) <= Date.now() + 6 * 60 * 60 * 1000;
  const focusToday = normalizeTaskFocusLabel(entry?.focusLabel) === "today" || normalizeTaskFocusLabel(entry?.focusLabel) === "tonight";
  const scheduledToday = isTaskScheduledForDay(entry);
  const scheduledSoon = Number(entry?.scheduledAt || 0) && Number(entry.scheduledAt) <= Date.now() + 4 * 60 * 60 * 1000;
  const priority = normalizeTaskPriority(entry?.priority);
  let score = 0;
  score += overdueReminder ? 90 : 0;
  score += dueSoon ? 70 : 0;
  score += focusToday ? 50 : 0;
  score += scheduledToday ? 55 : 0;
  score += scheduledSoon ? 20 : 0;
  score += priority === "top" ? 40 : priority === "high" ? 20 : 0;
  score += normalizeTaskWorkflowStatus(entry?.workflowStatus) === "active" ? 10 : 0;
  score += getTaskProgressValue(entry) >= 60 ? 6 : 0;
  score -= dependencyState.blocking.length ? 45 : 0;
  score -= normalizeTaskWorkflowStatus(entry?.workflowStatus) === "blocked" ? 20 : 0;
  return score;
}

function getDailyBriefingData(userId = getCurrentUserId()) {
  const entries = getTaskEntriesForUser(userId).filter((entry) => entry?.title && !entry.completed);
  const ranked = [...entries].sort((a, b) => getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId));
  const focus = ranked.slice(0, 3).map((entry) => {
    const dependencySummary = buildTaskDependencySummary(entry, userId);
    return {
      title: entry.title,
      next: getTaskNextActionText(entry),
      meta: [
        ...buildTaskOwnershipParts(entry),
        ...buildTaskExecutionParts(entry).filter((item) => !item.startsWith("next ")),
        dependencySummary
      ].filter(Boolean).slice(0, 3)
    };
  });

  const overdue = entries.filter((entry) => isTaskReminderOverdue(entry)).map((entry) => entry.title);
  const blocked = entries
    .map((entry) => ({ title: entry.title, blockedBy: getTaskDependencyState(entry, userId).blocking }))
    .filter((entry) => entry.blockedBy.length)
    .slice(0, 3);

  const alerts = [];
  if (overdue.length) {
    alerts.push(`${overdue.length} overdue follow-up${overdue.length === 1 ? "" : "s"}`);
  }
  if (blocked.length) {
    alerts.push(`${blocked.length} task${blocked.length === 1 ? " is" : "s are"} waiting on dependencies`);
  }
  if (!alerts.length && focus.length) {
    alerts.push("board looks clean. pick a focus task and move it today");
  }

  const summary = !focus.length
    ? "no active tasks yet. ask anna for a to-do list and she'll line up the board."
    : `top move${focus.length === 1 ? "" : "s"} today: ${focus.map((item) => item.title).join(", ")}.`;

  return {
    summary,
    alerts,
    focus,
    overdue,
    blocked
  };
}

function buildDailyBriefingReply(userId = getCurrentUserId()) {
  const briefing = getDailyBriefingData(userId);
  if (!briefing.focus.length) {
    return briefing.summary;
  }
  const focusLines = briefing.focus.map((item) => `${item.title} → ${item.next}`).join("; ");
  const alertText = briefing.alerts.length ? ` ${briefing.alerts.join(". ")}.` : "";
  return `${briefing.summary} ${focusLines}.${alertText}`.trim();
}

function getMilestoneHealthScore(rollup) {
  let score = 100;
  score -= rollup.blockedCount * 28;
  score -= rollup.overdueCount * 24;
  score -= rollup.unscheduledCount * 10;
  score -= rollup.unplannedDueSoonCount * 14;
  score += rollup.scheduledCount * 5;
  score += rollup.completedCount * 6;
  score += rollup.activeCount * 4;
  score += rollup.progressAverage >= 65 ? 6 : 0;
  return Math.max(0, Math.min(100, score));
}

function getMilestoneHealthLabel(score, rollup) {
  if (rollup.blockedCount > 0 || rollup.overdueCount > 0) {
    return "blocked";
  }
  if (score < 55 || rollup.unplannedDueSoonCount > 0) {
    return "slipping";
  }
  if (score < 75 || rollup.unscheduledCount > 1) {
    return "at risk";
  }
  return "on track";
}

function getMilestoneRollups(userId = getCurrentUserId()) {
  const entries = getTaskEntriesForUser(userId).filter((entry) => entry?.title && normalizeTaskMilestone(entry?.milestone));
  const groups = new Map();

  entries.forEach((entry) => {
    const milestone = normalizeTaskMilestone(entry.milestone);
    if (!milestone) {
      return;
    }
    if (!groups.has(milestone)) {
      groups.set(milestone, []);
    }
    groups.get(milestone).push(entry);
  });

  return Array.from(groups.entries())
    .map(([milestone, items]) => {
      const openItems = items.filter((entry) => !entry.completed);
      const completedCount = items.filter((entry) => entry.completed).length;
      const blockedCount = openItems.filter((entry) => normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked" || getTaskDependencyState(entry, userId).blocking.length).length;
      const overdueCount = openItems.filter((entry) => isTaskReminderOverdue(entry) || (Number(entry?.dueAt || 0) && Number(entry.dueAt) < Date.now())).length;
      const dueSoonCount = openItems.filter((entry) => Number(entry?.dueAt || 0) && Number(entry.dueAt) <= Date.now() + 24 * 60 * 60 * 1000).length;
      const scheduledCount = openItems.filter((entry) => Number(entry?.scheduledAt || 0) > 0).length;
      const unscheduledCount = openItems.filter((entry) => !Number(entry?.scheduledAt || 0)).length;
      const unplannedDueSoonCount = openItems.filter((entry) => Number(entry?.dueAt || 0) && Number(entry.dueAt) <= Date.now() + 24 * 60 * 60 * 1000 && !Number(entry?.scheduledAt || 0)).length;
      const activeCount = openItems.filter((entry) => normalizeTaskWorkflowStatus(entry.workflowStatus) === "active").length;
      const progressAverage = openItems.length
        ? Math.round(openItems.reduce((sum, entry) => sum + getTaskProgressValue(entry), 0) / openItems.length)
        : 100;
      const nextDueAt = openItems.reduce((min, entry) => {
        const dueAt = Number(entry?.dueAt || 0) || 0;
        return dueAt && (!min || dueAt < min) ? dueAt : min;
      }, 0);
      const topTasks = [...openItems]
        .sort((a, b) => getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId))
        .slice(0, 3)
        .map((entry) => entry.title);

      const rollup = {
        milestone,
        totalCount: items.length,
        openCount: openItems.length,
        completedCount,
        blockedCount,
        overdueCount,
        dueSoonCount,
        scheduledCount,
        unscheduledCount,
        unplannedDueSoonCount,
        activeCount,
        progressAverage,
        nextDueAt,
        topTasks
      };

      const score = getMilestoneHealthScore(rollup);
      const health = getMilestoneHealthLabel(score, rollup);
      return {
        ...rollup,
        score,
        health,
        dueLabel: nextDueAt ? formatTaskDueLabel(nextDueAt, "") : "",
        summaryParts: [
          `${completedCount}/${items.length} done`,
          `${progressAverage}% avg progress`,
          blockedCount ? `${blockedCount} blocked` : "",
          overdueCount ? `${overdueCount} overdue` : "",
          unscheduledCount ? `${unscheduledCount} unscheduled` : "",
          nextDueAt ? `next due ${formatTaskDueLabel(nextDueAt, "")}` : ""
        ].filter(Boolean)
      };
    })
    .sort((a, b) => a.score - b.score || a.milestone.localeCompare(b.milestone));
}

function getMilestoneStatusData(userId = getCurrentUserId()) {
  const rollups = getMilestoneRollups(userId);
  const slipping = rollups.filter((item) => item.health === "slipping" || item.health === "blocked");
  const summary = !rollups.length
    ? "no milestones yet. assign tasks to a milestone and anna will track it."
    : slipping.length
      ? `${slipping.length} milestone${slipping.length === 1 ? " is" : "s are"} off track.`
      : `all ${rollups.length} milestone${rollups.length === 1 ? " is" : "s are"} on track or manageable.`;

  return {
    summary,
    rollups,
    slipping: slipping.map((item) => item.milestone)
  };
}

function buildMilestoneStatusReply(targetMilestone = "", userId = getCurrentUserId()) {
  const normalizedTarget = normalizeTaskMilestone(targetMilestone);
  const data = getMilestoneStatusData(userId);
  if (!data.rollups.length) {
    return data.summary;
  }

  if (normalizedTarget) {
    const match = data.rollups.find((item) => item.milestone === normalizedTarget || item.milestone.includes(normalizedTarget));
    if (!match) {
      return `i can't find a ${normalizedTarget} milestone yet.`;
    }
    const topText = match.topTasks.length ? ` top tasks: ${match.topTasks.join(", ")}.` : "";
    return `${match.milestone} is ${match.health}. ${match.summaryParts.slice(0, 4).join(" · ")}.${topText}`.trim();
  }

  const lead = data.rollups.slice(0, 3).map((item) => `${item.milestone} ${item.health}`).join("; ");
  return `${data.summary} ${lead}.`.trim();
}

function getWeekStartTimestamp() {
  const now = new Date();
  const day = now.getDay();
  const diff = (day + 6) % 7;
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  start.setDate(start.getDate() - diff);
  return start.getTime();
}

function getWeeklyReviewData(userId = getCurrentUserId()) {
  const weekStart = getWeekStartTimestamp();
  const entries = getTaskEntriesForUser(userId);
  const openEntries = entries.filter((entry) => !entry.completed);
  const shipped = entries
    .filter((entry) => entry.completed && Number(entry.updatedAt || 0) >= weekStart)
    .sort((a, b) => (Number(b.updatedAt || 0) || 0) - (Number(a.updatedAt || 0) || 0));
  const slipped = openEntries
    .filter((entry) => {
      const blocked = normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked" || getTaskDependencyState(entry, userId).blocking.length;
      const overdue = isTaskReminderOverdue(entry) || (Number(entry?.dueAt || 0) && Number(entry.dueAt) < Date.now());
      const dueSoonUnplanned = Number(entry?.dueAt || 0) && Number(entry.dueAt) <= Date.now() + 48 * 60 * 60 * 1000 && !Number(entry?.scheduledAt || 0);
      return blocked || overdue || dueSoonUnplanned;
    })
    .sort((a, b) => getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId));
  const nextBets = openEntries
    .filter((entry) => !slipped.some((item) => item.title === entry.title))
    .filter((entry) => !(normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked" || getTaskDependencyState(entry, userId).blocking.length))
    .sort((a, b) => getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId))
    .slice(0, 3);
  const touchedCount = entries.filter((entry) => Number(entry.updatedAt || 0) >= weekStart).length;

  const summary = !entries.length
    ? "no board movement yet this week."
    : `this week: ${shipped.length} shipped · ${slipped.length} slipping · ${touchedCount} touched.`;

  return {
    summary,
    wins: shipped.slice(0, 4).map((entry) => ({
      title: entry.title,
      meta: [normalizeTaskMilestone(entry.milestone) ? `milestone ${normalizeTaskMilestone(entry.milestone)}` : "", formatRelativeTime(Date.now() - Number(entry.updatedAt || 0))].filter(Boolean).join(" · ")
    })),
    slips: slipped.slice(0, 4).map((entry) => ({
      title: entry.title,
      meta: [
        buildTaskDependencySummary(entry, userId) || entry.blocker || "needs attention",
        Number(entry?.dueAt || 0) ? `due ${formatTaskDueLabel(entry.dueAt, entry.dueLabel)}` : "",
        normalizeTaskMilestone(entry.milestone) ? `milestone ${normalizeTaskMilestone(entry.milestone)}` : ""
      ].filter(Boolean).slice(0, 2).join(" · ")
    })),
    bets: nextBets.map((entry) => ({
      title: entry.title,
      meta: [
        `next ${getTaskNextActionText(entry)}`,
        normalizeTaskMilestone(entry.milestone) ? `milestone ${normalizeTaskMilestone(entry.milestone)}` : "",
        Number(entry?.scheduledAt || 0) ? `plan ${formatTaskScheduleLabel(entry.scheduledAt, entry.scheduledLabel)}` : ""
      ].filter(Boolean).slice(0, 2).join(" · ")
    })),
    shippedCount: shipped.length,
    slippingCount: slipped.length,
    touchedCount
  };
}

function buildWeeklyReviewReply(section = "all", userId = getCurrentUserId()) {
  const review = getWeeklyReviewData(userId);
  if (!review.wins.length && !review.slips.length && !review.bets.length) {
    return review.summary;
  }

  if (section === "wins") {
    return review.wins.length
      ? `wins this week: ${review.wins.map((item) => item.title).join(", ")}.`
      : "no wins landed yet this week.";
  }
  if (section === "slips") {
    return review.slips.length
      ? `slipping this week: ${review.slips.map((item) => item.title).join(", ")}.`
      : "nothing looks like it's slipping right now.";
  }
  if (section === "bets") {
    return review.bets.length
      ? `next bets: ${review.bets.map((item) => item.title).join(", ")}.`
      : "no clear next bets yet. the board needs more signal.";
  }

  const winText = review.wins.length ? ` wins: ${review.wins.map((item) => item.title).join(", ")}.` : "";
  const slipText = review.slips.length ? ` slips: ${review.slips.map((item) => item.title).join(", ")}.` : "";
  const betText = review.bets.length ? ` next bets: ${review.bets.map((item) => item.title).join(", ")}.` : "";
  return `${review.summary}${winText}${slipText}${betText}`.trim();
}

function getTodayStartTimestamp() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
}

function getTodayPlanData(userId = getCurrentUserId()) {
  const entries = getTaskEntriesForUser(userId).filter((entry) => entry?.title && !entry.completed);
  const todayStart = getTodayStartTimestamp();
  const todayEnd = todayStart + 86400000;
  const planned = entries
    .filter((entry) => {
      const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
      return scheduledAt >= todayStart && scheduledAt < todayEnd;
    })
    .sort((a, b) => {
      const tsDiff = (Number(a?.scheduledAt || 0) || 0) - (Number(b?.scheduledAt || 0) || 0);
      return tsDiff || getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId);
    });

  const carryOver = entries
    .filter((entry) => {
      const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
      return scheduledAt && scheduledAt < todayStart;
    })
    .sort((a, b) => (Number(a?.scheduledAt || 0) || 0) - (Number(b?.scheduledAt || 0) || 0));

  const milestoneNames = Array.from(new Set(planned.map((entry) => normalizeTaskMilestone(entry.milestone)).filter(Boolean))).slice(0, 3);
  const manualCount = planned.filter((entry) => normalizeTaskScheduleSource(entry.scheduledSource) === "manual").length;
  const autoCount = planned.filter((entry) => normalizeTaskScheduleSource(entry.scheduledSource) === "auto").length;
  const summary = !planned.length
    ? carryOver.length
      ? `${carryOver.length} carryover task${carryOver.length === 1 ? "" : "s"} need to be re-slotted today.`
      : "today plan is open. schedule a task onto it."
    : `today plan has ${planned.length} task${planned.length === 1 ? "" : "s"}${milestoneNames.length ? ` across ${milestoneNames.join(", ")}` : ""}${manualCount || autoCount ? ` · ${manualCount} manual · ${autoCount} auto` : ""}.`;

  return {
    summary,
    planned: planned.map((entry) => ({
      title: entry.title,
      time: formatTaskScheduleLabel(entry.scheduledAt, entry.scheduledLabel),
      bucket: getTaskScheduleBucket(entry),
      next: getTaskNextActionText(entry),
      milestone: normalizeTaskMilestone(entry.milestone),
      source: normalizeTaskScheduleSource(entry.scheduledSource),
      durationMinutes: estimateTaskScheduleDuration(entry),
      meta: buildTaskExecutionParts(entry).filter((item) => !item.startsWith("next ")).slice(0, 2)
    })),
    carryOver: carryOver.slice(0, 3).map((entry) => entry.title),
    milestones: milestoneNames,
    manualCount,
    autoCount
  };
}

function buildTodayPlanReply(userId = getCurrentUserId()) {
  const todayPlan = getTodayPlanData(userId);
  if (!todayPlan.planned.length) {
    return todayPlan.summary;
  }
  const lines = todayPlan.planned
    .slice(0, 5)
    .map((item) => `${item.time}: ${item.title} → ${item.next}`)
    .join("; ");
  const carryText = todayPlan.carryOver.length ? ` Carryover: ${todayPlan.carryOver.join(", ")}.` : "";
  return `${todayPlan.summary} ${lines}.${carryText}`.trim();
}

function getBoardStandupData(userId = getCurrentUserId()) {
  const entries = getTaskEntriesForUser(userId);
  const todayStart = getTodayStartTimestamp();
  const active = entries.filter((entry) => normalizeTaskWorkflowStatus(entry.workflowStatus) === "active" && !entry.completed);
  const blocked = entries.filter((entry) => !entry.completed && (normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked" || getTaskDependencyState(entry, userId).blocking.length));
  const shipped = entries.filter((entry) => entry.completed && Number(entry.updatedAt || 0) >= todayStart);
  const touched = entries.filter((entry) => Number(entry.updatedAt || 0) >= todayStart && !entry.completed);
  const overdue = entries.filter((entry) => isTaskReminderOverdue(entry));

  const summaryParts = [];
  if (active.length) summaryParts.push(`${active.length} active`);
  if (blocked.length) summaryParts.push(`${blocked.length} blocked`);
  if (shipped.length) summaryParts.push(`${shipped.length} shipped today`);
  if (touched.length && !active.length) summaryParts.push(`${touched.length} moved today`);
  if (overdue.length) summaryParts.push(`${overdue.length} overdue follow-up${overdue.length === 1 ? "" : "s"}`);

  return {
    summary: summaryParts.length ? `standup: ${summaryParts.join(" · ")}.` : "standup: no movement yet today.",
    active,
    blocked,
    shipped,
    touched,
    overdue
  };
}

function getBoardTimelineData(userId = getCurrentUserId(), limit = 6) {
  const entries = getTaskEntriesForUser(userId);
  const points = [];

  entries.forEach((entry) => {
    const updatedAt = Number(entry.updatedAt || 0) || 0;
    if (updatedAt) {
      points.push({
        ts: updatedAt,
        title: entry.title,
        kind: entry.completed ? "shipped" : normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked" ? "blocked" : "updated",
        detail: entry.completed
          ? "marked done"
          : normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked"
            ? entry.blocker || buildTaskDependencySummary(entry, userId) || "needs attention"
            : getTaskNextActionText(entry)
      });
    }

    const reminderAt = Number(entry.lastReminderAt || 0) || 0;
    if (reminderAt) {
      points.push({
        ts: reminderAt,
        title: entry.title,
        kind: "follow-up",
        detail: formatTaskReminderSummary(entry)
      });
    }

    const sessionStart = Number(entry.sessionStartedAt || 0) || 0;
    if (sessionStart) {
      points.push({
        ts: sessionStart,
        title: entry.title,
        kind: "sprint",
        detail: formatTaskSessionText(entry)
      });
    }
  });

  return points
    .sort((a, b) => b.ts - a.ts)
    .slice(0, limit);
}

function buildBoardStandupReply(userId = getCurrentUserId()) {
  const standup = getBoardStandupData(userId);
  const activeLine = standup.active.slice(0, 3).map((entry) => `${entry.title} → ${getTaskNextActionText(entry)}`).join("; ");
  const blockedLine = standup.blocked.slice(0, 2).map((entry) => `${entry.title} (${buildTaskDependencySummary(entry, userId) || entry.blocker || "blocked"})`).join("; ");
  const shippedLine = standup.shipped.slice(0, 2).map((entry) => entry.title).join(", ");
  const parts = [standup.summary];
  if (activeLine) parts.push(`moving: ${activeLine}.`);
  if (blockedLine) parts.push(`blocked: ${blockedLine}.`);
  if (shippedLine) parts.push(`shipped: ${shippedLine}.`);
  return parts.join(" ").trim();
}

function parseTaskReminderPhrase(rawText) {
  const cleaned = String(rawText || "").trim().toLowerCase();
  if (!cleaned) {
    return null;
  }

  const relativeMatch = cleaned.match(/\bin\s+(\d{1,3})\s+(minute|minutes|hour|hours|day|days)\b/);
  if (relativeMatch) {
    const amount = Number(relativeMatch[1]);
    const unit = relativeMatch[2];
    const next = new Date();
    if (unit.startsWith("minute")) {
      next.setMinutes(next.getMinutes() + amount);
    } else if (unit.startsWith("hour")) {
      next.setHours(next.getHours() + amount);
    } else {
      next.setDate(next.getDate() + amount);
    }
    return {
      reminderAt: next.getTime(),
      reminderLabel: cleaned,
      reminderCadence: ""
    };
  }

  const cadenceMatch = cleaned.match(/\bevery\s+(day|weekday|weekdays|week|morning)\b/);
  const cadence = cadenceMatch
    ? cadenceMatch[1] === "week" ? "weekly" : cadenceMatch[1] === "morning" ? "daily" : normalizeTaskReminderCadence(cadenceMatch[1])
    : "";

  const parsedDue = parseTaskDuePhrase(cleaned.replace(/\bevery\s+(day|weekday|weekdays|week|morning)\b/g, "").trim());
  if (parsedDue) {
    return {
      reminderAt: Number(parsedDue.dueAt || 0) || 0,
      reminderLabel: cleaned,
      reminderCadence: cadence
    };
  }

  return cadence
    ? {
        reminderAt: getNextReminderTimestampFromCadence(Date.now(), cadence),
        reminderLabel: cleaned,
        reminderCadence: cadence
      }
    : null;
}

function extractReminderTimingPhrase(text) {
  const normalized = String(text || "").trim().toLowerCase();
  if (!normalized) {
    return "";
  }
  const explicit = normalized.match(/\b(in\s+\d+\s+(?:minute|minutes|hour|hours|day|days)|tomorrow(?:\s+morning)?|today(?:\s+afternoon|\s+evening)?|tonight|this\s+afternoon|this\s+evening|every\s+day|everyday|every\s+weekday|every\s+week)\b/);
  return explicit ? explicit[1] : normalized;
}

function formatTaskDueLabel(dueAt, dueLabel = "") {
  const timestamp = Number(dueAt || 0) || 0;
  if (!timestamp) {
    return String(dueLabel || "").trim().toLowerCase();
  }

  const dueDate = new Date(timestamp);
  const now = new Date();
  const dueDay = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  const nowDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayDiff = Math.round((dueDay.getTime() - nowDay.getTime()) / 86400000);
  const timeLabel = dueDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: dueDate.getMinutes() ? "2-digit" : undefined
  });

  if (dayDiff === 0) {
    return `today ${timeLabel}`;
  }
  if (dayDiff === 1) {
    return `tomorrow ${timeLabel}`;
  }
  if (dayDiff === -1) {
    return `yesterday ${timeLabel}`;
  }

  const dateLabel = dueDate.toLocaleDateString([], {
    month: "short",
    day: "numeric"
  });
  return `${dateLabel} ${timeLabel}`;
}

function normalizeTaskMilestone(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^(?:the\s+)?/, "")
    .replace(/\s+milestone$/, "")
    .slice(0, 80);
}

function normalizeTaskScheduleSource(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return normalized === "manual" || normalized === "auto" ? normalized : "";
}

function normalizeTaskScheduleDuration(value) {
  const amount = Number(value || 0) || 0;
  if (!amount) {
    return 0;
  }
  const rounded = Math.round(amount / 15) * 15;
  return Math.max(15, Math.min(180, rounded));
}

function getDefaultScheduledTimestamp(cleaned, now = new Date()) {
  const scheduled = new Date(now);
  scheduled.setSeconds(0, 0);

  if (/\btomorrow\b/.test(cleaned)) {
    scheduled.setDate(scheduled.getDate() + 1);
  }

  if (/\bmorning\b/.test(cleaned)) {
    scheduled.setHours(10, 0, 0, 0);
  } else if (/\bafternoon\b/.test(cleaned)) {
    scheduled.setHours(15, 0, 0, 0);
  } else if (/\bevening\b/.test(cleaned)) {
    scheduled.setHours(19, 0, 0, 0);
  } else if (/\btonight\b/.test(cleaned)) {
    scheduled.setHours(20, 0, 0, 0);
  } else if (/\b(?:right now|now)\b/.test(cleaned)) {
    const roundedMinutes = Math.ceil(now.getMinutes() / 15) * 15;
    if (roundedMinutes >= 60) {
      scheduled.setHours(scheduled.getHours() + 1, 0, 0, 0);
    } else {
      scheduled.setMinutes(roundedMinutes, 0, 0);
    }
  } else {
    const nextHour = new Date(now);
    nextHour.setMinutes(0, 0, 0);
    nextHour.setHours(nextHour.getHours() + 1);
    scheduled.setTime(nextHour.getTime());
    if (/\btomorrow\b/.test(cleaned) && scheduled.getHours() < 9) {
      scheduled.setHours(10, 0, 0, 0);
    }
  }

  if (!/\btomorrow\b/.test(cleaned) && scheduled.getTime() < Date.now() - 5 * 60 * 1000) {
    scheduled.setHours(scheduled.getHours() + 1);
  }

  return scheduled.getTime();
}

function parseTaskSchedulePhrase(rawText) {
  const cleaned = String(rawText || "")
    .trim()
    .toLowerCase()
    .replace(/^[\s,:-]+/, "")
    .replace(/[.?!]+$/, "")
    .replace(/today'?s\s+plan/g, "today")
    .replace(/first thing tomorrow/g, "tomorrow morning");

  if (!cleaned) {
    return null;
  }

  const parsedDue = parseTaskDuePhrase(cleaned);
  if (parsedDue?.dueAt) {
    return {
      scheduledAt: Number(parsedDue.dueAt || 0) || 0,
      scheduledLabel: cleaned
    };
  }

  if (/\b(today|tomorrow|tonight|morning|afternoon|evening|right now|now)\b/.test(cleaned)) {
    return {
      scheduledAt: getDefaultScheduledTimestamp(cleaned),
      scheduledLabel: cleaned
    };
  }

  return null;
}

function formatTaskScheduleLabel(scheduledAt, scheduledLabel = "") {
  const timestamp = Number(scheduledAt || 0) || 0;
  if (!timestamp) {
    return String(scheduledLabel || "").trim().toLowerCase();
  }
  return formatTaskDueLabel(timestamp, scheduledLabel);
}

function formatTaskScheduleSourceLabel(entry) {
  const source = normalizeTaskScheduleSource(entry?.scheduledSource);
  if (!source) {
    return "";
  }
  return source === "manual" ? "manual slot" : "auto slot";
}

function estimateTaskScheduleDuration(entry) {
  const explicit = normalizeTaskScheduleDuration(entry?.scheduledDurationMinutes);
  if (explicit) {
    return explicit;
  }

  const openSubtasks = Array.isArray(entry?.subtasks) ? entry.subtasks.filter((item) => !item.completed).length : 0;
  const progress = getTaskProgressValue(entry);
  let minutes = openSubtasks >= 4 ? 90 : openSubtasks >= 2 ? 60 : 45;

  if (progress >= 70) {
    minutes -= 15;
  } else if (progress <= 15 && openSubtasks >= 3) {
    minutes += 15;
  }

  if (normalizeTaskWorkflowStatus(entry?.workflowStatus) === "active") {
    minutes += 15;
  }

  return normalizeTaskScheduleDuration(minutes);
}

function getRoundedQuarterTimestamp(timestamp = Date.now()) {
  const next = new Date(timestamp);
  next.setSeconds(0, 0);
  const roundedMinutes = Math.ceil(next.getMinutes() / 15) * 15;
  if (roundedMinutes >= 60) {
    next.setHours(next.getHours() + 1, 0, 0, 0);
  } else {
    next.setMinutes(roundedMinutes, 0, 0);
  }
  return next.getTime();
}

function getDayStartTimestamp(offsetDays = 0) {
  const now = new Date();
  const day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  day.setDate(day.getDate() + Number(offsetDays || 0));
  return day.getTime();
}

function getTodayPlanningWindow(dayOffset = 0, nowTs = Date.now()) {
  const dayStartTs = getDayStartTimestamp(dayOffset);
  const dayStart = new Date(dayStartTs);
  dayStart.setHours(10, 0, 0, 0);
  const dayEnd = new Date(dayStartTs);
  dayEnd.setHours(18, 30, 0, 0);
  const isToday = dayOffset === 0;
  const start = isToday
    ? Math.max(dayStart.getTime(), getRoundedQuarterTimestamp(nowTs + 10 * 60 * 1000))
    : dayStart.getTime();
  return {
    start,
    end: dayEnd.getTime(),
    dayStart: dayStartTs,
    dayEnd: dayStartTs + 86400000
  };
}

function doScheduleBlocksOverlap(startA, endA, startB, endB) {
  return startA < endB && endA > startB;
}

function getNextOpenPlanningSlot(cursorTs, durationMinutes, reservedBlocks, planningEndTs) {
  let startTs = Math.max(cursorTs, getRoundedQuarterTimestamp(cursorTs));
  const durationMs = normalizeTaskScheduleDuration(durationMinutes || 45) * 60 * 1000;
  const sortedBlocks = [...reservedBlocks].sort((a, b) => a.start - b.start);

  while (startTs + durationMs <= planningEndTs) {
    const overlap = sortedBlocks.find((block) => doScheduleBlocksOverlap(startTs, startTs + durationMs, block.start, block.end));
    if (!overlap) {
      return startTs;
    }
    startTs = getRoundedQuarterTimestamp(overlap.end + 15 * 60 * 1000);
  }

  return 0;
}

function buildAutoPlanForOffset(dayOffset = 0, userId = getCurrentUserId(), applyChanges = true) {
  const now = Date.now();
  const { start, end, dayStart, dayEnd } = getTodayPlanningWindow(dayOffset, now);
  const dayName = dayOffset === 0 ? "today" : dayOffset === 1 ? "tomorrow" : "that day";
  if (start >= end) {
    return {
      changed: false,
      summary: `${dayName} is basically closed out. plan the next day instead.`,
      slots: [],
      scheduled: [],
      preserved: [],
      carryOver: []
    };
  }

  const entries = getTaskEntriesForUser(userId).filter((entry) => entry?.title && !entry.completed);
  const manualBlocks = [];
  const preserved = [];
  const autoCandidates = [];
  const carryOver = [];
  const existingDaySlots = [];

  entries.forEach((entry) => {
    const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
    const source = normalizeTaskScheduleSource(entry?.scheduledSource);
    const duration = estimateTaskScheduleDuration(entry);
    const isTargetDay = Boolean(scheduledAt && scheduledAt >= dayStart && scheduledAt < dayEnd);
    const isReady = !getTaskDependencyState(entry, userId).blocking.length && normalizeTaskWorkflowStatus(entry?.workflowStatus) !== "blocked";

    if (scheduledAt && scheduledAt < dayStart) {
      carryOver.push(entry.title);
    }

    if (isTargetDay) {
      existingDaySlots.push({
        title: entry.title,
        scheduledAt,
        scheduledLabel: entry.scheduledLabel || formatTaskDueLabel(scheduledAt, ""),
        scheduledSource: source || "manual",
        scheduledDurationMinutes: duration,
        existing: true
      });
    }

    if (isTargetDay && source === "manual") {
      manualBlocks.push({
        title: entry.title,
        start: scheduledAt,
        end: scheduledAt + duration * 60 * 1000
      });
      preserved.push(entry.title);
      return;
    }

    if (scheduledAt && source === "manual") {
      return;
    }

    if (isReady) {
      autoCandidates.push(entry);
    }
  });

  const existingTitles = new Set(existingDaySlots.map((item) => item.title));
  const sortedCandidates = autoCandidates
    .filter((entry) => !existingTitles.has(entry.title) || normalizeTaskScheduleSource(entry.scheduledSource) === "auto")
    .sort((a, b) => {
      const rankDiff = getTaskBoardRank(b, userId) - getTaskBoardRank(a, userId);
      if (rankDiff) {
        return rankDiff;
      }
      return normalizeTaskMilestone(a.milestone).localeCompare(normalizeTaskMilestone(b.milestone));
    });

  const maxAutoTasks = Math.max(0, Math.min(5, Math.floor((end - start) / (60 * 60 * 1000))));
  const reservedBlocks = [...manualBlocks];
  const scheduled = [];
  let cursor = start;

  sortedCandidates.forEach((entry) => {
    if (scheduled.length >= maxAutoTasks) {
      return;
    }
    const duration = estimateTaskScheduleDuration(entry);
    const slotStart = getNextOpenPlanningSlot(cursor, duration, reservedBlocks, end);
    if (!slotStart) {
      return;
    }

    const slot = {
      title: entry.title,
      scheduledAt: slotStart,
      scheduledLabel: formatTaskDueLabel(slotStart, ""),
      scheduledSource: applyChanges ? "auto" : "suggested",
      scheduledDurationMinutes: duration,
      existing: false
    };

    if (applyChanges) {
      setTaskPlanningState(entry.title, {
        scheduledAt: slot.scheduledAt,
        scheduledLabel: slot.scheduledLabel,
        scheduledSource: "auto",
        scheduledDurationMinutes: slot.scheduledDurationMinutes
      }, userId);
    }

    reservedBlocks.push({
      title: entry.title,
      start: slotStart,
      end: slotStart + duration * 60 * 1000
    });
    scheduled.push(slot);
    cursor = slotStart + duration * 60 * 1000 + 15 * 60 * 1000;
  });

  if (applyChanges) {
    entries.forEach((entry) => {
      const source = normalizeTaskScheduleSource(entry?.scheduledSource);
      const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
      const isTargetDay = Boolean(scheduledAt && scheduledAt >= dayStart && scheduledAt < dayEnd);
      const wasAutoScheduled = isTargetDay && source === "auto";
      const stillScheduled = scheduled.some((item) => item.title === entry.title);
      if (wasAutoScheduled && !stillScheduled) {
        setTaskPlanningState(entry.title, {
          scheduledAt: 0,
          scheduledLabel: "",
          scheduledSource: "",
          scheduledDurationMinutes: 0
        }, userId);
      }
    });
  }

  const allSlots = [...existingDaySlots.filter((item) => item.scheduledSource === "manual"), ...scheduled]
    .sort((a, b) => a.scheduledAt - b.scheduledAt);
  const summary = scheduled.length
    ? `rebuilt ${dayName}'s plan with ${scheduled.length} ${applyChanges ? "auto" : "suggested"} slot${scheduled.length === 1 ? "" : "s"}${preserved.length ? ` and kept ${preserved.length} manual` : ""}.`
    : preserved.length
      ? `kept ${preserved.length} manual plan slot${preserved.length === 1 ? "" : "s"}; no additional ready tasks fit ${dayName}.`
      : `no ready tasks were available to plan for ${dayName}.`;

  return {
    changed: Boolean(scheduled.length),
    summary,
    slots: allSlots,
    scheduled: scheduled.map((item) => `${item.title} at ${formatTaskScheduleLabel(item.scheduledAt, item.scheduledLabel)}`),
    preserved,
    carryOver: carryOver.slice(0, 4)
  };
}

function buildAutoTodayPlan(userId = getCurrentUserId()) {
  return buildAutoPlanForOffset(0, userId, true);
}

function buildAutoTomorrowPlan(userId = getCurrentUserId()) {
  return buildAutoPlanForOffset(1, userId, true);
}

function getTomorrowPlanData(userId = getCurrentUserId()) {
  const preview = buildAutoPlanForOffset(1, userId, false);
  const planned = preview.slots.map((item) => ({
    title: item.title,
    time: formatTaskScheduleLabel(item.scheduledAt, item.scheduledLabel),
    bucket: getTaskScheduleBucket({ scheduledAt: item.scheduledAt }),
    next: getTaskNextActionText(readTaskEntry(item.title, userId)),
    milestone: normalizeTaskMilestone(readTaskEntry(item.title, userId).milestone),
    source: item.scheduledSource,
    durationMinutes: item.scheduledDurationMinutes,
    meta: buildTaskExecutionParts(readTaskEntry(item.title, userId)).filter((part) => !part.startsWith("next ")).slice(0, 2)
  }));

  const summary = planned.length
    ? `tomorrow starts with ${planned.length} slot${planned.length === 1 ? "" : "s"}${preview.carryOver.length ? ` · ${preview.carryOver.length} carryover` : ""}.`
    : preview.carryOver.length
      ? `tomorrow needs a reset. ${preview.carryOver.length} carryover task${preview.carryOver.length === 1 ? "" : "s"} are waiting.`
      : "tomorrow is open. build a first-pass plan before you log off.";

  return {
    summary,
    planned,
    carryOver: preview.carryOver,
    preserved: preview.preserved
  };
}

function buildTomorrowPlanReply(userId = getCurrentUserId()) {
  const tomorrowPlan = getTomorrowPlanData(userId);
  if (!tomorrowPlan.planned.length) {
    return tomorrowPlan.summary;
  }
  const lines = tomorrowPlan.planned
    .slice(0, 5)
    .map((item) => `${item.time}: ${item.title} → ${item.next}`)
    .join("; ");
  const carryText = tomorrowPlan.carryOver.length ? ` Carryover: ${tomorrowPlan.carryOver.join(", ")}.` : "";
  return `${tomorrowPlan.summary} ${lines}.${carryText}`.trim();
}

function rollOverTodayToTomorrow(userId = getCurrentUserId()) {
  const todayPlan = getTodayPlanData(userId);
  const tomorrowWindow = getTodayPlanningWindow(1, Date.now());
  const tomorrowEntries = getTaskEntriesForUser(userId)
    .filter((entry) => !entry.completed)
    .filter((entry) => {
      const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
      return scheduledAt >= tomorrowWindow.dayStart && scheduledAt < tomorrowWindow.dayEnd && normalizeTaskScheduleSource(entry.scheduledSource) === "manual";
    })
    .map((entry) => ({
      start: Number(entry.scheduledAt || 0) || 0,
      end: (Number(entry.scheduledAt || 0) || 0) + estimateTaskScheduleDuration(entry) * 60 * 1000
    }));

  let cursor = tomorrowWindow.start;
  let moved = 0;
  todayPlan.planned.forEach((item) => {
    const state = readTaskEntry(item.title, userId);
    const duration = estimateTaskScheduleDuration(state);
    const slotStart = getNextOpenPlanningSlot(cursor, duration, tomorrowEntries, tomorrowWindow.end);
    if (!slotStart) {
      return;
    }
    const source = normalizeTaskScheduleSource(state.scheduledSource) || "auto";
    setTaskPlanningState(item.title, {
      scheduledAt: slotStart,
      scheduledLabel: formatTaskDueLabel(slotStart, ""),
      scheduledSource: source,
      scheduledDurationMinutes: duration
    }, userId);
    tomorrowEntries.push({
      start: slotStart,
      end: slotStart + duration * 60 * 1000
    });
    cursor = slotStart + duration * 60 * 1000 + 15 * 60 * 1000;
    moved += 1;
  });

  return {
    moved,
    summary: moved
      ? `rolled ${moved} unfinished task${moved === 1 ? "" : "s"} into tomorrow's first pass.`
      : "nothing from today needed to roll into tomorrow."
  };
}

function clearAutoTodayPlan(userId = getCurrentUserId(), dayOffset = 0) {
  const dayStart = getDayStartTimestamp(dayOffset);
  const entries = getTaskEntriesForUser(userId).filter((entry) => entry?.title && !entry.completed);
  let cleared = 0;

  entries.forEach((entry) => {
    const scheduledAt = Number(entry?.scheduledAt || 0) || 0;
    const source = normalizeTaskScheduleSource(entry?.scheduledSource);
    if (source === "auto" && scheduledAt >= dayStart && scheduledAt < dayStart + 86400000) {
      setTaskPlanningState(entry.title, {
        scheduledAt: 0,
        scheduledLabel: "",
        scheduledSource: "",
        scheduledDurationMinutes: 0
      }, userId);
      cleared += 1;
    }
  });

  return cleared;
}

function buildRiskSignals(entry, userId = getCurrentUserId()) {
  if (!entry || entry.completed) {
    return [];
  }
  const now = Date.now();
  const signals = [];
  const dependencyState = getTaskDependencyState(entry, userId);
  if (normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked") {
    signals.push({ severity: 3, text: entry.blocker ? `blocked by ${entry.blocker}` : "blocked" });
  }
  if (Number(entry.blockedAt || 0) && now - Number(entry.blockedAt) >= 12 * 60 * 60 * 1000) {
    signals.push({ severity: 3, text: `blocked too long ${formatRelativeTime(now - Number(entry.blockedAt))}` });
  }
  if (dependencyState.blocking.length) {
    signals.push({ severity: 3, text: `waiting on ${dependencyState.blocking.slice(0, 2).join(", ")}` });
  }
  if (Number(entry.dueAt || 0) && Number(entry.dueAt) < now) {
    signals.push({ severity: 3, text: `overdue ${formatTaskDueLabel(entry.dueAt, entry.dueLabel)}` });
  }
  if (isTaskReminderOverdue(entry)) {
    signals.push({ severity: 2, text: `follow-up overdue ${formatTaskReminderSummary(entry)}` });
  }
  if ((normalizeTaskPriority(entry.priority) === "top" || normalizeTaskPriority(entry.priority) === "high") && !entry.nextAction) {
    signals.push({ severity: 2, text: "missing next move" });
  }
  if (getTaskNextActionText(entry) === "define the very next move") {
    signals.push({ severity: 2, text: "weak next move" });
  }
  if (getTaskProgressValue(entry) <= 10 && !entry.subtasks.length && now - Number(entry.updatedAt || 0) >= 24 * 60 * 60 * 1000) {
    signals.push({ severity: 2, text: "low progress signal" });
  }
  if (!Number(entry.scheduledAt || 0) && Number(entry.dueAt || 0) && Number(entry.dueAt) <= now + 36 * 60 * 60 * 1000) {
    signals.push({ severity: 2, text: "due soon without a slot" });
  }
  if (Number(entry.updatedAt || 0) && now - Number(entry.updatedAt) >= 48 * 60 * 60 * 1000) {
    signals.push({ severity: 1, text: `stale ${formatRelativeTime(now - Number(entry.updatedAt))}` });
  }
  return signals;
}

function getDependencyUnlockSequence(taskTitle, userId = getCurrentUserId(), seen = new Set()) {
  const resolvedTitle = resolveTaskReference(taskTitle, taskTitle, userId);
  if (!resolvedTitle || seen.has(resolvedTitle)) {
    return [];
  }
  seen.add(resolvedTitle);
  const entry = readTaskEntry(resolvedTitle, userId);
  const directDependencies = normalizeTaskDependencyList(entry.dependsOn);
  const sequence = [];
  directDependencies.forEach((dependencyTitle) => {
    getDependencyUnlockSequence(dependencyTitle, userId, seen).forEach((item) => {
      if (!sequence.includes(item)) {
        sequence.push(item);
      }
    });
    if (!sequence.includes(dependencyTitle)) {
      sequence.push(dependencyTitle);
    }
  });
  if (!sequence.includes(resolvedTitle)) {
    sequence.push(resolvedTitle);
  }
  return sequence;
}

function buildBlockedRescuePaths(entry, userId = getCurrentUserId()) {
  if (!entry) {
    return [];
  }
  const paths = [];
  const unlockSequence = getDependencyUnlockSequence(entry.title, userId).filter((title) => title !== entry.title);
  if (unlockSequence.length) {
    paths.push(`clear the chain in order: ${unlockSequence.slice(0, 4).join(" → ")} → ${entry.title}`);
  }
  if (entry.blocker) {
    paths.push(`resolve the blocker owner for ${entry.title} and turn it into one concrete next move`);
  }
  const nextAction = getTaskNextActionText(entry);
  if (nextAction && nextAction !== "define the very next move") {
    paths.push(`if the blocker is soft, bypass it by pushing ${nextAction} now`);
  }
  if (!Number(entry.scheduledAt || 0)) {
    paths.push(`protect recovery time by forcing ${entry.title} into today’s plan once unblocked`);
  }
  return paths.slice(0, 3);
}

function getRiskRadarData(userId = getCurrentUserId()) {
  const risky = getTaskEntriesForUser(userId)
    .filter((entry) => !entry.completed)
    .map((entry) => {
      const signals = buildRiskSignals(entry, userId);
      return {
        title: entry.title,
        next: getTaskNextActionText(entry),
        signals,
        severity: signals.reduce((max, item) => Math.max(max, item.severity), 0)
      };
    })
    .filter((entry) => entry.signals.length)
    .sort((a, b) => b.severity - a.severity || b.signals.length - a.signals.length || a.title.localeCompare(b.title));
  const escalations = risky.filter((item) => item.severity >= 3);
  return {
    summary: !risky.length
      ? "board is clean right now. no active escalation risk."
      : `${risky.length} task${risky.length === 1 ? " is" : "s are"} flashing risk and ${escalations.length} need escalation-level attention.`,
    risky: risky.slice(0, 6),
    escalations: escalations.slice(0, 4)
  };
}

function buildRiskRadarReply(userId = getCurrentUserId()) {
  const radar = getRiskRadarData(userId);
  if (!radar.risky.length) {
    return radar.summary;
  }
  const lines = radar.risky.slice(0, 4).map((item) => `${item.title}: ${item.signals.slice(0, 2).map((signal) => signal.text).join(" · ")}`).join("; ");
  return `${radar.summary} ${lines}.`.trim();
}

function buildDependencyRescueData(taskTitle, userId = getCurrentUserId()) {
  const resolvedTitle = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (!resolvedTitle) {
    return null;
  }
  const entry = readTaskEntry(resolvedTitle, userId);
  const dependencyState = getTaskDependencyState(entry, userId);
  const unlockSequence = getDependencyUnlockSequence(resolvedTitle, userId);
  const actions = [];
  if (entry.blocker) {
    actions.push(`clear the blocker owner for ${resolvedTitle} and convert it into a next move`);
  }
  dependencyState.blocking.slice(0, 3).forEach((dependencyTitle) => {
    const dependencyEntry = readTaskEntry(dependencyTitle, userId);
    actions.push(`unlock ${dependencyTitle} first${dependencyEntry.nextAction ? ` by doing ${dependencyEntry.nextAction}` : ""}`);
  });
  if (!entry.nextAction) {
    actions.push(`set a concrete next move for ${resolvedTitle}`);
  }
  if (!Number(entry.scheduledAt || 0) && normalizeTaskWorkflowStatus(entry.workflowStatus) !== "blocked") {
    actions.push(`slot ${resolvedTitle} onto today’s plan once it is unblocked`);
  }
  return {
    title: resolvedTitle,
    dependencySummary: buildTaskDependencySummary(entry, userId) || (entry.blocker ? `blocked by ${entry.blocker}` : "no hard blocker"),
    actions: actions.slice(0, 4),
    unlockSequence,
    paths: buildBlockedRescuePaths(entry, userId)
  };
}

function buildDependencyRescueReply(taskTitle, userId = getCurrentUserId()) {
  const data = buildDependencyRescueData(taskTitle, userId);
  if (!data) {
    return "i couldn't find that task to rescue.";
  }
  if (!data.actions.length) {
    return `${data.title} looks unblocked. next move is ${getTaskNextActionText(readTaskEntry(data.title, userId))}.`;
  }
  const pathText = data.paths.length ? ` unblock paths: ${data.paths.join("; ")}.` : "";
  const chainText = data.unlockSequence.length > 1 ? ` unlock order: ${data.unlockSequence.join(" → ")}.` : "";
  return `${data.title}: ${data.dependencySummary}. rescue path: ${data.actions.join("; ")}.${chainText}${pathText}`.trim();
}

function promoteTaskToMustResolveToday(taskTitle, userId = getCurrentUserId()) {
  const resolvedTitle = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (!resolvedTitle) {
    return null;
  }
  const current = readTaskEntry(resolvedTitle, userId);
  const schedule = parseTaskSchedulePhrase("today afternoon") || parseTaskSchedulePhrase("tomorrow morning");
  setTaskOwnershipState(resolvedTitle, {
    priority: "top",
    focusLabel: "today",
    dueAt: getTodayPlanningWindow(0).end,
    dueLabel: "today",
    scheduledAt: schedule?.scheduledAt || current.scheduledAt,
    scheduledLabel: schedule?.scheduledLabel || current.scheduledLabel,
    scheduledSource: schedule?.scheduledAt ? "manual" : current.scheduledSource
  }, userId);
  setTaskExecutionState(resolvedTitle, {
    escalatedAt: current.escalatedAt || Date.now()
  }, userId);
  return readTaskEntry(resolvedTitle, userId);
}

function buildStuckTaskEscalationReply(taskTitle, userId = getCurrentUserId()) {
  const resolvedTitle = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (!resolvedTitle) {
    return "i couldn't find that stuck task.";
  }
  const entry = readTaskEntry(resolvedTitle, userId);
  const signals = buildRiskSignals(entry, userId);
  if (!signals.length) {
    return `${resolvedTitle} is moving. no escalation needed right now.`;
  }
  const promoted = promoteTaskToMustResolveToday(resolvedTitle, userId);
  const rescue = buildDependencyRescueData(resolvedTitle, userId);
  return `${resolvedTitle} needs escalation because ${signals.slice(0, 3).map((item) => item.text).join(" · ")}. it is now marked must resolve today${promoted?.scheduledAt ? ` and slotted ${formatTaskScheduleLabel(promoted.scheduledAt, promoted.scheduledLabel)}` : ""}. escalate by ${rescue?.actions?.[0] || "forcing a concrete owner and deadline on the blocker"}.`;
}

function runAutonomousFollowThrough(taskTitle, userId = getCurrentUserId()) {
  const resolvedTitle = resolveTaskReference(taskTitle, getCurrentTaskTitle(), userId);
  if (!resolvedTitle) {
    return null;
  }
  const current = readTaskEntry(resolvedTitle, userId);
  if (!current.subtasks.length) {
    buildLocalTaskExecutionPlan(resolvedTitle);
  }
  const afterPlan = readTaskEntry(resolvedTitle, userId);
  if (!afterPlan.reminderAt && !afterPlan.reminderCadence) {
    const reminder = parseTaskReminderPhrase("tomorrow morning") || parseTaskReminderPhrase("in 2 hours");
    if (reminder) {
      setTaskReminderState(resolvedTitle, reminder, userId);
    }
  }
  if (!afterPlan.scheduledAt && normalizeTaskWorkflowStatus(afterPlan.workflowStatus) !== "blocked") {
    const slot = parseTaskSchedulePhrase("today afternoon") || parseTaskSchedulePhrase("tomorrow morning");
    if (slot) {
      setTaskPlanningState(resolvedTitle, { ...slot, scheduledSource: "manual" }, userId);
    }
  }
  recordOperatorRitual("follow-through", resolvedTitle, userId);
  return {
    title: resolvedTitle,
    nextAction: getTaskNextActionText(readTaskEntry(resolvedTitle, userId)),
    reminder: formatTaskReminderSummary(readTaskEntry(resolvedTitle, userId))
  };
}

function runDailyAutoReplan(reason = "manual", userId = getCurrentUserId()) {
  clearAutoTodayPlan(userId);
  const result = buildAutoTodayPlan(userId);
  updateOperatorState((current) => ({
    ...current,
    lastAutoReplanAt: Date.now()
  }), userId);
  recordOperatorRitual("auto-replan", reason, userId);
  return result;
}

function buildMorningBriefReply(userId = getCurrentUserId()) {
  const replan = runDailyAutoReplan("morning brief", userId);
  const briefing = getDailyBriefingData(userId);
  const risk = getRiskRadarData(userId);
  return `${briefing.summary} ${replan.summary}${risk.risky.length ? ` biggest risk: ${risk.risky[0].title} (${risk.risky[0].signals[0].text}).` : ""}`.trim();
}

function buildMiddayResetReply(userId = getCurrentUserId()) {
  const replan = runDailyAutoReplan("midday reset", userId);
  const risk = getRiskRadarData(userId);
  return `${replan.summary}${risk.risky.length ? ` midday risks: ${risk.risky.slice(0, 2).map((item) => item.title).join(", ")}.` : " board still looks clean."}`.trim();
}

function buildShutdownReviewReply(userId = getCurrentUserId()) {
  const tomorrow = getTomorrowPlanData(userId);
  const review = getWeeklyReviewData(userId);
  recordOperatorRitual("shutdown review", tomorrow.summary, userId);
  return `${tomorrow.summary}${review.slips.length ? ` watch ${review.slips[0].title} first tomorrow.` : ""}`.trim();
}

function findDecisionLogMatch(referenceText = "", userId = getCurrentUserId()) {
  const cleaned = normalizeBufferedSpeechParts([referenceText]);
  const activeTitle = getCurrentTaskTitle();
  const decisions = readDecisionLog(userId);
  if (activeTitle) {
    const taskMatch = decisions.find((entry) => entry.taskTitle === activeTitle && (!cleaned || entry.summary.includes(cleaned) || cleaned.includes(entry.summary)));
    if (taskMatch) {
      return taskMatch;
    }
  }
  return decisions.find((entry) => entry.summary.includes(cleaned) || cleaned.includes(entry.summary) || (entry.taskTitle && cleaned.includes(entry.taskTitle))) || null;
}

function maybeRunAutomaticMorningReplan(userId = getCurrentUserId()) {
  const state = readOperatorState(userId);
  const now = Date.now();
  const last = Number(state.lastAutoReplanAt || 0) || 0;
  const nowDate = new Date(now);
  const lastDate = last ? new Date(last) : null;
  const sameDay = lastDate && nowDate.getFullYear() === lastDate.getFullYear() && nowDate.getMonth() === lastDate.getMonth() && nowDate.getDate() === lastDate.getDate();
  if (sameDay || nowDate.getHours() < 5) {
    return false;
  }
  runDailyAutoReplan("automatic morning replan", userId);
  return true;
}

function maybePromoteLongBlockedTasks(userId = getCurrentUserId()) {
  const now = Date.now();
  let changed = 0;
  getTaskEntriesForUser(userId)
    .filter((entry) => !entry.completed)
    .filter((entry) => normalizeTaskWorkflowStatus(entry.workflowStatus) === "blocked")
    .filter((entry) => Number(entry.blockedAt || 0) && now - Number(entry.blockedAt) >= 12 * 60 * 60 * 1000)
    .filter((entry) => !Number(entry.escalatedAt || 0))
    .forEach((entry) => {
      if (promoteTaskToMustResolveToday(entry.title, userId)) {
        changed += 1;
      }
    });
  return changed;
}

function runFocusModeDriftCheck(userId = getCurrentUserId()) {
  const state = readOperatorState(userId);
  if (!state.focusTaskTitle) {
    return false;
  }
  if (state.focusEndsAt && state.focusEndsAt <= Date.now()) {
    clearFocusMode(userId);
    return true;
  }
  const currentTask = getCurrentTaskTitle();
  const focusedTask = readTaskEntry(state.focusTaskTitle, userId);
  const nudgeDue = !state.lastFocusNudgeAt || Date.now() - state.lastFocusNudgeAt >= 8 * 60 * 1000;
  const drifted = currentTask && currentTask !== state.focusTaskTitle;
  if (!nudgeDue) {
    return false;
  }
  const nextMove = getTaskNextActionText(focusedTask);
  const message = drifted
    ? `focus check: get back on ${state.focusTaskTitle}. next is ${nextMove}.`
    : `sprint captain: stay on ${state.focusTaskTitle}. next move is ${nextMove}.`;
  showInlineVoiceStatus(message, 4200, { state: "info" });
  updateOperatorState((current) => ({
    ...current,
    lastFocusNudgeAt: Date.now()
  }), userId);
  return true;
}

function maybeRunOperatorAutomation(userId = getCurrentUserId()) {
  const morningChanged = maybeRunAutomaticMorningReplan(userId);
  const escalated = maybePromoteLongBlockedTasks(userId);
  return Boolean(morningChanged || escalated);
}

function buildTaskOwnershipParts(entry) {
  const parts = [];
  const ownerName = normalizeTaskTextField(entry?.ownerName || "", 120);
  if (ownerName) {
    parts.push(`owner ${ownerName}`);
  }
  const priority = normalizeTaskPriority(entry?.priority);
  if (priority === "top") {
    parts.push("top priority");
  } else if (priority === "high") {
    parts.push("high priority");
  } else if (priority === "low") {
    parts.push("low priority");
  }

  const focusLabel = normalizeTaskFocusLabel(entry?.focusLabel);
  if (focusLabel) {
    parts.push(`focus ${focusLabel}`);
  }

  const milestone = normalizeTaskMilestone(entry?.milestone);
  if (milestone) {
    parts.push(`milestone ${milestone}`);
  }

  const scheduleText = formatTaskScheduleLabel(entry?.scheduledAt, entry?.scheduledLabel);
  if (scheduleText) {
    parts.push(`plan ${scheduleText}`);
  }

  const scheduleSource = formatTaskScheduleSourceLabel(entry);
  if (scheduleSource) {
    parts.push(scheduleSource);
  }

  const dueText = formatTaskDueLabel(entry?.dueAt, entry?.dueLabel);
  if (dueText) {
    parts.push(`due ${dueText}`);
  }

  return parts;
}

function buildTaskOwnershipSummary(entry) {
  const parts = buildTaskOwnershipParts(entry);
  if (parts.length) {
    return `locked in: ${parts.join(" · ")}`;
  }
  return "give anna a real operating target like “work on this today”, “done by 5”, or “make this top priority.”";
}

function buildTaskExecutionParts(entry) {
  const parts = [];
  const workflowLabel = formatTaskWorkflowLabel(entry?.workflowStatus);
  if (workflowLabel && workflowLabel !== "queued") {
    parts.push(workflowLabel);
  }
  const progress = getTaskProgressValue(entry);
  if (progress > 0) {
    parts.push(`${progress}% complete`);
  }
  const nextAction = getTaskNextActionText(entry);
  if (nextAction) {
    parts.push(`next ${nextAction}`);
  }
  const blocker = normalizeTaskTextField(entry?.blocker || "", 180);
  if (blocker) {
    parts.push(`blocked by ${blocker}`);
  }
  const sprint = formatTaskSessionText(entry);
  if (sprint !== "not running") {
    parts.push(sprint);
  }
  const dependencySummary = buildTaskDependencySummary(entry);
  if (dependencySummary) {
    parts.push(dependencySummary);
  }
  const reminder = formatTaskReminderSummary(entry);
  if (reminder && reminder !== "no follow-up set") {
    parts.push(`follow up ${reminder}`);
  }
  return parts;
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
    ownerName: normalizeTaskTextField(entry.ownerName || "", 120),
    priority: normalizeTaskPriority(entry.priority),
    focusLabel: normalizeTaskFocusLabel(entry.focusLabel),
    milestone: normalizeTaskMilestone(entry.milestone),
    workflowStatus: normalizeTaskWorkflowStatus(entry.workflowStatus || (entry.completed ? "done" : "queued")),
    nextAction: normalizeTaskTextField(entry.nextAction || "", 180),
    blocker: normalizeTaskTextField(entry.blocker || "", 180),
    blockedAt: Number(entry.blockedAt || 0) || 0,
    escalatedAt: Number(entry.escalatedAt || 0) || 0,
    progress: normalizeTaskProgress(entry.progress),
    sessionStartedAt: Number(entry.sessionStartedAt || 0) || 0,
    sessionEndsAt: Number(entry.sessionEndsAt || 0) || 0,
    scheduledAt: Number(entry.scheduledAt || 0) || 0,
    scheduledLabel: normalizeTaskTextField(entry.scheduledLabel || "", 120),
    scheduledSource: normalizeTaskScheduleSource(entry.scheduledSource),
    scheduledDurationMinutes: normalizeTaskScheduleDuration(entry.scheduledDurationMinutes),
    reminderAt: Number(entry.reminderAt || 0) || 0,
    reminderLabel: normalizeTaskTextField(entry.reminderLabel || "", 120),
    reminderCadence: normalizeTaskReminderCadence(entry.reminderCadence),
    lastReminderAt: Number(entry.lastReminderAt || 0) || 0,
    dependsOn: normalizeTaskDependencyList(entry.dependsOn),
    dueAt: Number(entry.dueAt || 0) || 0,
    dueLabel: String(entry.dueLabel || "").trim().toLowerCase().slice(0, 80),
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
    ownerName: normalizeTaskTextField(nextValue?.ownerName || "", 120),
    priority: normalizeTaskPriority(nextValue?.priority),
    focusLabel: normalizeTaskFocusLabel(nextValue?.focusLabel),
    milestone: normalizeTaskMilestone(nextValue?.milestone),
    workflowStatus: normalizeTaskWorkflowStatus(nextValue?.workflowStatus || (nextValue?.completed ? "done" : "queued")),
    nextAction: normalizeTaskTextField(nextValue?.nextAction || "", 180),
    blocker: normalizeTaskTextField(nextValue?.blocker || "", 180),
    blockedAt: Number(nextValue?.blockedAt || 0) || 0,
    escalatedAt: Number(nextValue?.escalatedAt || 0) || 0,
    progress: normalizeTaskProgress(nextValue?.progress),
    sessionStartedAt: Number(nextValue?.sessionStartedAt || 0) || 0,
    sessionEndsAt: Number(nextValue?.sessionEndsAt || 0) || 0,
    scheduledAt: Number(nextValue?.scheduledAt || 0) || 0,
    scheduledLabel: normalizeTaskTextField(nextValue?.scheduledLabel || "", 120),
    scheduledSource: normalizeTaskScheduleSource(nextValue?.scheduledSource),
    scheduledDurationMinutes: normalizeTaskScheduleDuration(nextValue?.scheduledDurationMinutes),
    reminderAt: Number(nextValue?.reminderAt || 0) || 0,
    reminderLabel: normalizeTaskTextField(nextValue?.reminderLabel || "", 120),
    reminderCadence: normalizeTaskReminderCadence(nextValue?.reminderCadence),
    lastReminderAt: Number(nextValue?.lastReminderAt || 0) || 0,
    dependsOn: normalizeTaskDependencyList(nextValue?.dependsOn),
    dueAt: Number(nextValue?.dueAt || 0) || 0,
    dueLabel: String(nextValue?.dueLabel || "").trim().toLowerCase().slice(0, 80),
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
    (current) => {
      const nextCompleted = !current.completed;
      return {
        ...current,
        completed: nextCompleted,
        workflowStatus: nextCompleted ? "done" : "queued",
        progress: nextCompleted ? 100 : Math.min(current.progress || 0, 95),
        blocker: nextCompleted ? "" : current.blocker,
        sessionStartedAt: 0,
        sessionEndsAt: 0
      };
    },
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

function setTaskOwnershipState(title, fields, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => ({
      ...current,
      ...fields,
      ownerName: fields?.ownerName ?? current.ownerName,
      priority: fields?.priority ?? current.priority,
      focusLabel: fields?.focusLabel ?? current.focusLabel,
      milestone: fields?.milestone ?? current.milestone,
      scheduledAt: fields?.scheduledAt ?? current.scheduledAt,
      scheduledLabel: fields?.scheduledLabel ?? current.scheduledLabel,
      scheduledSource: fields?.scheduledSource ?? current.scheduledSource,
      scheduledDurationMinutes: fields?.scheduledDurationMinutes ?? current.scheduledDurationMinutes,
      dueAt: fields?.dueAt ?? current.dueAt,
      dueLabel: fields?.dueLabel ?? current.dueLabel
    }),
    userId
  );
}

function setTaskPlanningState(title, fields, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  const hasScheduleUpdate = fields?.scheduledAt !== undefined || fields?.scheduledLabel !== undefined || fields?.scheduledSource !== undefined || fields?.scheduledDurationMinutes !== undefined;
  return setTaskOwnershipState(title, {
    milestone: fields?.milestone,
    scheduledAt: fields?.scheduledAt,
    scheduledLabel: fields?.scheduledLabel,
    scheduledSource: hasScheduleUpdate
      ? fields?.scheduledAt
        ? normalizeTaskScheduleSource(fields?.scheduledSource ?? "manual")
        : ""
      : current.scheduledSource,
    scheduledDurationMinutes: hasScheduleUpdate
      ? fields?.scheduledAt
        ? normalizeTaskScheduleDuration(fields?.scheduledDurationMinutes || current.scheduledDurationMinutes || 45)
        : 0
      : current.scheduledDurationMinutes
  }, userId);
}

function setTaskExecutionState(title, fields, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => ({
      ...current,
      ...fields,
      workflowStatus: fields?.workflowStatus ?? current.workflowStatus,
      nextAction: fields?.nextAction ?? current.nextAction,
      blocker: fields?.blocker ?? current.blocker,
      blockedAt: fields?.blockedAt ?? current.blockedAt,
      escalatedAt: fields?.escalatedAt ?? current.escalatedAt,
      progress: fields?.progress ?? current.progress,
      sessionStartedAt: fields?.sessionStartedAt ?? current.sessionStartedAt,
      sessionEndsAt: fields?.sessionEndsAt ?? current.sessionEndsAt,
      reminderAt: fields?.reminderAt ?? current.reminderAt,
      reminderLabel: fields?.reminderLabel ?? current.reminderLabel,
      reminderCadence: fields?.reminderCadence ?? current.reminderCadence,
      lastReminderAt: fields?.lastReminderAt ?? current.lastReminderAt
    }),
    userId
  );
}

function setTaskReminderState(title, fields, userId = getCurrentUserId()) {
  return setTaskExecutionState(title, {
    reminderAt: fields?.reminderAt ?? 0,
    reminderLabel: fields?.reminderLabel ?? "",
    reminderCadence: fields?.reminderCadence ?? "",
    lastReminderAt: fields?.lastReminderAt ?? 0
  }, userId);
}

function clearTaskReminderState(title, userId = getCurrentUserId()) {
  return setTaskReminderState(title, {
    reminderAt: 0,
    reminderLabel: "",
    reminderCadence: "",
    lastReminderAt: 0
  }, userId);
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

function renameTaskSubtask(title, subtaskId, nextTitle, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(nextTitle);
  if (!normalized) {
    return readTaskEntry(title, userId);
  }
  return updateTaskEntry(
    title,
    (current) => {
      const existing = normalizeSubtaskList(current.subtasks).find((item) => item.id === subtaskId);
      if (!existing) {
        return current;
      }
      return {
        ...current,
        nextAction: current.nextAction === existing.title ? normalized : current.nextAction,
        subtasks: normalizeSubtaskList(current.subtasks).map((item) => (
          item.id === subtaskId ? { ...item, title: normalized } : item
        ))
      };
    },
    userId
  );
}

function deleteTaskSubtask(title, subtaskId, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => {
      const subtasks = normalizeSubtaskList(current.subtasks);
      const removed = subtasks.find((item) => item.id === subtaskId);
      if (!removed) {
        return current;
      }
      const nextSubtasks = subtasks.filter((item) => item.id !== subtaskId);
      const nextOpen = nextSubtasks.find((item) => !item.completed)?.title || "";
      return {
        ...current,
        subtasks: nextSubtasks,
        nextAction: current.nextAction === removed.title ? nextOpen : current.nextAction,
        progress: nextSubtasks.length ? getTaskProgressValue({ ...current, subtasks: nextSubtasks }) : current.progress
      };
    },
    userId
  );
}

function moveTaskSubtask(title, subtaskId, direction, userId = getCurrentUserId()) {
  return updateTaskEntry(
    title,
    (current) => {
      const subtasks = normalizeSubtaskList(current.subtasks);
      const index = subtasks.findIndex((item) => item.id === subtaskId);
      if (index < 0) {
        return current;
      }
      let targetIndex = index;
      if (direction === "up") targetIndex = Math.max(0, index - 1);
      if (direction === "down") targetIndex = Math.min(subtasks.length - 1, index + 1);
      if (direction === "top") targetIndex = 0;
      if (direction === "bottom") targetIndex = subtasks.length - 1;
      if (targetIndex === index) {
        return current;
      }
      const nextSubtasks = [...subtasks];
      const [moved] = nextSubtasks.splice(index, 1);
      nextSubtasks.splice(targetIndex, 0, moved);
      return {
        ...current,
        subtasks: nextSubtasks
      };
    },
    userId
  );
}

function reorderTaskSubtask(title, sourceId, targetId, userId = getCurrentUserId()) {
  if (!sourceId || !targetId || sourceId === targetId) {
    return readTaskEntry(title, userId);
  }
  return updateTaskEntry(
    title,
    (current) => {
      const subtasks = normalizeSubtaskList(current.subtasks);
      const sourceIndex = subtasks.findIndex((item) => item.id === sourceId);
      const targetIndex = subtasks.findIndex((item) => item.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
        return current;
      }
      const nextSubtasks = [...subtasks];
      const [moved] = nextSubtasks.splice(sourceIndex, 1);
      nextSubtasks.splice(targetIndex, 0, moved);
      return {
        ...current,
        subtasks: nextSubtasks
      };
    },
    userId
  );
}

function findSubtaskMatch(taskTitle, text, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(text);
  if (!normalized) {
    return null;
  }
  const subtasks = readTaskEntry(taskTitle, userId).subtasks;
  const exact = subtasks.find((item) => normalizeTaskTitle(item.title) === normalized);
  if (exact) {
    return exact;
  }
  const partial = subtasks.filter((item) => normalized.includes(item.title) || item.title.includes(normalized));
  return partial.length === 1 ? partial[0] : null;
}

function renameTask(title, nextTitle, userId = getCurrentUserId()) {
  const currentTitle = normalizeTaskTitle(title);
  const normalizedNext = normalizeTaskTitle(nextTitle);
  if (!currentTitle || !normalizedNext) {
    return { changed: false, reason: "invalid", entry: readTaskEntry(title, userId) };
  }
  if (currentTitle === normalizedNext) {
    return { changed: false, reason: "same", entry: readTaskEntry(title, userId) };
  }

  const store = readTaskStateStore();
  const userMap = store && typeof store[userId] === "object" ? store[userId] : {};
  const nextKey = makeTaskKey(normalizedNext);
  const existing = userMap[nextKey];
  if (existing && normalizeTaskTitle(existing.title) !== currentTitle) {
    return { changed: false, reason: "exists", entry: readTaskEntry(title, userId) };
  }

  const nextUserMap = {};
  Object.values(userMap).forEach((rawEntry) => {
    const rawTitle = normalizeTaskTitle(rawEntry?.title || "");
    if (!rawTitle) {
      return;
    }
    const entry = readTaskEntry(rawTitle, userId);
    const nextEntry = rawTitle === currentTitle
      ? { ...entry, title: normalizedNext }
      : {
          ...entry,
          dependsOn: normalizeTaskDependencyList(entry.dependsOn.map((item) => (
            normalizeTaskTitle(item) === currentTitle ? normalizedNext : item
          )))
        };
    nextUserMap[makeTaskKey(nextEntry.title)] = {
      ...nextEntry,
      updatedAt: Date.now()
    };
  });

  store[userId] = nextUserMap;
  writeTaskStateStore(store);

  const nextLists = readStartupLists().map((list) => {
    if (String(list?.userId || "") !== userId || !Array.isArray(list?.items)) {
      return list;
    }
    return {
      ...list,
      items: list.items.map((item) => (
        normalizeTaskTitle(item) === currentTitle ? normalizedNext : normalizeTaskTitle(item)
      ))
    };
  });
  writeStartupLists(nextLists);

  const nextDecisionLog = readJson(STORAGE_KEYS.decisionLog, []).map((entry) => {
    if (String(entry?.userId || "") !== userId) {
      return entry;
    }
    return normalizeTaskTitle(entry?.taskTitle || "") === currentTitle
      ? { ...entry, taskTitle: normalizedNext }
      : entry;
  });
  writeJson(STORAGE_KEYS.decisionLog, nextDecisionLog);

  const operatorState = readOperatorState(userId);
  if (operatorState.focusTaskTitle === currentTitle || normalizeTaskTitle(operatorState.meetingTopic) === currentTitle) {
    writeOperatorStateForUser({
      focusTaskTitle: operatorState.focusTaskTitle === currentTitle ? normalizedNext : operatorState.focusTaskTitle,
      meetingTopic: normalizeTaskTitle(operatorState.meetingTopic) === currentTitle ? normalizedNext : operatorState.meetingTopic
    }, userId);
  }

  const active = readActiveTaskContext();
  if (active?.title === currentTitle) {
    setActiveTaskContext(normalizedNext);
  }
  if (window.location.pathname.endsWith("task.html") && getCurrentTaskTitle() === currentTitle) {
    window.history.replaceState({}, "", buildTaskHref(normalizedNext));
  }

  return { changed: true, reason: "renamed", entry: readTaskEntry(normalizedNext, userId) };
}

function deleteTask(title, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    return false;
  }

  const store = readTaskStateStore();
  const userMap = store && typeof store[userId] === "object" ? { ...store[userId] } : {};
  delete userMap[makeTaskKey(normalized)];
  store[userId] = userMap;
  writeTaskStateStore(store);

  const nextLists = readStartupLists().map((list) => {
    if (String(list?.userId || "") !== userId || !Array.isArray(list?.items)) {
      return list;
    }
    return {
      ...list,
      items: list.items.filter((item) => normalizeTaskTitle(item) !== normalized)
    };
  });
  writeStartupLists(nextLists);

  const nextDecisionLog = readJson(STORAGE_KEYS.decisionLog, []).filter((entry) => (
    String(entry?.userId || "") !== userId || normalizeTaskTitle(entry?.taskTitle || "") !== normalized
  ));
  writeJson(STORAGE_KEYS.decisionLog, nextDecisionLog);

  const operatorState = readOperatorState(userId);
  if (operatorState.focusTaskTitle === normalized || normalizeTaskTitle(operatorState.meetingTopic) === normalized) {
    writeOperatorStateForUser({
      focusTaskTitle: operatorState.focusTaskTitle === normalized ? "" : operatorState.focusTaskTitle,
      focusStartedAt: operatorState.focusTaskTitle === normalized ? 0 : operatorState.focusStartedAt,
      focusEndsAt: operatorState.focusTaskTitle === normalized ? 0 : operatorState.focusEndsAt,
      meetingTopic: normalizeTaskTitle(operatorState.meetingTopic) === normalized ? "" : operatorState.meetingTopic
    }, userId);
  }

  const remaining = getLatestStartupItems(userId);
  const nextActive = remaining.find((item) => normalizeTaskTitle(item) !== normalized) || "";
  if (getCurrentTaskTitle() === normalized) {
    if (nextActive) {
      setActiveTaskContext(nextActive);
      if (window.location.pathname.endsWith("task.html")) {
        window.history.replaceState({}, "", buildTaskHref(nextActive));
      }
    } else {
      removeStoredValue(STORAGE_KEYS.activeTask);
      if (window.location.pathname.endsWith("task.html")) {
        window.history.replaceState({}, "", "task.html");
      }
    }
  }
  renderStartupDashboard();
  renderTaskWorkspace();
  return true;
}

function moveTaskInLatestStartupList(title, direction, userId = getCurrentUserId()) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    return null;
  }
  return updateLatestStartupListForUser((list) => {
    const items = Array.isArray(list.items) ? list.items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
    const index = items.findIndex((item) => item === normalized);
    if (index < 0) {
      return list;
    }
    let targetIndex = index;
    if (direction === "up") targetIndex = Math.max(0, index - 1);
    if (direction === "down") targetIndex = Math.min(items.length - 1, index + 1);
    if (direction === "top") targetIndex = 0;
    if (direction === "bottom") targetIndex = items.length - 1;
    if (targetIndex === index) {
      return list;
    }
    const nextItems = [...items];
    const [moved] = nextItems.splice(index, 1);
    nextItems.splice(targetIndex, 0, moved);
    return {
      ...list,
      items: nextItems
    };
  }, userId);
}

function reorderTaskInLatestStartupList(sourceTitle, targetTitle, userId = getCurrentUserId()) {
  const source = normalizeTaskTitle(sourceTitle);
  const target = normalizeTaskTitle(targetTitle);
  if (!source || !target || source === target) {
    return null;
  }
  return updateLatestStartupListForUser((list) => {
    const items = Array.isArray(list.items) ? list.items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
    const sourceIndex = items.findIndex((item) => item === source);
    const targetIndex = items.findIndex((item) => item === target);
    if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
      return list;
    }
    const nextItems = [...items];
    const [moved] = nextItems.splice(sourceIndex, 1);
    nextItems.splice(targetIndex, 0, moved);
    return {
      ...list,
      items: nextItems
    };
  }, userId);
}

const taskActionFeedback = new Map();
let draggedSubtaskId = "";
let draggedTaskTitle = "";

function setTaskActionFeedback(title, message) {
  const normalized = normalizeTaskTitle(title);
  if (!normalized) {
    return;
  }
  taskActionFeedback.set(normalized, String(message || "").trim());
}

function getTaskActionFeedback(title, fallback) {
  const normalized = normalizeTaskTitle(title);
  return taskActionFeedback.get(normalized) || fallback;
}

function getTaskProgressValue(entry) {
  if (entry?.completed) {
    return 100;
  }
  const explicit = normalizeTaskProgress(entry?.progress);
  const subtasks = Array.isArray(entry?.subtasks) ? entry.subtasks : [];
  if (explicit > 0 || !subtasks.length) {
    return explicit;
  }
  const completedCount = subtasks.filter((item) => item.completed).length;
  return normalizeTaskProgress((completedCount / subtasks.length) * 100);
}

function getTaskNextActionText(entry) {
  const explicit = normalizeTaskTextField(entry?.nextAction || "", 180);
  if (explicit) {
    return explicit;
  }
  const subtasks = Array.isArray(entry?.subtasks) ? entry.subtasks : [];
  const open = subtasks.find((item) => !item.completed);
  if (open?.title) {
    return open.title;
  }
  if (String(entry?.notes || "").trim()) {
    return "review the working notes and make the next move";
  }
  return "define the very next move";
}

function formatTaskWorkflowLabel(status) {
  const normalized = normalizeTaskWorkflowStatus(status);
  if (normalized === "active") {
    return "working now";
  }
  if (normalized === "blocked") {
    return "blocked";
  }
  if (normalized === "paused") {
    return "paused";
  }
  if (normalized === "done") {
    return "done";
  }
  return "queued";
}

function formatTaskSessionText(entry) {
  const endsAt = Number(entry?.sessionEndsAt || 0) || 0;
  if (!endsAt || normalizeTaskWorkflowStatus(entry?.workflowStatus) !== "active") {
    return "not running";
  }
  return `locked until ${new Date(endsAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
}

function startTaskWorkSession(title, options = {}, userId = getCurrentUserId()) {
  const minutes = Math.max(10, Math.min(180, Number(options.minutes || 45) || 45));
  const now = Date.now();
  const current = readTaskEntry(title, userId);
  return setTaskExecutionState(title, {
    workflowStatus: current.completed ? "done" : "active",
    blocker: "",
    blockedAt: 0,
    nextAction: normalizeTaskTextField(options.nextAction || current.nextAction || getTaskNextActionText(current), 180),
    progress: current.completed ? 100 : Math.max(getTaskProgressValue(current), 5),
    sessionStartedAt: now,
    sessionEndsAt: current.completed ? 0 : now + minutes * 60 * 1000
  }, userId);
}

function pauseTaskExecution(title, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  return setTaskExecutionState(title, {
    workflowStatus: current.completed ? "done" : "paused",
    sessionStartedAt: 0,
    sessionEndsAt: 0,
    blockedAt: current.blockedAt
  }, userId);
}

function blockTaskExecution(title, blocker, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  return setTaskExecutionState(title, {
    workflowStatus: current.completed ? "done" : "blocked",
    blocker: normalizeTaskTextField(blocker || current.blocker || "waiting on input", 180),
    blockedAt: current.blockedAt || Date.now(),
    sessionStartedAt: 0,
    sessionEndsAt: 0
  }, userId);
}

function clearTaskBlocker(title, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  return setTaskExecutionState(title, {
    blocker: "",
    blockedAt: 0,
    workflowStatus: current.completed ? "done" : current.sessionEndsAt > Date.now() ? "active" : "queued"
  }, userId);
}

function setTaskNextAction(title, nextAction, userId = getCurrentUserId()) {
  return setTaskExecutionState(title, {
    nextAction: normalizeTaskTextField(nextAction, 180)
  }, userId);
}

function setTaskProgressValue(title, progress, userId = getCurrentUserId()) {
  const nextProgress = normalizeTaskProgress(progress);
  return setTaskExecutionState(title, {
    progress: nextProgress,
    completed: nextProgress >= 100,
    workflowStatus: nextProgress >= 100 ? "done" : readTaskEntry(title, userId).workflowStatus
  }, userId);
}

function advanceTaskProgress(title, delta = 10, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  const nextProgress = normalizeTaskProgress(getTaskProgressValue(current) + Number(delta || 0));
  return setTaskExecutionState(title, {
    progress: nextProgress,
    completed: nextProgress >= 100,
    workflowStatus: nextProgress >= 100 ? "done" : current.workflowStatus === "blocked" ? "active" : current.workflowStatus || "active"
  }, userId);
}

function completeNextOpenSubtask(title, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  const open = current.subtasks.find((item) => !item.completed);
  if (!open) {
    return { changed: false, title: "" };
  }

  const nextSubtasks = current.subtasks.map((item) => item.id === open.id ? { ...item, completed: true } : item);
  const remaining = nextSubtasks.filter((item) => !item.completed);
  updateTaskEntry(title, (entry) => ({
    ...entry,
    subtasks: nextSubtasks,
    nextAction: remaining[0]?.title || "",
    progress: remaining.length ? normalizeTaskProgress(((nextSubtasks.length - remaining.length) / nextSubtasks.length) * 100) : 100,
    completed: remaining.length === 0 && nextSubtasks.length > 0,
    workflowStatus: remaining.length === 0 && nextSubtasks.length > 0 ? "done" : "active",
    sessionStartedAt: remaining.length === 0 ? 0 : entry.sessionStartedAt,
    sessionEndsAt: remaining.length === 0 ? 0 : entry.sessionEndsAt
  }), userId);
  return { changed: true, title: open.title, remaining: remaining.length };
}

function buildLocalTaskExecutionPlan(title, userId = getCurrentUserId()) {
  const current = readTaskEntry(title, userId);
  const normalizedTitle = normalizeTaskTitle(title);
  const plan = [
    `define the finish line for ${normalizedTitle}`,
    `do the first real pass on ${normalizedTitle}`,
    `review, tighten, and ship ${normalizedTitle}`
  ];
  const existing = new Set(current.subtasks.map((item) => normalizeTaskTitle(item.title)).filter(Boolean));
  let added = 0;
  plan.forEach((item) => {
    if (existing.has(item)) {
      return;
    }
    addTaskSubtask(normalizedTitle, item, userId);
    existing.add(item);
    added += 1;
  });
  if (added) {
    setTaskExecutionState(normalizedTitle, {
      workflowStatus: current.completed ? "done" : "queued",
      nextAction: current.nextAction || plan[0],
      progress: current.progress || getTaskProgressValue(current)
    }, userId);
  }
  return added;
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

function getLatestNonEmptyStartupListForUser(userId = getCurrentUserId()) {
  const lists = readStartupLists().filter((l) => String(l?.userId || "") === userId);
  for (let i = lists.length - 1; i >= 0; i -= 1) {
    const items = Array.isArray(lists[i]?.items) ? lists[i].items.map((item) => normalizeTaskTitle(item)).filter(Boolean) : [];
    if (items.length) {
      return lists[i];
    }
  }
  return null;
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
    normalizedRole === "ai" ? sanitizeAnnaDisplayText(text) : String(text || "")
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
        text: entry.role === "ai" ? sanitizeAnnaDisplayText(entry.text) : entry.text
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
      const ownership = buildTaskOwnershipParts(entry);
      const execution = buildTaskExecutionParts(entry);
      if (ownership.length) {
        pieces.push(ownership.join(", "));
      }
      if (execution.length) {
        pieces.push(execution.join(", "));
      }
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
  const text = (role === "user" ? String(content || "") : sanitizeAnnaDisplayText(content)).trim();
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
  const sec = Math.max(0, Math.floor(msAgo / 1000));
  if (sec < 60) return "just now";

  const min = Math.floor(sec / 60);
  if (min < 60) {
    return `${min} minute${min === 1 ? "" : "s"} ago`;
  }

  const hr = Math.floor(min / 60);
  if (hr < 24) {
    return `${hr} hour${hr === 1 ? "" : "s"} ago`;
  }

  const day = Math.floor(hr / 24);
  if (day < 7) {
    return `${day} day${day === 1 ? "" : "s"} ago`;
  }

  const wk = Math.floor(day / 7);
  return `${wk} week${wk === 1 ? "" : "s"} ago`;
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
  const dailyBriefingSummary = buildDailyBriefingReply(currentUserId);
  const weeklyReviewSummary = buildWeeklyReviewReply("all", currentUserId);
  const milestoneSummary = buildMilestoneStatusReply("", currentUserId);
  const todayPlanSummary = buildTodayPlanReply(currentUserId);
  const tomorrowPlanSummary = buildTomorrowPlanReply(currentUserId);
  const standupSummary = buildBoardStandupReply(currentUserId);
  const timelineSummary = getBoardTimelineData(currentUserId, 4).map((item) => `- ${item.title} · ${item.kind} · ${formatRelativeTime(Date.now() - item.ts)} · ${item.detail}`).join("\n");
  const riskRadarSummary = buildRiskRadarReply(currentUserId);
  const operatorState = readOperatorState(currentUserId);
  const decisionLog = readDecisionLog(currentUserId).slice(0, 6);
  const roadmapSummary = readOperatorRoadmap().map((item) => `${item.title} (${item.status})`).join("; ");
  const activeTaskState = activeTask?.title ? readTaskEntry(activeTask.title, currentUserId) : null;
  const activeTaskNotes = String(activeTaskState?.notes || "").trim();
  const activeSubtasks = Array.isArray(activeTaskState?.subtasks)
    ? activeTaskState.subtasks
        .slice(0, 12)
        .map((item) => `${item.completed ? "[done]" : "[todo]"} ${item.title}`)
        .join("\n")
    : "";
  const activeReminderSummary = activeTaskState ? formatTaskReminderSummary(activeTaskState) : "";
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
    sysParts.push("if you suggest concrete next steps for the active task, prefer a short bullet list so the app can turn them into subtasks. if you want to save structured task state, you may include lines that start with 'notes:', 'next:', 'blocker:', 'status:', 'progress:', 'reminder:', 'milestone:', 'schedule:', 'decision:', 'action:', 'task:', or 'focus:' and the app will save them.");
  }
  sysParts.push("for normal conversation, keep replies tight by default: usually 1 to 3 short sentences unless the user explicitly asks for depth.");
  sysParts.push("if the user greets you or checks in without giving direction, respond proactively using their current task board or to-do list. suggest 1 to 3 concrete next moves or ask them to pick one. do not give a generic greeting with no direction.");
  if (startupTaskLines) {
    sysParts.push("current startup to-do list:\n" + startupTaskLines);
  }
  if (taskBoardContext) {
    sysParts.push("full saved task board with completion state, operator state, subtasks, and notes:\n" + taskBoardContext);
  }
  if (dailyBriefingSummary) {
    sysParts.push(`daily board briefing: ${dailyBriefingSummary}`);
  }
  if (weeklyReviewSummary) {
    sysParts.push(`weekly operating review: ${weeklyReviewSummary}`);
  }
  if (milestoneSummary) {
    sysParts.push(`milestone health: ${milestoneSummary}`);
  }
  if (todayPlanSummary) {
    sysParts.push(`today plan: ${todayPlanSummary}`);
  }
  if (tomorrowPlanSummary) {
    sysParts.push(`tomorrow plan: ${tomorrowPlanSummary}`);
  }
  if (standupSummary) {
    sysParts.push(`daily standup: ${standupSummary}`);
  }
  if (riskRadarSummary) {
    sysParts.push(`risk radar: ${riskRadarSummary}`);
  }
  if (timelineSummary) {
    sysParts.push("recent board timeline:\n" + timelineSummary);
  }
  if (roadmapSummary) {
    sysParts.push(`operator roadmap live in app: ${roadmapSummary}`);
  }
  if (operatorState.meetingActive) {
    sysParts.push(`meeting mode is active${operatorState.meetingTopic ? ` for ${operatorState.meetingTopic}` : ""}. when you identify a decision, include a line starting with 'decision:' and you may append metadata like '| why: ... | owner: ... | follow-up: ...'. when you identify a concrete follow-up, include one or more lines starting with 'action:' and you may append '| owner: ... | milestone: ... | schedule: ... | follow-up: ...'. use 'task:' when a brainstorm item should become a brand new board task. keep meeting replies crisp and operator-like.`);
  }
  if (operatorState.focusTaskTitle && operatorState.focusEndsAt > Date.now()) {
    sysParts.push(`focus mode is active on ${operatorState.focusTaskTitle} until ${new Date(operatorState.focusEndsAt).toISOString()}. optimize for momentum on that task and call out drift if the user is wandering.`);
  }
  if (decisionLog.length) {
    sysParts.push("recent decisions:\n" + decisionLog.map((item) => `- ${item.summary}${item.taskTitle ? ` · ${item.taskTitle}` : ""}`).join("\n"));
  }
  if (activeTaskNotes) {
    sysParts.push(`active task notes:\n${activeTaskNotes.slice(0, 900)}`);
  }
  if (activeSubtasks) {
    sysParts.push("active task subtasks:\n" + activeSubtasks);
  }
  if (activeReminderSummary && activeReminderSummary !== "no follow-up set") {
    sysParts.push(`active task follow-up state: ${activeReminderSummary}`);
  }
  if (memoryLines) {
    sysParts.push("memory (older context):\n" + memoryLines);
  }
  if (chatHistorySummary) {
    sysParts.push("saved chat history from earlier sessions:\n" + chatHistorySummary);
  }
  sysParts.push("when the user references time (yesterday, last week, tomorrow), use the timestamps above to reason about it.");
  sysParts.push("if the user asks what is on the to-do list, what they were working on, or what happened earlier, answer directly from the saved task board, notes, and chat history above. do not ask them to repeat information that is already present.");
  sysParts.push("if the user asks you to make, replace, refresh, or create a to-do list or checklist, answer with a real bullet or numbered list of tasks so the app can save it as the active checklist. do not just describe a list in prose.");
  sysParts.push("if the user asks you to ask questions, probe, brainstorm, explain, or reason something through, do not turn that into a to-do list unless they explicitly ask for a to-do list or checklist.");
  if (pendingTodoListGenerationRequest) {
    sysParts.push("the user is actively asking for a fresh startup to-do list right now. your reply must be only a concise bullet or numbered list with 4 to 8 actionable tasks. no intro sentence, no outro, no explanation.");
  }
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

function normalizeChecklistMarkup(text) {
  return String(text || "")
    .replace(/\r/g, "")
    .replace(/(?:^|\s)(?:[-*•]\s*)?\[(?: |x|X)\]\s*/g, "\n- ");
}

function cleanExtractedListItem(text) {
  return String(text || "")
    .replace(/^(?:[-*•]|\d+[.)])\s*/, "")
    .replace(/^\[(?: |x|X)\]\s*/, "")
    .replace(/[\[\]]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractListFromText(text) {
  const raw = normalizeChecklistMarkup(text).trim();
  if (!raw) {
    return null;
  }

  const lines = raw.split(/\r?\n/).map((l) => l.trim());
  const items = [];
  for (const line of lines) {
    if (!line) continue;
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    const content = cleanExtractedListItem((bullet && bullet[1]) || (numbered && numbered[1]));
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

function extractTodoListFromAnnaText(text) {
  const direct = extractListFromText(text);
  if (direct) {
    return direct;
  }
  if (!pendingTodoListGenerationRequest) {
    return null;
  }

  const raw = normalizeChecklistMarkup(text).trim();
  if (!raw) {
    return null;
  }

  const compact = raw
    .replace(/^here(?:'s| is)\s+(?:a|your)\s+(?:new\s+)?(?:to do|todo|checklist|list)\s*:?[\s\n]*/i, "")
    .replace(/^to do\s*:?[\s\n]*/i, "")
    .trim();

  const items = compact
    .split(/\r?\n|\s*[;•]\s*|,\s+|\s+and\s+/i)
    .map((item) => cleanExtractedListItem(item))
    .filter((item) => item && item.length <= 120 && !/^here(?:'s| is)\b/i.test(item));

  const uniqueItems = Array.from(new Set(items.map((item) => normalizeTaskTitle(item)).filter(Boolean))).slice(0, 12);
  return uniqueItems.length >= 3 ? { title: "to do", items: uniqueItems } : null;
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
  if (!pendingTodoListGenerationRequest) {
    return false;
  }
  const extracted = extractTodoListFromAnnaText(text);
  if (!extracted) {
    return false;
  }

  if (listSheetBody && listSheetTitle) {
    listSheetTitle.textContent = extracted.title;
    renderSheetList(extracted);
    setListSheetOpen(true);
  }

  persistStartupList(extracted);
  return true;
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

  const nextMatch = String(text || "").match(/(?:^|\n)next:\s*(.{1,180})/i);
  const nextText = normalizeTaskTextField(nextMatch?.[1] || "", 180);
  if (nextText && nextText !== readTaskEntry(activeTitle).nextAction) {
    setTaskNextAction(activeTitle, nextText);
    changed = true;
  }

  const blockerMatch = String(text || "").match(/(?:^|\n)blocker:\s*(.{1,180})/i);
  const blockerText = normalizeTaskTextField(blockerMatch?.[1] || "", 180);
  if (blockerText && blockerText !== readTaskEntry(activeTitle).blocker) {
    blockTaskExecution(activeTitle, blockerText);
    changed = true;
  }

  const statusMatch = String(text || "").match(/(?:^|\n)status:\s*(active|blocked|paused|queued|done)/i);
  const progressMatch = String(text || "").match(/(?:^|\n)progress:\s*(\d{1,3})\s*%?/i);
  if (statusMatch || progressMatch) {
    const current = readTaskEntry(activeTitle);
    setTaskExecutionState(activeTitle, {
      workflowStatus: statusMatch ? normalizeTaskWorkflowStatus(statusMatch[1]) : current.workflowStatus,
      progress: progressMatch ? normalizeTaskProgress(progressMatch[1]) : current.progress,
      completed: statusMatch ? normalizeTaskWorkflowStatus(statusMatch[1]) === "done" : current.completed
    });
    changed = true;
  }

  const reminderMatch = String(text || "").match(/(?:^|\n)reminder:\s*(.{1,120})/i);
  if (reminderMatch) {
    const parsedReminder = parseTaskReminderPhrase(reminderMatch[1]);
    if (parsedReminder) {
      setTaskReminderState(activeTitle, parsedReminder);
      changed = true;
    }
  }

  const milestoneMatch = String(text || "").match(/(?:^|\n)milestone:\s*(.{1,80})/i);
  const milestoneText = normalizeTaskMilestone(milestoneMatch?.[1] || "");
  if (milestoneText && milestoneText !== readTaskEntry(activeTitle).milestone) {
    setTaskPlanningState(activeTitle, { milestone: milestoneText });
    changed = true;
  }

  const scheduleMatch = String(text || "").match(/(?:^|\n)schedule:\s*(.{1,120})/i);
  if (scheduleMatch) {
    const parsedSchedule = parseTaskSchedulePhrase(scheduleMatch[1]);
    if (parsedSchedule) {
      setTaskPlanningState(activeTitle, parsedSchedule);
      changed = true;
    }
  }

  if (changed) {
    renderTaskWorkspace();
    renderStartupDashboard();
  }
}

function maybeApplyOperatorSuggestionsFromAnna(text) {
  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }

  const activeTitle = getCurrentTaskTitle();
  let changed = false;

  Array.from(cleaned.matchAll(/(?:^|\n)decision:\s*(.{1,220})/gi)).forEach((match) => {
    const parsedDecision = parseOperatorMetaLine(match[1]) || { summary: match[1] };
    if (appendDecisionLog({
      summary: parsedDecision.summary,
      taskTitle: normalizeTaskTitle(parsedDecision.task || "") || activeTitle || "",
      owner: parsedDecision.owner || "",
      dueLabel: parsedDecision.schedule || "",
      rationale: parsedDecision.why || parsedDecision.rationale || "",
      followUp: parsedDecision.followUp || "",
      source: "anna"
    })) {
      changed = true;
    }
  });

  Array.from(cleaned.matchAll(/(?:^|\n)action:\s*(.{1,220})/gi)).forEach((match) => {
    if (captureStructuredActionItem(match[1], activeTitle || "")) {
      changed = true;
    }
  });

  Array.from(cleaned.matchAll(/(?:^|\n)task:\s*(.{1,220})/gi)).forEach((match) => {
    if (captureStructuredActionItem(match[1], "")) {
      changed = true;
    }
  });

  const followupMatch = cleaned.match(/(?:^|\n)follow(?:-|\s)?up:\s*(.{1,160})/i);
  if (followupMatch && activeTitle) {
    const parsedReminder = parseTaskReminderPhrase(followupMatch[1]);
    if (parsedReminder) {
      setTaskReminderState(activeTitle, parsedReminder);
      changed = true;
    }
  }

  const focusMatch = cleaned.match(/(?:^|\n)focus:\s*(?:on\s+)?(.{1,160})/i);
  if (focusMatch) {
    const focusTarget = resolveTaskReference(focusMatch[1], activeTitle || "");
    if (focusTarget) {
      startFocusMode(focusTarget, { minutes: 45 });
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

function syncExtractedListToTaskBoard(extracted, userId = getCurrentUserId()) {
  const title = String(extracted?.title || "").trim().toLowerCase();
  if (title === "resources") {
    return [];
  }

  const items = Array.isArray(extracted?.items)
    ? Array.from(
        new Set(
          extracted.items
            .map((item) => normalizeTaskTitle(item))
            .filter(Boolean)
            .slice(0, 24)
        )
      )
    : [];

  items.forEach((taskTitle) => {
    updateTaskEntry(
      taskTitle,
      (current) => ({
        ...current,
        title: taskTitle
      }),
      userId
    );
  });

  return items;
}

function persistStartupList(extracted) {
  const userId = getCurrentUserId();
  const title = String(extracted?.title || "").trim().toLowerCase();
  const items = syncExtractedListToTaskBoard(extracted, userId);

  if (!items.length) {
    return;
  }

  const log = readStartupLists();
  const entry = { title, items, ts: Date.now(), userId };
  const next = [...log, entry].slice(-80);
  writeStartupLists(next);
  renderStartupDashboard();
  renderTaskWorkspace();
}

function renderStartupDashboard() {
  if (!startupTasksEl && !projectsLeftEl && !lastUpdatedEl && !startupPulseSummary && !startupPlansSummary && !startupHealthSummary && !startupOperatorSummary && !startupBriefingSummary && !startupWeeklyReviewSummary && !startupMilestoneSummary && !startupStandupSummary && !startupTodayPlanSummary && !startupTomorrowPlanSummary && !startupRoadmapSummary && !startupRiskSummary && !startupMeetingSummary) {
    return;
  }

  const userId = getCurrentUserId();
  const latest = getLatestStartupListForUser(userId);
  const items = latest && Array.isArray(latest.items) ? latest.items : [];
  const remainingCount = items.filter((item) => !readTaskEntry(item, userId).completed).length;
  const briefing = getDailyBriefingData(userId);
  const weeklyReview = getWeeklyReviewData(userId);
  const milestoneStatus = getMilestoneStatusData(userId);
  const todayPlan = getTodayPlanData(userId);
  const tomorrowPlan = getTomorrowPlanData(userId);
  const standup = getBoardStandupData(userId);
  const timeline = getBoardTimelineData(userId, 6);
  const roadmap = readOperatorRoadmap();
  const riskRadar = getRiskRadarData(userId);
  const decisions = readDecisionLog(userId).slice(0, 4);
  const operatorState = readOperatorState(userId);

  const pulseSummary = String(briefing.focus.length);
  const plansTodayCount = todayPlan.planned.length || todayPlan.carryOver.length;
  const plansSummary = String(plansTodayCount);
  const healthSummary = String(riskRadar.risky.length);
  const operatorSummary = String(roadmap.length);

  const pulseMeta = briefing.alerts.length
    ? `${briefing.alerts.length} alert${briefing.alerts.length === 1 ? "" : "s"}`
    : "board calm";
  const plansMeta = `tomorrow ${tomorrowPlan.planned.length}`;
  const healthMeta = `milestones ${milestoneStatus.rollups.length}`;
  const operatorMeta = decisions.length
    ? `${decisions.length} decision${decisions.length === 1 ? "" : "s"}`
    : "no decisions";

  if (projectsLeftEl) {
    projectsLeftEl.textContent = String(remainingCount);
  }

  if (lastUpdatedEl) {
    const latestActivityTs = getLatestStartupActivityTs(userId);
    lastUpdatedEl.textContent = latestActivityTs
      ? formatRelativeTime(Date.now() - Number(latestActivityTs))
      : "not yet";
  }

  if (startupPulseSummary) {
    startupPulseSummary.textContent = pulseSummary;
  }
  if (startupPulseMeta) {
    startupPulseMeta.textContent = pulseMeta;
  }
  if (startupPlansSummary) {
    startupPlansSummary.textContent = plansSummary;
  }
  if (startupPlansMeta) {
    startupPlansMeta.textContent = plansMeta;
  }
  if (startupHealthSummary) {
    startupHealthSummary.textContent = healthSummary;
  }
  if (startupHealthMeta) {
    startupHealthMeta.textContent = healthMeta;
  }
  if (startupOperatorSummary) {
    startupOperatorSummary.textContent = operatorSummary;
  }
  if (startupOperatorMeta) {
    startupOperatorMeta.textContent = operatorMeta;
  }

  if (startupBriefingSummary) {
    startupBriefingSummary.textContent = briefing.summary;
  }
  if (startupBoardAlerts) {
    startupBoardAlerts.innerHTML = "";
    briefing.alerts.forEach((alertText) => {
      const alert = document.createElement("div");
      alert.className = `startup-briefing-alert${/overdue|waiting on/.test(alertText) ? " is-warning" : ""}`;
      alert.textContent = alertText;
      startupBoardAlerts.appendChild(alert);
    });
  }
  if (startupFocusList) {
    startupFocusList.innerHTML = "";
    briefing.focus.forEach((item) => {
      const card = document.createElement("div");
      card.className = "startup-briefing-focus-item";

      const titleEl = document.createElement("div");
      titleEl.className = "startup-briefing-focus-title";
      titleEl.textContent = item.title;

      const nextEl = document.createElement("div");
      nextEl.className = "startup-briefing-focus-next";
      nextEl.textContent = `next: ${item.next}`;

      card.appendChild(titleEl);
      card.appendChild(nextEl);

      if (item.meta.length) {
        const meta = document.createElement("div");
        meta.className = "startup-briefing-focus-meta";
        meta.textContent = item.meta.join(" · ");
        card.appendChild(meta);
      }

      startupFocusList.appendChild(card);
    });
  }
  if (startupWeeklyReviewSummary) {
    startupWeeklyReviewSummary.textContent = weeklyReview.summary;
  }
  if (startupWeeklyReviewList) {
    startupWeeklyReviewList.innerHTML = "";
    const sections = [
      { label: "wins", items: weeklyReview.wins },
      { label: "slips", items: weeklyReview.slips },
      { label: "next bets", items: weeklyReview.bets }
    ];
    sections.forEach((section) => {
      const row = document.createElement("div");
      row.className = "startup-review-item";

      const labelEl = document.createElement("div");
      labelEl.className = "startup-review-label";
      labelEl.textContent = section.label;

      const bodyEl = document.createElement("div");
      bodyEl.className = "startup-review-body";
      if (!section.items.length) {
        bodyEl.textContent = section.label === "wins" ? "no signal yet" : section.label === "slips" ? "clean right now" : "needs conviction";
      } else {
        bodyEl.textContent = section.items.map((item) => item.meta ? `${item.title} (${item.meta})` : item.title).join(" · ");
      }

      row.appendChild(labelEl);
      row.appendChild(bodyEl);
      startupWeeklyReviewList.appendChild(row);
    });
  }
  if (startupMilestoneSummary) {
    startupMilestoneSummary.textContent = milestoneStatus.summary;
  }
  if (startupMilestoneList) {
    startupMilestoneList.innerHTML = "";
    if (!milestoneStatus.rollups.length) {
      const empty = document.createElement("div");
      empty.className = "startup-milestone-item is-empty";
      empty.textContent = "no milestone groups yet. assign tasks into a milestone to see health here.";
      startupMilestoneList.appendChild(empty);
    } else {
      milestoneStatus.rollups.slice(0, 4).forEach((item) => {
        const row = document.createElement("div");
        row.className = `startup-milestone-item is-${item.health.replace(/\s+/g, "-")}`;

        const head = document.createElement("div");
        head.className = "startup-milestone-head";

        const titleEl = document.createElement("div");
        titleEl.className = "startup-milestone-title";
        titleEl.textContent = item.milestone;

        const badge = document.createElement("div");
        badge.className = `startup-milestone-badge is-${item.health.replace(/\s+/g, "-")}`;
        badge.textContent = item.health;

        head.appendChild(titleEl);
        head.appendChild(badge);

        const metaEl = document.createElement("div");
        metaEl.className = "startup-milestone-meta";
        metaEl.textContent = item.summaryParts.slice(0, 4).join(" · ");

        const tasksEl = document.createElement("div");
        tasksEl.className = "startup-milestone-tasks";
        tasksEl.textContent = item.topTasks.length ? `top tasks: ${item.topTasks.join(" · ")}` : "no open tasks";

        row.appendChild(head);
        row.appendChild(metaEl);
        row.appendChild(tasksEl);
        startupMilestoneList.appendChild(row);
      });
    }
  }
  if (startupStandupSummary) {
    startupStandupSummary.textContent = buildBoardStandupReply(userId);
  }
  if (startupTodayPlanSummary) {
    startupTodayPlanSummary.textContent = todayPlan.summary;
  }
  if (startupTodayPlanList) {
    startupTodayPlanList.innerHTML = "";
    if (!todayPlan.planned.length) {
      const empty = document.createElement("div");
      empty.className = "startup-plan-item is-empty";
      empty.textContent = todayPlan.carryOver.length
        ? `carryover: ${todayPlan.carryOver.join(" · ")}`
        : "nothing scheduled yet. tell anna to put a task on today's plan.";
      startupTodayPlanList.appendChild(empty);
    } else {
      todayPlan.planned.forEach((item) => {
        const row = document.createElement("div");
        row.className = "startup-plan-item";

        const timeEl = document.createElement("div");
        timeEl.className = "startup-plan-time";
        timeEl.textContent = item.time;

        const mainEl = document.createElement("div");
        mainEl.className = "startup-plan-main";

        const titleEl = document.createElement("div");
        titleEl.className = "startup-plan-title";
        titleEl.textContent = item.title;

        const metaParts = [
          item.bucket,
          item.source ? `${item.source} slot` : "",
          item.durationMinutes ? `${item.durationMinutes} min` : "",
          item.milestone ? `milestone ${item.milestone}` : "",
          item.next ? `next ${item.next}` : "",
          ...item.meta
        ].filter(Boolean).slice(0, 3);

        mainEl.appendChild(titleEl);

        if (metaParts.length) {
          const metaEl = document.createElement("div");
          metaEl.className = "startup-plan-meta";
          metaEl.textContent = metaParts.join(" · ");
          mainEl.appendChild(metaEl);
        }

        row.appendChild(timeEl);
        row.appendChild(mainEl);
        startupTodayPlanList.appendChild(row);
      });
    }
  }
  if (startupTomorrowPlanSummary) {
    startupTomorrowPlanSummary.textContent = tomorrowPlan.summary;
  }
  if (startupTomorrowPlanList) {
    startupTomorrowPlanList.innerHTML = "";
    if (!tomorrowPlan.planned.length) {
      const empty = document.createElement("div");
      empty.className = "startup-plan-item is-empty";
      empty.textContent = tomorrowPlan.carryOver.length
        ? `carryover waiting: ${tomorrowPlan.carryOver.join(" · ")}`
        : "tomorrow is open. ask anna to build tomorrow's plan before you log off.";
      startupTomorrowPlanList.appendChild(empty);
    } else {
      tomorrowPlan.planned.forEach((item) => {
        const row = document.createElement("div");
        row.className = "startup-plan-item";

        const timeEl = document.createElement("div");
        timeEl.className = "startup-plan-time";
        timeEl.textContent = item.time;

        const mainEl = document.createElement("div");
        mainEl.className = "startup-plan-main";

        const titleEl = document.createElement("div");
        titleEl.className = "startup-plan-title";
        titleEl.textContent = item.title;

        const metaParts = [
          item.bucket,
          item.source ? `${item.source} slot` : "",
          item.durationMinutes ? `${item.durationMinutes} min` : "",
          item.milestone ? `milestone ${item.milestone}` : "",
          item.next ? `next ${item.next}` : "",
          ...item.meta
        ].filter(Boolean).slice(0, 3);

        mainEl.appendChild(titleEl);

        if (metaParts.length) {
          const metaEl = document.createElement("div");
          metaEl.className = "startup-plan-meta";
          metaEl.textContent = metaParts.join(" · ");
          mainEl.appendChild(metaEl);
        }

        row.appendChild(timeEl);
        row.appendChild(mainEl);
        startupTomorrowPlanList.appendChild(row);
      });
    }
  }
  if (startupRoadmapSummary) {
    startupRoadmapSummary.textContent = `${roadmap.length} operator systems are now live in anna.`;
  }
  if (startupRoadmapList) {
    startupRoadmapList.innerHTML = "";
    roadmap.forEach((item) => {
      const row = document.createElement("div");
      row.className = "startup-ops-item";

      const head = document.createElement("div");
      head.className = "startup-ops-head";

      const titleEl = document.createElement("div");
      titleEl.className = "startup-ops-title";
      titleEl.textContent = item.title;

      const statusEl = document.createElement("div");
      statusEl.className = "startup-ops-status";
      statusEl.textContent = item.status;

      const copy = document.createElement("div");
      copy.className = "startup-ops-copy";
      copy.textContent = item.description;

      head.appendChild(titleEl);
      head.appendChild(statusEl);
      row.appendChild(head);
      row.appendChild(copy);
      startupRoadmapList.appendChild(row);
    });
  }
  if (startupRiskSummary) {
    startupRiskSummary.textContent = riskRadar.summary;
  }
  if (startupRiskList) {
    startupRiskList.innerHTML = "";
    if (!riskRadar.risky.length) {
      const empty = document.createElement("div");
      empty.className = "startup-ops-item";
      empty.textContent = "no open risk spikes right now.";
      startupRiskList.appendChild(empty);
    } else {
      riskRadar.risky.forEach((item) => {
        const row = document.createElement("div");
        row.className = "startup-ops-item";

        const head = document.createElement("div");
        head.className = "startup-ops-head";

        const link = createTaskLink(item.title, "startup-ops-link");
        const severity = document.createElement("div");
        severity.className = "startup-ops-status";
        severity.textContent = item.severity >= 3 ? "escalate" : item.severity === 2 ? "watch" : "nudge";

        const copy = document.createElement("div");
        copy.className = "startup-ops-copy";
        copy.textContent = item.signals.slice(0, 2).map((signal) => signal.text).join(" · ");

        const meta = document.createElement("div");
        meta.className = "startup-ops-meta";
        meta.textContent = `next ${item.next}`;

        head.appendChild(link);
        head.appendChild(severity);
        row.appendChild(head);
        row.appendChild(copy);
        row.appendChild(meta);
        startupRiskList.appendChild(row);
      });
    }
  }
  if (startupMeetingSummary) {
    startupMeetingSummary.textContent = `${getMeetingModeSummary(userId)} ${getFocusModeSummary(userId)}`.trim();
  }
  if (startupDecisionList) {
    startupDecisionList.innerHTML = "";

    const meetingItem = document.createElement("div");
    meetingItem.className = "startup-ops-item";
    const meetingTitle = document.createElement("div");
    meetingTitle.className = "startup-ops-title";
    meetingTitle.textContent = "meeting mode";
    const meetingCopy = document.createElement("div");
    meetingCopy.className = "startup-ops-copy";
    meetingCopy.textContent = getMeetingModeSummary(userId);
    meetingItem.appendChild(meetingTitle);
    meetingItem.appendChild(meetingCopy);
    startupDecisionList.appendChild(meetingItem);

    const focusItem = document.createElement("div");
    focusItem.className = "startup-ops-item";
    const focusTitle = document.createElement("div");
    focusTitle.className = "startup-ops-title";
    focusTitle.textContent = "focus mode";
    const focusCopy = document.createElement("div");
    focusCopy.className = "startup-ops-copy";
    focusCopy.textContent = getFocusModeSummary(userId);
    focusItem.appendChild(focusTitle);
    focusItem.appendChild(focusCopy);
    startupDecisionList.appendChild(focusItem);

    decisions.forEach((decision) => {
      const row = document.createElement("div");
      row.className = "startup-ops-item";

      const titleEl = document.createElement("div");
      titleEl.className = "startup-ops-title";
      titleEl.textContent = decision.summary;

      const meta = document.createElement("div");
      meta.className = "startup-ops-meta";
      meta.textContent = [decision.taskTitle || "board decision", decision.source, decision.ts ? formatRelativeTime(Date.now() - decision.ts) : ""].filter(Boolean).join(" · ");

      row.appendChild(titleEl);
      row.appendChild(meta);
      startupDecisionList.appendChild(row);
    });
  }
  if (startupTimelineList) {
    startupTimelineList.innerHTML = "";
    timeline.forEach((item) => {
      const row = document.createElement("div");
      row.className = "startup-timeline-item";

      const titleEl = document.createElement("div");
      titleEl.className = "startup-timeline-title";
      titleEl.textContent = item.title;

      const metaEl = document.createElement("div");
      metaEl.className = "startup-timeline-meta";
      metaEl.textContent = `${item.kind} · ${formatRelativeTime(Date.now() - item.ts)}`;

      const detailEl = document.createElement("div");
      detailEl.className = "startup-timeline-detail";
      detailEl.textContent = item.detail;

      row.appendChild(titleEl);
      row.appendChild(metaEl);
      row.appendChild(detailEl);
      startupTimelineList.appendChild(row);
    });
  }

  if (!startupTasksEl) {
    return;
  }

  startupTasksEl.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "startup-empty";
    empty.textContent = "no tasks yet. ask anna for a to do list and it'll show up here.";
    startupTasksEl.appendChild(empty);
    return;
  }

  items.slice(0, 18).forEach((titleText) => {
    const title = String(titleText || "").trim();
    if (!title) return;

    const state = readTaskEntry(title, userId);

    const row = document.createElement("div");
    row.className = `startup-task${state.completed ? " is-complete" : ""}`;

    const main = document.createElement("div");
    main.className = "startup-task-main";

    const a = createTaskLink(title, "startup-task-title");
    main.appendChild(a);

    const ownership = buildTaskOwnershipParts(state);
    const execution = buildTaskExecutionParts(state).filter((item) => !item.startsWith("next "));
    const reminder = formatTaskReminderSummary(state);
    const metaParts = [...ownership, ...execution, ...(reminder !== "no follow-up set" ? [`follow up ${reminder}`] : [])].slice(0, 3);
    if (metaParts.length) {
      const meta = document.createElement("div");
      meta.className = "startup-task-meta";
      meta.textContent = metaParts.join(" · ");
      main.appendChild(meta);
    }

    const check = createTaskCheckButton(title, "startup-task-check", () => renderStartupDashboard());
    row.appendChild(main);
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
    row.addEventListener("dragover", (event) => {
      if (!draggedTaskTitle || draggedTaskTitle === normalized) {
        return;
      }
      event.preventDefault();
      row.classList.add("is-drag-target");
    });
    row.addEventListener("dragleave", () => {
      row.classList.remove("is-drag-target");
    });
    row.addEventListener("drop", (event) => {
      if (!draggedTaskTitle || draggedTaskTitle === normalized) {
        return;
      }
      event.preventDefault();
      row.classList.remove("is-drag-target");
      reorderTaskInLatestStartupList(draggedTaskTitle, normalized);
      draggedTaskTitle = "";
      renderTaskRelatedList(getCurrentTaskTitle());
      renderStartupDashboard();
    });

    const link = createTaskLink(normalized, "task-related-link");
    const check = createTaskCheckButton(normalized, "task-related-check", () => {
      renderTaskRelatedList(currentTitle);
      renderTaskWorkspace();
    });

    const drag = document.createElement("span");
    drag.className = "task-drag-grip";
    drag.textContent = "⋮⋮";
    drag.draggable = true;
    drag.setAttribute("aria-label", `drag ${normalized}`);
    drag.setAttribute("title", "drag to reorder");
    drag.addEventListener("dragstart", (event) => {
      draggedTaskTitle = normalized;
      row.classList.add("is-dragging");
      event.dataTransfer?.setData("text/plain", normalized);
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
      }
    });
    drag.addEventListener("dragend", () => {
      draggedTaskTitle = "";
      row.classList.remove("is-dragging");
      taskRelatedList.querySelectorAll(".task-related-item").forEach((item) => item.classList.remove("is-drag-target"));
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-delete-button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `delete ${normalized}`);
    remove.addEventListener("click", () => {
      deleteTask(normalized);
      renderTaskRelatedList(getCurrentTaskTitle());
      renderStartupDashboard();
    });

    row.appendChild(drag);
    row.appendChild(link);
    row.appendChild(remove);
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
    row.addEventListener("dragover", (event) => {
      if (!draggedSubtaskId || draggedSubtaskId === subtask.id) {
        return;
      }
      event.preventDefault();
      row.classList.add("is-drag-target");
    });
    row.addEventListener("dragleave", () => {
      row.classList.remove("is-drag-target");
    });
    row.addEventListener("drop", (event) => {
      if (!draggedSubtaskId || draggedSubtaskId === subtask.id) {
        return;
      }
      event.preventDefault();
      row.classList.remove("is-drag-target");
      reorderTaskSubtask(title, draggedSubtaskId, subtask.id);
      draggedSubtaskId = "";
      renderTaskWorkspace();
      renderStartupDashboard();
    });

    const label = document.createElement("textarea");
    label.spellcheck = false;
    label.rows = 2;
    label.className = "task-subtask-title";
    label.value = subtask.title;
    label.setAttribute("aria-label", "subtask title");
    label.setAttribute("wrap", "soft");
    const resizeLabel = () => {
      label.style.height = "0px";
      label.style.height = `${Math.max(label.scrollHeight + 8, 68)}px`;
    };
    const originalTitle = subtask.title;
    const saveSubtaskTitle = () => {
      const nextTitle = String(label.value || "").trim();
      if (!nextTitle) {
        label.value = originalTitle;
        resizeLabel();
        return;
      }
      if (nextTitle === originalTitle) {
        resizeLabel();
        return;
      }
      renameTaskSubtask(title, subtask.id, nextTitle);
      renderTaskWorkspace();
      renderStartupDashboard();
    };
    label.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        label.blur();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        label.value = originalTitle;
        resizeLabel();
        label.blur();
      }
    });
    label.addEventListener("input", resizeLabel);
    label.addEventListener("blur", saveSubtaskTitle);
    resizeLabel();

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

    const drag = document.createElement("span");
    drag.className = "task-drag-grip";
    drag.textContent = "⋮⋮";
    drag.draggable = true;
    drag.setAttribute("aria-label", `drag ${subtask.title}`);
    drag.setAttribute("title", "drag to reorder");
    drag.addEventListener("dragstart", (event) => {
      draggedSubtaskId = subtask.id;
      row.classList.add("is-dragging");
      event.dataTransfer?.setData("text/plain", subtask.id);
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
      }
    });
    drag.addEventListener("dragend", () => {
      draggedSubtaskId = "";
      row.classList.remove("is-dragging");
      taskSubtaskList.querySelectorAll(".task-subtask-item").forEach((item) => item.classList.remove("is-drag-target"));
    });

    const actions = document.createElement("div");
    actions.className = "task-subtask-actions";

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-delete-button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `delete ${subtask.title}`);
    remove.addEventListener("click", () => {
      deleteTaskSubtask(title, subtask.id);
      renderTaskWorkspace();
      renderStartupDashboard();
    });

    actions.appendChild(remove);
    actions.appendChild(check);

    row.appendChild(drag);
    row.appendChild(label);
    row.appendChild(actions);
    taskSubtaskList.appendChild(row);
  });
}

let isTaskActionMenuOpen = false;

function setTaskActionMenuOpen(isOpen) {
  const nextOpen = Boolean(isOpen);
  isTaskActionMenuOpen = nextOpen;
  if (taskActionMenu) {
    taskActionMenu.classList.toggle("hidden", !nextOpen);
  }
  if (taskActionToggle) {
    taskActionToggle.setAttribute("aria-expanded", String(nextOpen));
    taskActionToggle.textContent = nextOpen ? "hide actions" : "actions";
  }
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
    if (taskOwnerSummary) {
      taskOwnerSummary.textContent = "pick a task, then give anna a real target for it.";
    }
    if (taskOwnerChips) {
      taskOwnerChips.innerHTML = "";
    }
    if (taskWorkflowBadge) {
      taskWorkflowBadge.textContent = "queued";
      taskWorkflowBadge.dataset.status = "queued";
    }
    if (taskProgressText) {
      taskProgressText.textContent = "0%";
    }
    if (taskProgressFill) {
      taskProgressFill.style.width = "0%";
    }
    if (taskNextActionText) {
      taskNextActionText.textContent = "pick a task to load the next move";
    }
    if (taskBlockerText) {
      taskBlockerText.textContent = "none";
    }
    if (taskSessionText) {
      taskSessionText.textContent = "not running";
    }
    if (taskReminderText) {
      taskReminderText.textContent = "no follow-up set";
      taskReminderText.classList.remove("is-overdue");
    }
    if (taskFocusText) {
      taskFocusText.textContent = "not running";
    }
    if (taskRescueText) {
      taskRescueText.textContent = "no rescue plan yet";
    }
    if (taskMeetingText) {
      taskMeetingText.textContent = "off";
    }
    if (taskDecisionList) {
      taskDecisionList.innerHTML = "";
    }
    [taskStartNowButton, taskFinishStepButton, taskPauseButton, taskUnblockButton, taskPlanButton, taskRemindLaterButton, taskTomorrowButton, taskDailyFollowupButton, taskClearFollowupButton].forEach((button) => {
      if (button) button.disabled = true;
    });
    if (taskActionToggle) {
      taskActionToggle.disabled = true;
    }
    if (taskActionSummary) {
      taskActionSummary.textContent = "pick a task to unlock actions";
    }
    setTaskActionMenuOpen(false);
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
  const workflowStatus = normalizeTaskWorkflowStatus(state.workflowStatus || (state.completed ? "done" : "queued"));
  const progress = getTaskProgressValue(state);
  const nextAction = getTaskNextActionText(state);
  const operatorState = readOperatorState();
  const rescue = buildDependencyRescueData(title);
  const decisions = readDecisionLog().filter((item) => !item.taskTitle || item.taskTitle === title).slice(0, 3);

  if (taskPageTitle && document.activeElement !== taskPageTitle) {
    taskPageTitle.textContent = title;
  }
  if (taskPageStatus) {
    taskPageStatus.textContent = `${formatTaskWorkflowLabel(workflowStatus)} · ${subtaskStatus}`;
  }
  if (taskOwnerSummary) {
    const ownerSummary = buildTaskOwnershipSummary(state);
    const executionSummary = buildTaskExecutionParts(state).slice(0, 2).join(" · ");
    taskOwnerSummary.textContent = executionSummary ? `${ownerSummary} · ${executionSummary}` : ownerSummary;
  }
  if (taskOwnerChips) {
    taskOwnerChips.innerHTML = "";
    [...buildTaskOwnershipParts(state), ...buildTaskExecutionParts(state).filter((item) => !item.startsWith("next "))].slice(0, 6).forEach((labelText) => {
      const chip = document.createElement("div");
      chip.className = "task-owner-chip";
      chip.textContent = labelText;
      taskOwnerChips.appendChild(chip);
    });
  }
  if (taskWorkflowBadge) {
    taskWorkflowBadge.textContent = formatTaskWorkflowLabel(workflowStatus);
    taskWorkflowBadge.dataset.status = workflowStatus;
  }
  if (taskProgressText) {
    taskProgressText.textContent = `${progress}%`;
  }
  if (taskProgressFill) {
    taskProgressFill.style.width = `${progress}%`;
  }
  if (taskNextActionText) {
    taskNextActionText.textContent = nextAction;
  }
  if (taskBlockerText) {
    taskBlockerText.textContent = state.blocker || "none";
  }
  if (taskSessionText) {
    taskSessionText.textContent = formatTaskSessionText(state);
  }
  if (taskReminderText) {
    taskReminderText.textContent = formatTaskReminderSummary(state);
    taskReminderText.classList.toggle("is-overdue", isTaskReminderOverdue(state));
  }
  if (taskFocusText) {
    taskFocusText.textContent = operatorState.focusTaskTitle === title && operatorState.focusEndsAt > Date.now()
      ? `locked until ${new Date(operatorState.focusEndsAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`
      : operatorState.focusTaskTitle && operatorState.focusEndsAt > Date.now()
        ? `currently on ${operatorState.focusTaskTitle}`
        : "not running";
  }
  if (taskRescueText) {
    taskRescueText.textContent = rescue?.actions?.length ? rescue.actions[0] : rescue?.dependencySummary || "no rescue plan yet";
  }
  if (taskMeetingText) {
    taskMeetingText.textContent = operatorState.meetingActive
      ? `live${operatorState.meetingTopic ? ` · ${operatorState.meetingTopic}` : ""}`
      : "off";
  }
  if (taskDecisionList) {
    taskDecisionList.innerHTML = "";
    if (!decisions.length) {
      const empty = document.createElement("div");
      empty.className = "task-decision-item";
      empty.textContent = "no decisions logged for this task yet.";
      taskDecisionList.appendChild(empty);
    } else {
      decisions.forEach((decision) => {
        const row = document.createElement("div");
        row.className = "task-decision-item";

        const copy = document.createElement("div");
        copy.className = "task-decision-copy";
        copy.textContent = decision.summary;

        const meta = document.createElement("div");
        meta.className = "task-decision-meta";
        meta.textContent = [decision.source, decision.ts ? formatRelativeTime(Date.now() - decision.ts) : ""].filter(Boolean).join(" · ");

        row.appendChild(copy);
        row.appendChild(meta);
        taskDecisionList.appendChild(row);
      });
    }
  }
  if (taskStartNowButton) {
    taskStartNowButton.disabled = state.completed;
  }
  if (taskFinishStepButton) {
    taskFinishStepButton.disabled = state.completed || !state.subtasks.some((item) => !item.completed);
  }
  if (taskPauseButton) {
    taskPauseButton.disabled = state.completed || workflowStatus === "paused" || workflowStatus === "queued";
  }
  if (taskUnblockButton) {
    taskUnblockButton.disabled = !state.blocker;
  }
  if (taskPlanButton) {
    taskPlanButton.disabled = state.completed;
  }
  if (taskRemindLaterButton) {
    taskRemindLaterButton.disabled = state.completed;
  }
  if (taskTomorrowButton) {
    taskTomorrowButton.disabled = state.completed;
  }
  if (taskDailyFollowupButton) {
    taskDailyFollowupButton.disabled = state.completed;
  }
  if (taskClearFollowupButton) {
    taskClearFollowupButton.disabled = !state.reminderAt && !state.reminderCadence;
  }
  if (taskActionToggle) {
    taskActionToggle.disabled = false;
  }
  if (taskActionSummary) {
    taskActionSummary.textContent = getTaskActionFeedback(title, [
      workflowStatus === "active" ? "live" : state.blocker ? "blocked" : "ready",
      state.reminderAt || state.reminderCadence ? "follow-up on" : "follow-up off"
    ].join(" · "));
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

function setAudioNotice(message, options = {}) {
  const text = String(message || "").trim();
  if (audioNotice && audioNoticeText) {
    renderVoiceStatusContent(audioNoticeText, text, options.state);
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
    const previousVolume = a.volume;
    routeTtsAudioToSystemOutput(a);
    a.pause();
    a.removeAttribute("src");
    a.load();
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
    markVoiceActivationUnlocked();
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

function retryPendingAudioUnlockFromGesture() {
  if (!ttsNeedsUnlock) {
    return;
  }
  unlockAudioFromGesture();
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

async function getMicrophonePermissionState() {
  if (!navigator.permissions || typeof navigator.permissions.query !== "function") {
    return "";
  }
  try {
    const status = await navigator.permissions.query({ name: "microphone" });
    return String(status?.state || "").trim().toLowerCase();
  } catch {
    return "";
  }
}

function retryVoiceCaptureFromGesture() {
  markVoiceActivationUnlocked();
  unlockAudioFromGesture();
  clearAudioNotice();
  speechStartRecoveryUsed = false;

  if (shouldUseInlineVoiceMode()) {
    startInlineVoiceCapture("tap");
    return;
  }

  persistentListeningEnabled = true;
  pendingResumeListening = false;
  singleTurnVoiceMode = false;
  playRecordBeep(true);
  setListening(true);
}

function resetSpeechRecognizer() {
  clearSpeechStartTimer();
  speechStartConfirmed = false;
  if (!speechRecognizer) {
    return;
  }
  try {
    speechRecognizer.onresult = null;
    speechRecognizer.onerror = null;
    speechRecognizer.onend = null;
    speechRecognizer.onstart = null;
  } catch {
    // ignore
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
  speechRecognizer = null;
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
  ttsCurrentText = "";

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
  const { url, sessionId, text } = next;
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
  ttsCurrentText = String(text || "").trim();
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
    ttsCurrentText = "";
    if (bargeInListeningMode) {
      bargeInListeningMode = false;
      if (isListeningNow) {
        showSpeechStatus("listening", 1800, { state: "listening" });
      }
    }
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
    ttsCurrentText = "";
    bargeInListeningMode = false;
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

  const playPromise = audio.play();
  if (playPromise && playPromise.then) {
    playPromise.then(() => {
      if (persistentListeningEnabled && !isListeningNow) {
        maybeStartBargeInListeningSoon(90);
      }
    }).catch(() => {
    // Likely autoplay policy. Keep this chunk and retry after unlock.
    console.warn("anna tts play() was blocked; waiting for next user gesture to retry audio");
    setAudioNotice("voice is ready. tap anywhere once and anna will speak normally.");
    ttsNeedsUnlock = true;
    ttsIsPlaying = false;
    ttsCurrentAudio = null;
    ttsCurrentText = "";
    try {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    } catch {
      // ignore
    }
    if (ttsCurrentUrl) {
      ttsQueue.unshift({ url: ttsCurrentUrl, sessionId, text });
    }
    ttsCurrentUrl = null;
    });
    return;
  }

  if (persistentListeningEnabled && !isListeningNow) {
    maybeStartBargeInListeningSoon(90);
  }
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
      ttsQueue.push({ url, sessionId: mySession, text: cleaned });
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
  const liveText = getCurrentLiveUserText(cleaned);
  if (!liveText) {
    clearLiveUserLine();
    interimEl = null;
    return;
  }

  interimEl = ensureLiveUserLine(liveText);
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

  transcriptEntries = [...transcriptEntries, { role, text: cleaned }].slice(-80);
  appendChatSessionEntry(role, cleaned);

  if (role === "user" && liveUserLineEl) {
    liveUserLineEl.className = "transcript-line user";
    liveUserLineEl.textContent = `“${cleaned}”`;
    interimEl = null;
    liveUserLineEl = null;
    interimText = "";
    finalSpeechBuffer = "";
    scrollTranscriptIfNeeded();
    return;
  }

  clearLiveUserLine();
  interimEl = null;
  interimText = "";
  if (role === "user") {
    finalSpeechBuffer = "";
  }
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
  const cleaned = String(text || "").trim() || "…";
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
  const cleaned = String(text || "").trim() || "…";
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

function sanitizeAnnaDisplayText(text) {
  return String(text || "")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u2013\u2014]/g, " - ")
    .replace(/(?:^|\n)\s*(?:[-*•]\s*)?\[(?: |x|X)\]\s*/g, "\n• ")
    .replace(/\[(?: |x|X)\]\s*/g, "")
    .replace(/[\[\]{}<>]/g, "")
    .replace(
      /(?:^|\s)(?:as an? (?:ai|text-based) (?:assistant|model)|i(?:'m| am) (?:just |all )?text(?:[- ]based|[- ]only)?(?: here)?|i (?:can't|cannot) speak(?: out loud)?|i do not have a voice here|i don't have a voice here|no voice here|you(?:'ll| will) need (?:a )?different setup for voice|voice (?:isn't|is not|isn’t) available here|i can only respond in text(?: here)?|unable to use voice here|can't do voice here)(?:[^.!?]*[.!?])?/gi,
      " "
    )
    .replace(/(?:^|\n)\s*[-*•]\s+/g, "\n• ")
    .replace(/\s+,/g, ",")
    .replace(/[^\S\r\n]{2,}/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .toLowerCase()
    .trim();
}

function sanitizeAnnaSpeechText(text) {
  return sanitizeAnnaDisplayText(text)
    .replace(/(?:^|\n)\s*•\s*/g, ". ")
    .replace(/[+*=<>|^~`]/g, " ")
    .replace(/\s*\/\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
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
  return sanitizeAnnaDisplayText(String(data.reply || "").trim());
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
    let replyStateShown = false;
    const final = await fetchAnnaReplyStream((delta) => {
      displayFull += delta;
      setPendingAnnaText(pendingId, sanitizeAnnaDisplayText(displayFull) || "…");

      if (!replyStateShown) {
        replyStateShown = true;
        showSpeechStatus("responding", 12000, { state: "replying" });
      }

      if (!isVoiceOutputEnabled() || isListeningNow || sessionAtStart !== ttsSessionId) {
        return;
      }

      speakBuffer += delta;
      const { segments, remaining } = splitIntoSpeakableSegments(speakBuffer);
      speakBuffer = remaining;
      segments.forEach((seg) => {
        const cleanedSeg = sanitizeAnnaSpeechText(seg);
        if (cleanedSeg) {
          enqueueElevenLabsTts(cleanedSeg);
        }
      });
    });

    const cleanedFinal = sanitizeAnnaDisplayText(final) || "i'm here. ask me what you want to work through.";
    resolvePendingAnna(pendingId, cleanedFinal);
    const createdList = maybeShowListSheetFromAnna(final);
    maybeApplyTaskWorkspaceSuggestionsFromAnna(cleanedFinal);
    maybeApplyOperatorSuggestionsFromAnna(cleanedFinal);
    if (pendingTodoListGenerationRequest) {
      const shouldRedirect = pendingTodoListRedirectToStartup && createdList && getCurrentPageLabel() === "task";
      setPendingTodoListGeneration(false);
      if (shouldRedirect) {
        try {
          window.location.href = "startup.html";
        } catch {
          // ignore navigation failures
        }
      }
    }

    if (isVoiceOutputEnabled() && !isListeningNow && sessionAtStart === ttsSessionId) {
      const leftover = sanitizeAnnaSpeechText(String(speakBuffer || "").trim());
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

  voiceStatus.textContent = "loading voices...";
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

  recognizer.onstart = () => {
    speechStartConfirmed = true;
    clearSpeechStartTimer();
    if (bargeInListeningMode && hasActiveTtsPlayback()) {
      showSpeechStatus("responding", 12000, { state: "replying" });
      return;
    }
    showSpeechStatus("listening", 1800, { state: "listening" });
  };

  recognizer.onresult = (event) => {
    speechStartConfirmed = true;
    clearSpeechStartTimer();
    const interimParts = [];
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
        interimParts.push(text);
      }
    }

    const nextInterim = normalizeBufferedSpeechParts(interimParts);

    const ttsActive = hasActiveTtsPlayback();
    const interrupting = ttsActive && shouldInterruptTtsPlayback(nextInterim, finalizedParts);

    if (ttsActive && !interrupting) {
      clearBufferedSpeech();
      return;
    }

    if (interrupting) {
      stopAllTts();
      clearAudioNotice();
      bargeInListeningMode = false;
    }

    if (finalizedParts.length) {
      finalSpeechBuffer = normalizeBufferedSpeechParts([finalSpeechBuffer, ...finalizedParts]);
    }

    interimText = nextInterim;
    setInterim(nextInterim);

    if (interrupting) {
      showSpeechStatus("listening", 1800, { state: "listening" });
    }

    if (finalSpeechBuffer) {
      scheduleBufferedSpeechCommit();
    }
  };

  recognizer.onerror = (event) => {
    clearSpeechStartTimer();
    const code = String(event?.error || "").trim().toLowerCase();
    if (!code || code === "aborted") {
      return;
    }
    if (code === "no-speech") {
      showSpeechStatus(getSpeechFailureMessage(code), 2400);
      return;
    }
    if (!speechStartRecoveryUsed && (!speechStartConfirmed || code === "not-allowed" || code === "service-not-allowed" || code === "audio-capture" || code === "network")) {
      speechStartRecoveryUsed = true;
      void retrySpeechStartAfterMicProbe();
      return;
    }
    finalizeSpeechFailure(getSpeechFailureMessage(code));
  };

  recognizer.onend = () => {
    const endedBeforeStart = !speechStartConfirmed;
    clearSpeechStartTimer();
    speechStartConfirmed = false;
    isListeningNow = false;
    if (persistentListeningEnabled) {
      updateListeningUi();
      if (pendingResumeListening) {
        maybeResumeListeningAfterReply();
      } else {
        if (endedBeforeStart) {
          if (!speechStartRecoveryUsed) {
            speechStartRecoveryUsed = true;
            retrySpeechStartAfterMicProbe();
            return;
          }
          finalizeSpeechFailure("voice input ended before it started. tap anna again.");
          return;
        }
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

function setListening(isListening, options = {}) {
  if (!recordButton && !inlineVoiceButton && !transcriptPane && !inlineVoiceList) {
    return;
  }

  const preserveTts = Boolean(options.preserveTts);
  const bargeIn = Boolean(options.bargeIn);

  isListeningNow = isListening;
  if (isListening) {
    pendingResumeListening = false;
    clearInlineVoiceHideTimer();
    bargeInListeningMode = bargeIn;
  } else {
    clearBufferedSpeech();
    bargeInListeningMode = false;
  }
  if (isListening && !preserveTts) {
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

    if (isRecordedVoiceCaptureActive()) {
      return;
    }

    resetSpeechRecognizer();
    speechRecognizer = ensureSpeechRecognizer();

    if (speechRecognizer) {
      speechStartConfirmed = false;
      clearSpeechStartTimer();
      speechStartTimer = window.setTimeout(() => {
        if (!persistentListeningEnabled || pendingResumeListening || speechStartConfirmed) {
          return;
        }
        if (!speechStartRecoveryUsed) {
          speechStartRecoveryUsed = true;
          retrySpeechStartAfterMicProbe();
          return;
        }
        finalizeSpeechFailure("voice input didn't start. tap anna again.");
      }, 1800);
      try {
        speechRecognizer.start();
      } catch (error) {
        clearSpeechStartTimer();
        const code = String(error?.name || error?.message || "").trim().toLowerCase();
        if (!speechStartRecoveryUsed) {
          speechStartRecoveryUsed = true;
          retrySpeechStartAfterMicProbe();
          return;
        }
        finalizeSpeechFailure(getSpeechFailureMessage(code));
      }
      return;
    }

    if (hasRecordedVoiceFallback()) {
      void startRecordedVoiceCapture();
      return;
    }

    // fallback: typed line via prompt (still real input)
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
  clearAudioNotice();
  clearInlineVoiceStatus();
  if (stopRecordedVoiceCapture()) {
    return;
  }
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
  const now = Date.now();
  speechStartRecoveryUsed = false;
  if (now - lastToggleAt < 260) {
    return;
  }
  lastToggleAt = now;

  const nextActive = !persistentListeningEnabled;
  if (nextActive) {
    void retryVoiceCaptureFromGesture();
    return;
  }

  unlockAudioFromGesture();
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
  retryVoiceCaptureFromGesture();
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

taskActionToggle?.addEventListener("click", () => {
  setTaskActionMenuOpen(!isTaskActionMenuOpen);
});

let taskTitleEditOriginal = "";

function saveInlineTaskTitle() {
  const title = getCurrentTaskTitle();
  const nextTitle = String(taskPageTitle?.textContent || "").trim();
  if (!title || !taskPageTitle) {
    return;
  }
  if (!nextTitle) {
    taskPageTitle.textContent = title;
    return;
  }
  if (normalizeTaskTitle(nextTitle) === title) {
    taskPageTitle.textContent = title;
    return;
  }
  const result = renameTask(title, nextTitle);
  if (result.reason === "exists") {
    window.alert("that task name already exists.");
    taskPageTitle.textContent = title;
    return;
  }
  renderStartupDashboard();
  renderTaskWorkspace();
}

taskPageTitle?.addEventListener("focus", () => {
  taskTitleEditOriginal = getCurrentTaskTitle() || String(taskPageTitle.textContent || "").trim();
});

taskPageTitle?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskPageTitle.blur();
  }
  if (event.key === "Escape") {
    event.preventDefault();
    taskPageTitle.textContent = taskTitleEditOriginal || getCurrentTaskTitle() || "";
    taskPageTitle.blur();
  }
});

taskPageTitle?.addEventListener("blur", saveInlineTaskTitle);

taskSubtaskInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  event.preventDefault();
  addCurrentTaskSubtask();
});

taskStartNowButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  startTaskWorkSession(title, { minutes: 45 });
  setTaskActionFeedback(title, "45 min sprint started");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskFinishStepButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  const result = completeNextOpenSubtask(title);
  setTaskActionFeedback(title, result.changed ? `finished ${result.title}` : "no open step to finish");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskPauseButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  pauseTaskExecution(title);
  setTaskActionFeedback(title, "task paused");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskUnblockButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  clearTaskBlocker(title);
  setTaskActionFeedback(title, "blocker cleared");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskPlanButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  const added = buildLocalTaskExecutionPlan(title);
  setTaskActionFeedback(title, added ? `added ${added} steps` : "plan already exists");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskRemindLaterButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  const parsed = parseTaskReminderPhrase("in 2 hours");
  if (!parsed) {
    return;
  }
  setTaskReminderState(title, parsed);
  setTaskActionFeedback(title, "follow-up set for 2h");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskTomorrowButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  const parsed = parseTaskReminderPhrase("tomorrow morning");
  if (!parsed) {
    return;
  }
  setTaskReminderState(title, parsed);
  setTaskActionFeedback(title, "follow-up set for tomorrow");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskDailyFollowupButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  const parsed = parseTaskReminderPhrase("every day");
  if (!parsed) {
    return;
  }
  setTaskReminderState(title, parsed);
  setTaskActionFeedback(title, "daily follow-up on");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
});

taskClearFollowupButton?.addEventListener("click", () => {
  const title = getCurrentTaskTitle();
  if (!title) {
    return;
  }
  clearTaskReminderState(title);
  setTaskActionFeedback(title, "follow-up cleared");
  setTaskActionMenuOpen(false);
  renderStartupDashboard();
  renderTaskWorkspace();
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
  maybeRunOperatorAutomation();
  syncAuthIntoProfileFields();
  renderStartupName();
  renderTaskContextBanner();
  renderStartupDashboard();
  renderTaskWorkspace();
  setSelectedSubscription(getAccountValue(STORAGE_KEYS.subscription) || "starter");
  renderHistoryModal();
  startWakeWordMonitoring();
}

function startOperatorAutomationLoop() {
  if (operatorAutomationTimer) {
    window.clearInterval(operatorAutomationTimer);
  }
  operatorAutomationTimer = window.setInterval(() => {
    const changed = maybeRunOperatorAutomation();
    const nudged = runFocusModeDriftCheck();
    if (changed) {
      renderStartupDashboard();
      renderTaskWorkspace();
    } else if (nudged && getCurrentPageLabel() === "task") {
      renderTaskWorkspace();
    }
  }, 60 * 1000);
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

  const preparedRequest = maybePrepareTaskBoardForUserRequest(lower);
  if (preparedRequest?.handled) {
    pushEntry("user", lower);
    appendToMemory("user", lower);
    if (preparedRequest.reply) {
      pushEntry("ai", preparedRequest.reply);
      appendToMemory("assistant", preparedRequest.reply);
    }
    return;
  }
  setPendingTodoListGeneration(Boolean(preparedRequest?.todoListRequest), {
    redirectToStartup: Boolean(preparedRequest?.redirectToStartup)
  });

  const localCommand = maybeHandleLocalVoiceCommand(lower);
  if (localCommand?.handled) {
    pushEntry("user", lower);
    appendToMemory("user", lower);
    if (localCommand.reply) {
      pushEntry("ai", localCommand.reply);
      appendToMemory("assistant", localCommand.reply);
    }
    return;
  }

  pushEntry("user", lower);
  appendToMemory("user", lower);
  conversation = [...conversation, { role: "user", content: lower }].slice(-16);
  const pendingId = pushPendingAnna();
  showSpeechStatus("thinking", 12000, { state: "thinking" });

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
  void retryVoiceCaptureFromGesture();
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
document.addEventListener("pointerdown", retryPendingAudioUnlockFromGesture, true);
document.addEventListener("touchstart", retryPendingAudioUnlockFromGesture, true);
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
startOperatorAutomationLoop();
