import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const auth = getAuth();
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.push("/");
        console.log("Registered user: ", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className='login'>
        <Avatar sx={{ bgcolor: "secondary.main", margin: "0 auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>CREATE ACCOUNT</h1>
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
          onClick={handleRegister}
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, width: 360 }}>
          Log In
        </Button>
        <Grid container>
          <Grid item sx={{ margin: "0 auto" }}>
            <Link to='/enter/login'>{"Already have an account? Login"}</Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
