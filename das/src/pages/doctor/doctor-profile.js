import React from "react";
import doctor from "../../assets/doctor.jpg";

export default function Doctorprofile() {
  return (
    <div className="profile">
      <div className="profile-bio">
        <div className="prof-img">
          <img src={doctor} alt="" />
          <span>doctor name</span>
          <span>doctor specialty</span>
        </div>
        <div className="prof-personel-info">
          <table>
            <tr>
              <td>
                <span>Address</span>
              </td>
              <td>
                <span>hay taddart anza</span>
              </td>
            </tr>

            <tr>
              <td>
                <span>Phone number</span>
              </td>
              <td>
                <span>07 67 65 32 87</span>
              </td>
            </tr>

            <tr>
              <td>
                <span>City</span>
              </td>
              <td>
                <span>Agadir</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="profesional-info">
        <div className="specialties">
          <ul>
            <li>Specialty 1</li>
            <li>Specialty 2</li>
            <li>Specialty 3</li>
          </ul>
        </div>

        <div className="educations">
          <ul>
            <li>Education 1</li>
            <li>Education 2</li>
            <li>Education 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
