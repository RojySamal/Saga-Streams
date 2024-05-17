import UserDataModel from "../models/user.model.js";
import { createToken } from "../helpers/auth.helper.js";

import { hashPassword,validateStrongPassword, comparePassword } from "../helpers/auth.helper.js";

export const signUpUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, profileurl } = req.body;

    const existingUser = await UserDataModel.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await hashPassword(password);

      const isNotStrongPassword = validateStrongPassword(password);
      console.log('PAssword not stgong: ',isNotStrongPassword);
      if (isNotStrongPassword) {
        return res.status(400).send({
            message:"Weak Password!!",
          });
      }

      const user = await UserDataModel.create({
        name: {
          firstname,
          lastname,
        },
        email,
        password: hashedPassword,
        profileurl: profileurl,
      });

      const token = createToken(user._id);
      return res.status(200).json({
        user: {
          firstname: user.name.firstname,
          lastname: user.name.lastname,
          email: user.email,
          profileurl: user.profileurl,
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

export const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        sucess: false,
        message: "All parameters are Needed!",
      });
    }

    const user = await UserDataModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        error: "User Doesn't Exists!! Please SignUP",
      });
    }

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);

    res.status(200).send({
      success: true,
      message: "Login Sucessful",
      user: {
        firstname: user.name.firstname,
        lastname: user.name.lastname,
        email: user.email,
        profileurl: user.profileurl,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};
