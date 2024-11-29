const router = require("express").Router();

const { getAllQuestions } = require("../controllers/QuestionController");

router.get("/", getAllQuestions);

module.exports = router;
