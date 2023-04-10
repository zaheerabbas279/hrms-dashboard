import React from "react";
import { Form } from "react-bootstrap";

export const Input_element = (props) => {
  const {
    input_label,
    type,
    placeholder,
    name,
    handleBlur,
    handleChange,
    value,
    lableClass,
    formikValidation,
    defaultValue,
    disabled,
    required
  } = props;
  return (
    <Form.Group className="mb-2">
      <Form.Label className={lableClass}>{input_label}</Form.Label>
      <Form.Control
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {formikValidation}
    </Form.Group>
  );
};
