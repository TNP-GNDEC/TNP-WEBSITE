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
        padding: "20px 63px"
    }
}));

export default function ParentDetails(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "FATHER NAME",
            type: "text",
            id: 1,
            value: props.parent.father_name,
            required:true,
            maxLength:80
        },
        {
            label: "FATHER PHONE NO.",
            type: "text",
            id: 2,
            value: props.parent.father_phone,
            required:true,
            maxLength:10
        },
        {
            label: "MOTHER NAME",
            type: "text",
            id: 3,
            value: props.parent.mother_name,
            required:true,
            maxLength:80
        },
        {
            label: "MOTHER PHONE NO.",
            type: "text",
            id: 4,
            value: props.parent.mother_phone,
            required:true,
            maxLength:10
        }
    ];

    const renderParentFields = () =>
        fields.map(field => (
            <>
                <Grid
                    key={field.label}
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
                        inputProps={{maxLength:field.maxLength}}
                        value={field.value}
                        style={{ minWidth:"230px"}}
                        required={field.required}
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
