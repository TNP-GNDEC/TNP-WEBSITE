import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({   

root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch ',
    },},
}));
export default function TextFeild(props) {
    const classes = useStyles();
    return ( 
           
        <div >
            
            <label for={props.for}><b>{props.for}</b></label>
           
            <form className={classes.root} noValidate autoComplete="off">
            
      <TextField variant="outlined"    noValidate autoComplete="off " className={props.className}
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder} 
                label={props.placeholder} >
                
                </TextField>
            
        
                </form>
        </div>
    );
}