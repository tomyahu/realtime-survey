import express from "express";
import path from "path";

// const rootDir = require("static");
const app = express();
const port : number = 3000;


app.use( express.static("static"));
app.get("/", (req, res) => {
  res.sendFile(
    path.join( process.cwd(), "static", "graph.html" )
  );
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});