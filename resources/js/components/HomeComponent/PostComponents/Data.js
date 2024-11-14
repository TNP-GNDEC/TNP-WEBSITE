import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Facebook from "@material-ui/icons/Facebook";
import Linkedin from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import Share1 from "@material-ui/icons/ShareTwoTone";
import Calender from "@material-ui/icons/EventAvailable";
import Flag from "@material-ui/icons/Flag";
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2
} from "react-html-parser";
import logo from "../../../../images/logo.png";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Share from "../../HardCoded/view/Share";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import trashCan from "../../../../images/trashCan.svg";
import WhatsappIcon from "../../../../images/whatsapp.png";
import pencil from "../../../../images/pencil.svg";

const useStyles = theme => ({
    root: {
        width: "100%",
        padding: "15px",
        marginBottom: "40px",
        borderRadius: "16px",
        boxShadow: "0px 15px 30px #8a959e33",
        ["@media (min-width:1600px)"]: {
            padding: "20px"
        }
    },
    type: {
        padding: "3px",
        backgroundColor: theme.palette.secondary.accent,
        fontSize: "12px",
        width: "30%",
        textAlign: "center",
        borderRadius: "8px",
        color: theme.palette.primary.dark,
        fontFamily: "Open Sans",
        fontWeight: "600",
        ["@media (max-width:960px)"]: {
            fontSize: "10px",
            width: "40%"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "16px",
            width: "30%"
        }
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
        ["@media (max-width:960px)"]: {
            width: "13px",
            height: "13px"
        },
        ["@media (min-width:1600px)"]: {
            width: "17px",
            height: "17px"
        }
    },
    title: {
        fontSize: "24px",
        textTransform: "uppercase",
        wordWarp: "word-break",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.dark,
        ["@media (max-width:960px)"]: {
            fontSize: "18px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "32px"
        }
    },
    subheader: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0px 0px 0px"
    },
    subheader2: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 5px 0px 0px"
    },
    subheader3: {
        display: "flex",
        padding: "0px",
        width: "10%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        ["@media (max-width:600px)"]: {
            display: "none"
        }
    },
    adminSubheader3: {
        display: "flex",
        padding: "0px",
        width: "20%",
        marginRight: "1.5rem",
        justifyContent: "space-between",
        alignItems: "flex-start",
        ["@media (max-width:600px)"]: {
            display: "none"
        }
    },
    subheader4: {
        ["@media (max-width:600px)"]: {
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 5px 0px 0px"
        },
        display: "none"
    },
    subheading: {
        fontSize: "12px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        paddingLeft: "5px",
        color: theme.palette.primary.dark,
        ["@media (max-width:960px)"]: {
            fontSize: "11px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "16px"
        }
    },
    share: {
        fontSize: "11px",
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: theme.palette.primary.main
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
        ["@media (max-width:960px)"]: {
            fontSize: "13px !important"
        }
    },
    subheading3: {
        fontSize: "16px",
        paddingLeft: "5px"
    },
    subheading4: {
        fontSize: "16px"
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
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        "&:focus": {
            outline: "none"
        },
        ["@media (max-width:960px)"]: {
            fontSize: "14px"
        },
        ["@media (min-width:1600px)"]: {
            fontSize: "18px"
        }
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
        ["@media (max-width:960px)"]: {
            width: "14px",
            height: "14px"
        },
        ["@media (min-width:1600px)"]: {
            width: "20px",
            height: "20px"
        }
    },
    Tags: {
        backgroundColor: "#3b59981a",
        color: theme.palette.primary.dark,
        width: "40%",
        height: "40px",
        borderRadius: "5px",
        display: "flex",
        padding: "0 10px",
        alignItems: "center"
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
        color: "#fff"
    },
    body3: {
        maxHeight: "250px",
        overflow: "Hidden"
    },
    pdfs: {
        width: "70%",
        height: "500px",
        margin: "auto"
    }
});

class Data extends React.Component {
    delPost = id => {
        alert("Are You Want To Delete This Post");
        this.props.deletePost(id);
    };
    state = {
        sheet: false
    };

