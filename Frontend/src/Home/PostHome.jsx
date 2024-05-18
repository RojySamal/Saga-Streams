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

export default function MainFeature() {
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
            <strong>16 little UI design rules that make a big impact</strong>
          </Typography>
          <Box noValidate sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={1} mt={1}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Addy">
                  A
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={11}>
                <div>
                  <Link
                    color="inherit"
                    href="https://mui.com/"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography variant="h6">Adham Dannaway</Typography>
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
                  image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*v2ULfQM2WzacQUlCiVMCCw.jpeg"
                  alt="ui"
                  sx={{ border: "1px solid black" }}
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Topics:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>UI</Box>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div sx={{ mt: 3 }}>
                  <Typography variant="body1" gutterBottom>
                    User interface design is hard. With so many options to
                    choose from regarding layout, spacing, typography, and
                    colour, making design decisions can be overwhelming. When
                    you add usability, accessibility, and psychology to the mix,
                    it gets even harder. Luckily, UI design doesn’t have to be
                    so hard. Over nearly 2 decades working as a product
                    designer, I’ve realised that most of my visual and
                    interaction design decisions are governed by a system of
                    logical rules. Not artistic flair or magical intuition, just
                    simple rules. Having a system of logical rules helps you
                    efficiently make informed design decisions. Without a
                    logical system, you’re just using gut feeling to move stuff
                    around until it looks pretty. I love rules and logic, but
                    design decisions are rarely black and white. Rather than
                    strict rules that you must follow, think of the following
                    advice as helpful guidelines that work well in most cases.
                    The quickest way to learn is by doing, so let’s get started.
                    Let’s fix this example using logical rules The following 2
                    designs are for the property details page of a short-term
                    property rental app. The first one is the original design.
                    The second is the result of applying some logical rules or
                    guidelines.
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
