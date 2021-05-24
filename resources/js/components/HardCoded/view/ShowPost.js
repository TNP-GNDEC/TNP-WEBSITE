import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Facebook from '@material-ui/icons/Facebook';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Calender from '@material-ui/icons/EventAvailable';
import Flag from '@material-ui/icons/Flag';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "../../../../images/logo.png";

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
  card: {
    width: "100%",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0px 15px 25px #00000033"
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
  },
  header: {
    width: "100%",
    display: "flex"
},
header2: {
    width: "100%",
    padding: "0px 10px 10px 10px"
},
image: {
    width: "50px",
    height: "50px"
},
title: {
    fontSize: "26px",
    textTransform: "uppercase",
    wordWarp: "word-break",
    color: theme.palette.primary.dark,
    '&:hover':{
        color: theme.palette.primary.main
    }
},
subheader: {
    display: "flex",
    justifyContent: "space-between",
    padding:"10px 20px 0px 0px"
},
subheading: {
    fontSize: "14px"
},
icon:{
    fontSize: "18px"
},
subheading2: {
    fontSize: "18px",
    color: "#00000099",
    padding:"10px 20px",
    textAlign: "justify",
    // textJustify: "inter-word"
},
subheading3: {
    fontSize: "16px",
    paddingLeft: "5px"
},
subheading4: {
    fontSize: "16px",
},
read:{
    borderRadius: "5px",
    width: "95%",
    margin:"8px auto",
    height: "40px",
    marginTop: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"30px 0px 30px 0px"
},
readLink:{
    width: "100%",
    textDecoration: "none"
},
readButton:{
    backgroundColor: "#7575751a",
    padding:"10px 0px",
    fontSize: "16px",
    color: "#757575",
    textDecoration: "none",
    "&:hover":{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main
    }
},
body2:{
    display: "flex",
    justifyContent: "space-between"
},
Tags: {
    backgroundColor: "#3b59981a",
    color: theme.palette.primary.dark,
    width: "40%",
    height: "40px",
    borderRadius: "5px",
    display: "flex",
    padding : "0 10px",
    alignItems: "center",
},
socialIcons: {
    display:"flex",
    padding:"0px 20px"
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
iconLinks:{
    textDecoration:"none",
    color:"#fff",        
},
body3:{
    maxHeight: "150px",
    overflow: "Hidden",
},
pdfs:{
    width: "70%",
    height: "500px",
    margin: "auto",
},
}));

export default function ShowPost() {
  const classes = useStyles();

  let { id } = useParams();

  const [tagArray, setTagArray] = useState([]);
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
