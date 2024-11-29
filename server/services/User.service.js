const { User } = require("../db/models");

class UserService {
  static async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
  static async delete(id) {
    try {
      const countDeletedUsers = await User.destroy({
        where: { id },
      });
      return countDeletedUsers;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOne(id) {
    try {
      const user = await User.findOne({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update( id, points ) {
    try {
      const user =await User.findByPk(id)
      user.points = user.points + points
      await user.save()
      

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
