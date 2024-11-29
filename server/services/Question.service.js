const { Question, Category } = require("../db/models");

class QuestionService {
  static async getQuestions() {
    try {
      const questions = await Question.findAll({
        include: Category,
      });

      return questions;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);ц
    }
  }
}

module.exports = QuestionService;
