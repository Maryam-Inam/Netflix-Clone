import React, { useState } from "react";
import classes from "./Login.module.css";
import SignIn from "./SignIn";
function Login() {
  const [signIn, setSignIn] = useState(false);
  const handleSignIn = () => {
    setSignIn(true);
  };

  const loginBackground = (
    <div className={classes.login_background}>
      <img
        className={classes.back__logo}
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="navbar"
      />
      <button className={classes.button} onClick={handleSignIn}>
        Sign In
      </button>
      <div className={classes.back__gradient} />
    </div>
  );
  const loginContents = (
    <div className={classes.login_body}>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership
      </h3>
      <div className={classes.login_input}>
        <form>
          <input type="email" placeholder="Email Address" />
          <button onClick={handleSignIn}>GET STARTED</button>
        </form>
      </div>
    </div>
  );
  return (
    <div className={classes.login}>
      {loginBackground}
      {signIn ? <SignIn /> : loginContents}
    </div>
  );
}

export default Login;
