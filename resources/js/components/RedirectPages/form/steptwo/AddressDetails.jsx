import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({

    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "center",
        padding: "20px 0px",
        fontWeight: "500",
        backgroundColor: "#038ed459",
    }, 
    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "20px 0px",
        width: "30%"
    },
    fields:{
        width: "80%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533",
      },
      focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
      },
}));

export default function AddressDetails(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "STREET*",
            type: "text",
            id: 1,
            value: props.address.address,
            validate: props.Errors.street
        },
        {
            label: "CITY/VILLAGE*",
            type: "text",
            id: 2,
            value: props.address.city,
            validate: props.Errors.city
        },
        {
            label: "DISTRICT*",
            type: "text",
            id: 3,
            value: props.address.district,
            validate: props.Errors.district

        },
        {
            label: "PINCODE*",
            type: "text",
            id: 4,
            value: props.address.pincode,
            validate: props.Errors.pincode2
        },

        {
            label: "STATE*",
            type: "text",
            id: 5,
            value: props.address.state,
            validate: props.Errors.state
        },

    ];

    const renderFields = () =>
        fields.map(field => (
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
                        className={classes.fields}
                        InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                              focused: classes.focused
                            }
                        }}
                        id="outlined-basic"
                        name={field.name}
                        variant="outlined"
                        label={field.label}
                        value={field.value}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                        {...(field.validate && {error:true, helperText:field.validate})}
                    />
                </Grid>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Address Details
            </Typography>
            <CardContent>
                <Grid container>{renderFields()}</Grid>
            </CardContent>
        </>
    );
}

