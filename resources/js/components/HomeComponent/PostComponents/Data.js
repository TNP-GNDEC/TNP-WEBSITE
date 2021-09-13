import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Facebook from '@material-ui/icons/Facebook';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Share from '@material-ui/icons/ShareTwoTone';
import Calender from '@material-ui/icons/EventAvailable';
import Flag from '@material-ui/icons/Flag';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "../../../../images/logo.png";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        width: "100%",
        padding: "15px",
        marginBottom: "40px",
        borderRadius: "16px",
        boxShadow: "0px 15px 30px #8a959e33",
        ['@media (min-width:1600px)']: {
            padding: "20px"
        },
    },
    type:{
        padding: "3px",
        backgroundColor: theme.palette.secondary.accent,
        fontSize: "12px",
        width: "30%",
        textAlign: "center",
        borderRadius: "8px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        ['@media (max-width:960px)']: {
            fontSize: "10px",
            width: "40%"
        },
        ['@media (min-width:1600px)']: {
            fontSize: "16px",
            width: "30%"
        },
    },
    header: {
        width: "100%",
        display: "flex"
    },
    header2: {
        width: "100%",
        paddingTop: "5px"
    },
    image: {
        width: "14px",
        height: "14px",
        ['@media (max-width:960px)']: {
            width: "13px",
            height: "13px",
        },
        ['@media (min-width:1600px)']: {
            width: "17px",
            height: "17px",
        },
    },
    title: {
        fontSize: "24px",
        textTransform: "uppercase",
        wordWarp: "word-break",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        ['@media (max-width:960px)']: {
            fontSize: "18px",
        },
        ['@media (min-width:1600px)']: {
            fontSize: "32px",
        },
    },
    subheader: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0px 0px 0px"
    },
    subheader2: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 5px 0px 0px",
    },
    subheader3: {
        display: "flex",
        padding: "0px",
        width: "10%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        ['@media (max-width:600px)']: {
            width: "20%",
        },
    },
    subheading: {
        fontSize: "12px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        paddingLeft: "5px",
        color: theme.palette.primary.dark,
        ['@media (max-width:960px)']: {
            fontSize: "10px",
        },
        ['@media (min-width:1600px)']: {
            fontSize: "16px",
        },
    },
    icon: {
        fontSize: "18px"
    },
    subheading2: {
        fontSize: "16px !important",
        color: theme.palette.primary.text,
        padding: "30px 0px",
        textAlign: "justify",
        fontFamily: "Open Sans !important",
        ['@media (max-width:960px)']: {
            fontSize: "13px !important",
        },
    },
    subheading3: {
        fontSize: "16px",
        paddingLeft: "5px"
    },
    subheading4: {
        fontSize: "16px",
    },
    read: {
        borderRadius: "5px",
        width: "100%",
        margin: "12px auto",
        height: "40px",
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 0px 10px 0px"
    },
    readLink: {
        width: "100%",
        textDecoration: "none"
    },
    readButton: {
        backgroundColor: theme.palette.primary.main,
        padding: "10px 0px",
        margin: "10px 0px",
        fontSize: "16px",
        borderRadius: "16px",
        fontFamily: "Open Sans",
        fontWeight: "400",
        textTransform: "capitalize",
        boxShadow: "0px 10px 25px #1687d933",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:focus': {
            outline: "none"
        },
        ['@media (max-width:960px)']: {
            fontSize: "14px",
        },
        ['@media (min-width:1600px)']: {
            fontSize: "18px",
        },
    },
    body2: {
        display: "flex",
        justifyContent: "space-between"
    },
    Icons: {
        width: "16px",
        height: "16px",
        padding: "0px",
        color: theme.palette.primary.dark,
        verticalAlign: "initial",
        ['@media (max-width:960px)']: {
            width: "14px",
            height: "14px",
        },
        ['@media (min-width:1600px)']: {
            width: "20px",
            height: "20px",
        },
    },
    Tags: {
        backgroundColor: "#3b59981a",
        color: theme.palette.primary.dark,
        width: "40%",
        height: "40px",
        borderRadius: "5px",
        display: "flex",
        padding: "0 10px",
        alignItems: "center",
    },
    socialIcons: {
        display: "flex",
        padding: "0px 20px"
    },
    socialIcon: {
        borderRadius: "5px",
        backgroundColor: "#3b59981a",
        color: "#3b5998",
        marginRight: "8px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    socialIcon2: {
        borderRadius: "5px",
        backgroundColor: "#0077b51a ",
        // border: "1px solid #0077b5",
        // boxShadow: "0px 15px 25px #0077b51a",
        color: "#0077b5",
        marginRight: "8px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    socialIcon3: {
        borderRadius: "5px",
        backgroundColor: "#00acee1a",
        color: "#00acee ",
        marginRight: "8px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconLinks: {
        textDecoration: "none",
        color: "#fff",
    },
    body3: {
        maxHeight: "250px",
        overflow: "Hidden",
    },
    pdfs: {
        width: "70%",
        height: "500px",
        margin: "auto",
    },
});


