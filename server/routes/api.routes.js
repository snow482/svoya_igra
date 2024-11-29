const router = require("express").Router();
const apiAuthRouter = require("./api.auth.routes");
const apiQuestionRouter = require("./api.questions.routes");
const apiCategoryRouter = require("./api.categoryes.routes");

router.use("/auth", apiAuthRouter);
router.use("/questions", apiQuestionRouter);
router.use("/categoryes", apiCategoryRouter);

module.exports = router;
