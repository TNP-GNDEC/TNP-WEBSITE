import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Back from '@material-ui/icons/KeyboardBackspace';
import Login from '@material-ui/icons/ExitToApp';
import More from '@material-ui/icons/ExpandMore';
import Training from '@material-ui/icons/AccountBalanceOutlined';
import Placement from '@material-ui/icons/AssessmentOutlined';
import Activity from '@material-ui/icons/ColorLensOutlined';

import logo from "../../../images/logo.png";
import logo2 from "../../../images/logo2.png";
import intro from "../../../images/sodhi.jpg";
import pattern from "../../../images/pattern2.png";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import office from "../../../images/office1.jpg";
import cummins from "../../../images/cummins.png";
import accenture from "../../../images/accenture.png";
import infosys from "../../../images/infosys.png";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0px"
  },
  navbar:{
      width: "100%",
      margin: "0px",
      display: "flex",
      justifyContent: "space-between"
  },
  titleBox:{
      width: "100px",
      padding: "10px 0 0 10px"
  },
  brand:{
    margin: "10px 0 10px 40px",
    display: "flex",
},
title:{
    fontSize: "20px",
    color: theme.palette.primary.main
},
navItems:{
    width: "320px",
    margin: "0px 40px 0px 0px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
},
back:{
    paddingRight: "20px",
    width: "100px",
    display: "flex",
    justifyContent: "space-evenly"
},

login: {
    background: theme.palette.primary.main,
    borderRadius: "5px",
    width: "100px",
    height: "40px",
    boxShadow: "0px 15px 25px #038ed41a",
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
subheading: {
    fontSize: "16px",
    color: theme.palette.secondary.main,
},
subheading2: {
    fontSize: "16px",
    color: theme.palette.primary.main,
},
subheading3: {
    fontSize: "25px",
    color: theme.palette.secondary.contrastText,
},
icon:{
    paddingBottom: "2px",
    color: theme.palette.primary.main
},
  root: {
    flexGrow: 1,
    margin: "0px",
    width: "100%"
  },
  landing1:{
      margin: "0px",
      height: "500px"
  },
  intro:{
      padding: "100px 0 0 50px"
  },
  heading:{
      fontSize: "55px",
      color: theme.palette.primary.dark
  },
  introbox:{
      marginLeft: "100px",
      padding: "50px 0px 0 0px",
      width: "530px",
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
      height:"500px",
      backgroundImage: `url(${pattern})`,
  },
  image:{
      transform: "translate(55%,30%)",
      opacity: "1"
  },
  section2:{
      padding: "20px"
  },
  section2_1:{
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-evenly"
  },
  section3_1:{
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly"
  },
  box:{
      width: "330px",
      height: "380px",
      backgroundColor: theme.palette.secondary.main,
      border: "2px solid #038ed4",
      borderRadius: "10px",
      boxShadow: "0px 15px 25px #038ed466",
      margin: "60px 0 40px 0",
      textAlign: "center",
      padding: "20px 15px",
  },
  box2:{
    width: "330px",
    height: "460px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #00000066",
    margin: "40px 0 40px 0",
    textAlign: "center",
    padding: "20px 15px",
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
    padding: "20px 15px"
},
box4:{
    width: "460px",
    height: "280px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #038ed466",
    margin: "40px 0 0px 0",
    padding: "20px"
},
box5:{
    width: "800px",
    height: "450px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #00000066",
    margin: "40px 0 40px 0",
    textAlign: "center",
    padding: "20px 15px"
},
  icon2:{
      fontSize: "60px",
      color: theme.palette.primary.main
  },
  subheading4:{
      color: theme.palette.primary.dark,
      padding: "10px",      
  },
  subheading5:{
      fontSize: "18px",
      color: "#000000a6",
  },
  section3_0:{
      width: "100%",
      backgroundColor: theme.palette.primary.light,
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
      textAlign: "left"
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
      width: "150px",
      height: "150px"
  },
  imagecap:{
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 15px 25px #038ed466",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "translate(185%,0)"
  },
  image4:{
      width: "200px"
  },
  footer: {
    width: "100%",
    padding: "10px",
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main
  },
}));

