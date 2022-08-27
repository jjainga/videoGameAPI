const express = require("express");
const logger = require("morgan");
const {Sequelize} = require("sequelize");

const cors = require("cors");
const session = require("express-session");
require('dotenv').config()

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
//bring in routes
const routes = require("./routes")

app.use(logger("dev"));

//define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/4000", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

// Session Secret
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 2 * 60 * 60 * 1000
//   }
// }));


//use routes
app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
