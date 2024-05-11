import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { imageDB } from "../../config/firebaseConfig";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

const FireBaseImgUpload = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);

  const handleClick = () => {
    if (img) {
      const imgRef = ref(imageDB, `images/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        getDownloadURL(value.ref).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(ref(imageDB, "images")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        name="file"
        type="file"
        className="file"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <Button variant="contained" onClick={handleClick}>
        Upload
      </Button>
      <br />
      {imgUrl.map((dataVal,index) => (
        <div key={index} sx={{ margin: "1rem 0 0 0" }}>
          <img src={dataVal} height="200px" width="200px" />
        </div>
      ))}
    </div>
  );
};

export default FireBaseImgUpload;
