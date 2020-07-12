import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { BlogInfo } from "../types";
import { FadeLink } from "../components/link";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const StyledLink = styled(FadeLink)`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #65ace4;
  font-weight: bold;
  box-shadow: none;
`;

const StyledDesc = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const useStyles = makeStyles({
  root: {
    height: 160,
  },
});

const BlogSummary = (props: BlogInfo) => {
  const classes = useStyles();
  const { slug, title, date, description, excerpt } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <StyledLink to={slug}>{title}</StyledLink>
        </div>
        <div>
          <small>{date}</small>
        </div>
        <Divider />
        <StyledDesc
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default BlogSummary;
