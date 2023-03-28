import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input_element } from "../../../components/input_field/Input_element";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../store/reducers/ui.reducer";
import "./SignIn.scss";

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsAuth(true));
    console.log("form submitted syccessfully");
  };
  return (
    <div className="formsignin_width">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input_element
          input_label="Email Address"
          type="email"
          placeholder="Enter Email Address"
        />
        <Input_element
          input_label="Password"
          type="password"
          placeholder="Enter Valid Password"
        />
        <Button type="submit" className="btn_submit">
          LOGIN
        </Button>
      </Form>
      <div className="text-end mt-2">
        <Link to="/forgotpassword" className="forgot_link">
          Forgot Password?
        </Link>
      </div>
      <hr />
      <div className="text-center">
        <p className="text-light m-0">
          Not a customer yet?{" "}
          <Link to="/signup" className="login_link">
            Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
};
