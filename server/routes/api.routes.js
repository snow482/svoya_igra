const router = require("express").Router();
const apiAuthRouter = require("./api.auth.routes");
const apiQuestionRouter = require("./api.questions.routes");

router.use("/auth", apiAuthRouter);
router.use("/questions", apiQuestionRouter);

module.exports = router;
