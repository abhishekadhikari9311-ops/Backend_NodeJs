const { name } = require("ejs");
const express = require("express"); //  importing express npm package
const app = express(); //creating instance for express

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const name = "Abhishek Adhikari is trying his best to learn AI........";
  res.render("home", { name });
});

app.get("/about", (req, res) => {
  const name = "research about something";
  return res.render("about", { name });
});

app.get("/contact", (req, res) => {
  const name = "residual";
  res.render("contact", { name });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});