const express = require("express");
const router = express.Router();

const { register, login, checkUser } = require("../controller/userController");
// register route
router.post("/register", register);
// user login
router.post("/login", login);
//check user, to check wh/r the usr is authenticated
router.get("/check", checkUser);

module.exports = router;
