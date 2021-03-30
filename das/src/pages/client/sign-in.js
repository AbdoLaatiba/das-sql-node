import React from "react";
import "../doctor/doctor.scss";

export default function Signin() {
  return (
    <div className="sign-in">
      <form action="">
        <h1>Sign in</h1>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Name " />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password "
          />
        </div>
        <div className="button">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
}
