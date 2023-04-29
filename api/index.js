const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { auth } = require("../middleware/auth");
const BOOKS = require("../data/books.json");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send({ message: "Unauthorized" });
});

app.get("/books", auth, (req, res) => {
  res.send({ data: BOOKS, message: "Successfully fetch" });
});

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
