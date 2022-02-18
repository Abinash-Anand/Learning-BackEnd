const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("server started on port 3000");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log("thanks for submitting! Ans = ");
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;
  res.send("Thanks for the submission! Result = " + result);
});
//BMI CALCULATOR
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (req, res) {
  let personWeight = Number(req.body.weight);
  let personHeight = Number(req.body.height);
  let personsBmi = personWeight / (personHeight * personHeight);
  res.send("Thanks for the submission! Your BMI is = " + personsBmi);
});
