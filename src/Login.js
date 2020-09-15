import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Created New User with Email and Password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h5>Passoword:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signinButton"
            onClick={signIn}
          >
            Sign In
          </button>

          <button onClick={signUp} className="login__signupButton">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
