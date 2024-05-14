import BlogPostModel from "../models/posts.model.js";

export const createBlog = async (req, res) => {
  try {
    const { title, topic, summary, imageUrl, content } = req.body;
    const userId = req.user._id; 



    const newBlog = await BlogPostModel.create({
      title:title,
      topic: topic,
      summary:summary,
      imageUrl:imageUrl,
      content:content,
      user:userId,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ success: false, message: "Error creating blog" });
  }
};
