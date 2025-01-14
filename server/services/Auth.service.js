const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { User } = require("../db/models");
const generateTokens = require("../utils/generateTokens");

class AuthService {
  static async registerUser(email, name, password, points) {
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw new Error("This email already in use");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        name,
        points,
        password: hashedPassword,
      });

      const targetUser = newUser.get();
      delete targetUser.password;

      const { accessToken, refreshToken } = generateTokens({
        user: targetUser,
      });
      return { user: targetUser, accessToken, refreshToken };
    } catch (error) {
      throw new Error(`Error during registration: ${error.message}`);
    }
  }

  static async authorizeUser(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error("No user with this email");
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        throw new Error("Incorrect password");
      }

      const targetUser = user.get();
      delete targetUser.password;

      const { accessToken, refreshToken } = generateTokens({
        user: targetUser,
      });
      return { user: targetUser, accessToken, refreshToken };
    } catch (error) {
      throw new Error(`Error during authorization: ${error.message}`);
    }
  }

  static async refreshTokens(user) {
    try {
      const { accessToken, refreshToken } = generateTokens({ user });
      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error(`Error during token refresh: ${error.message}`);
    }
  }
}

module.exports = AuthService;
