import React from "react";
import doctor from "../assets/doctor.jpg";

export default function DisplayCard({ doc }) {
  return (
    <div className="display-card">
      <div className="doctor-section">
        <div className="doc-img">
          <img src={doctor} alt="" />
        </div>
        <h3>{doc.User.name}</h3>
        <span>
          <i className="fa fa-building"></i> {doc.Specialties[0].name}
        </span>
        <span>
          <i className="fa fa-comment-dollar"></i> {doc.cost}$
        </span>
        <button>show profile</button>
      </div>
      <div className="appointment-section">
        <form action="">
          <input
            className="form-item"
            type="date"
            name=""
            id=""
            onFocus={(e) => {
              e.target.style.outline = "none";
            }}
          />
        </form>
        <div className="appontment-slots">
          {doc.Schedules.length ? (
            doc.Schedules.map((d) => {
              return d.Slots.map((s) => {
                return (
                  <div className="slot">
                    <span>{s.time}</span>
                  </div>
                );
              });
            })
          ) : (
            <div>No Slots</div>
          )}

          {/* <div className="slot">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
