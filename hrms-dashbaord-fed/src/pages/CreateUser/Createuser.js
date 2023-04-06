import React, { useState } from "react";
import "./createuser.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Container, Stack, StepButton } from "@mui/material";
import { Input_element } from "../../components/input_field/Input_element";
import Form from "react-bootstrap/Form";
import CreateButton from "../../components/CreateButton/CreateButton";
import { UsersTable } from "./UsersTable";
import { useFormik } from "formik";

// ! three stepper basically 1. basic info 2. contact info 3. bank info
const BasicInfo = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      hire_date: "",
      job_title: "",
      employee_id: "",
      department: "",
      manager: "",
      location: "",
    },
    onSubmit: (values) => {
      console.log("the basic info form is", values);
    },

    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Required name";
      }
      if (!values.email) {
        errors.email = "Required email";
      }
      if (!values.hire_date) {
        errors.hire_date = "Required hire_date";
      }
      if (!values.job_title) {
        errors.job_title = "Required job_title";
      }
      if (!values.employee_id) {
        errors.employee_id = "Required employee_id";
      }
      if (!values.department) {
        errors.department = "Required department";
      }
      if (!values.manager) {
        errors.manager = "Required manager";
      }
      if (!values.location) {
        errors.location = "Required location";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="font_color">Basic Info</h5>

        <div className="companydetailsDiv mb-3">
          <form onSubmit={formik.handleSubmit}>
            <Input_element
              input_label="Name"
              name="name"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter name"
              formikValidation={
                formik.touched.name && formik.errors.name ? (
                  <>
                    <small className="text-danger">{formik.errors.name}</small>
                  </>
                ) : null
              }
            />

            <Input_element
              input_label="Email"
              name="email"
              type="email"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter the email"
              formikValidation={
                formik.touched.email && formik.errors.email ? (
                  <>
                    <small className="text-danger">{formik.errors.email}</small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Hire Date"
              name="hire_date"
              type="date"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.hire_date}
              placeholder="Enter the hire date"
              formikValidation={
                formik.touched.hire_date && formik.errors.hire_date ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.hire_date}
                    </small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Job Title"
              name="job_title"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.job_title}
              placeholder="Enter the job title"
              formikValidation={
                formik.touched.job_title && formik.errors.job_title ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.job_title}
                    </small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Employee Id"
              name="employee_id"
              type="number"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.employee_id}
              placeholder="Enter the employee id"
              formikValidation={
                formik.touched.employee_id && formik.errors.employee_id ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.employee_id}
                    </small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Department"
              name="department"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.department}
              placeholder="Enter the department"
              formikValidation={
                formik.touched.department && formik.errors.department ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.department}
                    </small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Manager"
              name="manager"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.manager}
              placeholder="Enter the manager"
              formikValidation={
                formik.touched.manager && formik.errors.manager ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.manager}
                    </small>
                  </>
                ) : null
              }
            />
            <Input_element
              input_label="Location"
              name="location"
              type="text"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.location}
              placeholder="Enter the location"
              formikValidation={
                formik.touched.location && formik.errors.location ? (
                  <>
                    <small className="text-danger">
                      {formik.errors.location}
                    </small>
                  </>
                ) : null
              }
            />

            <div className="mt-3">
              <button type="submit" className="btn btn-primary text-light">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const ContactInfo = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="font_color">Contact Info</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Phone Number"
            name="phone"
            lableClass="font_color"
            type="number"
            placeholder="Enter the phone number"
          />
          <label htmlFor="" className="font_color">
            Gender
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <Input_element
            input_label="Date of birth"
            name="date_of_birth"
            lableClass="font_color"
            type="date"
            placeholder="Enter the date of birth"
          />

          <div className="mt-3">
            <button className="btn btn-primary font_color">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

const BankInfo = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="font_color">Bank Info</h5>

        <p className="mb-0">
          Please be very careful while entering data on this screen. Mistakes
          will lead to incorrect tax deductions and filings, and failures in
          salary transfers / payments.
        </p>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="PAN"
            lableClass="font_color"
            name="pan"
            type="text"
            placeholder="Enter PAN"
          />
          <Input_element
            input_label="Bank Account Number"
            name="bank_account_number"
            lableClass="font_color"
            type="text"
            placeholder="Enter bank account number"
          />
          <Input_element
            input_label="Bank IFSC"
            name="bank_ifsc"
            lableClass="font_color"
            type="text"
            placeholder="Enter bank ifsc"
          />
          <Input_element
            input_label="Beneficiary Name"
            name="beneficiary_name"
            lableClass="font_color"
            type="text"
            placeholder="Enter beneficiary name"
          />
          <label htmlFor="" className="font_color">
            Payment Mode
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Default</option>
            <option value="imps">IMPS</option>
            <option value="neft">NEFT</option>
          </Form.Select>

          <div className="mt-3">
            <button className="btn btn-primary font_color">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const CreateUser = () => {
  // !for stepper
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: "Basic Info", completed: false },
    { label: "Contact Info", completed: false },
    { label: "Bank Info", completed: false },
  ]);

  const [isCreateUser, setIsCreateUser] = useState(false);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      const stepIndex = findUnfinished();
      setActiveStep(stepIndex);
    }
  };

  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false;
    const index = findUnfinished();
    if (index !== -1) return false;
    return true;
  };

  const findUnfinished = () => {
    return steps.findIndex((step) => !step.completed);
  };

  const showCreateUser = () => {
    setIsCreateUser(true);
  };
  const showUsersList = () => {
    setIsCreateUser(false);
  };

  const gotodashboard = () => { };
  return (
    <>
      <div className="createuserdiv">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <small className="goback" onClick={gotodashboard}>
              Back to Dashboard
            </small>
            {isCreateUser ? (
              <>
                <p className="mb-0">
                  <strong>Create Employee</strong>
                </p>
              </>
            ) : (
              <>
                <p className="mb-0">
                  <strong>Employees List</strong>
                </p>
              </>
            )}
          </div>
          <div>
            {isCreateUser ? (
              <>
                <CreateButton name="List Employees" handleClick={showUsersList} />
              </>
            ) : (
              <>
                <CreateButton name="Create Employees" handleClick={showCreateUser} />
              </>
            )}
          </div>
        </div>

        {isCreateUser ? (
          <>
            <Container sx={{ my: 4 }}>
              <Stepper
                alternativeLabel
                nonLinear
                activeStep={activeStep}
                sx={{ mb: 3 }}
              >
                {steps.map((step, index) => (
                  <Step key={step.label} completed={step.completed}>
                    <StepButton onClick={() => setActiveStep(index)}>
                      {step.label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <Box>
                {
                  {
                    0: <BasicInfo />,
                    1: <ContactInfo />,
                    2: <BankInfo />,
                  }[activeStep]
                }
              </Box>
              {/* <Stack
            direction="row"
            sx={{ pt: 2, pb: 7, justifyContent: "space-around" }}
          >
            <Button
              color="inherit"
              disabled={!activeStep}
              onClick={() => setActiveStep((activeStep) => activeStep - 1)}
            >
              Back
            </Button>

            <Button disabled={checkDisabled} onClick={handleNext}>
              Next
            </Button>
          </Stack> */}
            </Container>
          </>
        ) : (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
};
