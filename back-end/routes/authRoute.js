const express = require("express");
const Router = express.Router();
const { login, register, getCurrentUser } = require("../controllers/authController");
const { checkCurrentUser } = require("../middleware/checkCurrentUser");

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/").get(checkCurrentUser, getCurrentUser);

/* Router.post("/register",register)
Router.post("/login",login) */

module.exports = Router;
