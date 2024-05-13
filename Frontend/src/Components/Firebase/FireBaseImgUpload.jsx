import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Button } from "@mui/material";
import { TextField, Snackbar } from "@mui/material";
import { imageDB } from "../../config/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const FireBaseImgUpload = forwardRef((props, imgUploadRef) => {
  const [img, setImg] = useState("");
  const [lastImageUrl, setLastImageUrl] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadButtonVisible, setUploadButtonVisible] = useState(false);
  const [imgError, setImgError] = useState("");
  const [uploadId, setUploadId] = useState("");
  const MAX_FILE_SIZE_MB = 350;

  useImperativeHandle(
    imgUploadRef,
    () => ({       

      handleClickAndReturnUrl: async () => {
        try {
          if (img) {
            if (img.size > MAX_FILE_SIZE_MB * 1024) {
              setImgError(`File size exceeds ${MAX_FILE_SIZE_MB} KB.`);
              return;
            }
            const uploadId = v4();
            setUploadId(uploadId);
            const imgRef = ref(imageDB, `images/${uploadId}`);
            const snapshot = await uploadBytes(imgRef, img);
            const url = await getDownloadURL(snapshot.ref);
            setLastImageUrl(url);
            setUploadSuccess(true);
            return url
          } else {
            setImgError("Please select an image to upload");
          }
        } catch (error) {
          setUploadSuccess(false);
          setImgError("Error uploading image. Please try again.");
          console.error("Error uploading image:", error);
        }
      },
    }),
    [img]
  );

  useEffect(() => {
    setUploadButtonVisible(props.hideButton);
  }, []);

  useEffect(() => {
    if (uploadSuccess) {
      const fetchLastImage = async () => {
        try {
          const lastImageRef = ref(imageDB, `images/${uploadId}`);
          const lastImageUrlRef = await getDownloadURL(lastImageRef);
          setLastImageUrl(lastImageUrlRef);
          console.log('image set here');
        } catch (error) {
          console.error("Error fetching last image:", error);
        }
      };
      fetchLastImage();
    }
  }, [uploadSuccess]);

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
      <Button
        variant="contained"
        style={{ display: uploadButtonVisible ? "none" : "block" }}
        onClick={props.onClick}
      >
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
});

export default FireBaseImgUpload;
