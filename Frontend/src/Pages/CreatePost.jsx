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
import { createPostAPI } from "../api/createBlogAPI";

export default function CreatePost() {
  const quillRef = useRef();
  const imgUploadRef = useRef();
  const hide = true;
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [summary, setSummary] = useState([]);
  const [formError, setFormError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Create Initiated");
    const user = localStorage.getItem("user");
    let token = "";
    if (user) {
      const userData = JSON.parse(user);
      token = userData.token;
    } else {
      console.log("User data not found in local storage");
    }

    const lastImageUrl = await imgUploadRef.current.handleClickAndReturnUrl();
    if (lastImageUrl === null) {
      setFormError("Image upload Failed!!");
      return;
    }
    if (lastImageUrl === "") {
      setFormError("Didin't receive Image!!");
      return;
    }

    const content = quillRef.current.getContent();
    const trimmedContent = content.replace(/<\/?p>/g, "");

    const words = topic.split(" ").map((word) => word.trim());
    const filteredWords = words.filter((word) => word !== "");

    // console.log("Title:", title);
    // console.log("Topic:", filteredWords);
    // console.log("Summary", summary);
    // console.log("ImageURL:", lastImageUrl);
    // console.log("Content:", trimmedContent);
    // console.log("Token: ", token);

    const postData = {
      title: title,
      topic: filteredWords,
      summary: summary,
      imageUrl: lastImageUrl,
      content: trimmedContent,
    };

    try {
      const response = await createPostAPI(postData, token);
      console.log("Post created successfully:", response);
    } catch (error) {
      console.error("Error creating post:", error);
    }
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="summary"
              label="Blog Summary"
              type="text"
              className="summary"
              onChange={handleSummaryChange}
              value={summary}
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
