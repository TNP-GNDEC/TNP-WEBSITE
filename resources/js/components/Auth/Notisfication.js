
import { Alert } from '@material-ui/lab';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


export default function Notisfication(props){
    const {notify, setNotify} = props;

    return (
        <Collapse in={notify.isOpen}>
            <Alert 
                severity={notify.type}
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setNotify({
                            isOpen: false,
                            type: ""
                        });
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
            >
                {notify.message}
            </Alert>
        </Collapse>
    )
}