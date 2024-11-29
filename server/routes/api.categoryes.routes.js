const router = require("express").Router();

const {
  getAllCategoryController,
} = require("../controllers/CategoryController");

router.get("/", getAllCategoryController);

module.exports = router;
