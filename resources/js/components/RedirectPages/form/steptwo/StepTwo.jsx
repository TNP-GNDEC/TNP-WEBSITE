import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProfileDetails from "./ProfileDetails";
import ParentDetails from "./ParentsDetails";
import AcademicDetails from "./AcademicDetails";
import ContactDetails from "./ContactDetails";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    head: {
        color: "#038ed4",
        padding: "20px "
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,

        width: "400px",
        height: "70px"
    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px 0px"
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },
    cardStyles: {
        paddding: "18px 20px"
    }
}));

export default function StepTwo() {
    const classes = useStyles();

    // state for holding inputs from profile form imported as ProfileDetails
    const [profile, setProfile] = React.useState({
        first_name: "",
        last_name: "",
        dob: "",
        height: "",
        weight: "",
        blood_group: ""
    });

    // state for holding inputs from parent form imported as ParenteDetails
    const [parent, setParent] = React.useState({
        father_name: "",
        father_phone: "",
        mother_name: "",
        mother_phone: "",
        mother_occupation: ""
    });

    // state for holding inputs from academics form imported as AcademicDetails
    const [academics, setAcademics] = React.useState({
        univ_roll: "",
        college_roll: "",
        category: "",
        batch: "",
        course: "",
        stream: "",
        section: "",
        shift: "",
        training_sem: ""
    });

    // state for holding inputs from contact form imported as ContactDetails
    const [contact, setContact] = React.useState({
        whatsapp_contact: "",
        contact: "",
        re_enter_contact: ""
    });

    // State setter function of Profile form sent as props to ProfileDetails forms
    const handleProfileChangeInput = (e, id) => {
        console.log("I am called");
        const value = e.target.value;
        switch (id) {
            case 1:
                setProfile({ ...profile, first_name: value });
                break;
            case 2:
                setProfile({ ...profile, last_name: value });
                break;
            case 3:
                setProfile({ ...profile, dob: value });
                break;
            case 4:
                setProfile({ ...profile, height: value });
                break;
            case 5:
                setProfile({ ...profile, weight: value });
                break;
            case 6:
                setProfile({ ...profile, blood_group: value });
                break;

            default:
                break;
        }
    };

    // State setter function of parent form sent as props to ParentDetails forms
    const handleParentChangeInput = (e, id) => {
        console.log("I am called for parent");
        const value = e.target.value;
        switch (id) {
            case 1:
                setParent({ ...parent, father_name: value });
                break;
            case 2:
                setParent({ ...parent, father_phone: value });
                break;
            case 3:
                setParent({ ...parent, father_occupation: value });
                break;
            case 4:
                setParent({ ...parent, mother_name: value });
                break;
            case 5:
                setParent({ ...parent, mother_phone: value });
                break;
            case 6:
                setParent({ ...academics, mother_occupation: value });
                break;

            default:
                break;
        }
    };

    // State setter function of academics form sent as props to AcademicDetails forms
    const handleAcademicsChangeInput = (e, id) => {
        console.log("I am called for academics");
        const value = e.target.value;
        switch (id) {
            case 1:
                setAcademics({ ...academics, univ_roll: value });
                break;
            case 2:
                setAcademics({ ...academics, college_roll: value });
                break;
            case 3:
                setAcademics({ ...academics, category: value });
                break;
            case 4:
                setAcademics({ ...academics, batch: value });
                break;
            case 5:
                setAcademics({ ...academics, course: value });
                break;
            case 6:
                setAcademics({ ...academics, stream: value });
                break;
            case 7:
                setAcademics({ ...academics, section: value });
                break;
            case 8:
                setAcademics({ ...academics, shift: value });
                break;
            case 9:
                setAcademics({ ...academics, training_sem: value });
                break;
            default:
                break;
        }
    };

    // State setter function of contact form sent as props to ContactDetails forms
    const handleContactChangeInput = (e, id) => {
        console.log("I am called for contact");
        const value = e.target.value;
        switch (id) {
            case 1:
                setContact({ ...contact, whatsapp_contact: value });
                break;
            case 2:
                setContact({ ...contact, contact: value });
                break;
            case 3:
                setContact({ ...contact, re_enter_contact: value });
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = (e) => {
        event.preventDefault();        
        const id=localStorage.getItem("userid")
        axios.post(`/api/personaldetails/${id}`, {
          profile: profile,
          academics: academics,
          contact: contact,
    
      })
      .then((response) => {
        var user=response.data
        console.log(response.data)
          
      })
      .catch((error) => {
          console.log(error);
      });
      }

    React.useEffect(() => {
        console.log("Do something after profile has changed", academics);
    }, [academics]);
    React.useEffect(() => {
        console.log("Do something after profile has changed", profile);
    }, [profile]);
    React.useEffect(() => {
        console.log("Do something after contact has changed", contact);
    }, [contact]);

    return (
        <div>
            <form
            onSubmit={(event) => handleFormSubmit(event)}>
                <Grid container className={classes.container}>
                    <Grid item xs={10} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ProfileDetails
                                Profile={profile}
                                handleInputChange={handleProfileChangeInput}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={10} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <ParentDetails
                                parent={parent}
                                handleInputChange={handleParentChangeInput}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={10} className={classes.Cardcontainers}>
                        <Card className={classes.cardStyles}>
                            <AcademicDetails
                                academics={academics}
                                handleInputChange={handleAcademicsChangeInput}
                            />
                        </Card>
                    </Grid>

                    <Grid
                        item
                        xs={10}
                        
                        className={classes.Cardcontainers}
                    >
                        <Card className={classes.cardStyles}>
                            <ContactDetails
                                contact={contact}
                                handleInputChange={handleContactChangeInput}
                            />
                        </Card>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    SUBMIT
                </Button>
            </form>
        </div>
    );
}