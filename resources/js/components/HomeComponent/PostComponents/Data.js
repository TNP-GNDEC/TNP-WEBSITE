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
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "../../../../images/logo.png";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

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
        padding: "0px 10px 10px 10px"
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
        justifyContent: "space-between",
        padding:"10px 20px 0px 0px"
    },
    subheading: {
        fontSize: "14px"
    },
    icon:{
        fontSize: "18px"
    },
    subheading2: {
        fontSize: "18px",
        color: "#00000099",
        padding:"10px 20px",
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
    read:{
        borderRadius: "5px",
        width: "95%",
        margin:"8px auto",
        height: "40px",
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"30px 0px 30px 0px"
    },
    readButton:{
        backgroundColor: "#0077b51a",
        padding:"10px 0px",

        "&:hover":{
            backgroundColor:theme.palette.primary.light
        }
    },
    body2:{
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
        padding : "0 10px",
        alignItems: "center",
    },
    socialIcons: {
        display:"flex",
        padding:"0px 20px"
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
        backgroundColor: "#3b59981a ",
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
        backgroundColor: "#3b59981a",
        color: "#00acee ",
        marginRight: "8px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    iconLinks:{
        textDecoration:"none",
        color:"#fff",        
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
        const html = posts.description;
        if(window.location.href === window.origin + "/coordinator"){
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
                                { ReactHtmlParser(html) }
                            </Typography>
                            <div className={classes.read}>
                                <Typography variant="h5" component="h2" className={classes.subheading4}>
                                    READ MORE <AddIcon/>
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
                            { ReactHtmlParser(html) }
                        </Typography>
                        <div className={classes.read}>
                            <Button  color="primary" className={classes.readButton} fullWidth>READ MORE <AddIcon/></Button>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.body2}>
                        <div className={classes.socialIcons}>
                            <div className={classes.socialIcon}>
                              <a classes={classes.iconLinks} href="#"> <Facebook fontSize="large" /> </a>
                            </div>
                            <div className={classes.socialIcon2}>
                              <a classes={classes.iconLinks} href="#"> <Linkedin fontSize="large" /> </a>
                            </div>
                            <div className={classes.socialIcon3}>
                             <a classes={classes.iconLinks} href="#">  <Twitter fontSize="large" /> </a>
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