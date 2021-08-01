import React from "react";
import firebase from "firebase";
import fire from "../fire";
import { Button, Grid, Typography } from "@material-ui/core";

const Login = (props) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  const login = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
        .then((result) => {
          props.history.push("/home");
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
          console.log(user);
          
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "70vh" }}
      >
        <Grid item>
          <Button onClick={login} variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
