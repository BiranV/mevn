//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((arr) => console.log(err));

//routes prefix
app.use("/api/posts", require("./routes/posts"));

// if(process.env.NODE_ENV === 'producttion'){
//   //static folder
//   app.use(express.static(__dirname + '/public'));

//   //handle SPA
//   app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
// }
//start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
