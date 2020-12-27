import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Facebook from '@material-ui/icons/Facebook';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Calender from '@material-ui/icons/EventAvailable';
import Flag from '@material-ui/icons/Flag';

import logo from "../../../../images/logo.png";

const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0px 15px 25px #00000033"
    },
    header: {
        width: "100%",
        display: "flex"
    },
    header2: {
        width: "100%",
        padding: "0 10px"
    },
    image: {
        width: "50px",
        height: "50px"
    },
    title: {
        fontSize: "26px",
        textTransform: "uppercase",
        wordBreak: "break-all",
        color: theme.palette.primary.dark
    },
    subheader: {
        display: "flex",
        justifyContent: "space-between"
    },
    subheading: {
        fontSize: "14px"
    },
    icon:{
        fontSize: "14px"
    },
    subheading2: {
        fontSize: "18px",
        color: "#00000099",
    },
    subheading3: {
        fontSize: "16px",
        paddingLeft: "5px"
    },
    subheading4: {
        fontSize: "16px",
    },
    read:{
        borderRadius: "5px",
        width: "100%",
        height: "40px",
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        border: "1px solid #038ed4",
        color: theme.palette.primary.main,
        boxShadow: "0px 15px 25px #038ed433"
    },
    body2:{
        display: "flex",
        justifyContent: "space-between"
    },
    Tags: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        width: "40%",
        height: "40px",
        border: "1px solid #193b68",
        borderRadius: "5px",
        display: "flex",
        padding : "0 10px",
        alignItems: "center",
        boxShadow: "0px 15px 25px #193b6833"
    },
    socialIcons: {
        display:"flex",
    },
    socialIcon: {
        borderRadius: "5px",
        backgroundColor: "#3b59981a",
        border: "1px solid #3b5598",
        boxShadow: "0px 15px 25px #3b59981a",
        color: "#3b5998",
        marginRight: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    socialIcon2: {
        borderRadius: "5px",
        backgroundColor: "#0077b51a",
        border: "1px solid #0077b5",
        boxShadow: "0px 15px 25px #0077b51a",
        color: "#0077b5",
        marginRight: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    socialIcon3: {
        borderRadius: "5px",
        backgroundColor: "#00acee1a",
        border: "1px solid #00acee",
        boxShadow: "0px 15px 25px #00acee1a",
        color: "#00acee",
        marginRight: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});


class Data extends React.Component {
    delPost = (id) => {
        alert("Are You Want To Delete This Post");
        this.props.deletePost(id);
    }
    render(){
        const {posts} = this.props;
        const {classes} = this.props;
        if(window.location.href === window.origin + "/addPosts"){
            return(
                <Card className={classes.root}>
                
                        <div className={classes.header}>
                            <div>
                                <img src={logo} className={classes.image}/>
                            </div>
                            <div className={classes.header2}>
                                <Typography variant="h4" component="h1" className={classes.title}>
                                    {posts.title}
                                </Typography>
                                <div className={classes.subheader}>
                                    <Typography variant="h5" component="h2" className={classes.subheading}>
                                        <Calender className={classes.icon}/>
                                        {moment(posts.updated_at).format('LLL')}
                                    </Typography>
                                    <Typography variant="h5" component="h2" className={classes.subheading}>
                                        <Flag className={classes.icon}/>
                                        {posts.type}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={classes.body}>
                            <Typography variant="h5" component="h2" className={classes.subheading2}>
                                {posts.description}
                            </Typography>
                            <div className={classes.read}>
                                <Typography variant="h5" component="h2" className={classes.subheading4}>
                                    READ MORE
                                </Typography>
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
        return(
            <Card className={classes.root}>
            
                    <div className={classes.header}>
                        <div>
                            <img src={logo} className={classes.image}/>
                        </div>
                        <div className={classes.header2}>
                            <Typography variant="h4" component="h1" className={classes.title}>
                                {posts.title}
                            </Typography>
                            <div className={classes.subheader}>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Calender className={classes.icon}/>
                                    {moment(posts.updated_at).format('LLL')}
                                </Typography>
                                <Typography variant="h5" component="h2" className={classes.subheading}>
                                    <Flag className={classes.icon}/>
                                    {posts.type}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body}>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            {posts.description}
                        </Typography>
                        <div className={classes.read}>
                            <Typography variant="h5" component="h2" className={classes.subheading4}>
                                READ MORE
                            </Typography>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body2}>
                        <div className={classes.socialIcons}>
                            <div className={classes.socialIcon}>
                               <Facebook />
                            </div>
                            <div className={classes.socialIcon2}>
                               <Linkedin />
                            </div>
                            <div className={classes.socialIcon3}>
                               <Twitter />
                            </div>
                        </div>
                        <div className={classes.Tags}>
                            <LocalOffer />
                            <Typography variant="h5" component="h1" className={classes.subheading3}>
                                 GNDEC TNP
                            </Typography>
                        </div>
                    </div>
            
            </Card>
        )
    }
}

export default withStyles(useStyles)(Data);