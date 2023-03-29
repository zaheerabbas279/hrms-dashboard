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
  } = props;
  return (
    <Form.Group className="">
      <Form.Label className="text-light">{input_label}</Form.Label>
      <Form.Control
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </Form.Group>
  );
};
