import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ProfileDetails from "./ProfileDetails";
import ParentDetails from "./ParentsDetails";
import AcademicDetails from "./AcademicDetails";

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

    const [profile, setProfile] = React.useState({
        first_name: "",
        last_name: "",
        dob: "",
        height: "",
        weight: "",
        blood_group: ""
    });

    const [parent, setParent] = React.useState({
        father_name: "",
        father_phone: "",
        father_occupation: "",
        mother_name: "",
        mother_phone: "",
        mother_occupation: ""
    });

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
                setacademics({ ...academics, stream: value });
                break;
            case 7:
                setacademics({ ...academics, section: value });
                break;
            case 8:
                setacademics({ ...academics, shift: value });
                break;
            case 9:
                setacademics({ ...academics, training_sem: value });
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        console.log("Do something after profile has changed", academics);
    }, [academics]);
    React.useEffect(() => {
        console.log("Do something after profile has changed", profile);
    }, [profile]);
    const renderPersonalFields = () =>
        fields.map(field => (
            <>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <TextField
                        className={classes.input}
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        onChange={e => {
                            field.change(e, field.id);
                        }}
                    />
                </Grid>
            </>
        ));
    return (
        <div>
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
            </Grid>
        </div>
    );
}
