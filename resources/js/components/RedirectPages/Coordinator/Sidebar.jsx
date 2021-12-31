import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom"; 
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
import Work from "@material-ui/icons/Work";
import User from "@material-ui/icons/People";
import Post from "@material-ui/icons/NoteAdd";
import logo2 from "../../../../images/logo2.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    inlinea: {
        display: "flex",
        justifyContent: "space-between"
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        color: "#CCD9E6",
        backgroundColor: "#1687D9"
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
    active: {
        color: "white"
    },
    inActive: {
        color: "#CCD9E6"
    },
    iconIcon: {
        // marginRight: "auto",
        // marginLeft: "auto",
        marginLeft: "5px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    close: {
        color: "#cc0000"
    },
    admin: {
        color: theme.palette.primary.dark,
        fontFamily: "Nunito",
        fontWeight: "400"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#1687D9"
    },
    sidebarProfileGrids: {
        marginBottom: "30px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "start"
    },

    large: {
        marginRigth: "5px",
        width: theme.spacing(7),
        height: theme.spacing(7),
        display: "flex",
        justifyContent: "start"
    },

    avatar: {
        marginRight: "20px"
    },
    drawerCloseButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonFontSize: {
        fontFamily: "Nunito",
        fontWeight: "400"
    },
    box: {
        paddingLeft: "8px"
    },
    TnP: {
        paddingLeft: "8px"
    },
    TnPlink: {
        textDecoration: "none",
        color: "white",
        "&:hover, &:focus": {
            textDecoration: "none",
            color: "white"
        }
    },
    linksContainer: {
        marginTop: "20px",
    },
    listItemContainer: {
        paddingTop: "12px",
        paddingBottom: "12px"
    },
    listItemContainerActive: {
        paddingTop: "12px",
        paddingBottom: "12px",
        borderLeft: "5px solid white",
    }
}));

function Sidebar(props) {
    const classes = useStyles();
    const listItems = [
        {
            id: 1,
            name: "Home",
            iconName: <HomeIcon className={classes.iconIcon} />,
            onCLickAction: ""
        },
        {
            id: 5,
            name: "Posts",
            iconName: <Post className={classes.iconIcon} />
        },
        {
            id: 4,
            name: "Users",
            iconName: <User className={classes.iconIcon} />
        },
        {
            id: 8,
            name: "Register User",
            iconName: <PersonAddIcon className={classes.iconIcon} />
        },
        {
            id: 7,
            name: "Upload CSV",
            iconName: <AddIcon className={classes.iconIcon} />
        }
        // { id: 2, name: "Data Using Excel", iconName: <DescriptionIcon /> },
        // { id: 3, name: "Placement Record", iconName: <Work /> },
        // { id: 6, name: "Notice Maker", iconName: <PostAddIcon /> },
    ];
    const [active, setActive] = React.useState("Home");
    const theme = useTheme();
    const renderListItem = () => {
        return listItems.map(item => {
            return (
                <ListItem
                    key={item.id}
                    button
                    className={active==item.name?classes.listItemContainerActive:classes.listItemContainer}
                    onClick={() => {
                        props.changeMainContent(item.id);
                        setActive(item.name);
                    }}
                >
                    <ListItemIcon
                        className={
                            active === item.name
                                ? classes.active
                                : classes.inActive
                        }
                    >
                        {item.iconName}
                    </ListItemIcon>
                    <ListItemText
                        className={
                            active === item.name
                                ? classes.active
                                : classes.buttonFontSize
                        }
                        primary={item.name}
                    />
                </ListItem>
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
                    paper: clsx(classes.drawer, {
                        [classes.drawerOpen]: props.isOpen,
                        [classes.drawerClose]: !props.isOpen
                    })
                }}
            >
                {/* <div className={classes.toolbar}>
                    <div container spacing={0} className={classes.draw}>
                        <div>
                            <div className={classes.sidebarProfileGrids}>
                                <Avatar
                                    alt="avatar"
                                    src={logo2}
                                    className={classes.large}
                                    style={{ borderRadius: "50%" }}
                                />
                                <h1>GNDEC LOGO</h1>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Link to="/" className={classes.TnPlink}>
                    <ListItem key={10} className={classes.box} button>
                        <Avatar
                            alt="avatar"
                            src={logo2}
                            className={classes.large}
                        />
                        <ListItemText
                            className={classes.active}
                            className={classes.TnP}
                            primary="T&P Cell"
                        />
                    </ListItem>
                </Link>
                <List className={classes.linksContainer}>{renderListItem()}</List>
            </Drawer>
        </>
    );
}

export default Sidebar;
