import React, { useState } from "react";
import "./doctor.scss";

const axios = require("axios");

export default class Doctorregister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      phone_number: "",
      city: "",
      cost: "",
      specialty: "",
      education: "",
      image: null,
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onfilechange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // const formdata = new FormData();
    // const {
    //   name,
    //   email,
    //   password,
    //   address,
    //   phone_number,
    //   cost,
    //   city,
    //   specialty,
    //   education,
    //   image,
    // } = this.state;

    // formdata.append("name", name);
    // formdata.append("email", email);
    // formdata.append("password", password);
    // formdata.append("address", address);
    // formdata.append("phone_number", phone_number);
    // formdata.append("cost", cost);
    // formdata.append("city", city);
    // formdata.append("specialty", specialty);
    // formdata.append("education", education);
    // formdata.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/doctors/create", this.state, {
        Headers: {
          "Content-Type": "multipart/form-dat",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        {/* Register Form */}
        <div className="register">
          <form onSubmit={this.handleSubmit}>
            <h1>Register</h1>
            <div className="form-group">
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="full name "
                  onChange={this.onChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address "
                  onChange={this.onChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="phone_number">Phone number</label>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="phone_number "
                  onChange={this.onChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" placeholder="city" onChange={this.onChange}/>
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="specialty">Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  id="specialty"
                  placeholder="specialty"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="cost">Cost</label>
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  placeholder="cost"
                  step="0.1"
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-input">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) =>this.onfilechange}
                />
              </div>
              {/* <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="email" />
            </div> */}
              <div className="form-input">
                <label htmlFor="education">Education</label>
                <input
                  type="text"
                  name="education"
                  id="education"
                  placeholder="education"
                  onChange={this.onChange}
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
}
