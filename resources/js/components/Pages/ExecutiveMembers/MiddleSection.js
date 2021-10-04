import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
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
  formControl: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    border: "1px #B1B1B1 solid",
    overflow: "hidden",
    paddingLeft: "15px",
    paddingRight: "15px",
    color: "#303030",
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
    setIndex(e.target.value)
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
      <h3 className={classes.cardTitle} style={{ marginBottom: 15 }}>Executive Members</h3>
      <FormControl variant="standard" className={classes.formControl} fullWidth>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          onChange={handleChange}
          label="batch"
          style={{padding: 5, fontSize: 20}}
          disableUnderline
        >
          <MenuItem value={3} style={{fontSize: 18}}>2021-22</MenuItem>
          <MenuItem value={2} style={{fontSize: 18}}>2020-21</MenuItem>
          <MenuItem value={1} style={{fontSize: 18}}>2019-20</MenuItem>
          <MenuItem value={0} style={{fontSize: 18}}>2018-19</MenuItem>
        </Select>
      </FormControl>
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
