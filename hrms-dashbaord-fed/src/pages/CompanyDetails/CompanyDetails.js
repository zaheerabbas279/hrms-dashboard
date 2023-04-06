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
      <div className="p-3 companyCard">
        <h5 className="font_color">Name and Address</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Company Name"
            lableClass="font_color"
            name="company_name"
            type="text"
            placeholder="Enter the company name"
          />
          <Input_element
            input_label="Brand Name"
            name="brand_name"
            type="text"
            lableClass="font_color"
            placeholder="Enter the brand name"
          />
          <Input_element
            input_label="Registered Address"
            lableClass="font_color"
            name="registered_address"
            type="text"
            placeholder="Enter the registered address"
          />
          <Input_element
            input_label="Pin code"
            lableClass="font_color"
            name="pin_code"
            type="number"
            placeholder="Enter the pin code"
          />

          <div className="mt-3">
            <button className="btn btn-primary font_color">Submit</button>
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
        <h5 className="font_color">Tax Setup</h5>

        <div className="companydetailsDiv mb-3">
          <Input_element
            input_label="Company PAN"
            name="company_pan"
            lableClass="font_color"
            type="text"
            placeholder="Enter the company pan number"
          />
          <Input_element
            input_label="Company TAN"
            lableClass="font_color"
            name="brand_tan"
            type="text"
            placeholder="Enter the company tan"
          />
          <Input_element
            input_label="Company GSTIN"
            lableClass="font_color"
            name="company_gstin"
            type="text"
            placeholder="Enter the company gstin"
          />

          <div className="mt-3">
            <button className="btn btn-primary font_color">Submit</button>
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
        <h5 className="font_color">PF/EISC</h5>

        <p className="mb-0 font_color">
          PF and ESI are mandatory if your organization has more than 20 and 10
          employees respectively.
        </p>

        <div className="companydetailsDiv mb-3">
          <label htmlFor="" className="font_color">
            PF Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="font_color">
            ESI Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="font_color">
            PT Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>
          <label htmlFor="" className="font_color">
            LWF Status
          </label>
          <Form.Select aria-label="Default select example" className="mb-2">
            <option>Please Select </option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Form.Select>

          <div className="mt-3">
            <button className="btn btn-primary font_color">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const CompanyDetails = () => {
  const navigate = useNavigate();
  const [isShowDetails, setIsShowDetails] = useState(false);

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

  const showHideCompanyDetails = () => {
    setIsShowDetails(!isShowDetails);
  };

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
