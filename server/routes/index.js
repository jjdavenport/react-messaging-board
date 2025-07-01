const express = require("express");
const router = express.Router();
const {
  getMessage,
  addMessage,
  getMessageById,
  editMessageById,
  deleteMessageById,
} = require("../database/query");

router.get("/api", async (req, res) => {
  try {
    const message = await getMessage();
    res.json(message);
  } catch {
    console.log("error");
  }
});

router.get("/api/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await getMessageById(id);
    res.json(message);
  } catch {
    console.log("error");
  }
});

router.delete("/api/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteMessageById(id);
    res.status(200).json({ success: true });
  } catch {
    console.log("error");
    res.status(500).json({ success: false });
  }
});

router.post("/api", async (req, res) => {
  try {
    const { textarea, input } = req.body;
    await addMessage(textarea, input);
    res.status(200).json({ success: true });
  } catch {
    console.log("error");
    res.status(500).json({ success: false });
  }
});

router.post("/api/message/:id", async (req, res) => {
  const { id } = req.params;
  const { textarea, input } = req.body;
  try {
    const editedMessage = await editMessageById(id, textarea, input);
    res.json(editedMessage);
  } catch {
    console.log("error");
  }
});

module.exports = router;
