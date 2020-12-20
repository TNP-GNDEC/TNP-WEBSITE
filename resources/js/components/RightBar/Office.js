import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import office from "../../../images/office.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "10px"
  },
  header:{
      display: "flex",
  },
  icon:{
      backgroundColor: theme.palette.primary.dark,
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
      textAlign: "center"
  },
  image:{
      width:"180px"
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
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.header}>
          <div className={classes.icon}><Business className={classes.Icon}/></div>
          <Typography variant="h5" component="h2" className={classes.title}>
              T&P OFFICE
          </Typography>
         
      </div>
      <hr />
      <div className={classes.imageBox}>
          <img src={office} className={classes.image}/>
      </div>
      <div className={classes.name}>
            <Typography variant="h5" component="h2" className={classes.heading}>
              Prof. G.S.Sodhi
            </Typography>
            <Typography variant="h6" component="h2" className={classes.subheading}>
              Training and Placement Officer
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
              +91-98722-19178
            </Typography>
      </div>
    </Card>
  );
}