const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

let myVariableServer = "soft coded server data";

app.get("/jun", (req, res) => {
  res.render("index", { myVariableClient: myVariableServer });
});

app.post("/postClientData", (req, res) => {
  console.log("body: ", req.body);
  console.log("User Name: ", req.body.userName);

  res.render("index", { myVariableClient: req.body.userName });
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World From Express & a PaaS/Render</h1>");
});

app.get("/whatever", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
