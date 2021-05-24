import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    const res = await Axios.get(`/addPost/${id}/edit`);
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
              <Card className={classes.card}>
                      <div className={classes.header}>
                          <div>
                              <img src={logo} className={classes.image}/>
                          </div>
                          <div className={classes.header2}>
                              <Typography variant="h4" component="h1" className={classes.title}>
                                  {data.posts.title}
                              </Typography>
                              <div className={classes.subheader}>
                                  <Typography variant="h5" component="h2" className={classes.subheading}>
                                      <Calender className={classes.icon}/>
                                      {moment.utc(data.posts.updated_at).format('LLL')}
                                  </Typography>
                                  <Typography variant="h5" component="h2" className={classes.subheading}>
                                      <Flag className={classes.icon}/>
                                      {data.posts.type} 
                                  </Typography>
                              </div>
                          </div>
                      </div>
                      <hr />
                      <div >
                          <Typography variant="h5" component="h2" className={classes.subheading2}>
                              { ReactHtmlParser(data.posts.description) }
                          </Typography>
                      </div>
                      <hr />
                      <div className={classes.body2}>
                          <div className={classes.socialIcons}>
                              <div className={classes.socialIcon}>
                                <a classes={classes.iconLinks} href="#"> <Facebook fontSize="medium" /> </a>
                              </div>
                              <div className={classes.socialIcon2}>
                                <a classes={classes.iconLinks} href="#"> <Linkedin fontSize="medium" /> </a>
                              </div>
                              <div className={classes.socialIcon3}>
                              <a classes={classes.iconLinks} href="#">  <Twitter fontSize="medium" /> </a>
                              </div>
                          </div>
                          <div className={classes.Tags}>
                              <LocalOffer />
                              <Typography variant="h5" component="h1" className={classes.subheading3}>
                              {tagArray.map((tag,i) => {
                                      if(tagArray.length-1 === i){
                                          return tag;
                                      }
                                      else{
                                          return tag + ", ";
                                      }
                                  })}
                              </Typography>
                          </div>
                      </div>
              
              </Card>
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
