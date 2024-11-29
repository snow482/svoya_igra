const UserService = require("../services/User.service");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json({ message: "success", users });
    } catch (error) {
      res.status(500).json({ message: error.message, users: [] });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deleted = await UserService.delete(id);
      if (deleted) {
        res.status(200).json({ message: "success" });
      } else {
        res.status(400).json({ message: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getOneUser(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.getOne(id);
      res.status(200).json({ message: "success", user });
    } catch (error) {
      res.status(500).json({ message: error.message, user: {} });
    }
  }

  static async updateUser(req, res) {
    const { points } = req.body;
    const { id } = req.params;

    try {
      const updatedUser = await UserService.update(id, points);

      if (updatedUser) {
        res.status(200).json({ message: "success", updatedUser });
      } else {
        res.status(200).json({ message: "error" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
