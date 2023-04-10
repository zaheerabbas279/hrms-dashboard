import React, { useState } from "react";
import "./createuser.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Button, Container, Stack, StepButton } from "@mui/material";
import CreateButton from "../../components/CreateButton/CreateButton";
import { UsersTable } from "./UsersTable";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from "../Fields/CustomInput";
import employeeInfo from './employeeinfo.json'
import { Link } from "react-router-dom";

export const CreateUser = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [infoValue, setInfoValue] = useState(employeeInfo[0].fields)
  const [payloadData, setPayloadData] = useState([]);
  const [isCreateUser, setIsCreateUser] = useState(false);

  var steps = [];
  employeeInfo.filter(item => {
    let xyz = { label: item.title }
    steps.push(xyz)
  })

  const handlechangeinfo = (i) => {
    // setActiveStep(i)
    setInfoValue(employeeInfo[i].fields)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    handlechangeinfo(activeStep - 1)
  };

  const InfoDiv = () => {
    let field_value = []
    infoValue.filter(item => {
      field_value.push(item.name)
    })

    let res_name = field_value.reduce((acc, curr) => (acc[curr] = '', acc), {});
    return (
      <Formik
        initialValues={res_name}
        validate={(values, i) => {
          const errors = {};
          Object.keys(values).forEach(function (key) {
            if (values[key] == "") {
              errors[key] = `${key} required`
            }
            if (values.email) {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
            }
          });
          return errors
        }}
        onSubmit={(values, { resetForm }) => {

          if (activeStep === steps.length - 1) {
            payloadData.push(values);
            let _payload = Object.assign({}, ...payloadData);
            console.log(
              "🚀 ~ file: CompanyDetails.js:74 ~ InfoDiv ~ _payload:",
              _payload
            );
          } else {
            handlechangeinfo(activeStep + 1);
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            payloadData.push(values);
          }
        }}
      >
        <Form autoComplete="off">
          {infoValue.map((field, i) => {
            return (
              <div>
                <CustomInput label={field.field_name} type={field.feild_type} name={field.name} />
              </div>
            )
          })}
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1, mr: 1 }}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
          </Button>
          <Button
            disabled={activeStep === 0}
            variant="contained"
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>
        </Form>
      </Formik>
    )
  }


  const showCreateUser = () => {
    setIsCreateUser(true);
  };
  const showUsersList = () => {
    setIsCreateUser(false);
  };

  return (
    <>
      <div className="createuserdiv mx-lg-5">
        <div className="d-flex justify-content-between mt-4">
          <div>
            <h3> {isCreateUser ? "Create Employee" : "Employees List"}</h3>
          </div>
          <div>
            <Link to="/" className="goback">Back to Dashboard</Link>
            <CreateButton
              name={isCreateUser ? "List Employees" : "Create Employees"}
              handleClick={isCreateUser ? showUsersList : showCreateUser}
            />
          </div>
        </div>

        {isCreateUser ? (
          <>
            <Container sx={{ my: 4 }}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                sx={{ mb: 3 }}
              >
                {steps.map((step, index) => (
                  <Step key={step.label} completed={step.completed}>
                    <StepButton>
                      {step.label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div className="form_container p-4">
                {<InfoDiv />}
              </div>
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