export default function Home() {
  const classes = useStyles();
  var dt=new Date();
  var year = dt.getFullYear();

  return (
    <div className={classes.body}>
        <div className={classes.navbar}>
            <div className={classes.brand}>
                <div>
                    <img src={logo} width="50px" height="50px" />
                </div>
                <div className={classes.titleBox}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        T&P Cell
                    </Typography>
                </div>
            </div>
            <div className={classes.navItems}>
                <Link to="/">
                <div className={classes.back}>
                    <Back className={classes.icon}/>
                    <Typography variant="h5" component="h2" className={classes.subheading2}>
                        Back
                    </Typography>
                </div>
                </Link>
                <div className={classes.back}>
                    <Typography variant="h5" component="h2" className={classes.subheading2}>
                        More
                    </Typography>
                    <More className={classes.icon}/>
                </div>
              
                <Link to="/login">
                <div className={classes.login}>
                    <Login />
                    <Typography variant="h5" component="h2" className={classes.subheading}>
                        Login
                    </Typography>
                </div>
                </Link>
            </div>
        </div>
        <div className={classes.root}>
            <Grid container md={12}>
            <Grid item md={6} className={classes.landing1}>
                <div className={classes.intro}>
                    <Typography variant="h5" component="h2" className={classes.subheading2}>
                        Welcome to
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.heading}>
                        Training and
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.heading}>
                        Placement Cell
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.subheading3}>
                        A family that takes initiatives.
                    </Typography>
                </div>
            </Grid>
            <Grid item md={6} className={classes.landing2}>
                <div className={classes.introbox}>
                    <img src={intro} className={classes.hero}/>
                </div>
            </Grid>
            </Grid>
            <Grid container md={12}>
                <Grid item md={6} className={classes.section1}>
                    <img src={logo2} className={classes.image} />
                </Grid>
                <Grid item md={6} className={classes.section2}>
                    <Typography variant="h5" component="h2" className={classes.heading2}>
                        About
                    </Typography>
                    <Typography variant="h5" component="h2" className={classes.subheading3}>
                    The goal of Training & Placement Cell is to provide students with a platform 
                    for using their potential to gain valuable experience by working in industry ,
                    it also acts as the interface between various companies seeking talented young
                     graduates and post graduates in various disciplines. The Cell is well equipped
                      with ample infrastructure in Terms of Testing halls, Consultancy Hall,
                      Conference room, for Pre Placement Talk, Presentations etc and Computer
                       labs for online tests also the cell has video conference facility available
                        for the students.
                    </Typography>
                </Grid>
            </Grid>
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
                <Typography variant="h5" component="h2" className={classes.heading2}>
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
            <Grid container md={12}>
            <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.heading2}>
                    News and Highlights
                </Typography>
                </div>
                <div className={classes.section2_1}>
                    <div className={classes.box3}>
                        <img src={logo} width="150px" height="150px" />
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Announcement
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            Registrations for ANA Technical Consulting
                        </Typography>
                    </div>
                    <div className={classes.box3}>
                        <img src={logo} width="150px" height="150px"/>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Placement
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            Infosys Selected in Phase-1
                        </Typography>
                    </div>
                    <div className={classes.box3}>
                        <img src={logo} width="150px" height="150px"/>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Announcements
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            VARDHMAN Group - Update
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid container md={12} className={classes.section3_0}>
                <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.heading2}>
                    How T&P Cell Works?
                </Typography>
                </div>
                <div className={classes.subsection1}>
                    <div className={classes.box4}>
                        <div className={classes.subbox}>1</div>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Database Formation
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                        Collects the record of students of particular year and forms database 
                        that MNCs demand as a record from the institution.
                        </Typography>
                    </div>
                    <div className={classes.box4}>
                    <div className={classes.subbox}>2</div>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Finding Contacts
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                        Fetches contacts of Human Resource Managers of different Companies to get 
                        information regarding job offering for students by their organisations.
                        </Typography>
                    </div>
                </div>
                <div className={classes.subsection1}>
                    <div className={classes.box4}>
                    <div className={classes.subbox}>3</div>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Getting Confirmations
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                        Training and Placement cell gets confirmation from HRs for conducting placement 
                        drive on particular dates as per directed and arranging hospitality services and venue.
                        </Typography>
                    </div>
                    <div className={classes.box4}>
                    <div className={classes.subbox}>4</div>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                             Placement Drives
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                        Smoothly conducts placement drive for the students by different MNCs.
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid container md={12}>
                <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.heading2}>
                    Words From Training And Placement Officer
                </Typography>
                </div>
                <div className={classes.subsection1}>
                    <div className={classes.box5}>
                        <div className={classes.imagecap}>
                           <img src={office} className={classes.image3} />
                        </div>
                        <Typography variant="h5" component="h2" className={classes.subheading4}>
                            Prof G.S.Sodhi
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading2}>
                            Training and Placement Officer
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.subheading5}>
                        "The Training and Placement Cell, GNDEC apart from giving an outstanding 
                        placement record provides the platform for students to gain most from the 
                        personality development and marketing experience program. We focus on not 
                        just creating engineers but pioneers and leaders for the future development 
                        of our nation. The Training & Placement Cell looks after the interests of 
                        the students and the recruiting organizations by acting as a channel of 
                        communication between them."
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid container md={12} className={classes.section3_0}>
                <div className={classes.subheader}>
                <Typography variant="h5" component="h2" className={classes.heading2}>
                    Top Companies Visiting Our Campus
                </Typography>
                </div>
                <div className={classes.subsection1}>
                    <img src={cummins} className={classes.image4}/>
                    <img src={accenture} className={classes.image4}/>
                    <img src={infosys} className={classes.image4}/>
                </div>
            </Grid>
            <div className={classes.footer}>
            <p> Developed with ❤️ by <a className={classes.tag} href="#">Genconians </a> | ©️ {year} <a className={classes.tag} href="https://gndec.ac.in/"> GNDEC,ldh</a></p>
            </div>
        </div>
    </div>
  );
}