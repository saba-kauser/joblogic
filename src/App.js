import React, { useState } from "react";
import Header from "./components/Header/header";
import EmployeeList from "./components/EmployeeList/employeeList";
import EmployeeDetails from "./components/EmployeeDetails/employeeDetails";
import data from "./data/EmployeeData";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [employees, setEmployees] = useState(data.employees);

  const handleChangeEmployee = (id) => () => {
    setCurrentId(id);
  };

  const updatePopularity = (e) => {
    const newData = JSON.parse(JSON.stringify(employees));
    newData[currentId].popularity = Number(e.currentTarget.value);
    setEmployees(newData);
  };

  return (
    <div className="app">
      <EmployeeList
        currentId={currentId}
        employee={employees}
        onChange={handleChangeEmployee}
      />
      <div>
        <Header />
        <EmployeeDetails
          employee={employees[currentId]}
          currentId={currentId}
          onChangePopularity={updatePopularity}
        />
      </div>
    </div>
  );
};

export default App;
