const express = require("express");

const app = express();
const router = express.Router();

// router.route("/").get((req, res ) => {
//   console.log("played");

// });

app.get("/get", (req, res) => {
  console.log("hello");
  res.send("<h1>hello</h1>");
});
const port = process.env.PORT || 8000;

app.listen(port, "216.24.57.1", (err) => {
  if (err) throw err;
  console.log(`App listening on ${port}`);
});
