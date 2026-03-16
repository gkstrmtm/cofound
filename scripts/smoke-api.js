/*
  Minimal in-process smoke test for Vercel-style handlers.
  Runs without Vercel dev; it just calls the exported functions.
*/

const health = require("../api/health");
const chat = require("../api/chat");

function mockRes() {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(obj) {
      this.body = obj;
      return this;
    }
  };
  return res;
}

(async () => {
  // health
  {
    const req = { method: "GET" };
    const res = mockRes();
    await health(req, res);
    console.log("health:", res.statusCode, res.body);
  }

  // chat (missing key should be a clean 500)
  {
    const req = {
      method: "POST",
      body: { messages: [{ role: "user", content: "say hi" }] }
    };
    const res = mockRes();
    await chat(req, res);
    console.log("chat:", res.statusCode, res.body);
  }
})();
