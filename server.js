const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, MONGO_URI } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const postAPI = require("./routes/api/posts");
const path = require("path");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));

app.use("/api/posts", postAPI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "client", "dist", "index.html"));
  });
}
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
