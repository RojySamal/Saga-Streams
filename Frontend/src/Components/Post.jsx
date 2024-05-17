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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip } from "@mui/material";
import {Button} from "@mui/material";
import PropTypes from "prop-types";

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

export default function Post({blogTitle="", blogTopic=[], blogSummary="", blogImage="", blogContent=""}) {

  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

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

  // Post.defaultProps = {
  //   blogTopic: [],
  //   blogContent:'',
  //   blogImage:'',
  //   blogTitle:'',
  //   blogSummary:''
  // };

  return (
    <Card item xs={12} md={6} sx={{ mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blogTitle}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={blogImage}
        alt={blogTitle}
      />
      <CardContent>
      { <div>
      
      {(blogTopic).map((topic, index) => (
        <Chip key={index} label={topic} style={{ margin: '0.5rem' }} />
      ))}
      </div> }
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
        variant="contained"
        color="primary"
        onClick={handleNavigate}
        style={{ margin: "2%" }}
      >
        Continue Reading...
      </Button>
    </Card>
  );
}
