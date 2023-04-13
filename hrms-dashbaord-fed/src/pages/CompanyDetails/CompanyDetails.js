import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CompanyDetails.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Button, Container, Stack, StepButton } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomInput from "../Fields/CustomInput";
import companyInfo from "./detailinfo.json";

export const CompanyDetails = () => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [infoValue, setInfoValue] = useState(companyInfo[0].fields);
  const [payloadData, setPayloadData] = useState([]);



  var steps = [];
  companyInfo.filter((item) => {
    let xyz = { label: item.title };
    steps.push(xyz);
  });

  const showHideCompanyDetails = () => {
    setIsShowDetails(!isShowDetails);
  };

  const handlechangeinfo = (i) => {
    // setActiveStep(i)
    setInfoValue(companyInfo[i].fields);
  };

  const handleBack = () => {
    handlechangeinfo(activeStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
    let res_name = infoValue.reduce(
      (acc, curr) => ((acc[curr.name] = `${curr.field_saved_value ? curr.field_saved_value : ""}`), acc), {}
    );
    var req_name = Required_fields.reduce((acc, curr) => (acc[curr] = '', acc), {});

    return (
      <Formik
        initialValues={res_name}
        validate={(values, i) => {
          const errors = {};
          Object.keys(req_name).forEach(function (key) {
            if (values[key] == "") {
              errors[key] = `${key} required`;
            }
            if (values.email) {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
            }
          });
          return errors;
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
        <Form>
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
              } else {
                return (
                  <div className="col-md-6">
                    <CustomInput
                      label={field.isRequired ? `${field.field_name} *` : `${field.field_name}`}
                      type={field.feild_type}
                      name={field.name}
                    />
                  </div>
                );
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
                <Button variant="contained" type="submit" sx={{ mt: 1, mr: 1 }}>
                  {activeStep === steps.length - 1 ? "Submit" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    );
  };


  return (
    <>
      <div className="companyDetails">
        <div className="d-md-flex justify-content-between mt-4">
          <h3>Company Profile</h3>
          <div>
            <Link to="/" className="goback">Back to Dashboard</Link>
            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={showHideCompanyDetails}
              >
                {isShowDetails ? "Show Company Details" : "Edit Company Details"}
              </button>
            </div>
          </div>
        </div>

        {/* stepper container code  */}

        {isShowDetails ? (
          <>
            <Container sx={{ my: 4 }}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                sx={{ mb: 3 }}
              >
                {steps.map((step, index) => (
                  <Step key={step.label} completed={step.completed}>
                    <StepButton>{step.label}</StepButton>
                  </Step>
                ))}
              </Stepper>
              <div className="companyCard p-4">{<InfoDiv />}</div>
            </Container>
          </>
        ) : (
          <>
            <div className="companyDetailsContainer">
              {companyInfo.map((item, i) => {
                let details = item.fields;
                return (
                  <div className="basicInfoDiv my-4" key={i}>
                    <h4 className="mb-3">{item.title}</h4>
                    <div className="row">
                      {details.map((value) => {
                        return (
                          <div className="col-md-6">
                            <div className="d-flex my-1">
                              <label>{value.field_name} :</label>
                              <p className="mx-2">
                                <strong>{value.saved_value}</strong>
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div >
    </>
  );
};
