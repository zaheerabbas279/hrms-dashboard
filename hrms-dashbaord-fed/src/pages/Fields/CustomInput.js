import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import "./Fields.scss";
const CustomInput = ({ label, options, ...props }) => {
  const [field] = useField(props);

  const errorMessage = {
    color: "#e35050",
    position: "absolute",
    fontSize: "12px",
  };

  return (
    <>
      <div className="mb-4">
        <label className="font_color me-2 form-label">{label}</label>
        <div>
          <Field
            {...field}
            {...props}
            autoComplete="true"
            className="setting_field"
          >{options}</Field>
          <ErrorMessage
            component="div"
            name={field.name}
            style={errorMessage}
          />
        </div>
      </div >
    </>
  );
};

export default CustomInput;
