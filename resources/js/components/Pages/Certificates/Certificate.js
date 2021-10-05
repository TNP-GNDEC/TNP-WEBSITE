import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Axios from "axios";

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import Footer from "../../HomeComponent/RightBar/FooterCard";
import Candidate from "./Candidate";
import Faculty from "./Faculty";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    margin: "0px",
    minHeight: "100vh",
  },
  root: {
    flexGrow: 1,
    margin: "15px 15px 0",
    marginTop: "30px",
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
    ['@media (max-width:960px)']: {
      display: "none",
   },
   ['@media (min-width:1600px)']: {
    marginTop: "60px"
},
  },
  center:{
    marginTop: "40px",
    ['@media (max-width:960px)']: {
      width: "100%",
   },
   ['@media (min-width:1600px)']: {
    marginTop: "60px"
},
  },
  right:{
    marginTop: "40px",
    width: "100%",
    ['@media (max-width:960px)']: {
       display: "none",
    },
    ['@media (min-width:1600px)']: {
      marginTop: "60px"
  },
  },
  cardTitle:{
    fontSize: "18px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    },
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
    },
  },
  Certificate:{
    width: "100%",
    padding: "30px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    ['@media (min-width:1600px)']: {
      paddingTop: "20px"
  },
  },
}));

export default function Certificate() {
  const classes = useStyles();
  const {id} = useParams();
  const [cert, setCert] = React.useState([]);
  const [file, setFile] = React.useState("");
  const [Name, setName] = React.useState("Undefined");
  const [ID, setID] = React.useState("Null");
  const [label, setLabel] = React.useState("Invalid!");
  const [Load, setLoad] = React.useState(true);

  const fetchCert = async () => {
    Axios.post(`/certData`, {id: id}).then((res) => {
      if(res.data.status === 200){
          setCert(res.data.cert);
          setFile(res.data.cert['file']);
          setName(res.data.cert['Name']);
          setID(res.data.cert['certificate_id']);
          setLabel("Verified!");
          setLoad(false);
      }
      }).catch((error) => {
      console.log(error);
      });
  }

  useEffect(() => { // it is similar to componentDidMount
    fetchCert(); 
  }, []);

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={3} className={classes.left} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <h3 className={classes.cardTitle}>Candidate</h3>
              <Candidate id={ID} Name={Name} label={label} />
              <Footer />
            </Paper>
          </Grid>
          <Grid item md={6} className={classes.center}>
            <Paper className={classes.paper}>
              <h3 className={classes.cardTitle}>Certificate</h3>
              <div className={classes.Certificate}>
                {Load ? 
                <></>
                :
                  <img src={file} width="100%" height="100%" />
                }
              </div>
            </Paper>
          </Grid>
          <Grid item md={3} className={classes.right} display={{ xs: 'none', md: 'block' }}>
            <Paper className={classes.paper}>
              <h3 className={classes.cardTitle}>Verified by</h3>
              <Faculty />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}