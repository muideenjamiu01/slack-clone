import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../../firebase";

import { actionTypes } from "./../../reducer";
import { useStateValue } from "./../../StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.svgporn.com/logos/slack.svg" alt="" />
        <h1>Sign in to MMJ Slack App</h1>
        <p>MMJ.slack.com</p>
        <Button onClick={signIn}>Sign In WIth Google</Button>
      </div>
    </div>
  );
};

export default Login;
