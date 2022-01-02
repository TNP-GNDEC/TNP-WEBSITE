import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Training from '@material-ui/icons/AccountBalanceOutlined';
import Placement from '@material-ui/icons/AssessmentOutlined';
import Activity from '@material-ui/icons/ColorLensOutlined';

import mobileComponent from "../../../images/mobileComponent.png";
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

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0px",
    width: "100%"
  },
  navbar:{
      width: "100%",
      margin: "0px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.main,
      display: "none"
  },
  titleBox:{
      width: "400px",
      padding: "10px 0 0 10px"
  },
  brand:{
    margin: "10px 0 10px 40px",
    display: "flex",
},
title:{
    fontSize: "20px",
    color: theme.palette.secondary.main
},
navItems:{
    width: "220px",
    margin: "0px 40px 0px 0px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    ['@media (max-width:550px)']: {
        width: "30%",
    }
},
back:{
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
icon:{
    paddingBottom: "2px",
    color: theme.palette.secondary.main
},
  root: {
    flexGrow: 1,
    margin: "0px",
    width: "100%"
  },
  landing1:{
      margin: "0px",
      width: "100%",
      height: "500px",
      ['@media (max-width:960px)']: {
        height: "350px"
      }
  },
  landing2:{
      width: "100%"
  },
  intro:{
      padding: "100px 0px 0px 50px",
      ['@media (max-width:960px)']: {
        padding: "10% 0px 0px 10%",
      }
  },
  heading:{
      fontSize: "55px",
      color: theme.palette.primary.dark
  },
  introbox:{
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
  hero:{
      width: "100%",
      borderRadius: "3%",
      boxShadow: "0px 15px 25px #00000066"
  },
  heading2:{
    fontSize: "40px",
    color: theme.palette.primary.dark,
    textAlign: "center",
    paddingTop: "25px"
},
  section1:{
      width: "100%",
      height:"500px",
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
  image:{
    width: "50%",
  },
  section2:{
      width: "100%",
      padding: "20px",
      ['@media (max-width:1150px)']: {
        height: "620px"
      },
      ['@media (max-width:960px)']: {
        height: "400px"
      }
  },
  section2_1:{
      width: "100%",
      backgroundColor: "#E9F3FD",
      display: "flex",
      justifyContent: "space-evenly",
      ['@media (max-width:1020px)']: {
        display: "block",
      }
  },
  section3_1:{
    backgroundColor: theme.palette.secondary.main,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      ['@media (max-width:1120px)']: {
        display: "block",
    }
  },
  box:{
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
  box2:{
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
box3:{
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
box4:{
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
box5:{
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
  icon2:{
      fontSize: "60px",
      color: theme.palette.primary.main
  },
  subheading4:{
      color: theme.palette.primary.dark,
      paddingLeft: "0",
      padding: "10px",
      fontSize:"22px",
      fontWeight: "500"      
  },
  subheading5:{
      fontSize: "20px",
      color: "#606060",
      lineHeight: "151.7%"
  },
  section3_0:{
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
      padding: "40px"
  },
  subheader:{
      width:"100%",
      textAlign: "center"
  },
  image2:{
      width: "100%",
      borderRadius: "2%",
  },
  subsection1:{
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      padding: "20px",
      textAlign: "left",
      ['@media (max-width:1080px)']: {
        display: "block"
    }
  },
  subbox:{
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
  image3:{
      borderRadius: "50%",
      width: "100px",
      height: "100px"
  },
  imagecap:{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: "solid #038ed4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  image4:{
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
    backgroundColor: theme.palette.secondary.main,
    fontSize: "20px",
    fontWeight: "500"
  },
  tag:{
      color: "inherit",
      fontWeight: "700"
  },
  firstbox:{
    backgroundColor: "#E9F3FD",
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
  headingFlex1:{
      fontSize: "28px",
      fontWeight: "500",
      display: "inline",
      ['@media (max-width:1020px)']: {
          fontSize: "18px",
          justifyContent: "center"
      }
  },
  trophy: {
      fontSize: "28px"
  },
  mainheadingFlex1: {
      fontSize: "50px",
      fontWeight: "700",
      marginBottom: "60px",
      lineHeight: "125%",
      ['@media (max-width:1020px)']: {
          fontSize: "34px",
          textAlign: "center"
      }
  },
  flex1:{
      width:"40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ['@media (max-width:1020px)']: {
          width: "100%"
      }
      
  },
  subtitleFlex1: {
      fontSize: "28px",
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
      display: "flex",
      justifyContent: "center",
      paddingTop: "40px",
      padding: "100px",
      backgroundColor: theme.palette.secondary.main,
      ['@media (max-width:1020px)']: {
          padding: "30px"
      }
  },
  aboutTnP: {
      fontSize: "36px",
      fontWeight: "500",
      textAlign: "center",
      marginBottom: "35px"
  },
  secondpara: {
      fontSize: "26px",
      fontWeight: "500",
      textAlign: "center",
      marginBottom: "5px"
  },
  secondsubpara: {
      fontSize: "22px",
      textAlign: "center",
      color: "#606060",
      marginBottom: "100px"
  },
  innerBox: {
      width: "63%"
  },
  companyVisitingHeading: {
      fontSize: "22px",
      color: "#606060",
      textAlign: "center",
      fontWeight: "500"
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
  },
  coreHeading: {
      paddingTop: "40px",
    backgroundColor: "#E9F3FD"
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
    display: "flex",
    paddingTop: "50px",
    backgroundColor: "#E9F3FD",
    justifyContent: "flex-start",
    paddingLeft: "249px",
    paddingBottom: "50px",
    ['@media (max-width:1020px)']: {
        padding: "30px"
    }
},
prof: {
    fontSize: "30px",
    fontWeight: "500"
},
tpo: {
    fontSize: "22px",
    fontWeight: "500",
    color: "#606060"
},
profTpo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "30px",
    
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
}
}));

export default function Home() {
  const classes = useStyles();
  var dt=new Date();
  var year = dt.getFullYear();

  return (
    <div className={classes.outerBox}>
    <div>
        <Navbar />
    </div>
    <div className={classes.firstbox}>
        <div className={classes.flex1}>
            <div className={classes.flexHeading}>
            <span className={classes.trophy}>🏆</span>
            <Typography variant="h3" className={classes.headingFlex1}> Academic Achievements & Quality</Typography>
            </div>
            <Typography variant="h1" className={classes.mainheadingFlex1}>Informative platform for GNDEC students, staff & more.</Typography>
            <Typography className={classes.subtitleFlex1}>Welcome to Training & Placement Cell,<br></br>A family that takes initiatives.</Typography>
        </div>
        <div>
            <img src={mobileComponent}></img>
        </div>
    </div>
    
    <div className={classes.secondbox}>
        <div className={classes.innerBox}>
            <Typography className={classes.aboutTnP}>About T&P</Typography>
            <Typography className={classes.secondpara}>" The goal of Training & Placement Cell is to provide students with a platform for using their potential to gain valuable experience by working in industry. "</Typography>
            <Typography className={classes.secondsubpara}>It also acts as the interface between various companies seeking talented young graduates and post graduates in various disciplines. The Cell is well equipped with ample infrastructure in Terms of Testing halls, Consultancy Hall, Conference room, for Pre Placement Talk, Presentations etc and Computer labs for online tests also the cell has video conference facility available for the students.</Typography>
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

    <div className={classes.coreHeading}><Typography className={classes.coreDetails}>Core Details</Typography></div>
    <Grid container md={12}>
                <div className={classes.section2_1}>
                    <div className={classes.box}>
                        <Training className={classes.icon2}/>
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
                        <Placement className={classes.icon2}/>
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
                        <Activity className={classes.icon2}/>
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

            <Grid container md={12} className={classes.section3_0}>
                <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.coreDetails}>
                    Career Development
                </Typography>
                </div>
                <div className={classes.section3_1}>
                    <div className={classes.box2}>
                        <img src={image1} className={classes.image2} />
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Experience Professionalism
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            T&P lets you draw upon its superlative treasure of experience.
                        </Typography>
                    </div>
                    <div className={classes.box2}>
                        <img src={image2} className={classes.image2} />
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Knowledge Entry Level Hiring
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            Stay ahead of the race by giving your career a kickstart with T&P.
                        </Typography>
                    </div>
                    <div className={classes.box2}>
                        <img src={image3} className={classes.image2} />
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Campus Communes
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            'Campus Meets Corporate' via channels to engage with T&P.
                        </Typography>
                    </div>
                </div>
            </Grid>

            <div className={classes.coreHeading}><Typography className={classes.coreDetails}>Words from T&P Officer</Typography></div>
            <div className={classes.tnpQuotes}>
                <span className={classes.quotes}>“</span>
                <Typography className={classes.wordTnp}>
                    The Training and Placement Cell, GNDEC apart from giving an outstanding placement record provides the platform for students to gain most from the personality development and marketing experience program. We focus on not just creating engineers but pioneers and leaders for the future development of our nation. The Training & Placement Cell looks after the interests of the students and the recruiting organizations by acting as a channel of communication between them.
                </Typography>
                <span className={classes.quotes}>”</span>
            </div>
            <div className={classes.sodhisir}>
                <div className={classes.imagecap}>
                    <img src={office} className={classes.image3} />
                </div>
                <div className={classes.profTpo}>
                    <Typography className={classes.prof}>Prof. G.S. Sodhi</Typography>
                    <Typography className={classes.tpo}>Training & Placement Officer</Typography>
                </div>
            </div>
    
            <Grid container md={16} className={classes.section3_0}>
                <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.coreDetails}>
                    How T&P Cell Works?
                </Typography>
                </div>
                <div className={classes.section3_1}>
                <div className={classes.box31}>
                    <Typography className={classes.num}>01</Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Database Formation
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            Collects the record of students of particular year and forms database that MNCs demand as a record from the institution.
                        </Typography>
                    </div>
                    <div className={classes.box31}>
                    <Typography className={classes.num}>02</Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Finding Contacts
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            Fetches contacts of Human Resource Managers of different Companies to get information regarding job offering for students by their organisations.
                        </Typography>
                    </div>
                    <div className={classes.box31}>
                    <Typography className={classes.num}>03</Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Getting Confirmations
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            Training and Placement cell gets confirmation from HRs for conducting placement drive on particular dates as per directed and arranging hospitality services and venue.
                        </Typography>
                    </div>
                    <div className={classes.box31}>
                    <Typography className={classes.num}>04</Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Placement Drives
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                            Smoothly conducts placement drive for the students by different MNCs.
                        </Typography>
                    </div>
                </div>
            </Grid>
            <div className={classes.footer}>
            <p> Developed with ❤️ by <a className={classes.tag} href="https://tnpgndec.com/genconians">Genconians </a> | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
            </div>
    </div>
  );
}
