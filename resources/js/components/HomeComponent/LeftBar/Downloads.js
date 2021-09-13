import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

import file from "../../../../images/file.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "34px",
    borderRadius: "16px",
    boxShadow: "0px 15px 30px #8a959e33",
    border: "2px solid #e5e5e5",
  },
  heading:{
    fontSize: "17px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    paddingTop: "3px",
    color: theme.palette.primary.dark,
    ['@media (min-width:1600px)']: {
      fontSize: "20px",
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
down1:{
  width: "100%",
  padding: "20px",
},
down2:{
  width: "100%",
  padding: "20px",
  backgroundColor: theme.palette.secondary.accent,
},
innerDown:{
  width: "100%",
  height: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
},
}));

export default function Office() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a href="/documents/Downloads/PlacementBroucher.pdf" download="PlacementBroucher.pdf" >
        <div className={classes.down1}>
          <div className={classes.innerDown}>
            <h3 className={classes.heading}>Placement Broucher</h3>
            <img src={file} width="18px" />
          </div>
        </div>
      </a>
      <a href="/documents/Downloads/Evaluation.pdf" download="Evaluation.pdf" >
        <div className={classes.down2}>
          <div className={classes.innerDown}>
            <h3 className={classes.heading}>Evaluation</h3>
            <img src={file} width="18px" />
          </div>
        </div>
      </a>
      <a href="/documents/Downloads/Department_Faculty_Coordinators.pdf" download="Department_Faculty_Coordinator.pdf">
        <div className={classes.down1}>
          <div className={classes.innerDown}>
            <h3 className={classes.heading}>Department Coordinators</h3>
            <img src={file} width="18px" />
          </div>
        </div>
      </a>
      <a href="/documents/Downloads/6WeeksTraining.pdf" download="6WeeksTraining.pdf" >
        <div className={classes.down2}>
          <div className={classes.innerDown}>
            <h3 className={classes.heading}>6 Weeks Training Form</h3>
            <img src={file} width="18px" />
          </div>
        </div>
      </a>
      <a href="/documents/Downloads/Training.pdf" download="Training.pdf" >
        <div className={classes.down1}>
          <div className={classes.innerDown}>
            <h3 className={classes.heading}>6 Months Training Form</h3>
            <img src={file} width="18px" />
          </div>
        </div>
      </a>
    </Card>
  );
}
