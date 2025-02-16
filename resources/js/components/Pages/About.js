import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Training from '@material-ui/icons/AccountBalanceOutlined';
import Placement from '@material-ui/icons/AssessmentOutlined';
import Activity from '@material-ui/icons/ColorLensOutlined';
import aboutbackground from "../../../images/aboutBack.jpeg";
import coreBackground from "../../../images/coreBackground.png";
import mainImage from "../../../images/mainImage.jpeg";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import wipro from "../../../images/wipro.png";
import infosys from "../../../images/infosys.png";
import capegemini from "../../../images/capegemini.png";
import hcl from "../../../images/hcl.png";
import tcs from "../../../images/tcs.png";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import office from "../../../images/office1.jpg";
import Navbar from "../HomeComponent/SideComponents/Navbar";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import StorageIcon from '@material-ui/icons/Storage';
import ContactsIcon from '@material-ui/icons/Contacts';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';

const InputNode = ({ data }) => {
    return (
        <div
            style={{
                background: '#F6F7F8',
                border: '1px solid #D1D3E0',
                borderRadius: 5,
                color: '#1A1A2E',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                width: 150,
                height: 50,
            }}
        >
            {data.label}
        </div>
    );
};


const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: theme.palette.secondary.main,
        margin: "0px",
        width: "100%",
        backgroundColor: "#f8f9fa",
    },
    navbar: {
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        display: "none"
    },
    titleBox: {
        width: "400px",
        padding: "10px 0 0 10px"
    },
    brand: {
        margin: "10px 0 10px 40px",
        display: "flex",
    },
    title: {
        fontSize: "20px",
        color: theme.palette.secondary.main
    },
    navItems: {
        width: "220px",
        margin: "0px 40px 0px 0px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        ['@media (max-width:550px)']: {
            width: "30%",
        }
    },
    back: {
        color: theme.palette.secondary.main,
        paddingRight: "20px",
        width: "100px",
        display: "flex",
        justifyContent: "space-evenly"
    },

    subheading: {
        fontSize: "16px",
        color: theme.palette.secondary.main,
    },
    subheading2: {
        fontSize: "16px",
        color: theme.palette.primary.main,
    },
    subheading6: {
        fontSize: "16px",
    },
    subheading3: {
        fontSize: "25px",
        color: theme.palette.secondary.contrastText,
    },
    icon: {
        paddingBottom: "2px",
        color: theme.palette.secondary.main
    },
    root: {
        flexGrow: 1,
        margin: "0px",
        width: "100%"
    },
    landing1: {
        margin: "0px",
        width: "100%",
        height: "500px",
        ['@media (max-width:960px)']: {
            height: "350px"
        }
    },
    landing2: {
        width: "100%"
    },
    intro: {
        padding: "100px 0px 0px 50px",
        ['@media (max-width:960px)']: {
            padding: "10% 0px 0px 10%",
        }
    },
    heading: {
        fontSize: "55px",
        color: theme.palette.primary.dark
    },
    introbox: {
        marginRight: "50px",
        float: "right",
        padding: "50px 0px 0px 0px",
        width: "530px",
        ['@media (max-width:1050px)']: {
            width: '480px'
        },
        ['@media (max-width:960px)']: {
            width: '80%',
            marginRight: "10%",
            padding: "50px 0px 150px 0px"
        }
    },
    hero: {
        width: "100%",
        borderRadius: "3%",
        boxShadow: "0px 15px 25px #00000066"
    },
    heading2: {
        fontSize: "40px",
        color: theme.palette.primary.dark,
        textAlign: "center",
        paddingTop: "25px"
    },
    section1: {
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ['@media (max-width:1150px)']: {
            height: "620px"
        },
        ['@media (max-width:960px)']: {
            height: "550px"
        }
    },
    image: {
        width: "50%",
    },
    section2: {
        width: "100%",
        padding: "20px",
        ['@media (max-width:1150px)']: {
            height: "620px"
        },
        ['@media (max-width:960px)']: {
            height: "400px"
        }
    },
    section2_1: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        ['@media (max-width:1020px)']: {
            display: "block",
        }
    },
    section3_1: {
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        ['@media (max-width:1120px)']: {
            display: "block",
        }
    },
    box: {
        width: "341px",
        height: "521px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        boxShadow: "4px 3px 25px #606060a3",
        margin: "60px 0 40px 0",
        textAlign: "justify",
        padding: "20px 30px",
        ['@media (max-width:1020px)']: {
            width: "60%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    box1: {
        width: "341px",
        height: "406px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        boxShadow: "4px 3px 25px #606060a3",
        margin: "60px 0 40px 0",
        textAlign: "justify",
        padding: "20px 30px",
        ['@media (max-width:1020px)']: {
            width: "60%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    box2: {
        width: "330px",
        height: "460px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000066",
        margin: "40px 0 40px 0",
        textAlign: "justify",
        padding: "20px 15px",
        ['@media (max-width:1120px)']: {
            width: "75%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    box3: {
        width: "330px",
        height: "300px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        border: "2px solid #038ed4",
        boxShadow: "0px 15px 25px #038ed466",
        margin: "40px 0 40px 0",
        textAlign: "center",
        padding: "20px 15px",
        ['@media (max-width:1020px)']: {
            width: "50%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    box4: {
        width: "460px",
        height: "280px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #038ed466",
        margin: "40px 0 0px 0",
        padding: "20px",
        ['@media (max-width:1080px)']: {
            width: "80%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    box5: {
        width: "800px",
        height: "450px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        border: "2px solid #038ed4",
        boxShadow: "0px 15px 25px #00000066",
        margin: "40px 0 40px 0",
        textAlign: "center",
        padding: "20px 15px",
        ['@media (max-width:1080px)']: {
            width: "80%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    icon2: {
        fontSize: "60px",
        color: theme.palette.primary.main
    },
    subheading4: {
        color: theme.palette.primary.dark,
        paddingLeft: "0",
        padding: "10px",
        fontSize: "22px",
        fontWeight: "500"
    },
    subheading5: {
        fontSize: "20px",
        color: "#606060",
        lineHeight: "151.7%"
    },
    ssection3_0: {
        width: "100%",
        marginTop: 4,
        padding: "40px 20px", // Decrease padding for smaller screens
        '@media (min-width: 768px)': { // Adjust padding for larger screens
            padding: "70px",
        },
    },
    subheader: {
        width: "100%",
        textAlign: "center"
    },
    subheader: {
        width: "100%",
        textAlign: "center"
    },
    image2: {
        width: "100%",
        borderRadius: "2%",
    },
    subsection1: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        textAlign: "left",
        ['@media (max-width:1080px)']: {
            display: "block"
        }
    },
    subbox: {
        width: "60px",
        height: "60px",
        borderRadius: "10px",
        backgroundColor: "#038ed44d",
        boxShadow: "0px 15px 25px #038ed44d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,
        fontSize: "25px",
        padding: "20px",
        margin: "20px"
    },
    image3: {
        borderRadius: "50%",
        width: "100px",
        height: "100px"
    },
    imagecap: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "solid #038ed4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image4: {
        width: "200px",
        ['@media (max-width:1080px)']: {
            width: "25%",
            height: "auto",
            display: "flex",
            padding: "0 auto 0 auto",
            marginRight: "auto",
            marginLeft: "auto",
        },
        ['@media (max-width:900px)']: {
            width: "40%",
        },
        ['@media (max-width:700px)']: {
            width: "60%",
        }
    },
    footer: {
        width: "100%",
        padding: "10px",
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        fontSize: "20px",
        fontWeight: "500"
    },
    tag: {
        color: "inherit",
        fontWeight: "700"
    },
    firstbox: {
        backgroundColor: "#f8f9fa",
        paddingTop: "150px",
        padding: "100px",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "space-between",
        ['@media (max-width:1020px)']: {
            flexDirection: "column",
            width: "100%",
            padding: "30px",
            paddingTop: "100px"
        }
    },
    headingFlex1: {
        fontSize: "28px",
        fontWeight: "500",
        display: "inline",
        ['@media (max-width:1020px)']: {
            fontSize: "18px",
            textAlign: "center"
        }
    },
    trophy: {
        fontSize: "28px"
    },
    mainheadingFlex1: {
        width: "100%",
        fontSize: "80px",
        fontWeight: "400",
        marginBottom: "20px",
        marginTop: "20px",
        lineHeight: "150%",
        color: '#424241',
        fontFamily: '"Bebas Neue", sans-serif',
        textAlign: "left",
        ['@media (max-width:1020px)']: {
            fontSize: "34px",
            textAlign: "center",
            marginBottom: '10px'
        }
    },
    mainheadingFlex2: {
        width: "100%",
        fontSize: "80px",
        fontWeight: "400",
        marginBottom: "20px",
        lineHeight: "150%",
        color: '#1687D9',
        fontFamily: '"Bebas Neue", sans-serif',
        textAlign: "left",
        ['@media (max-width:1020px)']: {
            fontSize: "34px",
            textAlign: "center",
            marginBottom: '10px'
        }
    },
    flex1: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    subtitleFlex1: {
        fontSize: "36px",
        height: "22px",
        fontWeight: 600,
        lineHeight: "14px",
        letterSpacing: "0em",
        textAlign: "left",
        ['@media (max-width:1020px)']: {
            fontSize: "18px",
            textAlign: "center"
        }
    },
    flexHeading: {
        marginBottom: "60px",
        ['@media (max-width:1020px)']: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    secondbox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: "100px",
        backgroundImage: `url(${aboutbackground})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat', // Corrected property name
        backgroundPosition: "center",
        backgroundColor: theme.palette.secondary.main,
        ['@media (max-width:1020px)']: {
            padding: "30px"
        }
    },
    aboutTnP: {
        fontFamily: "Nunito",
        fontSize: "36px",
        fontWeight: "800",
        textAlign: "center",
        lineHeight: '13.9px',
        marginBottom: "35px",
    },
    secondpara: {
        lineHeight: "28px",
        letterSpacing: "0.02em",
        paddingBottom: "24px",
        fontSize: "25px",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: "24px",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "100%", // Adjust width for responsiveness
        maxWidth: "736px", // Add maxWidth for larger screens
        ['@media (max-width:1300px)']: {
            marginBottom: "0px",
            maxWidth: "90%", // Adjust for larger screens
            fontSize: "20px",
        },
        ['@media (max-width:600px)']: {
            fontSize: "16px", // Adjust font size for smaller screens
        }
    },
    secondsubpara: {
        flex: 1,
        fontSize: "24px",
        paddingBottom: 18,
        textAlign: "center",
        color: "#606060",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "100%", // Adjust width for responsiveness
        maxWidth: "787px", // Add maxWidth for larger screens
        padding: "24px",
        gap: "8px",
        ['@media (max-width:1300px)']: {
            fontSize: "18px", // Adjust font size for smaller screens
            maxWidth: "90%", // Adjust for larger screens
            padding: "12px",
        },
        ['@media (max-width:600px)']: {
            fontSize: "16px", // Adjust font size for smaller screens
            padding: "8px",
        }
    },

    innerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%", // Adjust width for responsiveness
        maxWidth: "1200px",
        minHeight: "380px", // Corrected property name
        padding: "20px 30px 30px 30px",
        borderRadius: 12,
        backgroundColor: '#F2F9F78C',
        boxShadow: "0px 4px 4px 0px #00000040",
        margin: "0 auto",
        ['@media (max-width:1300px)']: {
            maxWidth: "90%",
            minHeight: "90%",
            padding: "10px 20px 20px 20px"
        },
        ['@media (max-width:600px)']: {
            width: "90%", // Adjust width for smaller screens
            minHeight: "90%", // Adjust height for smaller screens
            padding: "10px"
        }
    },
    companyVisitingHeading: {
        fontSize: "28px",
        color: "#606060",
        textAlign: "center",
        fontWeight: "600",
        marginTop: "36px",
        letterSpacing: "0.02em",
        ['@media (max-width:1020px)']: {
            fontSize: "20px",
            marginTop: "24px"
        }
    },
    infosys: {
        width: "110px",
        height: "101.54px",
        ['@media (max-width:1020px)']: {
            width: "90px",
            height: "81.54px"
        }
    },
    companyImages: {
        display: "flex",
        padding: "24px 24px",
        justifyContent: "space-around",
        ['@media (max-width:1020px)']: {
            paddingLeft: "40px",
            paddingRight: "40px"
        }
    },
    coreDetails: {
        fontSize: "36px",
        fontWeight: "500",
        textAlign: "center",
        paddingBottom: "24px"
    },
    coreHeading: {
        paddingTop: "40px",
        backgroundColor: "#ffffff",
        backgroundImage: `url(${coreBackground})`,
        backgroundSize: "cover",
        backgroundStyle: 'no-repeat',
    },
    careerHeading: {
        paddingTop: "40px",
        backgroundColor: theme.palette.secondary.main,
    },
    career: {
        fontSize: "36px",
        fontWeight: "500",
        textAlign: "center",
    },
    sectionCareer: {
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "space-evenly",
        ['@media (max-width:1020px)']: {
            display: "block",
        },
        box22: {
            width: "341px",
            height: "518px",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "10px",
            boxShadow: "4px 3px 25px #606060a3",
            margin: "60px 0 40px 0",
            textAlign: "justify",
            padding: "20px 18px",
            ['@media (max-width:1020px)']: {
                width: "60%",
                height: "auto",
                marginRight: "auto",
                marginLeft: "auto",
            }
        },
    },
    words: {
        backgroundColor: theme.palette.secondary.main,
    },
    wordDetails: {
        fontSize: "36px",
        fontWeight: "500",
        textAlign: "center",
    },
    tnpQuotes: {
        paddingLeft: "249px",
        paddingRight: "249px",
        backgroundColor: "#E9F3FD",
        paddingTop: "40px",
        ['@media (max-width:1020px)']: {
            padding: "30px"
        }
    },
    quotes: {
        color: theme.palette.primary.main,
        fontSize: "42px",
        display: "inline"
    },
    wordTnp: {
        display: "inline",
        fontSize: "24px",
        fontWeight: "500",
        fontStyle: "italic",
        lineHeight: "200%",
        textAlign: "justify",
        ['@media (max-width:1020px)']: {
            lineHeight: "200%",
            fontSize: "24px",
            textAlign: "justify"
        }
    },
    sodhisir: {
        width: "426px",
        paddingTop: "40px",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "end",
        ['@media (max-width:1020px)']: {
            padding: "30px"
        }
    },
    prof: {
        width: "426px",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "end",
    },
    tpo: {
        width: "426px",
        fontSize: "28px",
        fontWeight: 500,
        lineHeight: "40px",
        letterSpacing: "0em",
        textAlign: "left",
        padding: "12px 0px 24px 0px",
    },
    profTpo: {
        width: "426px",
        height: "239px",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    box31: {
        width: "261px",
        height: "389px",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000066",
        margin: "40px 0 40px 0",
        textAlign: "justify",
        padding: "20px 15px",
        ['@media (max-width:1120px)']: {
            width: "75%",
            height: "auto",
            marginRight: "auto",
            marginLeft: "auto",
        }
    },
    num: {
        fontSize: "28px",
        fontWeight: "500",
        color: theme.palette.primary.main,
    },
    outerBox: {
        ['@media (max-width:1020px)']: {
            width: "100vw",
            position: "relative"
        }
    },
    padding: {
        padding: "30px",
        backgroundColor: '#F8F7F7',
    },
    media: {
        height: 100,
    },
    BenefitsForStudents: {
        width: "95%",
        margin: "auto",
        maxWidth: "1000px",
        padding: "15px",
        paddingTop:"12px",
        fontSize: "1rem",

    },
    top: {
        display: 'flex',
        ['@media (width < 600px)']: {
            flexFlow: "column",
        }
    },

    leftSide: {
        width: "49%",
        ['@media (width < 600px)']: {
            width: "95%",
        }
    },
    rightSide: {
        width: "49%",
        ['@media (width < 600px)']: {
            width: "95%",
        }
    },
    achievements: {
        display: "grid",
        justifyContent: "center",
        margin: "9px",
        gridTemplateColumns: " auto auto",
        gap: "17px",
    },
    achievementsH1: {
        fontWeight: "bolder",
        margin: 0,
        fontFamily: "Bebas Neue, sans-serif",
        textAlign: 'center'
    },
    paper: {
        padding: '6px 16px',
        backgroundColor: "#F8F9FA",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    customText: {
        fontSize: '16px', // Set font size to 16px for regular text
        '@media (max-width: 600px)': { // Adjust font size for smaller screens
            fontSize: '14px',
        },
    },
    customheading: {
        fontWeight: 500,
        '@media (max-width: 600px)': { // Adjust font size for smaller screens
            fontSize: '20px',
        },
    },
    tnpwords: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingBottom: "30px",
        paddingTop: "60px",
        ['@media (max-width : 1120px)']: {
            padding: 24
        },
        ['@media (max-width : 600px)']: {
            padding: 12
        }
    },
    pinkArea: {
        backgroundColor: '#FBF4FA',
        maxWidth: "1020px",
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
        borderRadius: 16,
        ['@media (max-width : 1120px)']: {
            width: "700px",
        },
        ['@media (max-width : 600px)']: {
            width: "454px",
        }
    },
    imgDivision: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: "112px",
        marginRight: "112px",
        alignItems: 'center',
        bottom: 0,
        [theme.breakpoints.up('lg')]: {
            width: '40%',
        },
        ['@media (width < 600px)']: {
            width: "45%",
        }
    },
    img: {
        width: "100%",
        botton: 0,
        paddingTop: 24,
        ['@media (max-width : 1300px)']: {
            width: "70%"
        },
        ['@media (max-width : 600px)']: {
            width: "70%"
        }
    },
    tpo_img: {
        paddingTop: 24,
        position: 'absolute',
        bottom: 0,
        mixBlendMode: 'darken',
        width: "120%",
        ['@media (max-width : 1300px)']: {
            width: "70%"
        },
        ['@media (max-width : 600px)']: {
            width: "70%"
        }
    },
    textDivision: {
        textAlign: 'center',
        // paddingTop: "44px",
        // width: "90%",
        color: '#111827',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '18px',
        margin: '32px',
        [theme.breakpoints.up('lg')]: {
            // margin: '8px',
            width: '60%',
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    var dt = new Date();
    var year = dt.getFullYear();

    return (
        <div className={classes.outerBox}>
            <div>
                <Navbar />
            </div>

            <div className={classes.firstbox}>
                <div className={classes.flex1}>
                    <div >
                        <Typography className={classes.mainheadingFlex1}>Welcome To </Typography>
                        <Typography className={classes.mainheadingFlex2}>Training & Placement Cell ...</Typography>
                    </div>
                    <Typography className={classes.subtitleFlex1}>A family that takes initiatives.</Typography>
                </div>
                <div >
                    <img style={{ width: '100%' }} src={mainImage}></img>
                </div>
            </div>
            {/* <div style={{ backgroundColor: '#f8f9fa', paddingBottom: 60 }}> */}
            <div className={classes.secondbox}>
                <Typography className={classes.aboutTnP}>About T&P</Typography>
                <Card className={classes.innerBox}>
                    <CardContent>
                        <Typography className={classes.secondpara}>" The goal of Training & Placement Cell is to provide students with a platform for using their potential to gain valuable experience by working in industry. "</Typography>
                        <Typography className={classes.secondsubpara}>It also acts as the interface between various companies seeking talented young graduates and post graduates in various disciplines. The Cell is well equipped with ample infrastructure in Terms of Testing halls, Consultancy Hall, Conference room, for Pre Placement Talk, Presentations etc and Computer labs for online tests also the cell has video conference facility available for the students.</Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.padding}></div>
            <div className={classes.coreHeading}><Typography className={classes.coreDetails}>Core Details</Typography>
                <Grid container md={12}>
                    <div className={classes.section2_1}>
                        <div className={classes.box}>
                            <Training className={classes.icon2} />
                            <Typography variant="h5" component="h2" className={classes.subheading4}>
                                Training
                            </Typography>
                            <Typography variant="h5" component="h2" className={classes.subheading5}>
                                The cell arranges training for students in industries for 6 weeks at the
                                end of 4th Semester and for 6 months in 7th or 8th Semester. All the
                                Engineering Department students undergo minimum 12 weeks for industrial
                                training and minimum 6 weeks for software training for this 6 months of
                                training.
                            </Typography>
                        </div>
                        <div className={classes.box}>
                            <Placement className={classes.icon2} />
                            <Typography variant="h5" component="h2" className={classes.subheading4}>
                                Placements
                            </Typography>
                            <Typography variant="h5" component="h2" className={classes.subheading5}>
                                All the reputed organizations including MNCs come to the College for campus
                                recruitment. To achieve its goal, the Training & Placement Cell works towards
                                recognizing the core competencies of students.
                            </Typography>
                        </div>
                        <div className={classes.box}>
                            <Activity className={classes.icon2} />
                            <Typography variant="h5" component="h2" className={classes.subheading4}>
                                Additional Activities
                            </Typography>
                            <Typography variant="h5" component="h2" className={classes.subheading5}>
                                In addition to the above-mentioned activities, the cell arranges expert
                                lectures of Corporate Managers in both Technical and HRD streams for the
                                students and faculty of the Institute. There are various Workshops and
                                Seminars organised for the benefit of students regarding the latest trend
                                and technology in the industry.
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <div >
                    <Typography className={classes.companyVisitingHeading}>Top Companies Visiting Our Campus</Typography>
                    <div className={classes.companyImages}>
                        <img className={classes.wipro} src={wipro}></img>
                        <img className={classes.infosys} src={infosys}></img>
                        <img src={capegemini}></img>
                        <img src={hcl}></img>
                        <img src={tcs}></img>
                    </div>
                </div>
            </div>
 
            <div className={classes.tnpwords}>
                <Card className={classes.pinkArea}>
                    <div className={classes.imgDivision}>
                        <svg className={classes.img} width="469" viewBox="0 0 469 477" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M316.855 104.281C360.887 103.364 410.023 103.093 440.122 135.243C469.74 166.88 473.875 217.055 461.245 258.511C450.892 292.491 407.457 298.878 382.551 324.207C357.185 350.004 352.308 398.141 316.855 405.352C279.48 412.954 242.371 386.766 217.611 357.755C194.528 330.708 194.625 293.934 191.531 258.511C187.959 217.619 172.728 172.125 198.614 140.269C225.623 107.03 274.035 105.172 316.855 104.281Z"
                                fill="#EED0EA" stroke="#EED0EA" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M185.413 7.45354C231.222 -1.76364 290.729 -9.46371 318.355 29.669C345.925 68.7236 306.402 120.224 298.774 168.032C293.278 202.479 304.257 242.342 280.491 266.988C256.743 291.614 218.397 279.35 185.413 285.588C137.869 294.58 84.9039 343.538 48.107 310.939C11.8553 278.823 42.989 216.534 52.7204 168.032C59.7719 132.887 73.0528 101.721 95.5463 74.5001C120.53 44.2659 147.795 15.0228 185.413 7.45354Z"
                                fill="#F5E3F3" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M190.139 200.491C229.422 199.173 264.523 153.973 299.758 171.372C337.606 190.062 348.806 238.906 352.934 280.88C357.566 327.968 353.951 377.888 323.647 414.252C291.008 453.418 240.81 482.137 190.139 476.228C142.395 470.661 118.049 420.798 84.5404 386.37C51.865 352.798 -0.691693 327.699 0.00689366 280.88C0.70335 234.203 44.608 196.683 87.6421 178.488C121.097 164.343 153.831 201.709 190.139 200.491Z"
                                fill="#EBC7E6" />
                        </svg>
                        <img className={classes.tpo_img} src="https://www.tnpgndec.com/images/office1.jpg?e242337f624890586eb5eb0add2aa32c" alt="tpo" />
                    </div>
                    <div className={classes.textDivision}>
                        <Typography variant="h5" className={classes.tpo}>Words from T&P Officer</Typography>
                        <Typography variant="body1" className={classes.profTpo}>
                            The Training and Placement Cell, GNDEC apart from giving an outstanding placement record provides the platform for students to gain most from the personality development and marketing experience program. We focus on not just creating engineers but pioneers and leaders for the future development of our nation. The Training & Placement Cell looks after the interests of the students and the recruiting organizations by acting as a channel of communication between them.
                        </Typography>

                        <Typography variant="h5" className={classes.sodhisir}>Prof. G.S. Sodhi</Typography>
                        <Typography variant="body1" className={classes.prof}>Training & Placement Officer</Typography>

                    </div>
                </Card>
            </div >

            <Grid container md={16} className={classes.section3_0} style={{ backgroundColor: '#fff' }}>
                <div className={classes.subheader}>
                    <Typography variant="h5" component="h2" className={classes.coreDetails}>
                        How T&P Cell Works?
                    </Typography>
                </div>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot color="primary">
                                <StorageIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ height: "90px" }} />
                        </TimelineSeparator>
                        <TimelineContent style={{}}>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1" className={classes.customheading}>
                                    Database Formation
                                </Typography>
                                <Typography className={classes.customText}>Collects the record of students of particular year and forms database that MNCs demand as a record from the institution.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">

                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot color="primary">
                                <ContactsIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ height: "90px" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1" className={classes.customheading}>
                                    Finding Contacts
                                </Typography>
                                <Typography className={classes.customText}>Fetches contacts of Human Resource Managers of different Companies to get information regarding job offering for students by their organisations.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <ThumbUpAltIcon />
                            </TimelineDot>
                            <TimelineConnector style={{ height: "90px" }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper} >
                                <Typography variant="h6" component="h1" className={classes.customheading}>
                                    Getting Confirmations
                                </Typography>
                                <Typography className={classes.customText}>Training and Placement cell gets confirmation from HRs for conducting placement drive on particular dates as per directed and arranging hospitality services and venue.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <WorkIcon />
                            </TimelineDot>
                        </TimelineSeparator >
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1" className={classes.customheading}>
                                    Placement Drives
                                </Typography>
                                <Typography className={classes.customText}>Smoothly conducts placement drive for the students by different MNCs.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>
            <div style={{ backgroundColor: '#ffffff' }}>
                <div className={classes.BenefitsForStudents}>
                    <div className={classes.top}

                    >
                        <div className={classes.leftSide}>
                            <h1 style={{ "font-family": "Bebas Neue, sans-serif", fontSize: "3.2rem" }}>
                                <h1 style={{ color: '#3490dc', display: 'inline', fontSize: "3.2rem" }}>
                                    BENEFITS
                                </h1>
                                &nbsp; FOR STUDENTS WITH
                                <h1 style={{ color: '#3490dc', display: 'inline', fontSize: "3.2rem" }}>
                                    &nbsp; T&P CELL
                                </h1>

                            </h1>
                            <p>
                                The GNDEC Training & Placement Cell is dedicated to helping you bridge the gap between education and employment. we offers tailored training, internships, and personalized career counseling.
                                TNP is dedicated partner in launching your successful career journey.
                            </p>
                            <div className={classes.achievements}>
                                <div>
                                    <h1 className={classes.achievementsH1}>20+</h1>
                                    <p className={classes.subheader}>Years of Experience</p>
                                </div>
                                <div>
                                    <h1 className={classes.achievementsH1}>500+</h1>
                                    <p className={classes.subheader}>Student Placed /yr</p>
                                </div>
                                <div>
                                    <h1 className={classes.achievementsH1}>50+</h1>
                                    <p className={classes.subheader}>Industry Partnerships</p>
                                </div>
                                <div>
                                    <h1 className={classes.achievementsH1}>90%</h1>
                                    <p className={classes.subheader}>Guranteed placements</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightSide}>
                            <img width={"100%"} height={"400px"} style={{ objectFit: "cover" }} src="https://c8.alamy.com/comp/DBMGXG/group-of-happy-students-with-teacher-and-tablet-computer-in-class-DBMGXG.jpg" alt="" />
                        </div>
                    </div>
                    <div className="bottom"
                        style={{
                            display: "flex",
                            "justify-content": "space-evenly",
                            "flex-wrap": "wrap",
                            gap: "10px",
                            margin: "10px 0px 15px 0px",
                        }}
                    >
                        <Card style={{ width: "300px" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <img src="https://w7.pngwing.com/pngs/463/683/png-transparent-learning-education-pedagogy-skill-teacher-marketing-balloon-academic-certificate-business.png" width={50} alt="" />

                                    <h5>Job Placement Assistance</h5>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Stand out from the crowd with industry-relevant skills and secure your dream job through campus recruitment drives.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ width: "300px" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <img src="https://w7.pngwing.com/pngs/463/683/png-transparent-learning-education-pedagogy-skill-teacher-marketing-balloon-academic-certificate-business.png" width={50} alt="" />

                                    <h5>Career Guidance and Mentorship</h5>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Receive personalized advice from experienced industry professionals during your internship placements.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ width: "300px" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <img src="https://w7.pngwing.com/pngs/463/683/png-transparent-learning-education-pedagogy-skill-teacher-marketing-balloon-academic-certificate-business.png" width={50} alt="" />

                                    <h5>Networking Opportunities</h5>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Build connections with potential employers and industry leaders during company training programs.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={classes.footer} >
                <p style={{fontFamily:'Bebas Neue,san-serif' , color:'#fff'}}> Developed with ❤️ by <a className={classes.tag} href="https://tnpgndec.com/genconians">Genconians </a> | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
            </div>
        </div >
    );
}
