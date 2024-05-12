import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { TextField,Snackbar} from "@mui/material";
import { imageDB } from "../../config/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


const FireBaseImgUpload = () => {
  const [img, setImg] = useState("");
  const [lastImageUrl, setLastImageUrl] = useState("");
  const [uplaodSucess, setUploadSucess] = useState(false);
  const [imgError, setImgError] = useState("");
  const MAX_FILE_SIZE_MB = 350;

  const handleClick = async () => {
    try {
      if (img) {

        if (img.size > MAX_FILE_SIZE_MB * 1024) {
          setImgError(`File size exceeds ${MAX_FILE_SIZE_MB} KB.`);
          return;
        }
  
        const imgRef = ref(imageDB, `images/${v4()}`);
        const snapshot = await uploadBytes(imgRef, img);
        const url = await getDownloadURL(snapshot.ref);
        setLastImageUrl(url);
        setUploadSucess(true);
      }
      else{
        console.log('Please Select an image to uplaod');
        setImgError("Please Select an image to uploaad")
      }
    } catch (error) {
      setUploadSucess(false);
      setImgError("Error uploading Image. Tryb Again")
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if (uplaodSucess) {
      const fetchLastImage = async () => {
        try {
          const images = await listAll(ref(imageDB, "images"));
          if (images.items.length > 0) {
            const lastImageRef = images.items[images.items.length - 1];
            const lastImageUrl = await getDownloadURL(lastImageRef);
            setLastImageUrl(lastImageUrl);
          }
        } catch (error) {
          console.error("Error fetching last image:", error);
        }
      };
      fetchLastImage();
    }
  }, [uplaodSucess]);
  

  const handleCloseSnackbar = () => {
    setImgError("");
  };

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
      <Snackbar
        open={!!imgError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={imgError}
      />
      <br />
      {lastImageUrl && (
        <div sx={{ margin: "1rem 0 0 0" }}>
          <img src={lastImageUrl} height="200px" width="200px" />
        </div>
      )}
    </div>
  );
};

export default FireBaseImgUpload;
