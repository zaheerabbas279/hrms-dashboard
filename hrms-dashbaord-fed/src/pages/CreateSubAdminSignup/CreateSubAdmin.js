import React from "react";
import Button from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import Form from "react-bootstrap/Form";
import "./styles.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const CreateSubAdmin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
    onSubmit: (values) => {
      console.log("the form data is", values);
    },

    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required!";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      //   errors.email = "Invalid Email Format";
      // }

      if (!values.password) {
        errors.password = "Required";
      }
      if (!values.role) {
        errors.role = "Required";
      }
      return errors;
    },
  });
  console.log("formik errors", formik.errors);

  const goToDashboard = () => {
    navigate("/");
  };

  return (
    <>
      <div className="subAdminDiv text-center w-100 d-flex justify-content-center">
        <div className="card p-4 m-3 subAdminCard">
          <div className="mt-2 mb-4">
            <h5 className="text-light">Create a new user</h5>
          </div>

          <form
            className="subAdminForm d-flex flex-column text-start"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="" className="mb-2 text-light">
              Username <span>*</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="mb-3 subAdminInp"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.username && formik.errors.username ? (
              <>
                <span className="text-danger">{formik.errors.username}</span>
              </>
            ) : null}

            <label htmlFor="" className="mb-2 text-light">
              Email <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mb-3 subAdminInp"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <>
                <span className="text-danger">{formik.errors.email}</span>
              </>
            ) : null}

            <label htmlFor="" className="mb-2 text-light">
              Password <span>*</span>
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mb-3 subAdminInp"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <>
                <span className="text-danger">{formik.errors.password}</span>
              </>
            ) : null}
            <label htmlFor="" className="mb-2 text-light">
              Role <span>*</span>
            </label>
            <Form.Select
              aria-label="Default select example"
              id="role"
              name="role"
              className="mb-3 role-dropdown"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option>Open this select menu</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Select>
            {formik.touched.role && formik.errors.role ? (
              <>
                <span className="text-danger">{formik.errors.role}</span>
              </>
            ) : null}

            <div className="w-100">
              <Button name="Create User" type="submit" />
            </div>

            <div className="w-100 text-center mt-3">
              <p className="mb-0 text-light backLink" onClick={goToDashboard}>
                Back to Dashboard
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSubAdmin;
