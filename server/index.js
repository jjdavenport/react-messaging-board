require("dotenv").config();
const express = require("express");
const app = express();
const { getMessage } = require("./database/query");

const PORT = process.env.PORT;

app.get("/api", async (req, res) => {
  try {
    const message = await getMessage();
    res.json(message);
  } catch {
    console.log("error");
  }
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
