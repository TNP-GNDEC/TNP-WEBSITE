import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import linkIcon from '../../../../images/Link.png';
import prepinstaIcon from '../../../../images/prepinsta_logo.jpg';
import faceprepIcon from '../../../../images/faceprep_logo.jpg';
import placementseasonIcon from '../../../../images/placementseason_logo.png';
import { GpsFixed } from "@material-ui/icons";

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

class PlacementLinks extends React.Component {

    render(){
        const {classes} = this.props;
        return(
            <div class={classes.box}>
            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={prepinstaIcon}></img>
                        <Typography className={classes.cardTitle}>
                            PrepInsta
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://prepinsta.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={faceprepIcon}></img>
                        <Typography className={classes.cardTitle}>
                            FacePrep
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://faceprep.in" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>

            <Card className={classes.card}>
                <div className={classes.outerContainer}>
                    <div className={classes.container}>
                        <img className={classes.icon} src={placementseasonIcon}></img>
                        <Typography className={classes.cardTitle}>
                            PlacementSeason
                        </Typography>
                    </div>
                    <div className={classes.link}>
                        <a href="https://placementseason.com" target="_blank" rel="noreferrer noopener">
                            <img className={classes.linkIcon} src={linkIcon}></img>
                        </a>
                    </div>
                </div>
            </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(PlacementLinks);
