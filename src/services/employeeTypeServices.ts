import http from "./http";

// to get all employee types
const getAllEmployeesTypes = () => {
  return http.get(`/employee_type`);
};

export default {
  getAllEmployeesTypes,
};
