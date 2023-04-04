import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input_element } from "../../../components/input_field/Input_element";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../store/reducers/ui.reducer";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(setIsAuth(true));
      navigate("/");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
  });

  // console.log("the formik errors are", formik.errors);

  return (
    <>
      <div className="my-4 text-center">
        <h3 className="text-light">SignIn</h3>
      </div>
      <div className="formsignin_width">
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <Input_element
            name="email"
            input_label="Email Address"
            type="email"
            lableClass="text-light"
            handleChange={formik.handleChange}
            value={formik.values.email}
            handleBlur={formik.handleBlur}
            placeholder="Enter Email Address"
          />
          {formik.touched.email && formik.errors.email ? (
            <>
              <span className="text-danger">{formik.errors.email}</span>
            </>
          ) : null}

          <Input_element
            name="password"
            input_label="Password"
            type="password"
            lableClass="text-light"
            placeholder="Enter Valid Password"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <>
              <span className="text-danger">{formik.errors.password}</span>
            </>
          ) : null}
          <Button type="submit" className="btn_submit">
            LOGIN
          </Button>
        </Form>
        <div className="text-end mt-2">
          <Link to="/auth/forgotpassword" className="forgot_link">
            Forgot Password?
          </Link>
        </div>
        <hr />
        <div className="text-center">
          <p className="text-light m-0">
            Not a customer yet?{" "}
            <Link to="signup" className="login_link">
              Sign Up!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
