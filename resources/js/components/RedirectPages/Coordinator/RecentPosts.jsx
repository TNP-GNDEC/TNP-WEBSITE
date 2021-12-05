import React, { useEffect, useState } from "react";
import logoutIcon from "../../../../images/logoutIcon.svg";
import adminOnlineIcon from "../../../../images/avatar3.png";
import recentPostIcon from "../../../../images/recentPostIcon.svg";
import axios from "axios";
import moment from "moment";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const useStyles = makeStyles(theme => ({
    root:{
        width: "50%",
        background: theme.palette.secondary.main,
        height: "100vh",
        position: "sticky",
        top: "0px"
    },
    logoutLink:{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "right",
        alignItems: "center"
    },
    LgtLink:{
        textDecoration: "none !important"
    },
    logout:{
        fontFamily: "Open Sans",
        fontSize: "18px",
        color: theme.palette.primary.main
    },
    avatarDiv:{
        width: "100%",
        height: "180px",
        marginTop: "5%",
        textAlign: "center"
    },
    Admin:{
        fontWeight: "600",
        fontSize: "20px",
        paddingTop: "10px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.dark
    },
    Activity:{
        marginTop: "5%",
        fontWeight: "600",
        fontSize: "16px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.dark
    },
    ActivityInfo:{
        fontWeight: "600",
        fontSize: "14px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.dark
    },
    Activities:{
        fontWeight: "400",
        fontSize: "14px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.dark
    },
    ActivityTime:{
        fontWeight: "400",
        fontSize: "12px",
        fontFamily: "Open Sans",
        color: theme.palette.primary.text
    },
    footer:{
        width: "100%",
        height: "80px",
        position: "fixed",
        bottom: "0px"
    },
}));

const RecentPosts = () => {
    const classes = useStyles();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        localStorage.removeItem("useruuid");
        localStorage.removeItem("role");
        localStorage.removeItem("student");
        localStorage.removeItem("admin");
        window.location.href = window.origin + "/login";
    };
    const getRecentPosts = async () => {
        try {
            const posts = await axios.get("/lastThreePosts");
            setPosts(posts.data.posts);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getRecentPosts();
    }, []);
    const [posts, setPosts] = React.useState([]);
    return (
        <div className={classes.root}>
            <div className="px-4">
                <div className={classes.logoutLink}>
                <Link
                    onClick={handleLogout}
                    className={classes.LgtLink}
                >
                    {/* <img className="display-4" src={logoutIcon} alt="logout" /> */}
                    <h4 className={classes.logout}>Logout</h4>
                </Link>
                </div>
                <div className={classes.avatarDiv}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <img src={adminOnlineIcon} alt="Admin" />
                </StyledBadge>
                    <h4 className={classes.Admin}>Admin</h4>
                </div>
                <div>
                    <h5 className={classes.Activity}>Recent Activities</h5>
                    <div className="d-flex flex-column my-3 align-items-center">
                        {posts.map(post => (
                            <div className="w-100 d-flex justify-content-between align-items-start">
                                <div className="d-flex">
                                        <img src={recentPostIcon} alt="Admin" />
                                    <div className="ml-4 mt-3 w-auto">
                                        <h6 className={classes.ActivityInfo}>
                                            Added a new post
                                        </h6>
                                        <p className={classes.Activities}>"{post.title.substring(0, 28)}"</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className={classes.ActivityTime}>
                                        {moment(post.created_at).fromNow()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer className={classes.footer}>
                <hr />
                <p className="px-4">
                    Developed with ❤️ by Genconians, ©️ 2021 GNDEC,ldh
                </p>
            </footer>
        </div>
    );
};

export default RecentPosts;
