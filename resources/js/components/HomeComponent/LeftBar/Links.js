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
        width: "300px",
        height: "56px",
        padding: "8px",
        borderRadius: "8px",
        filter: "drop-shadow(0 5px 25px rgba(48, 48, 48, 20%))",
        marginTop: "14px",
        boxShadow: "none"
    },
    cardTitle:{
        fontSize: "20px",
        fontWeight: "600",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "7px"
    },
    container:{
        display: "flex"
    },
    icon:{
        width: "40px",
        height: "40px"
    },
    linkIcon:{
        width: "25px",
        height: "25px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "10px"
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
    state = {
        data: [],
    }
    fetchData = async () => {
        const res = await Axios.get("/addLinksItems");
        if(res.data.status === 200){
            this.setState({data: res.data.data});
        }
    }
    componentDidMount(){
        this.fetchData();
    }

    deleteData = async (id) => {
        const res = await Axios.delete(`/addLinksItems/${id}`);
        if(res.data.status === 200){
            this.fetchData();
        }
    }

    render(){
        if(Object.keys(this.state.data).length == 0){
            return <div></div>
        }
        const {classes} = this.props;
        return(
            <>
            <Typography variant="h5" component="h2" className={classes.title}>
                Useful Links
            </Typography>
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