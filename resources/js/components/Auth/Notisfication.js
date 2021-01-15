
import { Alert } from '@material-ui/lab';
import {makeStyles} from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    close:{
        marginRight: "5px"
    }
}));
export default function Notisfication(props){
    const {notify, setNotify} = props;
    const classes = useStyles();
    const handleClose = (event, reason) =>{
        setNotify({
            ...notify,
            isOpen:false})
    }

    return (
            <Alert severity={notify.type} open={notify.isOpen} autoHideDuration={3000}>
                {notify.message}
                <div className={classes.close} onClose={handleClose}></div>
            </Alert>
    )
}