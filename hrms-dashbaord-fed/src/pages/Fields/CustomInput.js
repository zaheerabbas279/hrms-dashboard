import { ErrorMessage, useField } from "formik";
import React from "react";
import "./Fields.scss";
const CustomInput = ({ label, ...props }) => {
  const [field] = useField(props);

  const errorMessage = {
    color: "red",
    position: "absolute",
    fontSize: "11px",
  };

  return (
    <>
      <div width="100%" className="m-3 d-flex">
        <label className="text-light me-2">{label}</label>
        <div>
          <input
            {...field}
            {...props}
            autoComplete="true"
            className="customInp"
          />
          <ErrorMessage
            component="div"
            name={field.name}
            style={errorMessage}
          />
        </div>
      </div>
    </>
  );
};

export default CustomInput;
