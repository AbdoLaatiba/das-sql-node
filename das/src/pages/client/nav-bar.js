import React, { useState } from "react";
import "../../styles.scss";
import logo from "../../assets/health.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shown, setShown] = useState(false);
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width="65" height="65" />
          </Link>
        </div>
        <ul className={shown ? "navbar active" : "navbar"}>
          <li>
            <a href="" className="nav-link">
              Appointment
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Doctors
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Patient
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              About us
            </a>
          </li>
        </ul>
        <div className="icon" onClick={() => setShown(!shown)}>
          <i className={shown ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
}
