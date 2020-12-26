import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Location from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Language from '@material-ui/icons/Language';
import Explore from '@material-ui/icons/Explore';

import map from "../../../images/map.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    boxShadow: "0px 15px 25px #00000033",
  },
  header:{
      display: "flex",
  },
  icon:{
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0px 15px 25px #193b6833",
    color: theme.palette.secondary.main,
    borderRadius: "5px",
    marginRight: "10px",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
Icon:{
  fontSize: "18px",
},
  title:{
      color: theme.palette.primary.dark,
      fontSize: "22px"
  },
  imageBox:{
      width: "100%"
  },
  image:{
      width:"100%"
  },
  name:{
      marginLeft: "60px",
      textAlign: "left",
      color: theme.palette.secondary.contrastText
  },
  heading:{
    fontSize: "18px"
  },
  subheading:{
      fontSize: "12px",
      paddingTop: "5px"
  },
  name2:{

    display: "flex",
    color: theme.palette.primary.main
},
icon2:{
    fontSize: "16px",
    color: theme.palette.primary.dark,
    marginTop: "5px",
    marginLeft: "10px"
},
subheading2:{
    fontSize: "12px",
    paddingTop: "5px",
    marginLeft: "35px"
},
subheading3:{
    fontSize: "12px",
    paddingTop: "5px",
    marginLeft: "35px",
    color: theme.palette.secondary.contrastText
},
color:{
    color: theme.palette.primary.main
}
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.header}>
      <div className={classes.icon}><Location className={classes.Icon}/></div>
          <Typography variant="h5" component="h2" className={classes.title}>
              LOCATION
          </Typography>
         
      </div>
      <hr />
      <div className={classes.imageBox}>
          <img src={map} className={classes.image}/>
      </div>
      
      <div className={classes.name2}>
            <Explore className={classes.icon2}/>
            <Typography variant="h6" component="h2" className={classes.subheading3}>
              Guru Nanak Dev Engineering College Gill Park Ludhiana
              <br />
              141006
              <br />
              Ludhiana, Punjab, India
              <br />
              <div className={classes.color}>↱  Get Directions</div>
            </Typography>
        </div>
      <div className={classes.name2}>
            <Email className={classes.icon2}/>
            <Typography variant="h6" component="h2" className={classes.subheading2}>
              tpo@gndec.ac.in
            </Typography>
        </div>
        <div className={classes.name2}>
            <Phone className={classes.icon2}/>
            <Typography variant="h6" component="h2" className={classes.subheading2}>
              0161-5064510
            </Typography>
      </div>
      <div className={classes.name2}>
            <Language className={classes.icon2}/>
            <Typography variant="h6" component="h2" className={classes.subheading2}>
              www.gndec.ac.in
            </Typography>
      </div>
    </Card>
  );
}