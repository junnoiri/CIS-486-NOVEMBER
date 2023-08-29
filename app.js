const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.set("view engine", "ejs");

let myVariableServer = "soft coded server data";

app.get("/view", (req, res) => {
  res.render("index", { myVariableClient: myVariableServer });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.send("<h1>Hello, World From Express & a Paas/Render!!!</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
