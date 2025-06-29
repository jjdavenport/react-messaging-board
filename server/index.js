require("dotenv").config();
const express = require("express");
const app = express();
const {
  getMessage,
  addMessage,
  getMessageById,
  editMessageById,
} = require("./database/query");

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

app.get("/api/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await getMessageById(id);
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

app.post("/api/message/:id", async (req, res) => {
  const { id } = req.params;
  const { input, textarea } = req.body;
  try {
    const editedMessage = await editMessageById(id, input, textarea);
    res.json(editedMessage);
  } catch {
    console.log("error");
  }
});

app.get("/api", async (req, res) => {
  try {
  } catch {}
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
