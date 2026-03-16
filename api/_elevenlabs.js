function getElevenLabsKey() {
  const candidates = [
    { name: "ELEVENLABS_API_KEY", value: process.env.ELEVENLABS_API_KEY },
    // common alternates people use
    { name: "XI_API_KEY", value: process.env.XI_API_KEY },
    { name: "ELEVEN_LABS_API_KEY", value: process.env.ELEVEN_LABS_API_KEY }
  ];

  for (const c of candidates) {
    const v = (c.value || "").trim();
    if (v) {
      return { key: v, source: c.name };
    }
  }

  return { key: "", source: "" };
}

module.exports = {
  getElevenLabsKey
};
