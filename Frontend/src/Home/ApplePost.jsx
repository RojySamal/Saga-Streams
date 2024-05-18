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

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function ApplePost() {
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
            <strong>
              Can You Pass This Apple-Orange Interview At Apple 🍎?
            </strong>
          </Typography>
          <Box noValidate sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={1} mt={1}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Addy">
                  B
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={11}>
                <div>
                  <Link
                    color="inherit"
                    href="https://mui.com/"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography variant="h6">Bella L</Typography>
                  </Link>
                </div>
                <div>
                  <Typography variant="subtitle2" color="textSecondary">
                    14 March 2024 {/* Display formatted date and time */}
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
                  image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3_NjzkVEbMhPwJTH9BajWw.png"
                  alt="apple"
                  sx={{ border: "1px solid black" }}
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Topics:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    Apple comapny
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div sx={{ mt: 3 }}>
                  <Typography variant="body1" gutterBottom>
                    Have you ever dreamed of working at Apple? If you have, this
                    brain teaser is for you! <br />
                    This is a fun logic puzzle that anyone who is a Medium
                    reader will have the knowledge to solve 🧠
                    <br />
                    "There are three boxes: one with only apples, one with only
                    oranges, and with both. The boxes are labeled "apples",
                    "oranges",and "apple and oranges". Each box has a wrong
                    label. If you pick one fruit from a single box without
                    seeing inside, how can you correctly label all boxes?
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
