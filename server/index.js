require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/api", (req, res) =>
  res.send([
    {
      message: "Hello",
      user: "Bob",
    },
  ])
);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
