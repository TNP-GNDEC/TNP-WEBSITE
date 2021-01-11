import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "../HomeComponent/SideComponents/Footer";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import intro from '../../../images/2.jpg';

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
    marginTop: "50px",
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
    borderColor: "#757575",
  },
  focused: {
    borderColor: theme.palette.secondary.main,
  },
  
  link: {
    color: theme.palette.primary.main,
  }
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [state , setState] = useState({
    username : "",
    password : ""
})

const handlenameChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
}

const handlepasswordChange = (e) => {
  const name= e.target.name
  const value= e.target.value   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))

}

const handleFormSubmit= async (event)=>{
    event.preventDefault();
    
    axios.post('/api/login', {
      username: state.username,
      password: state.password,
  })
  .then((response) => {
    var user=response.data.current_user
    var JWTtoken=response.data.access_token
    localStorage.setItem('token', JWTtoken);
    localStorage.setItem('userid', user.id);
    localStorage.setItem('useruuid', user.uuid);
      if(user.role_id===1){
        console.log(user)

        if(user.email_verified_at === null){
          props.history.push("/email");
        }
        else{
          props.history.push("/student");
        }
      }
      if(user.role_id===2)
      props.history.push("/coordinator")
  })
  .catch((error) => {
      console.log(error);
  });
  };
  return (
    <div className={classes.root}>
    <Header />
    <div className={classes.card}>
    <div className={classes.container}>
      <CssBaseline />
      <div className={classes.loginCard}>
        <div className={classes.hero}>
          <img src={intro} className={classes.pic} />
        </div>
      <Box boxShadow={2} className={classes.paper}>
        <Typography component="h2" variant="h4" className={classes.heading}>
          Sign In
        </Typography>
        <form onSubmit={(event) => handleFormSubmit(event)} className={classes.form} noValidate>
          <TextField    
            variant="outlined"
            className={classes.input}
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
            name="username"
            defaultValue={state.username}
            onChange={handlenameChange} 
          />
          <TextField
            variant="outlined"
            className={classes.input}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={state.password}
            onChange={handlepasswordChange} 
          />
          <Grid container>
            <Grid item xs>
              <Link className={classes.link} to="/forgetPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
          {/* <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          
        </form>
      </Box>
      </div>
    </div>
    </div>
     <Footer />
    </div>

  );
}
