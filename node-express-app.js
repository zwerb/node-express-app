const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<h2>Hello World - Node-Express App!</h2>");
});

app.listen(port, () => {
  console.log(`Node-Express App listening at: http://localhost:${port}`);
});
