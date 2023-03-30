import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyDetails.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Container, Stack, StepButton } from "@mui/material";
import { Input_element } from "../../components/input_field/Input_element";
import Form from "react-bootstrap/Form";

const NameAndAddress = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="text-light">Name and Address</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Company Name"
            name="company_name"
            type="text"
            placeholder="Enter the company name"
          />
          <Input_element
            input_label="Brand Name"
            name="brand_name"
            type="text"
            placeholder="Enter the brand name"
          />
          <Input_element
            input_label="Registered Address"
            name="registered_address"
            type="text"
            placeholder="Enter the registered address"
          />
          <Input_element
            input_label="Pin code"
            name="pin_code"
            type="number"
            placeholder="Enter the pin code"
          />

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

const TaxSetup = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="text-light">Tax Setup</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Company PAN"
            name="company_pan"
            type="text"
            placeholder="Enter the company pan number"
          />
          <Input_element
            input_label="Company TAN"
            name="brand_tan"
            type="text"
            placeholder="Enter the company tan"
          />
          <Input_element
            input_label="Company GSTIN"
            name="company_gstin"
            type="text"
            placeholder="Enter the company gstin"
          />

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

const PFEISC = () => {
  return (
    <>
      <div className="p-3 companyCard ">
        <h5 className="text-light">PF/EISC</h5>

        <p className="mb-0 text-light">
          PF and ESI are mandatory if your organization has more than 20 and 10
          employees respectively.
        </p>

        <div className="companydetailsDiv mb-3">
          <label htmlFor="" className="text-light">
            PF Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="text-light">
            ESI Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="text-light">
            PT Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="text-light">
            LWF Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>

          <div className="mt-3">
            <button className="btn btn-primary text-light">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const CompanyDetails = () => {
  const navigate = useNavigate();

  const gotodashboard = () => {
    navigate("/");
  };

  // !for stepper
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { label: "Name and Address", completed: false },
    { label: "Tax Setup", completed: false },
    { label: "PF/EISC", completed: false },
  ]);

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

  return (
    <>
      <div className="">
        <div className="companyDetails">
          <small className="text-light goback" onClick={gotodashboard}>
            Back to Dashboard
          </small>
          <p className="mb-0 text-light">
            <strong>Company Details</strong>
          </p>

          {/* stepper container code  */}

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
                  0: <NameAndAddress />,
                  1: <TaxSetup />,
                  2: <PFEISC />,
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
        </div>
      </div>
    </>
  );
};
