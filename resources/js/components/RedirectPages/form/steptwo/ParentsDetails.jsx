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
    }
}));

export default function ParentDetails(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "FATHER NAME",
            type: "text",
            id: 1,
            // name: "first_name",
            value: props.parent.father_name
        },
        {
            label: "FATHER PHONE NO.",
            type: "text",
            id: 2,
            // name: "first_name",
            value: props.parent.father_phone
        },
        {
            label: "FATHER OCCUPATION",
            type: "text",
            id: 3,
            // name: "first_name",
            value: props.parent.father_occupation
        },
        {
            label: "MOTHER NAME",
            type: "text",
            id: 4,
            // name: "first_name",
            value: props.parent.mother_name
        },
        {
            label: "MOTHER PHONE NO.",
            type: "text",
            id: 5,
            // name: "first_name",
            value: props.parent.mother_phone
        },
        {
            label: "MOTHER OCCUPATION",
            type: "text",
            id: 6,
            // name: "first_name",
            value: props.parent.mother_occupation
        }
    ];

    const renderParentFields = () =>
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
                PARENTS DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderParentFields()}</Grid>
            </CardContent>
        </>
    );
}
