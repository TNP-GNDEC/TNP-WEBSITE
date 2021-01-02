import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import avatar from "../../../../images/avatar11.jpeg";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";

// import Sidebar from './Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    inlinea: {
        display: "flex",
        justifyContent: "space-between"
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    sidebarProfileGrids: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "15px"
    },

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    avatar: {
        marginRight: "20px"
    },
    drawerCloseButton: {
        display: "flex",
        justifyContent: "end"
    }
}));

const listItems = [
    { id: 1, name: "Home", iconName: <HomeIcon />  , onCLickAction:""},
    { id: 2, name: "Data Using Excel", iconName: <DescriptionIcon />  , onCLickAction:""},
    { id: 3, name: "Companies", iconName: <DescriptionIcon />  , onCLickAction:""},
    { id: 4, name: "Pages", iconName: <DescriptionIcon />  , onCLickAction:""},
    { id: 5, name: "Posts", iconName: <DescriptionIcon />  , onCLickAction:""},
    { id: 6, name: "Notice Maker", iconName: <PostAddIcon />  , onCLickAction:""},
];


function Sidebar(props) {
    const classes = useStyles();
    const theme = useTheme();

    // const RenderSideBarLinks = () => (
        
    //     <List>
    //                     {listItems.map((text, index) => <ListItem button key={text}>
    //                             <ListItemIcon>
    //                                 {index === 0 && <HomeIcon />}
    //                                 {index === 1 && <HomeIcon />}
    //                                 {index === 2 && <DescriptionIcon />}
    //                                 {index === 3 && <DescriptionIcon />}
    //                                 {index === 4 && <DescriptionIcon />}
    //                                 {index === 5 && <DescriptionIcon />}
    //                                 {index === 6 && < />}
    //                             </ListItemIcon>
    //                             <ListItemText primary={text} />
    //                         </ListItem>)}
    //                 </List>                                                      onClick={}
    // );


    const renderListItem = () => {
		return listItems.map((item) => {
			return (
				<>
					<ListItem button >
						<ListItemIcon>{item.iconName}</ListItemIcon>
						<ListItemText
							primary={item.name}
							className={classes.buttonFontSize}
						/>
					</ListItem>
				</>
			);
		});
    };
    
    return (
        <>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.isOpen,
                    [classes.drawerClose]: !props.isOpen
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.isOpen,
                        [classes.drawerClose]: !props.isOpen
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <Grid container spacing={0} className={classes.draw}>
                        <Grid
                            item
                            xs={12}
                            className={classes.drawerCloseButton}
                        >
                            <IconButton onClick={props.handleClose}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={0}>
                                <Grid
                                    item
                                    className={classes.sidebarProfileGrids}
                                    xs={12}
                                    style={{ padding: 20 }}
                                />
                                <Grid
                                    item
                                    className={classes.sidebarProfileGrids}
                                    xs={12}
                                >
                                    <Avatar
                                        alt="avatar"
                                        src={avatar}
                                        className={classes.large}
                                        style={{ borderRadius: "50%" }}
                                    />
                                </Grid>
                                <Grid
                                    className={classes.sidebarProfileGrids}
                                    item
                                    xs={12}
                                >
                                    <h6>Admin</h6>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div></div>
                </div>
                <Divider />
                <List>
                    {renderListItem()}
                </List>
            </Drawer>
        </>
    );
}

export default Sidebar;
