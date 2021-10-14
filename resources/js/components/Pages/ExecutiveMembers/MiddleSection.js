import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Select from "react-select";

const options = [
  { value: 3, label: "2021-22" },
  { value: 2, label: "2020-21" },
  { value: 1, label: "2019-20" },
  { value: 0, label: "2018-19" }
]

const customStyles = {
  control: base => ({
    ...base,
    height: 50,
    borderRadius: 16,
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#303030',
  })
};

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
    marginTop: "20px",
    boxShadow: "0px 10px 25px rgba(48, 48, 48, 0.2)",
  },
  pdfEmbed: {
    borderRadius: "16px",
    border: "none",
    height: "150vw",
    maxHeight: "800px",
    ['@media (max-width:550px)']: {
      maxHeight: "500px"
    },
  },
  replacementHandler:{
    textContent: "center",
    width: "100%",
    textAlign: "center",
    fontSize: "40px",
    paddingTop: "300px",
    height: "700px",
    ['@media (max-width:550px)']: {
      paddingTop: "200px",
      height: "500px"
    },
  }
}));

export default function MiddleSection() {

  const handleChange = (e) => {
    setIndex(e.value)
  }

  const classes = useStyles();
  // links should be in order with last one being the latest one
  const links = [
    "",
    "",
    "",
    "/documents/Tnp-Team/Executive-Members.pdf",
  ];
  const [index, setIndex] = useState(links.length - 1);

  return (
    <>
      <h3 className={classes.cardTitle} >Executive Members</h3>
        <Select
          styles={customStyles}
          options={options}
          onChange={handleChange}
          label="batch"
          defaultValue={options[0]}
        />

      <Card className={classes.pdfCard}>
        {
          links[index] == "" ?
            <div className={classes.replacementHandler}>
              Updated Soon
            </div>
          :
            <iframe src={links[index]} width="100%" allow="autoplay" className={classes.pdfEmbed}></iframe>
        }
      </Card>
    </>
  );
}
