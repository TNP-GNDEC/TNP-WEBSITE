import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      boxShadow: "0 1px 1px rgba(0,0,0,0.15),0 8px 0 -5px #eee,0 8px 1px -4px rgba(0,0,0,0.15),0 16px 0 -10px #eee,0 16px 1px -9px rgba(0,0,0,0.15)",
    },
    header:{
        display: "flex",
    },
    icon:{
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "0px 5px 15px #193b6833",
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
  
  export default function Academic() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined">
        <div className={classes.header}>
        <div className={classes.icon}><Business className={classes.Icon}/></div>
            <Typography variant="h5" component="h2" className={classes.title}>
                ACADEMIC QUERIES
            </Typography>
           
        </div>
        <hr />
        <div className={classes.name}>
              <Typography variant="h5" component="h2" className={classes.heading}>
                Sr. Narinder Singh
              </Typography>
              <Typography variant="h6" component="h2" className={classes.subheading}>
                Junior Superintendent
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
                +91-97801-99970
              </Typography>
        </div>
      </Card>
    );
  }