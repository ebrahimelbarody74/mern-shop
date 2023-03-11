import React from "react";
import "./Register.scss";
function Register() {
  return (
    <div className="register">
      <div className="form">
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <input type="text" name="fname" placeholder="name" />
          <input type="text" name="lname" placeholder="last name" />
          <input type="text" name="username" placeholder="username" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </p>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
