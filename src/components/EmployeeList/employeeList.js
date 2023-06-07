import React from "react"
import Logo from '../../assets/_logo/the-godfather.svg';
import "./employeeList.scss"

const EmployeeList = ({currentId, employees, onChange}) => {
  return (
    <div className="employee-list">
      <div className="employee-list__logo"><img src={Logo} alt="logo" /></div>
      <div className="employee-list__container">
        {employees?.length > 0 &&
          employees.map((item, id) => <div key={id} style={{fontSize : `${employees[id].popularity * 0.8}rem`}} className={`employee-list__container__item ${currentId === id && 'active'}` } onClick={onChange(id)}>{item?.name}</div>)}
      </div>
    </div>
  )
}

export default EmployeeList