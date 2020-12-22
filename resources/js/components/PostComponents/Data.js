import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import LocalOffer from '@material-ui/icons/LocalOffer';
// import Facebook from '@material-ui/icons/Facebook';
// import Linkedin from '@material-ui/icons/LinkedIn';
// import Twitter from '@material-ui/icons/Twitter';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Calender from '@material-ui/icons/EventAvailable';
import Flag from '@material-ui/icons/Flag';
import blue from '@material-ui/core/colors/blue';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import logo from "../../../images/logo.png";
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';


//Importing material-ui icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import FlagIcon from '@material-ui/icons/Flag';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = theme => ({
    root: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px"
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
        color: theme.palette.secondary.contrastText
    },
    subheading3: {
        fontSize: "16px",
        paddingLeft: "5px"
    },
    subheading4: {
        fontSize: "16px",
    },
    body:{
        padding: "0 20px"
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
        color: theme.palette.primary.main
    },
    body2:{
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between"
    },
    Tags: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        width: "40%",
        height: "40px",
        borderRadius: "5px",
        display: "flex",
        padding : "0 10px",
        alignItems: "center"
    },
    socialIcons: {
        display:"flex",
    },
    socialIcon: {
        borderRadius: "5px",
        backgroundColor: "#3b59981a",
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
        color: "#00acee",
        marginRight: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
  
  

    // gursidak styles here
 
    GridRoot:{
        flexGrow: 1,
    },
    primary:{
        main: "#038ed4"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: blue[500]
    },

    textRight:{
        textAlign:"right",
        paddingRight:"10px"
    },

    cardTitle:{ 
                paddingTop: "10px",
                 fontWeight: "400",
                textDecoration: "none",
                '& :hover':{
                    color:"#038ed4",
                    textDecoration:"none !important"
                } 
              },

    cardTitleLink:{
        textDecoration:"none", 
        color:"#333"
    },

    cardHeader:{ 
        borderBottom:"1px solid #E8E8E8" 
    },

    cardFooter:{
        borderTop:"1px solid #E8E8E8" 
    },

    gridTopMargin:{
        marginTop:"15px"
    },
    leftFooter:{
        paddingLeft:"25px"
    },
    rightFooter:{
        display:"flex", 
        justifyContent:'flex-end', 
        alignItems:'center', 
        paddingRight:'20px !important'
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
            // <Card className={classes.root}>
            
            //         <div className={classes.header}>
            //             <div>
            //                 <img src={logo} className={classes.image}/>
            //             </div>
            //             <div className={classes.header2}>
            //                 <Typography variant="h4" component="h1" className={classes.title}>
            //                     {posts.title}
            //                 </Typography>
            //                 <div className={classes.subheader}>
            //                     <Typography variant="h5" component="h2" className={classes.subheading}>
            //                         <Calender className={classes.icon}/>
            //                         {moment(posts.updated_at).format('LLL')}
            //                     </Typography>
            //                     <Typography variant="h5" component="h2" className={classes.subheading}>
            //                         <Flag className={classes.icon}/>
            //                         {posts.type}
            //                     </Typography>
            //                 </div>
            //             </div>
            //         </div>
            //         <hr />
            //         <div className={classes.body}>
            //             <Typography variant="h5" component="h2" className={classes.subheading2}>
            //                 {posts.description}
            //             </Typography>
            //             <div className={classes.read}>
            //                 <Typography variant="h5" component="h2" className={classes.subheading4}>
            //                     READ MORE
            //                 </Typography>
            //             </div>
            //         </div>
            //         <hr />
            //         <div className={classes.body2}>
            //             <div className={classes.socialIcons}>
            //                 <div className={classes.socialIcon}>
            //                    <Facebook />
            //                 </div>
            //                 <div className={classes.socialIcon2}>
            //                    <Linkedin />
            //                 </div>
            //                 <div className={classes.socialIcon3}>
            //                    <Twitter />
            //                 </div>
            //             </div>
            //             <div className={classes.Tags}>
            //                 <LocalOffer />
            //                 <Typography variant="h5" component="h1" className={classes.subheading3}>
            //                      GNDEC TNP
            //                 </Typography>
            //             </div>
            //         </div>
            
            // </Card>
            
            <Card >
                    
            <CardHeader className={classes.cardHeader}
                avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        <img src={logo} alt="logo" />
                    </Avatar>
                }

                title={
                    <h2 className={classes.cardTitle} >
                        <a
                            href="#"
                            className={ classes.cardTitleLink }
                        >
                           {posts.title}
                        </a>
                    </h2>
                }
                subheader={
                    <Grid container className={classes.GridRoot}>
                        <Grid item xs={6} >
                            <Calender className={classes.icon}/>
                            {moment(posts.updated_at).format('LLL')}
                        </Grid>

                        <Grid item xs={6} className={classes.textRight}>  
                            <FlagIcon fontSize='small' /> 
                             <Link to="#"> {posts.type}</Link>
                        </Grid>
                    </Grid>
                }
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" style={{paddingLeft:'20px'}} component="p">

                    {posts.description}
                </Typography>
                <br/>
                <Button fullWidth>Read More <AddIcon fontSize='small'/> </Button>
            </CardContent>
            <CardActions disableSpacing  className={classes.cardFooter}> 

            <Grid container spacing={3}>
                <Grid item xs={6} style={{}} className={classes.leftFooter} > 
                <IconButton aria-label="facebook">
                    <FacebookIcon />
                </IconButton>

                <IconButton aria-label="linkedIn">
                    <LinkedInIcon />
                </IconButton>

                <IconButton aria-label="linkedIn">
                    <TwitterIcon />
                </IconButton>
                </Grid>
                <Grid item xs={6} className={classes.rightFooter} >
                <Chip
                        avatar={<Avatar><img src={logo} alt="logo" /></Avatar>}
                        label="GNDEC, TNP"
                        clickable
                        color={classes.primary.main}
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                />
                </Grid>
                </Grid>
            </CardActions>
        </Card>
          
        )
    }
}

export default withStyles(useStyles)(Data);

 