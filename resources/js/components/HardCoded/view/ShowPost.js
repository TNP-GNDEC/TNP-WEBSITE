import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import Share from "./Share";
import MorePosts from "./MorePosts";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Loading from "../../HomeComponent/SideComponents/LoadingPost";
import Footer from "../../HomeComponent/RightBar/FooterCard";
import Facebook from '@material-ui/icons/Facebook';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import ReactHtmlParser from 'react-html-parser';
import logo from "../../../../images/logo.png";

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import Scroll from "../../HomeComponent/SideComponents/scroll";
import { useParams } from 'react-router-dom';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px",
    minHeight: "100vh",
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
  paper2: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "sticky",
    top: "80px"
  },
  left:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:1000px)']: {
      display: "none",
   },
   ['@media (min-width:1600px)']: {
     marginTop: "60px"
   }
  },
  center:{
    marginTop: "40px",
    ['@media (max-width:1000px)']: {
      width: "100%",
   },
   ['@media (min-width:1600px)']: {
    marginTop: "60px"
  }
  },
  right:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:1000px)']: {
       display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
    }
  },
  cardTitle:{
    fontSize: "18px",
    paddingLeft: "5px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    },
    ['@media (min-width:1600px)']: {
      fontSize: "20px"
    }
  },
  cardRoot: {
    width: "100%",
    padding: "15px",
    marginBottom: "30px",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
            padding: "20px"
        },
},
type:{
  padding: "3px",
  backgroundColor: theme.palette.secondary.accent,
  fontSize: "12px",
  width: "30%",
  textAlign: "center",
  borderRadius: "8px",
  color: theme.palette.primary.dark,
  fontFamily: "Open Sans",
  fontWeight: "600",
  ['@media (max-width:960px)']: {
      fontSize: "10px",
      width: "40%"
  },
  ['@media (min-width:1600px)']: {
      fontSize: "16px",
      width: "30%"
  },
},
header: {
  width: "100%",
  display: "flex"
},
header2: {
  width: "100%",
  paddingTop: "5px"
},
image: {
  width: "14px",
  height: "14px",
  ['@media (max-width:960px)']: {
      width: "13px",
      height: "13px",
  },
  ['@media (min-width:1600px)']: {
      width: "17px",
      height: "17px",
  },
},
title: {
  fontSize: "24px",
  textTransform: "uppercase",
  wordWarp: "word-break",
  fontFamily: "Open Sans",
  fontWeight: "600",
  color: theme.palette.primary.dark,
  ['@media (max-width:960px)']: {
      fontSize: "18px",
  },
  ['@media (min-width:1600px)']: {
      fontSize: "32px",
  },
},
subheader: {
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 0px 0px 0px"
},
subheader2: {
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 5px 0px 0px",
},
subheader3: {
  display: "flex",
  padding: "0px",
  width: "10%",
  justifyContent: "space-between",
  alignItems: "flex-start",
  ['@media (max-width:600px)']: {
      width: "20%",
  },
},
subheading: {
  fontSize: "12px",
  fontFamily: "Open Sans",
  fontWeight: "600",
  paddingLeft: "5px",
  color: theme.palette.primary.dark,
  ['@media (max-width:960px)']: {
      fontSize: "10px",
  },
  ['@media (min-width:1600px)']: {
      fontSize: "16px",
  },
},
icon: {
  fontSize: "18px"
},
subheading2: {
  fontSize: "16px !important",
  color: theme.palette.primary.text,
  padding: "30px 0px",
  textAlign: "justify",
  fontFamily: "Open Sans !important",
  ['@media (max-width:960px)']: {
      fontSize: "13px !important",
  },
},
subheading3: {
  fontSize: "16px",
  paddingLeft: "5px"
},
subheading4: {
  fontSize: "16px",
},
read: {
  borderRadius: "5px",
  width: "100%",
  margin: "8px auto",
  height: "40px",
  marginTop: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0px 0px 0px"
},
readLink: {
  width: "100%",
  textDecoration: "none"
},
readButton: {
  backgroundColor: theme.palette.primary.main,
  padding: "10px 0px",
  fontSize: "16px",
  borderRadius: "16px",
  fontFamily: "Open Sans",
  fontWeight: "400",
  textTransform: "capitalize",
  boxShadow: "0px 10px 25px #1687d933",
  color: theme.palette.secondary.main,
  textDecoration: "none",
  '&:hover': {
      backgroundColor: theme.palette.primary.main,
  },
  '&:focus': {
      outline: "none"
  },
  ['@media (max-width:960px)']: {
      fontSize: "14px",
  },
  ['@media (min-width:1600px)']: {
      fontSize: "18px",
  },
},
body2: {
  display: "flex",
  justifyContent: "space-between"
},
Icons: {
  width: "16px",
  height: "16px",
  padding: "0px",
  color: theme.palette.primary.dark,
  verticalAlign: "initial",
  ['@media (max-width:960px)']: {
      width: "14px",
      height: "14px",
  },
  ['@media (min-width:1600px)']: {
      width: "20px",
      height: "20px",
  },
},
Tags: {
  backgroundColor: "#3b59981a",
  color: theme.palette.primary.dark,
  width: "40%",
  height: "40px",
  borderRadius: "5px",
  display: "flex",
  padding: "0 10px",
  alignItems: "center",
},
socialIcons: {
  display: "flex",
  padding: "0px 20px"
},
socialIcon: {
  borderRadius: "5px",
  backgroundColor: "#3b59981a",
  color: "#3b5998",
  marginRight: "8px",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},