    handleSheet = () => {
        this.setState({ sheet: true });
    };
    handleClose = () => {
        this.setState({ sheet: false });
    };
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
                <>
                    <Card className={classes.root}>
                        <div className={classes.type}>{posts.type}</div>
                        <div className={classes.header}>
                            <div className={classes.header2}>
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    className={classes.title}
                                >
                                    {posts.title}
                                </Typography>
                                <div className={classes.subheader}>
                                    <div className={classes.subheader2}>
                                        <img
                                            src={logo}
                                            className={classes.image}
                                        />
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            className={classes.subheading}
                                        >
                                            {moment(posts.updated_at).format(
                                                "LLL"
                                            )}
                                        </Typography>
                                    </div>
                                    <div className={classes.subheader4}>
                                        <Button
                                            variant="h5"
                                            component="h2"
                                            onClick={() => {
                                                if (navigator.share) {
                                                    navigator.share({
                                                        title: 'Post Title',
                                                        text: 'Check out this post!',
                                                        url: `https://www.tnpgndec.com/showPost/${posts.id}`,
                                                    }).then(() => {
                                                        console.log('Thanks for sharing!');
                                                    }).catch(console.error);
                                                } else {
                                                    console.log('Share not supported on this browser, do it the old way.');
                                                }
                                            }}
                                        >
                                            Share
                                        </Button>
                                    </div>
                                    <div className={classes.adminSubheader3}>
                                        <Link
                                            to={`/edit/${posts.id}`}
                                            style={{
                                                textDecoration: "none",
                                                display: "flex",
                                                color: "#2B472C"
                                            }}
                                        >
                                            <img
                                                src={pencil}
                                                style={{ marginRight: "5px" }}
                                                alt="edit"
                                            />
                                            Edit
                                        </Link>

                                        <span
                                            onClick={() =>
                                                this.delPost(posts.id)
                                            }
                                            style={{
                                                textDecoration: "none",
                                                display: "flex",
                                                color: "#683838",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={trashCan}
                                                style={{
                                                    marginRight: "5px",
                                                    marginLeft: "20px"
                                                }}
                                                alt="delete"
                                            />
                                            Delete
                                        </span>
                                        <span
                                            onClick={() => {
                                                if (navigator.share) {
                                                    navigator.share({
                                                        title: 'Post Title',
                                                        text: 'Check out this post!',
                                                        url: window.location.href,
                                                    }).then(() => {
                                                        console.log('Thanks for sharing!');
                                                    }).catch(console.error);
                                                } else {
                                                    console.log('Share not supported on this browser, do it the old way.');
                                                }
                                            }}
                                            style={{
                                                textDecoration: "none",
                                                display: "flex",
                                                color: "#683838",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <img
                                                src={WhatsappIcon}
                                                style={{
                                                    marginRight: "5px",
                                                    marginLeft: "20px"
                                                }}
                                                alt="delete"
                                            />
                                            Share
                                        </span>
                                        
                                        {/* <Share className={classes.Icons}/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={classes.body}>
                            <div className={classes.body3}>
                                <p className={classes.subheading2}>
                                    {ReactHtmlParser(html)}
                                </p>
                            </div>
                            <div className={classes.read}>
                                <Link
                                    to={`/showPost/${posts.id}`}
                                    style={{ textDecoration: "none" }}
                                    className={classes.readLink}
                                >
                                    <Button
                                        hover="false"
                                        className={classes.readButton}
                                        fullWidth
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </div> */}
                    </Card>
                    {/* <BottomSheet
                        open={this.state.sheet}
                        onDismiss={this.handleClose}
                        snapPoints={({ maxHeight }) => [
                            0.38 * maxHeight,
                            0.83 * maxHeight
                        ]}
                    >
                        <Share id={posts.id} title={posts.title} />
                    </BottomSheet> */}
                </>
            );
        }
        return (
            <>
                <Card className={classes.root}>
                    <div className={classes.type}>{posts.type}</div>
                    <div className={classes.header}>
                        <div className={classes.header2}>
                            <Typography
                                variant="h4"
                                component="h1"
                                className={classes.title}
                            >
                                {posts.title}
                            </Typography>
                            <div className={classes.subheader}>
                                <div className={classes.subheader2}>
                                    <img src={logo} className={classes.image} />
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        className={classes.subheading}
                                    >
                                        {moment(posts.updated_at).format("LLL")}
                                    </Typography>
                                </div>
                                <div className={classes.subheader4}>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        className={classes.share}
                                        onClick={this.handleSheet}
                                    >
                                        Share
                                    </Typography>
                                </div>
                                <div className={classes.subheader3}>
                                    <a
                                        href="https://facebook.com/official.gndec"
                                        style={{
                                            textDecoration: "none",
                                            padding: "0px"
                                        }}
                                    >
                                        <Facebook className={classes.Icons} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/gndec"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Linkedin className={classes.Icons} />
                                    </a>
                                    <a
                                        href="https://twitter.com/OfficialGNDEC"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Twitter className={classes.Icons} />
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
                            <Link
                                to={`/showPost/${posts.id}`}
                                style={{ textDecoration: "none" }}
                                className={classes.readLink}
                                target="_blank"
                            >
                                <Button
                                    hover="false"
                                    className={classes.readButton}
                                    fullWidth
                                >
                                    Read More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
                <BottomSheet
                    open={this.state.sheet}
                    onDismiss={this.handleClose}
                    snapPoints={({ maxHeight }) => [
                        0.38 * maxHeight,
                        0.83 * maxHeight
                    ]}
                >
                    <Share id={posts.id} title={posts.title} />
                </BottomSheet>
            </>
        );
    }
}

export default withStyles(useStyles)(Data);
