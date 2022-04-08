import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const history = useHistory();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //const user = userCredential.user;

        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        setError(errorCode);
      });
  };
  return (
    <>
      <div className='login'>
        <Avatar sx={{ bgcolor: "secondary.main", margin: "0 auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>LOGIN</h1>
        <p style={{ color: "red" }}>{error}</p>

        <Box component='form' noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{ width: 360 }}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
            required
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            sx={{ width: 360 }}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            required
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
        </Box>
        <Button
          onClick={handleLogin}
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, width: 360 }}>
          Log In
        </Button>
        <Grid container>
          <Grid item sx={{ margin: "0 auto" }}>
            <Link to='/enter/signup'>{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
