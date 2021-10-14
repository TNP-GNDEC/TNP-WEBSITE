import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

import Navbar from "../../HomeComponent/SideComponents/Navbar";
import Select from "react-select";
import PlacementData from "./Components/PlacementData";

const options = [
  { value: "21", label: "2020-21" },
  { value: "20", label: "2019-20" },
  { value: "19", label: "2018-19" },
  { value: "18", label: "2017-18" },
  { value: "17", label: "2016-17" },
  { value: "16", label: "2015-16" },
  { value: "15", label: "2014-15" }
];

const customStyles = {
  control: base => ({
    ...base,
    height: 50,
    width: 230,
    borderRadius: 16,
    fontFamily: "Open Sans",
    fontSize: 16,
    color: "#303030",
    zIndex: 10
  })
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    ["@media (max-width:1593px)"]: {
      backgroundColor: theme.palette.primary.light,
      paddingTop: "120px",
      paddingBottom: "50px"
    },
    paddingTop: "140px",
    paddingBottom: "50px"
  },
  body: {
    backgroundColor: "white",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    marginBottom: "20px"
  },
  heading: {
    ["@media (max-width:768px)"]: {
      fontSize: "2rem"
    },
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "Open Sans",
    fontSize: "40px",
    fontWeight: "600",
    block: "inline"
  }
}));

export default function StickyHeadTable() {
  const classes = useStyles();
  const [year, setYear] = React.useState("21");

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className="d-md-flex mb-3 justify-content-between mx-4">
          <div className={classes.heading}>
            Placement Records {"20" + year}
          </div>
          <div className="my-auto">
            <Select
              styles={customStyles}
              options={options}
              defaultValue={options[0]}
              menuPortalTarget={document.body}
              styles={{
                ...customStyles,
                menuPortal: base => ({
                  ...base,
                  zIndex: 9999
                })
              }}
              onChange={val => setYear(val.value)}
            />
          </div>
        </div>
        <Paper className={classes.body}>
          <PlacementData year={year} />
        </Paper>
      </div>
    </>
  );
}
