import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NestCamWiredStandIcon from "@mui/icons-material/NestCamWiredStand";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Snackbar } from "@mui/material";

const pages = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/readsaga" },
  { name: "Write", url: "/pensaga" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const navigate = useNavigate();

  const {
    state: { user },
  } = useAuthContext();
  const firstname = user ? JSON.parse(user).user.firstname : "";

  const { logmeout } = useLogout();

  const handleLogout = () => {
    logmeout();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    message: "",
  });


  const openSnackbar = (message) => {
    setSnackbarState({ open: true, message });
    setTimeout(() => {
      setSnackbarState({ open: false, message: "" });
    }, 3000);
  };

  const handleMenuItemClick = (url) => {
    if (url === "/pensaga" && !user) {
      openSnackbar("Please login to write a post.");
    } else {
      navigate(url);
      handleCloseNavMenu(); 
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <NestCamWiredStandIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Saga Streams
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => handleMenuItemClick(page.url)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NestCamWiredStandIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Saga Streams
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={() => handleMenuItemClick(page.url)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              {!user ? (
                <>
                  <Button href="/login">SignIn</Button>
                  <Button href="/register">SignUp</Button>
                </>
              ) : (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={firstname} src="/static/images/avatar/2.jpg" />
                </IconButton>
              )}
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={setting === "Logout" ? handleLogout : undefined}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {snackbarState.open && (
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snackbarState.open}
                message={snackbarState.message}
                onClose={() => setSnackbarState({ open: false, message: "" })}
                autoHideDuration={3000}
                key={`${"top"}${"center"}`}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
