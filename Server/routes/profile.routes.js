import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { getUserById } from "../controllers/user.controller.js";
const profileRouter = express.Router();

profileRouter.get("/udetails/:userid",authMiddleware,getUserById);
// profileRouter.get("/user/:id",getUser);

export default profileRouter;