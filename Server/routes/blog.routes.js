import express from "express";
import { createBlog } from "../controllers/blog.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post("/createblog",authMiddleware,createBlog);

export default blogRouter;