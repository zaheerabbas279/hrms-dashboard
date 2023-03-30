import React, { useState } from "react";
import "./CreateUser.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Container, Stack, StepButton } from "@mui/material";
import { Input_element } from "../../components/input_field/Input_element";
import Form from "react-bootstrap/Form";
import CreateButton from "../../components/CreateButton/CreateButton";
import { UsersTable } from "./UsersTable";

// ! three stepper basically 1. basic info 2. contact info 3. bank info
const BasicInfo = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="text-light">Basic Info</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Name"
            name="name"
            type="text"
            placeholder="Enter name"
          />
          <Input_element
            input_label="Email"
            name="email"
            type="email"
            placeholder="Enter the email"
          />
          <Input_element
            input_label="Hire Date"
            name="hire_date"
            type="date"
            placeholder="Enter the hire date"
          />
          <Input_element
            input_label="Job Title"
            name="job_title"
            type="text"
            placeholder="Enter the job title"
          />
          <Input_element
            input_label="Employee Id"
            name="employee_id"
            type="number"
            placeholder="Enter the employee id"
          />
          <Input_element
            input_label="Department"
            name="department"
            type="text"
            placeholder="Enter the department"
          />
          <Input_element
            input_label="Manager"
            name="manager"
            type="text"
            placeholder="Enter the manager"
          />
          <Input_element
            input_label="Location"
            name="location"
            type="text"
            placeholder="Enter the manager"
          />

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactInfo = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="text-light">Contact Info</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Phone Number"
            name="phone"
            type="number"
            placeholder="Enter the phone number"
          />
          <label htmlFor="" className="text-light">
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
            type="date"
            placeholder="Enter the date of birth"
          />

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
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
        <h5 className="text-light">Bank Info</h5>

        <p className="mb-0 text-light">
          Please be very careful while entering data on this screen. Mistakes
          will lead to incorrect tax deductions and filings, and failures in
          salary transfers / payments.
        </p>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="PAN"
            name="pan"
            type="text"
            placeholder="Enter PAN"
          />
          <Input_element
            input_label="Bank Account Number"
            name="bank_account_number"
            type="text"
            placeholder="Enter bank account number"
          />
          <Input_element
            input_label="Bank IFSC"
            name="bank_ifsc"
            type="text"
            placeholder="Enter bank ifsc"
          />
          <Input_element
            input_label="Beneficiary Name"
            name="beneficiary_name"
            type="text"
            placeholder="Enter beneficiary name"
          />
          <label htmlFor="" className="text-light">
            Payment Mode
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Default</option>
            <option value="imps">IMPS</option>
            <option value="neft">NEFT</option>
          </Form.Select>

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
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

  const gotodashboard = () => {};
  return (
    <>
      <div className="createuserdiv">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <small className="text-light goback" onClick={gotodashboard}>
              Back to Dashboard
            </small>
            {isCreateUser ? (
              <>
                <p className="mb-0 text-light">
                  <strong>Create user</strong>
                </p>
              </>
            ) : (
              <>
                <p className="mb-0 text-light">
                  <strong>Users List</strong>
                </p>
              </>
            )}
          </div>
          <div>
            {isCreateUser ? (
              <>
                <CreateButton name="List User" handleClick={showUsersList} />
              </>
            ) : (
              <>
                <CreateButton name="Create User" handleClick={showCreateUser} />
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
