const express = require("express"); //  importing express npm package
const app = express(); //creating instance for express

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "data fetched successfully...........",
  });
});

app.get("/about", (req, res) => {
  return res.status(200).json({
    message: "this is about page.............",
  });
});

app.get("/contact", (req, res) => {
  return res
    .status(200)
    .send(`<h1>hello mine name is AI Engineer from nepal.........</h1>`);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
