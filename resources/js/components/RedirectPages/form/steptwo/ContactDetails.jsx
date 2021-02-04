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
        padding: "20px 120px"
    },
    fields:{
        width: "90%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533",
      },
      focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
      },
}));

export default function ContactDetails(props) {
    const classes = useStyles();
    const [truthy, setT] = React.useState(false);
    const fields = [
        {
            label: " WHATSAPP CONTACT NO.",
            type: "text",
            id: 1,
            value: props.contact.whatsapp_contact,
            eror: ""
        },
        {
            label: "CONTACT NO.",
            type: "text",
            id: 2,
            value: props.contact.contact,
            eror: props.eror.contact
        },
        {
            label: "RE-ENTER CONTACT NO.",
            type: "text",
            id: 3,
            value: props.contact.re_enter_contact,
            eror: props.eror.contact
        }
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
                    style={{ minWidth: "230px" }}
                    required={true}
                    error={
                        props.contact.contact === props.contact.re_enter_contact
                            ? props.handleEror(false)
                            : field.id === 3
                            ? props.handleEror(true,"contact")
                            : props.handleEror(false)
                    }
                    helperText={
                        props.contact.contact === props.contact.re_enter_contact
                            ? ""
                            : field.id === 3
                            ? "Numbers did'nt match"
                            : ""
                    }
                    inputProps={{ maxLength: 10, minLength: 10 }}
                    onChange={e => {
                        props.handleInputChange(e, field.id);
                    }}
                />
            </Grid>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                Contact Details
            </Typography>
            <CardContent>
                <Grid container>{renderFields()}</Grid>
            </CardContent>
        </>
    );
}
