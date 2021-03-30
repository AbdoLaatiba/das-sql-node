import React from "react";
import "../../styles.scss";

import DisplayCard from "../../components/displayCard";

export default function DisplayResults() {
  return (
    <div className="display-container">
      <h1>Available Appointments</h1>
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
    </div>
  );
}
