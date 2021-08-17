import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import React, { FC, useState } from "react";
import { useDispatch } from "../store/store";
import { AuthAction } from "../store/auth/action";
import { useStyles } from "./login.style";

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"Zephyr32"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const LogIn: FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const emailHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (target.value !== " ") {
      setEmail(target.value);
    }
  };
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (target.value !== " ") {
      setPassword(target.value);
    }
  };
  const submitData = async () => {
    if (email && password) {
      try {
        await dispatch(AuthAction.loginRequest({ email, password }));
      } catch (e) {}
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={emailHandler}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={passwordHandler}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitData}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        <Grid item xs={false} sm={4} md={7}>
          <Link>Dont have Account? Register</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogIn;
