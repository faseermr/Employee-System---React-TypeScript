import http from "./http";

// to get all employees details
const getAllEmployees = () => {
  return http.get("/employee");
};

// to get employee details by employee type
const getAllEmployeesByEmployeeType = (emp_type: any) => {
  return http.get(`/employee/employee_type/${emp_type}`);
};

// to get employee detail by employee id
const getEmployeeById = (emp_id: any) => {
  return http.get(`/employee/employee_id/${emp_id}`);
};

// to add new employee details
const addNewEmployee = (employee: any) => {
  return http.post(`/employee`, employee);
};

// to delete employee details
const deleteEmployee = (emp_id: any) => {
  return http.delete(`/employee/${emp_id}`);
};

// to update employee details
const updateEmployee = (emp_id: any, employee: any) => {
  return http.put(`/employee/update/${emp_id}`, employee);
};

export default {
  getAllEmployees,
  getAllEmployeesByEmployeeType,
  addNewEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
};
