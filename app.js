const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let myVariableServer = "soft coded server data";

app.get("/", (req, res) => {
  res.render("index", { myVariableClient: myVariableServer });
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
//   res.send("<h1>Hello, World From Express & a Paas/Render!!!</h1>");
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