socialIcon2: {
  borderRadius: "5px",
  backgroundColor: "#0077b51a ",
  // border: "1px solid #0077b5",
  // boxShadow: "0px 15px 25px #0077b51a",
  color: "#0077b5",
  marginRight: "8px",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},
socialIcon3: {
  borderRadius: "5px",
  backgroundColor: "#00acee1a",
  color: "#00acee ",
  marginRight: "8px",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},
iconLinks: {
  textDecoration: "none",
  color: "#fff",
},
pdfs: {
  width: "70%",
  height: "500px",
  margin: "auto",
},
tagslist: {
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
},
tag: {
    backgroundColor: theme.palette.secondary.accent,
    color: theme.palette.primary.dark,
    padding: "5px 12px",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontSize: "15px",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "12px"
   },
   link:{
     textDecoration: "none"
   },
},

}));

export default function ShowPost() {
  const classes = useStyles();

  let { id } = useParams();

  const [tagArray, setTagArray] = useState([]);
  const [state, setState] = useState({
    postArray: [],
    loading: true,
    page: 3,
    searchText: "",
  });
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
        setTagArray([
          JSON.parse(res.data.posts.tags)
        ]);   
    }
  }
  const fetchMorePosts = async () => {
    Axios.post(`/getposts`, state).then((res) => {
      if(res.data.status === 200){
          setState({postArray: res.data.posts});
      }
      }).catch((error) => {
      console.log(error);
      });
  }

  useEffect(() => { // it is similar to componentDidMount
    fetchPosts(); // custom function which fetch the posts
    fetchMorePosts(); 
  }, []); // '[]' here stops rerendering of page which is a cause of state updates.

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Scroll showBelow={250} />

        <Grid container spacing={3}>
          <Grid item md={3} className={classes.left} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper2}>
              <h3 className={classes.cardTitle}>Share</h3>
              <Share id={data.posts.id} title={data.posts.title} />
              <Footer />
            </Paper>
          </Grid>

          <Grid item md={6} className={classes.center}>
            <Paper className={classes.paper}>
            <h3 className={classes.cardTitle}>Full Post</h3>
            {data.loading ? <Loading /> :
            <Card className={classes.cardRoot}>
                <div className={classes.type}>
                    {data.posts.type}
                </div>
                <div className={classes.header}>
                    <div className={classes.header2}>
                        <Typography variant="h4" component="h1" className={classes.title}>
                            {data.posts.title}
                        </Typography>
                        <div className={classes.subheader}>
                            <div className={classes.subheader2}>
                                <img src={logo} className={classes.image} />
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    {moment(data.posts.updated_at).format('LLL')}
                                </Typography>
                            </div>
                            <div className={classes.subheader3}>
                                <a href="https://facebook.com/official.gndec" style={{ textDecoration: 'none', padding: '0px' }} >
                                    <Facebook className={classes.Icons}/>
                                </a>
                                <a href="https://linkedin.com/in/gndec" style={{ textDecoration: 'none' }} >
                                    <Linkedin className={classes.Icons}/>
                                </a>
                                <a href="https://twitter.com/OfficialGNDEC" style={{ textDecoration: 'none' }} >
                                    <Twitter className={classes.Icons}/>
                                </a>
                                {/* <Share className={classes.Icons}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.body3}>
                  <p className={classes.subheading2}>
                      {ReactHtmlParser(data.posts.description)}
                  </p>
                </div>
                <div className={classes.tagslist}>
                <div className={classes.tag}>
                      TNP
                    </div>
                    <div className={classes.tag}>
                      GNDEC
                    </div>
                </div>
            </Card>
            }
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper2}>
            <h3 className={classes.cardTitle}>More Posts from T&P</h3>
              {state.postArray.map(posts => (
                <a style={{ textDecoration: 'none' }} href={"https://tnpgndec.com/showPost/" + posts.id} >
                <MorePosts posts = {posts} key={posts.id} />
                </a>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
