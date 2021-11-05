import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// const customStyles = {
//   control: base => ({
//     ...base,
//     height: 50,
//     borderRadius: 16,
//     fontFamily: 'Open Sans',
//     fontSize: 16,
//     color: '#303030',
//   })
// };

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontSize: "18px",
    paddingLeft: "5px",
    marginBottom: "5px",
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
  pdfCard: {
    padding: "15px",
    borderRadius: "16px",
    boxShadow: "0px 10px 25px rgba(48, 48, 48, 0.2)",
  },
  imageHandler:{
    textContent: "center",
    width: "100%",
    textAlign: "center",
    fontSize: "40px",
    maxHeight: "900px",
    ['@media (max-width:550px)']: {
      paddingTop: "200px",
      height: "500px"
    },
  },
  imageTag: {
    borderRadius: "10px"
  }
}));

export default function MiddleSection() {

  const classes = useStyles();

  return (
    <>
      <h3 className={classes.cardTitle} >Major Recruiters</h3>
      <Card className={classes.pdfCard}>
            <div className={classes.imageHandler}>
              <img src="/documents/recruiters/major_recruiters.png" alt="Updated Soon" height="100%" width="100%" className={classes.imageTag} />
            </div>
      </Card>
    </>
  );
}
