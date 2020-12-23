import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

async function doUserLogin(credentials) {
  try {
    const response = await axios.post("http://localhost:8000/api/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error", error.response);
    return false;
  }
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.secondary.main,
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

export default function SignIn() {
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
    const postData = {
      username: state.username,
      password: state.password,
    };
    const data = await doUserLogin(postData);
    if (data) {
      alert(data.role)
    } 
    else {
      alert("Please check your credentials and try agian");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(event) => handleFormSubmit(event)} className={classes.form} noValidate>
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
            label="username"
            name="username"
            autoFocus
            defaultValue={state.username}
            onChange={handlenameChange} 
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
          <Grid container>
            <Grid item xs>
              {/* <Link className={classes.link} href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            {/* <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
    </Container>
  );
}