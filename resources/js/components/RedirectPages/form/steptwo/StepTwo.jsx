import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
    const [age, setAge] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [profile, setProfile] = React.useState({
        first_name: "",
        last_name: "",
        dob: "",
        height: "",
        weight: "",
        blood_group: ""
    });

    const handleChangeInput = (e, id) => {
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

    React.useEffect(() => {
        console.log("Do something after profile has changed", profile);
    }, [profile]);

    const fields = [
        {
            label: "FIRST NAME",
            type: "text",
            id: 1,
            name: "first_name",
            placeholder: "firstName",
            value: profile.first_name,
            change: handleChangeInput
        },
        {
            label: "LAST NAME",
            type: "text",
            id: 2,
            name: "first_name",
            placeholder: "firstName",
            value: profile.last_name,
            change: handleChangeInput
        },
        {
            label: "DATE OF BIRTH",
            type: "text",
            id: 3,
            name: "first_name",
            placeholder: "firstName",
            value: profile.dob,
            change: handleChangeInput
        },
        {
            label: "HEIGHT (in cm)",
            type: "number",
            id: 4,
            name: "first_name",
            placeholder: "firstName",
            value: profile.height,
            change: handleChangeInput
        },
        {
            label: "WEIGHT (in kg)",
            type: "number",
            id: 5,
            name: "first_name",
            placeholder: "firstName",
            value: profile.weight,
            change: handleChangeInput
        },
        {
            label: "BLOOD GROUP",
            type: "text",
            id: 6,
            name: "first_name",
            placeholder: "firstName",
            value: profile.blood_group,
            change: handleChangeInput
        }
    ];

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
                        <Typography
                            variant="h4"
                            className={classes.cardHeading}
                        >
                            PROFILE DETAILS
                        </Typography>
                        <CardContent>
                            <Grid container>{renderPersonalFields()}</Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} className={classes.Cardcontainers}>
                    <Card className={classes.cardStyles}>
                        <Typography
                            variant="h4"
                            className={classes.cardHeading}
                        >
                            PARENTS DETAILS
                        </Typography>
                        <CardContent>
                            <Grid container>{renderPersonalFields()}</Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
