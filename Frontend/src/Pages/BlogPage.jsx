import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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

export default function BlogPage() {
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
          <Typography component="h1" variant="h5">
            Title
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} sm={1} mt={1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Grid>
              <Grid item xs={12} sm={11}>
                <div>
                  <Link color="inherit" href="https://mui.com/">
                    Name of the author
                  </Link>
                </div>
                <div>
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
                  height="194"
                  image="/static/images/cards/paella.jpg"
                  alt="Paella dish"
                  border="1px solid black"
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  nostrum veritatis itaque, necessitatibus debitis vero nam
                  praesentium possimus eos mollitia laborum totam. Odit,
                  consequatur placeat! Sequi alias dolores nostrum asperiores.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum debitis dolores neque nihil beatae impedit corrupti
                  officia cumque. Fuga nobis nemo accusamus vel corporis iusto
                  facilis modi distinctio debitis a.
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
