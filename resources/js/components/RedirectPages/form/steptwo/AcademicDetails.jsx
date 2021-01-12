import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

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

export default function Details(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "UNIVERSITY ROLL NO.",
            type: "text",
            id: 1,
            // name: "first_name",
            value: props.academics.university_roll,
            select: "",
            disabled:"true"
        },
        {
            label: "COLLEGE ROLL NO.",
            type: "text",
            id: 2,
            // name: "first_name",
            value: props.academics.college_roll,
            select: "",
            disabled:"true"

        },
        {
            label: "Category",
            type: "text",
            id: 3,
            value: props.academics.category,
            select: ""
        },
        {
            label: "BATCH",
            type: "text",
            id: 4,
            value: props.academics.batch,
            select: "true"
        },
        {
            label: "COURSE",
            type: "text",
            id: 5,
            value: props.academics.course,
            select: "true"
        },
        {
            label: "STREAM",
            type: "text",
            id: 6,
            value: props.academics.stream,
            select: "true"
        },
        {
            label: "SECTION",
            type: "text",
            id: 7,
            value: props.academics.section,
            select: ""
        },
        {
            label: "SHIFT",
            type: "text",
            id: 8,
            value: props.academics.shift,
            select: "true"
        },
        {
            label: "TRAINING SEM",
            type: "text",
            id: 9,
            value: props.academics.training_sem,
            select: "true"
        }
    ];
    const currencies = [
        {
            value: "USD",
            label: "one"
        },
        {
            value: "EUR",
            label: "two"
        },
        {
            value: "BTC",
            label: "three"
        },
        {
            value: "JPY",
            label: "four"
        }
    ];

    const renderSelect = i => {
        return (
            <>
               { currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </>
        );
    };

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
                        select={field.select}
                        style={{minWidth:"300px"}}
                        disabled={field.disabled}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    >
                        {renderSelect(field.id)}
                    </TextField>
                </Grid>
            </>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                ACADEMIC DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderParentFields()}</Grid>
            </CardContent>
        </>
    );
}
