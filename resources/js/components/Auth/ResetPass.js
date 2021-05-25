import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";
import {useParams} from 'react-router-dom';
import Footer from "../HomeComponent/SideComponents/Footer";
import Notisfication from './Notisfication';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import intro from '../../../images/1.jpg';

const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.palette.primary.light,
    minHeight: "100vh",
  },
  box: {
    marginTop: theme.spacing(0)
  },
  container:{
    width: "100%"
  },
  loginCard:{
    width: "75%",
    margin: "auto",
    marginTop: "35px",
    borderRadius: "10px",
    boxShadow: "0px 15px 25px #00000033",
    background: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  hero:{
    width: "50%",
    marginTop: "20px",
    marginBottom: "20px",
    ['@media (max-width:960px)']: {
      display: "none",
  },
  },
  pic:{
    width: "100%",
    borderRadius: "3%",
  },
  paper: {
    width: "40%",
    boxShadow: "none",
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    ['@media (max-width:960px)']: {
      width: "100%",
  },
  },
  icon:{
    fontSize: "90px",
  },
  heading:{
    color: "#193b68",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
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
    borderColor: "#757575",
  },
  focused: {
    borderColor: theme.palette.secondary.main,
  },
  
  link: {
    color: theme.palette.primary.main,
  }
}));

export default function ResetPass() {
  const classes = useStyles();
  let { token } = useParams();
  const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState({isOpen:false, message:"", type:""});

const validate = () => {
  let temp = {}
  temp.password = state.password.length>5 ? "": "Password must be atleast 6 characters."
  temp.confirmPassword = state.confirmPassword.length>5 ? "": "Password must be atleast 6 characters."
  setErrors({
    ...temp
  })

  return true
}
  const [state , setState] = useState({
    password: "",
    confirmPassword: "",
    token: ""
});


const handlepasswordChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
}

const handleConPasswordChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
}

const handleFormSubmit= async (event)=>{
    event.preventDefault();
    if(validate()){}
    axios.post('/reset-password', {
      password: state.password,
      confirmPassword: state.confirmPassword,
      token: token
  })
  .then((response) => {
    var user=response.data.msg
    if(user){
      setNotify({isOpen:true, message:user, type:'error'})
    }
    if(response.data.alert){
      setNotify({isOpen:true, message:response.data.alert, type:'success'})
    }
    if(response.data.status === 200){
      window.location.href = window.origin+ "/login";
    }
  })
  .catch((error) => {
      console.log(error);
  });
  };
  return (
    <div className={classes.root}>
    <Header />
    <div className={classes.container}>
      <CssBaseline />
      <div className={classes.loginCard}>
        <div className={classes.hero}>
          <img src={intro} className={classes.pic} />
        </div>
      <Box boxShadow={2} className={classes.paper}>
        <Typography component="h2" variant="h4" className={classes.heading}>
          Enter New Password
        </Typography>
        <form onSubmit={(event) => handleFormSubmit(event)} className={classes.form}>
        <Notisfication notify={notify} setNotify={setNotify} />
        <TextField
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            defaultValue={state.password}
            onChange={handlepasswordChange}
            {...(errors.password && {error:true, helperText:errors.password})}
          />
          <TextField
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm-Password"
            type="password"
            id="Conpassword"
            defaultValue={state.confirmPassword}
            onChange={handleConPasswordChange}
            {...(errors.confirmPassword && {error:true, helperText:errors.confirmPassword})}
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
      </div>
    </div>
    <Footer />
    </div>
  );
}