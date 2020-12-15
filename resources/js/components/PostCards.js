import React, { useState } from "react";
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

// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';


// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Importing material-ui icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    root: {
        
        maxWidth: 500
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
        textAlign:"right"
    },

    cardTitle:{ paddingTop: "10px", fontSize:"" }

    
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [date , setDate] = useState("December 20, 2020");
    const [postType , setPostType] = useState("Announcement");


    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        TNP
                    </Avatar>
                }

                title={
                    <h2 className={classes.cardTitle} color={'black'}>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                fontWeight: "400"
                            }}
                        >
                            Registrations for Happy Forgings Ltd
                        </a>
                    </h2>
                }
                subheader={
                    <Grid container className={classes.GridRoot}>
                        <Grid item xs={6} >
                            {date}
                        </Grid>

                        <Grid item xs={6} className={classes.textRight}  >
                            {postType}
                        </Grid>
                    </Grid>
                }
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is to inform that Happy Forgings Ltd, Ludhiana is
                    looking forward to hire trainees from students of B.tech
                    (Production) 2020 passing out batch.The details for the same
                    are as follows: Interested student can register by 16
                    Dec.2020 till 2:00p.m. Link for the Same is :
                    <a href="https://forms.gle/wBXcPkDPUShefQJp8">https://forms.gle/wBXcPkDPUShefQJp8</a> About the company: Happy
                    Forgings Limited is a leading and technologically advanced
                    auto component manufacturer serving the forging industry for
                    the last 3 decades. It is one of the largest full service
                    company supplying forged engine and drive-line components.
                    Also, it has been continuously taking pains to reach the
                    highest quality by hiring highly qualified technically
                    competent professionals.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

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
                    {/* <ExpandMoreIcon /> */}
            </CardActions>
        </Card>
    );
}
