import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, DialogContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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
        minWidth: 120
    },
    heading: {
        paddingTop: "20px"
    },
    para: {
        color: "#000"
    },
    box: {
        margin: "30px auto 60px",
        width: "60%",
        alignContent: "center",
        background: theme.palette.secondary.main,
        color: theme.palette.primary.dark,
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033",
        ["@media (max-width:960px)"]: {
            width: "90%"
        }
    },
    hr: {
        color: "#038ed4",
        font: "2px"
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    Cardcontainers: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "0px 0px"
    },
    cardStyles: {
        width: "90%",
        borderRadius: "10px",
        boxShadow: "0px 15px 25px #00000033"
    },
    loader: {
        padding: "10px"
    },
    pos: {
        float: "right"
    },
    btnBox: {
        width: "90%",
        margin: "20px auto",
        paddingBottom: "10px",
        textAlign: "right"
    },
    button: {
        // marginRight: theme.spacing(1)
        border: "none",
        textDecoration: "none",
        padding: "10px 35px",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
        borderRadius: "20px",
        boxShadow: "0px 15px 25px #038ed433",
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main
        }
    },

    cardHeading: {
        color: theme.palette.primary.dark,
        display: "flex",
        justifyContent: "flex-start",
        padding: "0px",
        paddingLeft: "15px",
        fontWeight: "400",
        fontSize: "22px"
    },
    textFieldContainer: {
        width: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        padding: "0px 0px"
    },
    fields: {
        width: "80%"
    },
    notchedOutline: {
        boxShadow: "0px 2px 6px #75757533"
    },
    focused: {
        borderColor: theme.palette.secondary.main,
        boxShadow: "0px 2px 6px #038ed433"
    },
    outerSpan: {
        padding: "5px 0px",
        textAlign: "left"
    },
    keySpan: {
        fontSize: "18px",
        color: "#038ed4"
    },
    valueSpan: {
        fontSize: "18px"
    }
}));

function ProfilePreview(props) {
    const classes = useStyles();

    const renderFields = () =>
        props.data.map(field => {
            return (
                <Grid
                    key={field.id}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    className={classes.textFieldContainer}
                >
                    <span className={classes.outerSpan}>
                        <span className={classes.keySpan}>
                            {field.label} :
                        </span>
                        <span className={classes.valueSpan}>
                            {field.value}
                        </span>
                    </span>
                </Grid>
            );
        });
    return (
        <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.Cardcontainers}>
            <div>
                <Typography
                    variant="h4"
                    className={classes.cardHeading}
                >
                    Twelfth Details
                </Typography>
                <CardContent>
                    <Grid container>{renderFields()}</Grid>
                </CardContent>
            </div>
        </Grid>
    </Grid>
    )
}

export default ProfilePreview
