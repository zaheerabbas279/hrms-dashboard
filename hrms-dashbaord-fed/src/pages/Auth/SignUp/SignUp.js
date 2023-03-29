import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input_element } from "../../../components/input_field/Input_element";
import { ModalComponent } from "../../../components/modal/ModalComponent";
import { useFormik } from "formik";
import "./SignUp.scss";

export const SignUp = () => {
  const employeeSelect = ["1-5", "6-30", "31-50", "51-100"];
  const designation = ["Founder/CEO", "Financa/HR Manager", "Employee"];
  const [privacyShow, setPrivacyShow] = useState(false);
  const [termsShow, setTermsShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      organizationName: "",
      email: "",
      phone: "",
      numOfEmp: "",
      title: "",
    },
    onSubmit: (values) => {
      console.log("the sign up form data is", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.fullName) {
        errors.fullName = "Required Full Name";
      }
      if (!values.organizationName) {
        errors.organizationName = "Required Oraganization Name";
      }
      if (!values.email) {
        errors.email = "Required Work Email";
      }
      if (!values.phone) {
        errors.phone = "Required Phone Number";
      }
      if (!values.numOfEmp) {
        errors.numOfEmp = "Required Number of Employees";
      }
      if (!values.title) {
        errors.title = "Required Title";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="form_width">
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <Input_element
            input_label="Full Name"
            type="text"
            name="fullName"
            handleChange={formik.handleChange}
            value={formik.values.fullName}
            handleBlur={formik.handleBlur}
            placeholder="Enter Full Name"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <>
              <span className="text-danger small">
                {formik.errors.fullName}
              </span>
            </>
          ) : null}
          <Input_element
            input_label="Organization Name"
            type="text"
            name="organizationName"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.organizationName}
            placeholder="Enter Organization Name"
          />
          {formik.touched.organizationName && formik.errors.organizationName ? (
            <>
              <span className="text-danger small">
                {formik.errors.organizationName}
              </span>
            </>
          ) : null}
          <Input_element
            input_label="Work Email Address"
            type="email"
            name="email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter Work Email Address"
          />
          {formik.touched.email && formik.errors.email ? (
            <>
              <span className="text-danger small">{formik.errors.email}</span>
            </>
          ) : null}
          <Input_element
            input_label="Phone Number"
            type="number"
            name="phone"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="Enter phone number"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <>
              <span className="text-danger small">{formik.errors.phone}</span>
            </>
          ) : null}
          <Form.Group className="">
            <Form.Label className="text-light">Number of Employees</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="numOfEmp"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.numOfEmp}
            >
              <option value=""></option>
              {employeeSelect.map((value) => {
                return (
                  <option key={`${value}`} value={`${value}`}>
                    {value}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          {formik.touched.numOfEmp && formik.errors.numOfEmp ? (
            <>
              <span className="text-danger small">
                {formik.errors.numOfEmp}
              </span>
            </>
          ) : null}
          <Form.Group className="">
            <Form.Label className="text-light">Your Title</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            >
              <option value=""></option>
              {designation.map((value) => {
                return (
                  <option key={`${value}`} value={`${value}`}>
                    {value}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          {formik.touched.title && formik.errors.title ? (
            <>
              <span className="text-danger small">{formik.errors.title}</span>
            </>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Check inline name="group1" type="checkbox" />
            <Form.Check.Label className="text-light">
              I agree to the{" "}
              <button
                type="button"
                className="pri-term"
                onClick={() => setPrivacyShow(true)}
              >
                privacy policy
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="pri-term"
                onClick={() => setTermsShow(true)}
              >
                terms of use
              </button>
            </Form.Check.Label>
          </Form.Group>
          <Button type="submit" className="btn_submit">
            Submit form
          </Button>
        </Form>
        <hr />
        <div className="text-center">
          <p className="text-light m-0">
            Already have an account with us?{" "}
            <Link to="/" className="login_link">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* privay policy modal  */}
      <ModalComponent
        show={privacyShow}
        onHide={() => setPrivacyShow(false)}
        modal_header="privacy policy"
        modal_body="lorem"
      />

      {/* Terms Of Use modal  */}
      <ModalComponent
        show={termsShow}
        onHide={() => setTermsShow(false)}
        modal_header="Terms of Service"
        modal_body="welcome"
      />
    </>
  );
};
