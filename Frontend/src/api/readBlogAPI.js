import axios from "../config/axiosConfig";

export const fetchBlogs = async () => {
  try {
    const user = localStorage.getItem("user");

    if (!user) {
      throw new Error("User not authenticated");
    }
    const token = JSON.parse(user).token;
    console.log("token in read blog: ", token);
    const response = await axios.get("/blogs/readblogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
