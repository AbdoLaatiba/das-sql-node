import React from "react";
import doctor from "../assets/doctor.jpg";

export default function DisplayCard() {
  return (
    <div className="display-card">
      <div className="doctor-section">
        <div className="doc-img">
          <img src={doctor} alt="" />
        </div>
        <h3>Doctor name</h3>
        <span>
          <i className="fa fa-building"></i> doctor specialty
        </span>
        <span>
          <i className="fa fa-comment-dollar"></i> 20$
        </span>
        <button>show profile</button>
      </div>
      <div className="appointment-section">
        <form action="">
          <input type="date" name="" id="" />
        </form>
        <div className="appontment-slots">
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
          <div className="slot">
            <span>11:15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
