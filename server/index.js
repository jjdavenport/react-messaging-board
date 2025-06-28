require("dotenv").config();
const express = require("express");
const app = express();
const { getMessage, addMessage } = require("./database/query");

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", async (req, res) => {
  try {
    const message = await getMessage();
    res.json(message);
  } catch {
    console.log("error");
  }
});

app.post("/api", async (req, res) => {
  try {
    const { input, textarea } = req.body;
    await addMessage(textarea, input);
    res.status(200).json({ success: true });
  } catch {
    console.log("error");
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
