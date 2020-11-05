const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<h2>DoD Industrial!</h2>");
  res.send("Check the console");
  console.log('Accessing the console section ...')
});

app.listen(port, () => {
  console.log(`Node-Express App listening at: http://localhost:${port}`);
});
