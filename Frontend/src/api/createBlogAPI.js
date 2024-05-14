import axios from "../config/axiosConfig";

export const createPostAPI = async (postData, token) => {

    console.log('PostDATa: ',postData);
  try {
    const response = await axios.post('blogs/createblog', postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;

  } catch (error) {
    // Handle error (e.g., log error, show error message)
    console.error('Error creating post:', error);
    throw error; // Optionally rethrow the error to handle it in the component
  }
};
