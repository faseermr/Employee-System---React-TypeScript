import React, { useState, useEffect } from "react";
import employeeTypeServices from "../../services/employeeTypeServices";

type PropsType = {
  employee_type: number;
  setEmployee_type: React.Dispatch<React.SetStateAction<any>>;
};
const SelectEmployeeType: React.FC<PropsType> = ({
  employee_type,
  setEmployee_type,
}) => {
  const [employeeTypes, setEmployeeTypes] = useState([]);

  const getAllEmployeesTypes = async () => {
    const res = await employeeTypeServices.getAllEmployeesTypes();
    setEmployeeTypes(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    getAllEmployeesTypes();
  }, []);
  return (
    <select
      className="form-select w-25 "
      onChange={(e) => setEmployee_type(e.target.value)}
    >
      <option value={0}>Employee Types</option>
      {employeeTypes.map((type: any, idx: any) => {
        return (
          <option key={idx} value={type.emp_type_id}>
            {type.emp_type_name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectEmployeeType;
