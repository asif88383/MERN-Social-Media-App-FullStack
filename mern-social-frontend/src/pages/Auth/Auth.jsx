import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [isSignUp, SetIsSignUp] = useState(false);

  return (
    <div className="Auth">
      {/* left side? */}
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1>MAAS Studios</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right side */}
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                className="infoInput"
                placeholder="First Name"
                name="firstname"
              />
              <input
                type="text"
                className="infoInput"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Username"
              name="username"
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                placeholder="Confirm Password"
                name="confirmpassword"
              />
            )}
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an Account? <a href="/signin">Log In</a>
            </span>
          </div>
          <button type="submit" className="infoButton button">
            {isSignUp? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};


function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Username"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="infoInput"
            placeholder="Confirm Password"
            name="confirmpassword"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an Account? <a href="/signin">Log In</a>
          </span>
        </div>
        <button type="submit" className="infoButton button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
