import React from "react";
import Axios from "axios";
import LinksData from "./LeftBarData/LinksData";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/icons/Link';
import { Icon } from "@material-ui/core";
import gneLogo from '../../../../images/gndec.png';
import linkIcon from '../../../../images/link.png';
import naukriIcon from '../../../../images/naukri-com.png';
import bixIcon from '../../../../images/indiabix.jpg';
import indeedIcon from '../../../../images/indeed.jpg';
import internshalaIcon from '../../../../images/internshala.jpg';

const useStyles = theme => ({
    title:{
        color: theme.palette.primary.dark,
        fontSize: "20px",
        fontWeight: "500"
    },
    card:{
        width: "100%",
        height: "56px",
        padding: "8px",
        borderRadius: "8px",
        marginBottom: "15px",
        boxShadow: "0 5px 15px #30303033",
        ["@media (min-width:1600px)"]: {
            height: "65px",
            padding: "12px"
        }
    },
    cardTitle:{
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Open Sans",
        marginTop: "auto",
        marginBottom: "auto",
        color: theme.palette.primary.dark,
        marginLeft: "20px",
        ["@media (min-width:1600px)"]: {
            fontSize: "20px",
            marginLeft: "30px"
        }
    },
    container:{
        display: "flex"
    },
    icon:{
        width: "40px",
        height: "40px"
    },
    linkIcon:{
        width: "20px",
        height: "20px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "10px",
        ["@media (min-width:1600px)"]: {
            width: "22px",
            height: "22px"
        }
    },
    outerContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    link: {
        marginTop: "auto",
        marginBottom: "auto"
    }
});

class Links extends React.Component {

    render(){
        const {classes} = this.props;
        return(
            <>
            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={gneLogo}></img>
                        <Typography className={classes.cardTitle}>
                            GNDEC
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://gndec.ac.in" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={naukriIcon}></img>
                        <Typography className={classes.cardTitle}>
                            Naukri.com
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://naukri.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={bixIcon}></img>
                        <Typography className={classes.cardTitle}>
                            IndiaBix
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://indiabix.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={indeedIcon}></img>
                        <Typography className={classes.cardTitle}>
                            Indeed
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://indeed.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={internshalaIcon}></img>
                        <Typography className={classes.cardTitle}>
                            Internshala
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://internshala.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>
            </>
        )
    }
}

export default withStyles(useStyles)(Links);