const router = require("express").Router();
const apiAuthRouter = require("./api.auth.routes");
const apiQuestionRouter = require("./api.questions.routes");
const apiCategoryRouter = require("./api.categoryes.routes");
const apiUserRouter = require("./api.users.routes");

router.use("/auth", apiAuthRouter);
router.use("/users", apiUserRouter);
router.use("/questions", apiQuestionRouter);
router.use("/categoryes", apiCategoryRouter);

module.exports = router;
