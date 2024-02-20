// questionRoutes.js
const express = require("express");
const router = express.Router();
const questionController = require("../controller/questionController");

router.get("/", questionController.getAllQuestions);
router.post("/ask", questionController.addQuestion);

module.exports = router;
