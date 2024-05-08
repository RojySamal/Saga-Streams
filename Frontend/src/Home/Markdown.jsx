import * as React from "react";
import ReactMarkdown from "react-markdown";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const renderers = {
  heading: ({ level, children }) => {
    const variant = ["h4", "h6", "subtitle1", "caption"][level - 1];
    return (
      <Typography gutterBottom variant={variant} component={`h${level}`}>
        {children}
      </Typography>
    );
  },
  paragraph: ({ children }) => <Typography paragraph>{children}</Typography>,
  link: ({ href, children }) => <Link href={href}>{children}</Link>,
  list: ({ children, ordered }) => (
    <Box component={ordered ? "ol" : "ul"}>{children}</Box>
  ),
  listItem: ({ children }) => <MarkdownListItem>{children}</MarkdownListItem>,
};

export default function Markdown(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}
