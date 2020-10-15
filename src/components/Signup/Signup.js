import React from "react";

import "./Signup.scss";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "../../firebase";

import TwitterIcon from "@material-ui/icons/Twitter";
import image from "../../signin.svg";

function Signup() {
  const signUpwithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
      console.log(result);
    });
  };

  const signUpwithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then((result) => {
      console.log(result);
    });
  };

  const signUpwithTwitter = () => {
    auth.signInWithPopup(twitterProvider).then((result) => {
      console.log(twitterProvider);
    });
  };

  return (
    <div className="signup">
      <div className="signup_form">
        <h2>Sign Up</h2>
        <p>Sign up and get started.</p>
        <button onClick={signUpwithGoogle} className="signUpwithGoogle">
          <img
            src="http://pngimg.com/uploads/google/google_PNG19635.png"
            alt="google"
          ></img>
          Sign Up with Google
        </button>
        <button onClick={signUpwithFacebook} className="signUpwithFacebook">
          <h1>f</h1>
          Sign Up with Facebook
        </button>
        <button onClick={signUpwithTwitter} className="signUpwithTwitter">
          <TwitterIcon className="twitter_icon" />
          Sign Up with Twitter
        </button>
      </div>

      <div className="png">
        <img src={image}></img>
      </div>
    </div>
  );
}

export default Signup;
