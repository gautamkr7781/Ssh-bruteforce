const express = require("express");
const path = require("path");

const app = express();

/* Static Files */

app.use(express.static(__dirname));

/* Open Login Page */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

/* Start Server */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});