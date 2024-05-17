import axios from "../config/axiosConfig";


export const fetchUserById = async (userId) => {
  try {
    const user = localStorage.getItem("user");

    if (!user) {
      throw new Error("User not authenticated");
    }
    const token = JSON.parse(user).token;
    const response = await axios.get(`/profile/udetails/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User Details: ',response.data);
    return response.data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};
