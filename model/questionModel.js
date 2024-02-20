// questionModel.js

const dbConnection = require("../db/dbConfig");

module.exports = {
  getAllQuestions: async () => {
    const [rows] = await dbConnection.execute("SELECT * FROM questions");
    return rows;
  },
  addQuestion: async (id, userid, questionid, title, description, tag) => {
    try {
      const [result] = await dbConnection.execute(
        "INSERT INTO questions (id, userid, questionid, title, description, tag) VALUES (?, ?, ?, ?,?,?)",
        [id, userid, questionid, title, description, tag]
      );
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
