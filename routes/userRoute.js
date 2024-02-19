const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const { register, login, checkUser } = require("../controller/userController");
// register route
router.post("/register", register);
// user login
router.post("/login", login);
//check user, to check wh/r the usr is authenticated
router.get("/check", authMiddleware, checkUser);

module.exports = router;
