import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Input_element } from "../../../components/input_field/Input_element";
import { useFormik } from "formik";
import "./ForgotPassword.scss";

export const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      setIsSent(true);
      console.log("values", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required Email Id";
      }

      return errors;
    },
  });
  const [isSent, setIsSent] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {isSent ? (
        <>
          <div className="formforgot_width">
            <h6 className="text-light">
              Please check your email. We have sent you a mail with reset
              instructions. Please check your spam if you do not see the email
              within a minute.
            </h6>
            <div className="text-center mt-4">
              <p className="text-light m-0">
                Back to{" "}
                <Link to="/auth" className="forgot_link">
                  login
                </Link>
              </p>
              {/* <Button type="button" className='btn_submit' onClick={handleClickLogin}>LOGIN</Button> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-4 text-center">
            <h3 className="text-light">Forgot Password?</h3>
          </div>
          <div className="formsignin_width">
            <Form onSubmit={formik.handleSubmit} autoComplete="off">
              <Input_element
                input_label="Email Address"
                type="email"
                lableClass="text-light"
                name="email"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter Email Address"
              />
              {formik.touched.email && formik.errors.email ? (
                <>
                  <small className="text-danger">{formik.errors.email}</small>
                </>
              ) : null}
              <Button type="submit" className="btn_submit">
                Reset
              </Button>
            </Form>
          </div>
        </>
      )}
    </>
  );
};
