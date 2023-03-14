import React from "react";
import { useNavigate } from "react-router-dom";

const AddEmployeeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-primary m-2"
      onClick={() => navigate(`/add-people`)}
    >
      Add People
    </button>
  );
};

export default AddEmployeeButton;
