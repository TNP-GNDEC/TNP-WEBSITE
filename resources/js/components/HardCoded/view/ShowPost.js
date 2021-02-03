import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Data from "../../HomeComponent/PostComponents/Data";
import Navbar from "../../HomeComponent/SideComponents/Navbar";
import RightBar from "../../HomeComponent/RightBar/RightBar";
import Scroll from "../../HomeComponent/SideComponents/scroll";
import { useParams } from 'react-router-dom';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px"
  },
  root: {
    flexGrow: 1,
    margin: "15px",
    marginTop: "40px",
    paddingTop: "20px",
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  left:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
      display: "none",
   }
  },
  center:{
    marginTop: "40px",
    
  },
  right:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
       display: "none",
    }
  }
}));

export default function ShowPost() {
  const classes = useStyles();

  let { id } = useParams();

  const [data, setData] = useState({
    posts: [],
    loading: true,
  });

  const fetchPosts = async () => { // Function featching posts
    const res = await axios.get(`/addPost/${id}/edit`);
    if(res.data.status === 200){
        setData({
          posts: res.data.posts,
          loading: false,
        });
    }
  }

  useEffect(() => { // it is similar to componentDidMount
    fetchPosts(); // custom function which fetch the posts
  }, []); // '[]' here stops rerendering of page which is a cause of state updates.

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Scroll showBelow={250} />
        <Grid container spacing={3}>
          <Grid item md={9} className={classes.center}>
            <Paper className={classes.paper}>
              <Data posts = {data.posts} key={data.posts.id} />
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <RightBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}