import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Post from "../Components/Post";
import { fetchBlogs } from "../api/readBlogAPI";

const SagaBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await fetchBlogs();
        console.log("Blogs fetch successful:", response);
        const sortedBlogs = response.blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogsData();
  }, []);

  return (
    <>
      <Typography variant="h3">STREAM YOUR SAGA</Typography>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div style={{ margin: "2%" }}>
            {blogs.map((blog) => (
              <Post
                key={blog._id}
                blogTitle={blog.title}
                blogTopic={blog.topic}
                blogSummary={blog.summary}
                blogImage={blog.imageUrl}
                blogContent={blog.content}
                blogUser={blog.user}
                blogPostTime={blog.createdAt}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SagaBlogs;
