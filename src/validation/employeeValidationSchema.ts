import * as yup from "yup";

// yup valiation schema for employee details
export const employeeValidationSchema = () => {
  return yup.object({
    full_name: yup.string().strict().required("required"),
    display_name: yup.string().strict().required("required"),
    name_initial: yup.string().strict().required("required"),
    gender_id: yup.number().integer().required("required"),
    salary: yup.number().integer().required("required"),
    emp_type: yup.number().integer().required("required"),
    date_of_birth: yup.date().required("required"),
    email: yup.string().email("invalid email").required("required"),
    mobile_no: yup
      .number()
      .typeError("you must specify a number")
      .min(100000000, "please provide valid number")
      .max(999999999, "please provide valid number")
      //.strict()
      .required("required"),
    //     .max(new Date()),
    designation: yup.string().strict().required("required"),
    join_date: yup.date().required("required"),
    experience: yup.number().integer().required("required"),
    personal_notes: yup.string().strict().required("required"),
  });
};
