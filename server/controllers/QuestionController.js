const QuestionService = require("../services/Question.service");

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      const questions = await QuestionService.getQuestions();
      res.status(200).json({ message: "success", questions });
    } catch (error) {
      res.status(500).json({ message: error.message, questions: [] });
    }
  }
}

module.exports = QuestionController;
