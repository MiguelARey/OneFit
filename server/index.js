const express = require("express");
const cors = require("cors");
const { result } = require("./router");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));

app.use(result);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, "localhost", (req, res) => {
  console.log(`app listening at http://localhost:${PORT}`);
});
