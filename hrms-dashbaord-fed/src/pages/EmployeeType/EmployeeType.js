import React, { useState } from "react";
import "./employeetype.scss";
import { Button, Form, Table } from "react-bootstrap";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { Input_element } from "../../components/input_field/Input_element";
import { Selectelement } from "../../components/Select_field/Selectelement";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Images } from "../../utils/images";

export const EmployeeType = () => {
  const [viewRole, setViewRole] = useState(false);
  const [createRole, setCreateRole] = useState(false);
  const [assignRole, setAssignRole] = useState(false);

  const employees = ["01", "02", "03", "04", "05"];
  const roles = [
    {
      sl_no: 1,
      emp_type: "Intern",
    },
    {
      sl_no: 2,
      emp_type: "Employee",
    },
    {
      sl_no: 3,
      emp_type: "Temp",
    },
    {
      sl_no: 4,
      emp_type: "Permanent",
    },
  ];

  const formikRole = useFormik({
    initialValues: {
      role_name: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validate: (values) => {
      let errors = {};
      if (!values.role_name) {
        errors.role_name = "Required";
      }
      return errors;
    },
  });

  const formik = useFormik({
    initialValues: {
      selected_employee: "",
      selected_role: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.selected_employee) {
        errors.selected_employee = "select employee";
      }
      if (!values.selected_role) {
        errors.selected_role = "select role";
      }
      return errors;
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className="employeetype_style">
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h3>Employee Type</h3>
        </div>
        <div className="text-end">
          <Link to="/" className="goback">
            Back to Dashboard
          </Link>
          <Button
            type="button"
            onClick={
              viewRole ? () => setViewRole(false) : () => setViewRole(true)
            }
          >
            {viewRole ? "Employee Types List" : "Create Employee Types"}
          </Button>
        </div>
      </div>
      <div className="mt-5">
        {viewRole ? (
          <div className="type_form">
            <h5 className="mb-3 font_color">Add Employee Type</h5>

            <Form onSubmit={formikRole.handleSubmit}>
              <Input_element
                input_label="Employee Type"
                lableClass="font_color"
                name="role_name"
                handleChange={formikRole.handleChange}
                handleBlur={formikRole.handleBlur}
                value={formikRole.values.role_name}
                type="text"
                placeholder="Enter Employee Type"
                formikValidation={
                  formikRole.touched.role_name &&
                    formikRole.errors.role_name ? (
                    <small className="text-danger position-absolute">
                      {formikRole.errors.role_name}
                    </small>
                  ) : null
                }
              />
              <div className="text-end mt-4">
                <Button type="submit">Create new employee type</Button>
              </div>
            </Form>
          </div>
        ) : (
          <div className="table_div">
            <h5>Employee Types List</h5>
            <div className="mb-4 text-end"></div>

            <div className="roles">
              <Table striped bordered hover className="table_role">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Employee Types</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((value) => {
                    return (
                      <tr>
                        <td key={`${value.sl_no}`}>{value.sl_no}</td>
                        <td key={`${value.sl_no}`}>{value.emp_type}</td>
                        <td>
                          <img
                            src={Images.deleteLogo}
                            alt=""
                            className="del_logo"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
