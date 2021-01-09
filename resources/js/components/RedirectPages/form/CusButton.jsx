import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    
}));

export default function CusButton(props){
    const classes = useStyles();
    return (
        <div className={classes.buttonDiv} onClick={props.onClick} style={{display:"flex", alignItems:"center", justifyContent:"center" , paddingTop:"30px" }}>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        {props.label}
                    </Button>
        </div>
    );
}