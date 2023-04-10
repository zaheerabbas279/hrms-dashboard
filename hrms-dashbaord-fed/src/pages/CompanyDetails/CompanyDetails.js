import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyDetails.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Button, Container, Stack, StepButton } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomInput from "../Fields/CustomInput";
import companyInfo from "./detailinfo.json";

export const CompanyDetails = () => {
  const navigate = useNavigate();
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [infoValue, setInfoValue] = useState(companyInfo[0].fields);
  const [payloadData, setPayloadData] = useState([]);

  const gotodashboard = () => {
    navigate("/");
  };

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
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const InfoDiv = () => {
    let field_value = [];
    infoValue.filter((item) => {
      field_value.push(item.name);
    });

    let res_name = field_value.reduce(
      (acc, curr) => ((acc[curr] = ""), acc),
      {}
    );
    return (
      <Formik
        initialValues={res_name}
        validate={(values, i) => {
          const errors = {};
          Object.keys(values).forEach(function (key) {
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
            // resetForm()
          }
        }}
      >
        <Form>
          {infoValue.map((field, i) => {
            return (
              <div>
                <CustomInput
                  label={field.field_name}
                  type={field.feild_type}
                  name={field.name}
                />
              </div>
            );
          })}
          {/* <div className="mt-3">
            <button type="submit" className="btn btn-secondary font_color">Submit</button>
          </div> */}
          <Button variant="contained" type="submit" sx={{ mt: 1, mr: 1 }}>
            {activeStep === steps.length - 1 ? "Submit" : "Continue"}
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
    );
  };

  console.log("payloadData---------------->", payloadData);

  return (
    <>
      <div className="">
        <div className="companyDetails">
          <small className="goback" onClick={gotodashboard}>
            Back to Dashboard
          </small>
          <p className="mb-0">
            <strong>Company Details</strong>
          </p>

          {isShowDetails ? (
            <>
              <div className="text-end">
                <button
                  className="btn btn-primary"
                  onClick={showHideCompanyDetails}
                >
                  Show Company Details
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-end">
                <button
                  className="btn btn-primary"
                  onClick={showHideCompanyDetails}
                >
                  Edit Company Details
                </button>
              </div>
            </>
          )}

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
                <div className="bg-primary p-4">{<InfoDiv />}</div>
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
              <div className="companyDetailsContainer">
                <div className="basicInfoDiv my-3">
                  <h4>Basic Info</h4>

                  <label htmlFor="name">Brand Name</label>
                  <p className="mb-0">
                    <strong>IT</strong>
                  </p>
                  <label htmlFor="name">Registered Address</label>
                  <p className="mb-0">
                    <strong>IT Park, 3rd Stage, Mysore</strong>
                  </p>
                  <label htmlFor="name">PIN Code</label>
                  <p className="mb-0">
                    <strong>898787</strong>
                  </p>
                </div>
                <div className="basicInfoDiv my-3">
                  <h4>Tax Info</h4>

                  <label htmlFor="name">Company PAN</label>
                  <p className="mb-0">
                    <strong>AKJHFDHFLKH98987</strong>
                  </p>
                  <label htmlFor="name">Company TAN</label>
                  <p className="mb-0">
                    <strong>ASFDU876865ADF6</strong>
                  </p>
                  <label htmlFor="name">Company GSTIN</label>
                  <p className="mb-0">
                    <strong>GISDGASDFO987FAS8D7FS7DF9SD</strong>
                  </p>
                </div>
                <div className="basicInfoDiv">
                  <h4>PF/EISC</h4>

                  <label htmlFor="name">PF Status</label>
                  <p className="mb-0 text-success">
                    <strong>Enabled</strong>
                  </p>
                  <label htmlFor="name">ESI Status</label>
                  <p className="mb-0 text-success">
                    <strong>Enabled</strong>
                  </p>
                  <label htmlFor="name">PT Status</label>
                  <p className="mb-0 text-success">
                    <strong>Enabled</strong>
                  </p>
                  <label htmlFor="name">LWF Status</label>
                  <p className="mb-0 text-success">
                    <strong>Enabled</strong>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