class Data extends React.Component {
    delPost = (id) => {
        alert("Are You Want To Delete This Post");
        this.props.deletePost(id);
    }
    render() {
        const { posts } = this.props;
        // const {data} = this.props;
        const { classes } = this.props;
        // const html2 = data.description;
        const html = posts.description;
        const tagwa = JSON.parse(posts.tags);
        // const tagArray = JSON.parse(data.tags);
        if (window.location.href === window.origin + "/coordinator") {
            return (
                <Card className={classes.root}>

                    <div className={classes.header}>
                        <div>
                            <img src={logo} className={classes.image} />
                        </div>
                        <div className={classes.header2}>
                            <Typography variant="h4" component="h1" className={classes.title}>
                                <Link to={`/showPost/${posts.id}`} style={{ textDecoration: 'none' }}>{posts.title}</Link>
                            </Typography>
                            <div className={classes.subheader}>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Calender className={classes.icon} />
                                    {moment.utc(posts.updated_at).format('LLL')}
                                </Typography>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Flag className={classes.icon} />
                                    {posts.type}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body}>
                        <div className={classes.body3}>
                            <Typography variant="h5" component="h2" className={classes.subheading2}>
                                {ReactHtmlParser(html)}
                            </Typography>
                        </div>
                        <div className={classes.read}>
                            <Link to={`/showPost/${posts.id}`} style={{ textDecoration: 'none' }} className={classes.readLink}>
                                <Button className={classes.readButton} fullWidth>READ MORE <AddIcon /></Button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body2}>
                        <div className="action">
                            <button className="secondary2"><Link to={`/edit/${posts.id}`}>Edit</Link></button>
                            <button className="secondary2" onClick={() => this.delPost(posts.id)}>Delete</button>
                        </div>
                    </div>

                </Card>
            )
        }     
        return (
            <Card className={classes.root}>
                <div className={classes.type}>
                    {posts.type}
                </div>
                <div className={classes.header}>
                    <div className={classes.header2}>
                        <Typography variant="h4" component="h1" className={classes.title}>
                            {posts.title}
                        </Typography>
                        <div className={classes.subheader}>
                            <div className={classes.subheader2}>
                                <img src={logo} className={classes.image} />
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    {moment.utc(posts.updated_at).format('LLL')}
                                </Typography>
                            </div>
                            <div className={classes.subheader3}>
                                <a href="https://facebook.com/official.gndec" style={{ textDecoration: 'none', padding: '0px' }} >
                                    <Facebook className={classes.Icons}/>
                                </a>
                                <a href="https://linkedin.com/in/gndec" style={{ textDecoration: 'none' }} >
                                    <Linkedin className={classes.Icons}/>
                                </a>
                                <a href="https://twitter.com/OfficialGNDEC" style={{ textDecoration: 'none' }} >
                                    <Twitter className={classes.Icons}/>
                                </a>
                                {/* <Share className={classes.Icons}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.body}>
                    <div className={classes.body3}>
                        <p className={classes.subheading2}>
                            {ReactHtmlParser(html)}
                        </p>
                    </div>
                    <div className={classes.read}>
                        <Link to={`/showPost/${posts.id}`} style={{ textDecoration: 'none' }} className={classes.readLink}>
                            <Button hover="false" className={classes.readButton} fullWidth>Read More</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withStyles(useStyles)(Data);
