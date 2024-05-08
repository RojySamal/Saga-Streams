import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const { title } = props;
  const navigate = useNavigate()
  const handleTitleClick = () => {
    navigate("/"); 
  };
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1, cursor: "pointer" }} 
          onClick={handleTitleClick} 
        >
          {title}
        </Typography>
        <Button href="/login">SignIn</Button>
        <Button href="/register">SignUp</Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default Header;
