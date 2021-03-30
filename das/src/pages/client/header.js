import React from "react";
import "../../styles.scss";

export default function Header() {
  return (
    <div className="header">
      <span>Find doctors from your home</span>
      <form action="">
        <div className="form-item">
          {/* <label htmlFor="city">filter by city</label> */}
          <input type="text" placeholder="City ..." />
        </div>
        <div className="form-item">
          {/* <label htmlFor="city">filter by spacialty</label> */}
          <input type="text" placeholder="Specialty ..." />
        </div>

        <div className="form-item">
          <input type="submit" value="Search doctors" />
        </div>
      </form>
    </div>
  );
}
