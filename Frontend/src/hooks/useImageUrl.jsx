import { useState } from "react";

export const useImageUrl = () => {
  const [imageUrl, setImageUrl] = useState("");

  const setImageUrlAndUpdateParent = (url) => {
    console.log('Function called')
    setImageUrl(url);
    // You can perform any additional logic here if needed
  };

  console.log(imageUrl);

  return { imageUrl, setImageUrlAndUpdateParent };
};
