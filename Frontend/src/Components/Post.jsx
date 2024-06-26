import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { fetchUserById } from "../api/fetchUserAPI";
import { Chip } from "@mui/material";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({
  blogTitle = "",
  blogTopic = [],
  blogSummary = "",
  blogImage = "",
  blogContent = "",
  blogUser = "",
  blogPostTime = "",
}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [userData, setUserData] = useState(null);
  console.log("userData: ", userData);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUserById(blogUser);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Handle error if needed
      }
    };

    if (blogUser) {
      fetchUserData();
    }
  }, [blogUser]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNavigate = () => {
    navigate("/blog", {
      state: {
        blogTitle,
        blogTopic,
        blogSummary,
        blogImage,
        blogContent,
        blogUser,
        blogPostTime,
        userData,
      },
    });
  };

  Post.propTypes = {
    blogTitle: PropTypes.string.isRequired,
    blogTopic: PropTypes.arrayOf(PropTypes.string),
    blogSummary: PropTypes.string.isRequired,
    blogImage: PropTypes.string,
    blogContent: PropTypes.string.isRequired,
  };


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
    <Card item xs={12} md={6} sx={{ mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userData && userData.user.name.firstname.charAt(0)}
          </Avatar>
        }
        title={blogTitle}
        subheader={formattedDateTime}
      />
      <CardMedia
        component="img"
        height="194"
        image={blogImage}
        alt={blogTitle}
      />
      <CardContent>
        {
          <div>
            {blogTopic.map((topic, index) => (
              <Chip key={index} label={topic} style={{ margin: "0.5rem" }} clickable/>
            ))}
          </div>
        }

        <Typography variant="body2" color="text.secondary">
          {blogSummary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Button
        variant="text"
        color="primary"
        onClick={handleNavigate}
        style={{ margin: "2%" }}
      >
        Continue Reading...
      </Button>
    </Card>
  );
}
