import express from "express";
import { readBlog,createBlog } from "../controllers/blog.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post("/createblog",authMiddleware,createBlog);
blogRouter.get("/readblogs",authMiddleware,readBlog);

export default blogRouter;