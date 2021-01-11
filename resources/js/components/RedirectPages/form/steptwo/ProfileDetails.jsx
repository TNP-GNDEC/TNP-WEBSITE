import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

    cardHeading: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        background: theme.palette.primary.main
    },
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px"
    },

}));

export default function ProfileDetails(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "FIRST NAME",
            type: "text",
            id: 1,
            // name: "first_name",
            value: props.Profile.first_name,
        },
        {
            label: "LAST NAME",
            type: "text",
            id: 2,
            // name: "first_name",
            value: props.Profile.last_name,
        },
        {
            label: "DATE OF BIRTH",
            type: "text",
            id: 3,
            // name: "first_name",
            value: props.Profile.dob,
        },
        {
            label: "HEIGHT (in cm)",
            type: "number",
            id: 4,
            // name: "first_name",
            value: props.Profile.height,
        },
        {
            label: "WEIGHT (in kg)",
            type: "number",
            id: 5,
            // name: "first_name",
            value: props.Profile.weight,
        },
        {
            label: "BLOOD GROUP",
            type: "text",
            id: 6,
            // name: "first_name",
            value: props.Profile.blood_group,
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
                        type={field.type}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    />
                </Grid>
            </>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                PROFILE DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderPersonalFields()}</Grid>
            </CardContent>
        </>
    );
}

