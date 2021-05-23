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
import Calender from '@material-ui/icons/EventAvailable';
import Flag from '@material-ui/icons/Flag';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "../../../../images/logo.png";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        width: "100%",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 1px 1px rgba(0,0,0,0.15),0 8px 0 -5px #eee,0 8px 1px -4px rgba(0,0,0,0.15),0 16px 0 -10px #eee,0 16px 1px -9px rgba(0,0,0,0.15)",
    },
    header: {
        width: "100%",
        display: "flex"
    },
    header2: {
        width: "100%",
        padding: "0px 10px 10px 10px"
    },
    image: {
        width: "50px",
        height: "50px"
    },
    title: {
        fontSize: "26px",
        textTransform: "uppercase",
        wordWarp: "word-break",
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    subheader: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px 0px 0px"
    },
    subheading: {
        fontSize: "14px"
    },
    icon: {
        fontSize: "18px"
    },
    subheading2: {
        fontSize: "18px",
        color: "#00000099",
        padding: "10px 20px",
        textAlign: "justify",
        // textJustify: "inter-word"
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
        width: "95%",
        margin: "8px auto",
        height: "40px",
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 0px 30px 0px"
    },
    readLink: {
        width: "100%",
        textDecoration: "none"
    },
    readButton: {
        backgroundColor: "#7575751a",
        padding: "10px 0px",
        fontSize: "16px",
        color: "#757575",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main
        }
    },
    body2: {
        display: "flex",
        justifyContent: "space-between"
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
        maxHeight: "150px",
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
        // const tagwa = JSON.parse(posts.tags);
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
                                    {moment(posts.updated_at).format('LLL')}
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
        if (window.location.href === window.origin + `/showPost/${posts.id}`) {
            return (
                <Card className={classes.root}>

                    <div className={classes.header}>
                        <div>
                            <img src={logo} className={classes.image} />
                        </div>
                        <div className={classes.header2}>
                            <Typography variant="h4" component="h1" className={classes.title}>
                                {data.title}
                            </Typography>
                            <div className={classes.subheader}>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Calender className={classes.icon} />
                                    {moment(data.updated_at).format('LLL')}
                                </Typography>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Flag className={classes.icon} />
                                    {data.type}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body}>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            {ReactHtmlParser(html2)}
                        </Typography>
                    </div>
                    <hr />
                    <div className={classes.body2}>
                        <div className={classes.socialIcons}>
                            <div className={classes.socialIcon}>
                                <a classes={classes.iconLinks} href="#"> <Facebook fontSize="medium" /> </a>
                            </div>
                            <div className={classes.socialIcon2}>
                                <a classes={classes.iconLinks} href="#"> <Linkedin fontSize="medium" /> </a>
                            </div>
                            <div className={classes.socialIcon3}>
                                <a classes={classes.iconLinks} href="#">  <Twitter fontSize="medium" /> </a>
                            </div>
                        </div>
                        <div className={classes.Tags}>
                            <LocalOffer />
                            <Typography variant="h5" component="h1" className={classes.subheading3}>
                                {tagArray.map((tag, i) => {
                                    if (tagArray.length - 1 === i) {
                                        return tag;
                                    }
                                    else {
                                        return tag + ", ";
                                    }
                                })}
                            </Typography>
                        </div>
                    </div>

                </Card>
            )
        }
        return (
            <Card className={classes.root}>

                <div className={classes.header}>
                    <div>
                        <img src={logo} className={classes.image} />
                    </div>
                    <div className={classes.header2}>
                        <Typography variant="h4" component="h1" className={classes.title}>
                            <Link to={`/showPost/${posts.id}`} style={{ textDecoration: 'none', color: "#193b68" }}>{posts.title}</Link>
                        </Typography>
                        <div className={classes.subheader}>
                            <Typography variant="h5" component="h2" className={classes.subheading}>
                                <Calender className={classes.icon} />
                                {moment(posts.updated_at).format('LLL')}
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
                    <div className={classes.socialIcons}>
                        <div className={classes.socialIcon}>
                            <a classes={classes.iconLinks} href="#"> <Facebook fontSize="medium" /> </a>
                        </div>
                        <div className={classes.socialIcon2}>
                            <a classes={classes.iconLinks} href="#"> <Linkedin fontSize="medium" /> </a>
                        </div>
                        <div className={classes.socialIcon3}>
                            <a classes={classes.iconLinks} href="#">  <Twitter fontSize="medium" /> </a>
                        </div>
                    </div>
                    <div className={classes.Tags}>
                        <LocalOffer />
                        <Typography variant="h5" component="h1" className={classes.subheading3}>
                            {/* {
                                Object.keys(posts.tags).length == 0 ?
                                    <div></div> :
                                    <> */}

                                        {/* {tagwa.map((tag, i) => {
                                            if (tagwa.length - 1 === i) {
                                                return tag;
                                            }
                                            else {
                                                return tag + ", ";
                                            }
                                        })} */}
                                    {/* </> */}
                            {/* } */}
                        </Typography>

                    </div>
                </div>

            </Card>
        )
    }
}

export default withStyles(useStyles)(Data);