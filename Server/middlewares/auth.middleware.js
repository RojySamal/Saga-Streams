import jwt from "jsonwebtoken";
import UserDataModel from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {


  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserDataModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
