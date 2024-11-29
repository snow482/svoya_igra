const CategoryService = require("../services/Category.service");

exports.getAllCategoryController = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategory();
    res.status(200).json({ message: "success", categories });
  } catch (error) {
    res.status(500).json({ message: error.message, categories: [] });
  }
};

exports.getOneCategoryController = async (req, res) => {
  try {
    const category = await CategoryService.getOneCategory();
    res.status(200).json({ message: "Success", category });
  } catch (error) {
    res.status(500).json({ message: error.message, category: {} });
  }
};
