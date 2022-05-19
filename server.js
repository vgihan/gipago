const express = require("express");
const app = express();

app.use(express.static("front"));

app.get("", (req, res) => {
  res.sendFile(__dirname + "/front/index.html");
});

app.listen(3000, () => {
  console.log("Listen Express in 3000 port");
});
