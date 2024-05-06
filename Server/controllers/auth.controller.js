import jwt from "jsonwebtoken";
import UserDataModel from "../models/user.model.js";

import {
  hashPassword,
  comparePassword,
  compareUserType,
} from "../helpers/auth.helper.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "4h" });
};

export const signUpUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } =
      req.body;
    const existingUser = await UserDataModel.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await hashPassword(password);

      const user = await UserDataModel.create({
        name: {
          firstname,
          lastname,
        },
        email,
        password: hashedPassword,
      });

      const token = createToken(user._id);
      return res.status(200).json({
        user: {
          firstname: user.name.firstname,
          lastname: user.name.lastname,
          email: user.email,
        },
        token,
        message: "Successfully submitted",
      });
    } else {
      return res.status(400).json({ message: "Email already exists" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};
