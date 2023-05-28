import React, { useRef } from "react";
import Modal from "../UI/Modal";
import classes from "./SignIn.module.css";
import { auth } from "../../firebase";
function SignIn() {
  const emailRef = useRef();
  const passRef = useRef();
  const SignInHandler = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passInput = passRef.current.value;
    auth
      .signInWithEmailAndPassword(emailInput, passInput)
      .then((authUser) => console.log(authUser))
      .catch((err) => alert(err.message));
  };
  const SignUpHandler = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passInput = passRef.current.value;
    auth
      .createUserWithEmailAndPassword(emailInput, passInput)
      .then((authUser) => console.log(authUser))
      .catch((err) => alert(err.message));
  };
  return (
    <Modal>
      <form className={classes.signin} onSubmit={SignInHandler}>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passRef} />
        <button type="submit">Sign In</button>
        <h4>
          <span className={classes.signup_gray}>New to Netflix? </span>
          <span className={classes.signup_link} onClick={SignUpHandler}>
            Sign up now
          </span>
        </h4>
      </form>
    </Modal>
  );
}

export default SignIn;
