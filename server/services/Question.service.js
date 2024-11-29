const { Question } = require("../db/models");

class QuestionService {
  static async getQuestions() {
    try {
      const questions = await Question.findAll();
      return questions;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}

module.exports = QuestionService;
