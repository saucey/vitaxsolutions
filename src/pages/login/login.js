import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Auth } from 'aws-amplify'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { LOGIN_USER } from '../../store/actions';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
  const classes = useStyles()
  const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessaging, setErrorMessaging] = useState(null)

  const userLoggedIn = useSelector((state) => state.userLoggedIn);


  useEffect(() => {
    if (userLoggedIn !== null) {
      history.push('/home')
    }
  }, [])

  const dispatch = useDispatch()

  const onSubmit = data => {
    history.push('/home')
  }

  const loginUser = (user) => {
    dispatch(LOGIN_USER(user))
  }

  const submitForm = async () => {
    try {
      const user = await Auth.signIn(email, password)
      loginUser(user)
      return true;
    } catch (e) {
      setErrorMessaging(e.message);
      return false
    }
  }

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
        <form
          className={classes.form}
          // ref={useRef()  }
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({ required: true, validate: submitForm })}
            error={errors.email?.type === 'required' || errors.email?.type === 'validate'}
          />
          <p>
            {errors.email?.type === 'required' && <span>This field is required</span>}
            {errors.email?.type === 'validate' && <span>{errorMessaging}</span>}
          </p>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({ required: true, validate: submitForm })}
            error={errors.password?.type === 'required' || errors.password?.type === 'validate'}
          />
          <p>
            {errors.password?.type === 'required' && <span>This field is required</span>}
            {errors.password?.type === 'validate' && <span>{errorMessaging}</span>}
          </p>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
