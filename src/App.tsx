import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/employee/EmployeeList";
import AddEmployeeForm from "./components/employee/AddEmployeeForm";
import UpdateEmployeeForm from "./components/employee/UpdateEmployeeForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add-people" element={<AddEmployeeForm />} />
          <Route
            path="/update-people/:emp_id"
            element={<UpdateEmployeeForm />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
