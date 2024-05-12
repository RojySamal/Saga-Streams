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

export default function CreatePost() {
  const quillRef = useRef();
  const hide = true;
  const [imageUrl, setImageUrl] = useState("");
  const imgUploadRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Initiated");
    imgUploadRef.current.handleClick();
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
          as="form" // Define Box as a form
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="summary"
              label="Summary"
              type="text"
              className="summary"
            />
            <FireBaseImgUpload
              ref={imgUploadRef}
              setImageUrl={setImageUrl}
              hideButton={hide}
            />
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
