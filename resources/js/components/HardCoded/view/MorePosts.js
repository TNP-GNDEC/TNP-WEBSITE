import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      padding: "20px"
  },
  },
  heading:{
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.dark,
    paddingTop: "5px",
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
      paddingTop: "12px"
    },
  },
  subheading:{
      fontSize: "13px",
      fontFamily: "Open Sans",
      fontWeight: "600",
      color: theme.palette.primary.text,
      ['@media (min-width:1600px)']: {
        fontSize: "16px"
    },
  },
  subheading2:{
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: theme.palette.primary.main,
    ['@media (min-width:1600px)']: {
      fontSize: "16px"
    },
  },
}));

export default function MorePosts(props) {
  const classes = useStyles();
  const { posts } = props;
  return (
    <Card className={classes.root}>
      <h1 className={classes.heading}>
        {posts.title}
      </h1>
      <h3 className={classes.subheading}>
        {posts.type} | {moment.utc(posts.updated_at).format('LLL')}
      </h3>
    </Card>
  );
}
