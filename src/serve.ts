import express from "express";
import path from "path";

// const rootDir = require("static");
const app = express();
const port : number = 3000;


const labels = [
  "one",
  "two",
  "three"
]


app.set('views', './views')
app.set('view engine', 'pug')
app.use( express.static('static') )
app.get("/", (req, res) => {
  res.render(
    "graph",
    {
      labels: JSON.stringify(labels)
    }
  );
})


app.get("/poll", (req, res) => {
  res.render(
    "poll",
    {
      labels: labels
    }
  );
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});