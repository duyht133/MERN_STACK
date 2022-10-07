//dotenv
require("dotenv").config();
// connect database
const { connectDB } = require("./configs/db");
connectDB();

const express = require("express");
const cors = require("cors");
const app = express();

// import routes
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

//import errorHandler
const { errorHandler } = require("./middleware/errorHandler");

//Cors kết nối với front-end
app.use(cors());

//Body parser
app.use(express.json());

// Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

// Mount ErrorHandler
app.all("*", (req, res, next) => {
  const err = new Error("The Route can not be found");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

// listen server
const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`server running ${port}`);
});
