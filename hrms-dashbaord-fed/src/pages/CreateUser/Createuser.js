import React, { useState } from "react";
import "./createuser.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Button, Container, Stack, StepButton } from "@mui/material";
import CreateButton from "../../components/CreateButton/CreateButton";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from "../Fields/CustomInput";
import employeeInfo from './employeeinfo.json'
import { Link } from "react-router-dom";
import { EmployeeTable } from "./EmployeeTable";

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

  const errorMessage = {
    color: "#e35050",
    position: "absolute",
    fontSize: "12px",
  };

  const InfoDiv = () => {
    let Required_fields = []
    infoValue.filter(item => {
      if (item.isRequired) {
        Required_fields.push(item.name)
      }
    })

    var res_name = infoValue.reduce((acc, curr) =>
      (acc[curr.name] = `${curr.field_saved_value ? curr.field_saved_value : ""}`, acc), {}
    );
    var req_name = Required_fields.reduce((acc, curr) => (acc[curr] = '', acc), {});

    return (
      <Formik
        initialValues={res_name}
        validate={(values, i) => {

          const errors = {};
          Object.keys(req_name).forEach(function (key) {
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
            console.log(values);
          }
        }}
      >
        {/* {(handleFormikChange) => ( */}
        <Form autoComplete="off">
          <div className="row">
            {infoValue.map((field, i) => {
              if (field.feild_type == "select") {
                let optionValues = field.field_values;
                return (
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="font_color mb-2">{field.isRequired ? `${field.field_name} *` : `${field.field_name}`}</label>
                      <Field as="select" className="setting_field" name={field.name}>
                        <option selected disabled value="">select menu</option>
                        {optionValues.map(item => {
                          return (
                            <option value={item.value}>{item.name}</option>
                          )
                        })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name={field.name}
                        style={errorMessage}
                      />
                    </div>
                  </div>
                )
              } else if (field.feild_type == "textarea") {
                return (
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="font_color mb-2">{field.isRequired ? `${field.field_name} *` : `${field.field_name}`}</label>
                      <Field as="textarea" className="setting_field" name={field.name} rows="4" cols="50"></Field>
                      <ErrorMessage
                        component="div"
                        name={field.name}
                        style={errorMessage}
                      />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="col-md-6">
                    <CustomInput label={field.isRequired ? `${field.field_name} *` : `${field.field_name}`} type={field.feild_type} name={field.name} />
                  </div>
                )
              }

            })}
            <div className="col-md-12">
              <div className="text-end">
                <Button
                  disabled={activeStep === 0}
                  variant="contained"
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 1, mr: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
                </Button>
              </div>
            </div>
          </div>
        </Form>
        {/* )} */}
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
            <h3> {isCreateUser ? "Create New Employee" : "Employees List"}</h3>
          </div>
          <div>
            <Link to="/" className="goback">Back to Dashboard</Link>
            <CreateButton
              name={isCreateUser ? "List Employees" : "Create New Employees"}
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
            <EmployeeTable />
          </>
        )}
      </div>
    </>
  );
};
