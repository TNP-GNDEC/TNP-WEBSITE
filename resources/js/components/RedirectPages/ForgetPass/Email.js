import React from 'react';
import Header from "../../Auth/Header";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.palette.secondary.main
  },
  box: {
    marginTop: theme.spacing(0)
  },
  paper: {
    boxShadow: "none",
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    width: "100px",
    height: "100px",
    backgroundColor: theme.palette.primary.main,
  },
  icon:{
    fontSize: "90px",
  },
  heading:{
    color: "#193b68",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
    borderRadius: "5px",
    boxShadow: "0px 15px 25px #038ed433",
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
    
  },
  notchedOutline: {
    borderColor: theme.palette.primary.main
  },
  focused: {
    borderColor: theme.palette.secondary.main,
  },
  
  link: {
    color: theme.palette.primary.main,
  }
}));

export default function Email() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Header />
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <Box boxShadow={2} className={classes.paper}>
        <div className={classes.box}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.icon}/>
        </Avatar>
        </div>
        <Typography component="h2" variant="h4" className={classes.heading}>
          Forget Password
        </Typography>
        <form className={classes.form}>
          <TextField    
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
    </div>
  );
}