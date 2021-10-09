import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Connect from "./OtherMembersCard";
import FooterCard from "../../../HomeComponent/RightBar/FooterCard";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontSize: "18px",
    color: theme.palette.primary.dark,
    fontFamily: "Open Sans",
    fontWeight: "600",
    paddingLeft: "5px",
    marginBottom: "5px",
    ['@media (max-width:960px)']: {
      fontSize: "14px"
    },
    ['@media (min-width:1600px)']: {
      fontSize: "20px"
    },
  },
}));

export default function LeftBar() {
  const classes = useStyles();

  return (
    <div>
      <h3 className={classes.cardTitle}>Other Members</h3>
      <Connect />
      <FooterCard />
    </div>
  )
}
