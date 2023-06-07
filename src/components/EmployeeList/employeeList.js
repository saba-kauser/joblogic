import React from "react";
import Logo from "../../assets/_logo/the-godfather.svg";
import "./employeeList.scss";

const EmployeeList = ({ currentId, employee, onChange }) => {
  return (
    <div className="employee-list">
      <div className="employee-list__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="employee-list__container">
        {employee?.length > 0 &&
          employee.map((item, id) => (
            <div
              key={id}
              style={{ fontSize: `${employee[id].popularity * 0.8}rem` }}
              className={`employee-list__container__item ${
                currentId === id && "active"
              }`}
              onClick={onChange(id)}
            >
              {item?.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
