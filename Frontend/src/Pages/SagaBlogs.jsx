import React from "react";
import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Post from "../Components/Post";
const SagaBlogs = () => {
  return (
    <>
      <Typography variant="h3">STREAM YOUR SAGA</Typography>
      <div
        style={{
          margin: "2%",
        }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div style={{ marginLeft: "30%" }}>
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </>
  );
};

export default SagaBlogs;
