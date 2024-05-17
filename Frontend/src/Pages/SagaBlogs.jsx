import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
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
        setBlogs(response.blogs);
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
              />
              // {
              //   title: "Featured post",
              //   date: "Nov 12",
              //   description:
              //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
              //   image: "https://source.unsplash.com/random?wallpapers",
              //   imageLabel: "Image Text",
              // }Use blog._id as key
            ))}
          </div>
          <div style={{ marginLeft: "30%" }}>
            <Pagination count={10} showFirstButton showLastButton />
          </div>
        </>
      )}
    </>
  );
};

export default SagaBlogs;
