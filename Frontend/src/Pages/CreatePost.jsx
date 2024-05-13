import * as React from "react";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react"; // Import useRef hook
import Editor from "../hooks/Editor";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FireBaseImgUpload from "../Components/Firebase/FireBaseImgUpload";
const defaultTheme = createTheme();
import Alert from "@mui/material/Alert";

export default function CreatePost() {

  const quillRef = useRef();
  const imgUploadRef = useRef();
  const hide = true;
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [formError, setFormError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Create Initiated");
    const lastImageUrl = await imgUploadRef.current.handleClickAndReturnUrl();
    // await imgUploadRef.current.handleClick();
    // const lastImageUrl = imgUploadRef.current.getLastImageUrl();
    if (lastImageUrl === null) {
      setFormError("Image upload Failed!!");
      return;
    }
    if (lastImageUrl === "") {
      setFormError("Didin't receive Image!!");
      return;
    }
    // Get the content from the editor
    const content = quillRef.current.getContent();

    // Remove <p> and </p> tags using regex
    const trimmedContent = content.replace(/<\/?p>/g, "");
    console.log("Title:", title);
    console.log("Topic:", topic);
    console.log("Content:", title);
    console.log("ImageURL:", lastImageUrl);
    console.log("Content:", trimmedContent);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          as="form"
          onSubmit={handleSubmit}
        >
          <Typography component="h1" variant="h5">
            Create your post ✨
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              className="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              onChange={handleTitleChange}
              value={title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="topic"
              label="Topic"
              type="text"
              className="topic"
              onChange={handleTopicChange}
              value={topic}
            />
            <FireBaseImgUpload ref={imgUploadRef} hideButton={hide} />
            <Editor ref={quillRef} />
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            {formError && (
              <Alert variant="outlined" severity="error">
                {formError}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
