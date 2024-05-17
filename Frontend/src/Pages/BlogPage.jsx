// BlogPage.jsx
import { red } from "@mui/material/colors";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardMedia from "@mui/material/CardMedia";
import { Chip } from "@mui/material";
import { useLocation } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function BlogPage() {
  const location = useLocation();
  const {
    blogTitle,
    blogTopic,
    blogSummary,
    blogImage,
    blogContent,
    blogPostTime,
    userData,
  } = location.state;

  // Format the date and time
  const formattedDateTime = new Date(blogPostTime).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ marginBottom: 2 }}>
            {blogTitle}
          </Typography>
          <Box noValidate sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={1} mt={1}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {userData && userData.user.name.firstname.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={11}>
                <div>
                  <Link
                    color="inherit"
                    href="https://mui.com/"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography variant="h6">
                      {userData && userData.user.name.firstname}{" "}
                      {userData && userData.user.name.lastname}
                    </Typography>
                  </Link>
                </div>
                <div>
                  <Typography variant="subtitle2" color="textSecondary">
                    {formattedDateTime} {/* Display formatted date and time */}
                  </Typography>
                  <CardActions disableSpacing sx={{ padding: 0 }}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  height="300"
                  image={blogImage}
                  alt={blogTitle}
                  sx={{ border: "1px solid black" }}
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Topics:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {blogTopic.map((topic, index) => (
                      <Chip
                        key={index}
                        label={topic}
                        variant="contained"
                        sx={{ mr: 1, mb: 1 }}
                        clickable
                      />
                    ))}
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div sx={{ mt: 3 }}>
                  <Typography variant="body1" gutterBottom>
                    {blogContent}
                  </Typography>
                </div>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
