import React from "react";
import "../doctor/doctor.scss";

export default function Patientregister() {
  return (
    <div>
      {/* Patient Form */}
      <div className="register">
        <form action="">
          <h1>Register</h1>
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="full name "
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-input">
              <label htmlFor="address">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password "
              />
            </div>
            <div className="form-input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="address"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="full name "
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone_number">Phone number</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="phone_number"
              />
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
