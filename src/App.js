import React, { useState } from "react";
import Header from "./components/Header/header";
import EmployeeList from "./components/EmployeeList/employeeList"
import data from "./data/EmployeeData"

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [employees, setEmployees] = useState(data.employees);

  const handleChangeEmployee = (id) => () => {
    setCurrentId(id)
  }


  return (
    <div className="app">
        <EmployeeList currentId={currentId} employees={employees} onChange={handleChangeEmployee}/>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default App;
