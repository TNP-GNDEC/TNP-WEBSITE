// Connected Cards Component

import React, { useState } from "react";

// import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import { Button } from "@material-ui/core";
import Link from '@material-ui/core/Link';

import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';



import Grid from '@material-ui/core/Grid';

//Importing material-ui icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import FlagIcon from '@material-ui/icons/Flag';


//Styles
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center"
    },

    primary:{
        main: "#038ed4"
    },

    secondary:{
        main:"#ffffff"
    },

    GridRoot:{
        flexGrow: 1,
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

    cardHeader:{ borderBottom:"1px solid #E8E8E8" },

    cardFooter:{  borderTop:"1px solid #E8E8E8" },

    gridTopMargin:{
        marginTop:"15px"
    }
    
}));


//Main FUnctional components
export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const [posts, setPosts] = useState([
        { id:0,  title:" Registrations for Happy Forgings ", type:"Announcement", date:"Decemeber 20, 2020" , description:"This is to inform that Happy Forgings Ltd, Ludhiana is looking forward to hire trainees from students of B.tech (Production) 2020 passing out batch.The details for the same are as follows:Interested student can register by 16 Dec.2020 till 2:00p.m. Link for the Same is : https://forms.gle/wBXcPkDPUShefQJp8  About the company: Happy Forgings Limited is a leading and technologically advanced auto component manufacturer serving the forging industry for the last 3 decades. It is one of the largest full service company supplying forged engine and drive-line components. Also, it has been continuously taking pains to reach the highest quality by hiring highly qualified technically competent professionals. Happy Forgings Limited has established itself as one of the most prominent and reliable players in the auto component business since 1979."  },
        { id:1,  title:" Registrations for Happy Forgings ", type:"Announcement", date:"Decemeber 20, 2020" , description:"This is to inform that Happy Forgings Ltd, Ludhiana is looking forward to hire trainees from students of B.tech (Production) 2020 passing out batch.The details for the same are as follows:Interested student can register by 16 Dec.2020 till 2:00p.m. Link for the Same is : https://forms.gle/wBXcPkDPUShefQJp8  About the company: Happy Forgings Limited is a leading and technologically advanced auto component manufacturer serving the forging industry for the last 3 decades. It is one of the largest full service company supplying forged engine and drive-line components. Also, it has been continuously taking pains to reach the highest quality by hiring highly qualified technically competent professionals. Happy Forgings Limited has established itself as one of the most prominent and reliable players in the auto component business since 1979."  }])

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    //Function to render Cards by taking post content from posts(useState hook).
    function renderCards(){
        return(  
            <>          
            {posts.map( (post) => {
                return(

                    <Grid item  key={post.id} xs={12} sm={8} md={6} className={classes.gridTopMargin} >
                    <Card >
                    
                        <CardHeader className={classes.cardHeader}
                            avatar={
                                <Avatar aria-label="logo" className={classes.avatar}>
                                    <img src="https://www.tnpgndec.com/images/icons/512x512.png" alt="logo" />
                                </Avatar>
                            }
            
                            title={
                                <h2 className={classes.cardTitle} >
                                    <a
                                        href="#"
                                        className={ classes.cardTitleLink }
                                    >
                                       {post.title}
                                    </a>
                                </h2>
                            }
                            subheader={
                                <Grid container className={classes.GridRoot}>
                                    <Grid item xs={6} >
                                        {post.date}
                                    </Grid>
            
                                    <Grid item xs={6} className={classes.textRight}   >  <FlagIcon fontSize='small' /> 
                                         <Link underline='none' href="#"> {post.type}</Link>
                                    </Grid>
                                </Grid>
                            }
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
            
                                {post.description}
                            </Typography>
                            <Button fullWidth>Read More <AddIcon fontSize='small'/> </Button>
                        </CardContent>
                        <CardActions disableSpacing  className={classes.cardFooter}> 
            
                            <IconButton aria-label="facebook">
                                <FacebookIcon />
                            </IconButton>
            
                            <IconButton aria-label="linkedIn">
                                <LinkedInIcon />
                            </IconButton>
            
                            <IconButton aria-label="linkedIn">
                                <TwitterIcon />
                            </IconButton>
            
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                            </IconButton>
            
                            <Chip
                                    avatar={<Avatar><img src="https://www.tnpgndec.com/images/icons/512x512.png" alt="logo" /></Avatar>}
                                    label="TNP, GNDEC"
                                    clickable
                                    color={classes.primary.main}
                                    deleteIcon={<DoneIcon />}
                                    variant="outlined"
                            />
                        </CardActions>
                    </Card>
                    </Grid >

                )
            } )}
        </>  

        )
    }


    return (
        <div>
        <Grid container justify="center" className={classes.root} >
            {renderCards()} {/*Cards will be rendered here by renderCards function Above\ */}
        </Grid>
        </div>
    );
}
