const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const postAPI = require("./routes/routes");
const path = require("path");
const history = require("connect-history-api-fallback"); // for the ability to refresh a page.
require("dotenv").config();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  history({
    index: "",
  })
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));

//routes prefix
app.use("/api/posts", postAPI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "client", "dist", "index.html"));
  });
}
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
