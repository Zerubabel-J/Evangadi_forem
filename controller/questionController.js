// questionController.js

const questionModel = require("../model/questionModel");

module.exports = {
  getAllQuestions: async (req, res) => {
    const questions = await questionModel.getAllQuestions();
    res.json(questions);
  },

  addQuestion: async (req, res) => {
    try {
      const { id, questionid, title, description, tag } = req.body;
      const userid = 4;
      const newQuestion = await questionModel.addQuestion(
        id,
        userid,
        questionid,
        title,
        description,
        tag
      );
      res.status(201).json({ success: true, data: newQuestion });
      console.log("Question added");
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};
