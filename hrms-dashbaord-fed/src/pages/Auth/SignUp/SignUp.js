import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input_element } from "../../../components/input_field/Input_element";
import { ModalComponent } from "../../../components/modal/ModalComponent";
import "./SignUp.scss";

export const SignUp = () => {
  const employeeSelect = ["1-5", "6-30", "31-50", "51-100"];
  const designation = ["Founder/CEO", "Financa/HR Manager", "Employee"];
  const [privacyShow, setPrivacyShow] = useState(false);
  const [termsShow, setTermsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted syccessfully");
  };
  return (
    <>
      <div className="form_width">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input_element
            input_label="Full Name"
            type="text"
            placeholder="Enter Full Name"
          />
          <Input_element
            input_label="Organization Name"
            type="text"
            placeholder="Enter Organization Name"
          />
          <Input_element
            input_label="Work Email Address"
            type="email"
            placeholder="Enter Work Email Address"
          />
          <Input_element
            input_label="Phone Number"
            type="number"
            placeholder="8762792447"
          />
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Number of Employees</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value=""></option>
              {employeeSelect.map((value) => {
                return <option value={`${value}`}>{value}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Your Title</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value=""></option>
              {designation.map((value) => {
                return <option value={`${value}`}>{value}</option>;
              })}
            </Form.Select>
          </Form.Group>
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
