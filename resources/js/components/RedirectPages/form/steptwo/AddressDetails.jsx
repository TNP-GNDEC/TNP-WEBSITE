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
        padding: "20px 60px"
    },

}));

export default function AddressDetails(props) {
    const classes = useStyles();
    const fields = [
        {
            label: "STREET",
            type: "text",
            id: 1,
            value: props.address.address,
        },
        {
            label: "CITY/VILLAGE",
            type: "text",
            id: 2,
            value: props.address.city,
        },
        {
            label: "DISTRICT",
            type: "text",
            id: 3,
            value: props.address.district,

        },
        {
            label: "PINCODE",
            type: "text",
            id: 4,
            value: props.address.pincode,

        },

        {
            label: "STATE",
            type: "text",
            id: 5,
            value: props.address.state,
            
        },

    ];

    const renderFields = () =>
        fields.map(field => (
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
                        style={{ minWidth:"260px"}}
                        value={field.value}
                        onChange={e => {
                            props.handleInputChange(e, field.id);
                        }}
                    />
                </Grid>
        ));
    return (
        <>
            <Typography variant="h4" className={classes.cardHeading}>
                ADDRESS DETAILS
            </Typography>
            <CardContent>
                <Grid container>{renderFields()}</Grid>
            </CardContent>
        </>
    );
}

