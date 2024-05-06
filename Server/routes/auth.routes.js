import express from "express";

import { signUpUser} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpUser);

export default authRouter;
