require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const postAPI = require("./routes/api/posts");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(morgan("tiny"));

const url = process.env.DB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));

app.use("/api/posts", postAPI);
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
