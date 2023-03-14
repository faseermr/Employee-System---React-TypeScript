import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import employeeServices from "../../services/employeeServices";
import employeeTypeServices from "../../services/employeeTypeServices";
import { employeeValidationSchema } from "../../validation/employeeValidationSchema";
import { Employee } from "../../models/Employee";

const UpdateEmployeeForm = () => {
  const [employeeTypes, setEmployeeTypes] = useState([]);

  const navigate = useNavigate();
  const { emp_id } = useParams();
  const [initialValues, setInitialValues] = useState<Employee>({
    emp_id: undefined,
    full_name: "",
    name_initial: "",
    display_name: "",
    gender_id: undefined,
    date_of_birth: "",
    email: "",
    mobile_no: undefined,
    designation: "",
    emp_type: undefined,
    join_date: "",
    experience: undefined,
    salary: undefined,
    personal_notes: "",
  });
  const [currentEmployee, setCurrentEmployee] =
    useState<Employee>(initialValues);

  const formik = useFormik({
    initialValues: {
      full_name: currentEmployee.full_name,
      name_initial: currentEmployee.name_initial,
      display_name: currentEmployee.display_name,
      gender_id: currentEmployee.gender_id,
      date_of_birth: currentEmployee.date_of_birth,
      email: currentEmployee.email,
      mobile_no: currentEmployee.mobile_no,
      designation: currentEmployee.designation,
      emp_type: currentEmployee.emp_type,
      join_date: currentEmployee.join_date,
      experience: currentEmployee.experience,
      salary: currentEmployee.salary,
      personal_notes: currentEmployee.personal_notes,
    },
    validationSchema: employeeValidationSchema,
    enableReinitialize: true,
    onSubmit: async (employee) => {
      //  console.log(employee);

      const res = await employeeServices.updateEmployee(emp_id, {
        full_name: employee.full_name,
        name_initial: employee.name_initial,
        display_name: employee.display_name,
        gender_id: employee.gender_id,
        date_of_birth: employee.date_of_birth,
        email: employee.email,
        mobile_no: employee.mobile_no,
        designation: employee.designation,
        emp_type: employee.emp_type,
        join_date: employee.join_date,
        experience: employee.experience,
        salary: employee.salary,
        personal_notes: employee.personal_notes,
      });

      alert(res.data.message);
      navigate("/");
    },
  });

  // to get all employee types
  const getAllEmployeesTypes = async () => {
    const res = await employeeTypeServices.getAllEmployeesTypes();
    setEmployeeTypes(res.data);
  };

  // to get employee data by id
  const getEmployeeById = async (emp_id: any) => {
    const res = await employeeServices.getEmployeeById(emp_id);
    setCurrentEmployee({
      full_name: res.data[0].full_name,
      name_initial: res.data[0].name_initial,
      display_name: res.data[0].display_name,
      gender_id: res.data[0].gender_id,
      date_of_birth: res.data[0].date_of_birth,
      email: res.data[0].email,
      mobile_no: res.data[0].mobile_no,
      designation: res.data[0].designation,
      emp_type: res.data[0].emp_type,
      join_date: res.data[0].join_date,
      experience: res.data[0].experience,
      salary: res.data[0].salary,
      personal_notes: res.data[0].personal_notes,
    });
  };

  useEffect(() => {
    getAllEmployeesTypes();
  }, []);

  useEffect(() => {
    getEmployeeById(emp_id);
  }, [emp_id]);

  return (
    <div className="card">
      <div className="card-header p-3 fw-bold">Edit People</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <label className="text-primary fw-bold">Full Name*</label>
              <input
                type="text"
                className="form-control"
                name="full_name"
                defaultValue={currentEmployee.full_name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.full_name && formik.errors.full_name ? (
                <div className="text-danger ml-4">
                  {formik.errors.full_name}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">
                Name with initials*
              </label>
              <input
                type="text"
                className="form-control"
                name="name_initial"
                defaultValue={currentEmployee.name_initial}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.name_initial && formik.errors.name_initial ? (
                <div className="text-danger ml-4">
                  {formik.errors.name_initial}
                </div>
              ) : null}{" "}
            </div>
            <div className="col-6">
              <label className="text-primary fw-bold">
                Prefered/ Display Name*
              </label>
              <input
                type="text"
                className="form-control"
                name="display_name"
                defaultValue={currentEmployee.display_name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.display_name && formik.errors.display_name ? (
                <div className="text-danger ml-4">
                  {formik.errors.display_name}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">Gender</label>
              <select
                className="form-select"
                name="gender_id"
                defaultValue={currentEmployee.gender_id}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option selected disabled>
                  --Select One--
                </option>
                <option value={1} selected={currentEmployee.gender_id == 1}>
                  Male
                </option>
                <option value={2} selected={currentEmployee.gender_id == 1}>
                  Female
                </option>
              </select>
              {formik.touched.gender_id && formik.errors.gender_id ? (
                <div className="text-danger ml-4">
                  {formik.errors.gender_id}
                </div>
              ) : null}{" "}
            </div>
            <div className="col-6">
              <label className="text-primary fw-bold">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                max={new Date().toISOString().split("T")[0]}
                name="date_of_birth"
                defaultValue={currentEmployee.date_of_birth}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                <div className="text-danger ml-4">
                  {formik.errors.date_of_birth}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                defaultValue={currentEmployee.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger ml-4">{formik.errors.email}</div>
              ) : null}{" "}
            </div>
            <div className="col-6">
              <label className="text-primary fw-bold">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="mobile_no"
                defaultValue={currentEmployee.mobile_no}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.mobile_no && formik.errors.mobile_no ? (
                <div className="text-danger ml-4">
                  {formik.errors.mobile_no}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">Designation</label>
              <input
                type="text"
                className="form-control"
                name="designation"
                defaultValue={currentEmployee.designation}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.designation && formik.errors.designation ? (
                <div className="text-danger ml-4">
                  {formik.errors.designation}
                </div>
              ) : null}{" "}
            </div>
            <div className="col-6">
              <label className="text-primary fw-bold">Employment Type</label>
              <select
                className="form-select "
                name="emp_type"
                defaultValue={currentEmployee.emp_type}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option disabled selected>
                  Employee Types
                </option>
                {employeeTypes.map((type: any, idx: any) => {
                  return (
                    <option
                      key={idx}
                      value={type.emp_type_id}
                      selected={type.emp_type_id == currentEmployee.emp_type}
                    >
                      {type.emp_type_name}
                    </option>
                  );
                })}
              </select>
              {formik.touched.emp_type && formik.errors.emp_type ? (
                <div className="text-danger ml-4">{formik.errors.emp_type}</div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">Joined Date</label>
              <input
                type="date"
                className="form-control"
                max={new Date().toISOString().split("T")[0]}
                name="join_date"
                defaultValue={currentEmployee.join_date}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.join_date && formik.errors.join_date ? (
                <div className="text-danger ml-4">
                  {formik.errors.join_date}
                </div>
              ) : null}{" "}
            </div>
            <div className="col-6">
              <label className="text-primary fw-bold">Experience</label>
              <input
                type="text"
                className="form-control"
                name="experience"
                defaultValue={currentEmployee.experience}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.experience && formik.errors.experience ? (
                <div className="text-danger ml-4">
                  {formik.errors.experience}
                </div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="text-primary fw-bold">Salary</label>
              <input
                type="text"
                className="form-control"
                name="salary"
                defaultValue={currentEmployee.salary}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.salary && formik.errors.salary ? (
                <div className="text-danger ml-4">{formik.errors.salary}</div>
              ) : null}{" "}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="text-primary fw-bold">Personal Notes</label>
              <textarea
                className="form-control"
                name="personal_notes"
                defaultValue={currentEmployee.personal_notes}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.personal_notes && formik.errors.personal_notes ? (
                <div className="text-danger ml-4">
                  {formik.errors.personal_notes}
                </div>
              ) : null}{" "}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end">
            <button className="btn text-primary" onClick={() => navigate(`/`)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary ml-2">
              Update People
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
