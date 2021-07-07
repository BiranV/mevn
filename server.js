require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const postAPI = require("./routes/api/posts");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(morgan("tiny"));

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: FinalizationRegistry,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));

app.use("/api/posts", postAPI);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
