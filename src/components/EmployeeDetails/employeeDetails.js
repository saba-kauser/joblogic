import React from "react";
import img1 from "../../assets/_images/Profile_pics/Carlo_Rizzi.jpg";
import img2 from "../../assets/_images/Profile_pics/Carmelia_Corleone.jpg";
import img3 from "../../assets/_images/Profile_pics/kay_adams.jpg";
import img4 from "../../assets/_images/Profile_pics/Luci_Mancini.jpg";
import img5 from "../../assets/_images/Profile_pics/tom_hagen.jpg";
import img6 from "../../assets/_images/Profile_pics/Vito_Corleone.jpg";
import "./employeeDetails.scss";

const images = [img1, img2, img3, img4, img5, img6];

const EmployeeDetails = ({ employee, currentId, onChangePopularity }) => {
  if (!employee || !employee?.name) {
    return <div>No Content</div>;
  }

  return (
    <div className="container">
      <div className="employee">
        <div className="employee__img">
          <img src={images[currentId]} alt="img" />
        </div>
        <div className="employee__info">
          <div className="employee__info__name">{employee.name}</div>
          <div className="employee__info__popularity">
            <label>Popularity</label>
            <input
              type="range"
              onChange={onChangePopularity}
              min={1}
              max={10}
              step={1}
              value={employee.popularity}
              className="custom-slider"
            ></input>
          </div>
          <div className="employee__info__biography">
            <h3>Biography</h3>
            <p>{employee.biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
