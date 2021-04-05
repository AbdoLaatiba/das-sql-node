import React, { useState } from "react";
import "../../styles.scss";
import logo from "../../assets/health.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shown, setShown] = useState(false);
  const [dropdoc, setDropdoc] = useState(false);
  const [droppat, setDroppat] = useState(false);
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
          <a  className="nav-link drop" onClick={() => {setDropdoc(!dropdoc); setDroppat(false);}}>
              doctor
              <i className="fa fa-chevron-down"></i>
            </a>
            <ul className={dropdoc ? 'drop-down-list drop-active' : 'drop-down-list'}>
              <li>
                <Link to="doc/register" className="nav-link" onClick={() => {setDropdoc(!dropdoc); setShown(false);}}>Register</Link>
              </li>
              <li>
              <Link to="/signin" className="nav-link" onClick={() => {setDropdoc(!dropdoc); setShown(false);}}>Log in</Link>
              </li>
              <li>
              <Link to="/doctor/dashboard" className="nav-link" onClick={() => {setDropdoc(!dropdoc); setShown(false);}}>Doctor dashboard</Link>
              </li>
            </ul>
          </li>


          <li>
          <a  className="nav-link drop" onClick={() => {setDroppat(!droppat); setDropdoc(false);}}>
              Patient
              <i className="fa fa-chevron-down"></i>
            </a>
            <ul className={droppat ? 'drop-down-list drop-active' : 'drop-down-list'}>
              <li>
                <Link to="doc/register" className="nav-link" onClick={() => {setDroppat(!droppat); setShown(false);}}>Register</Link>
              </li>
              <li>
              <Link to="/signin" className="nav-link" onClick={() => {setDroppat(!droppat); setShown(false);}}>Log in</Link>
              </li>
              <li>
              <Link to="/doctor/dashboard" className="nav-link" onClick={() => {setDroppat(!droppat); setShown(false);}}>Patient dashboard</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className="nav-link">
              About us
            </a>
          </li>
        </ul>
        <div className="icon" onClick={() => {setShown(!shown); setDropdoc(false); setDroppat(false);}}>
          <i className={shown ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
}
