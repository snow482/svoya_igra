const router = require("express").Router();

const {
  getAllUsers,
  updateUser,
  deleteUser,
  getOneUser,
} = require("../controllers/UserController");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router
  .get("/", getAllUsers)
  .put("/:id", updateUser)
  .delete("/:id", verifyAccessToken, deleteUser)
  .get("/:id", getOneUser);

module.exports = router;
