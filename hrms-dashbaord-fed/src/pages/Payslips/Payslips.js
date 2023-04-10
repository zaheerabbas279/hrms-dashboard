import React from "react";
import "./payslips.scss";
import Form from "react-bootstrap/Form";
import CreateButton from "../../components/CreateButton/CreateButton";

export const Payslips = () => {
  const gotodashboard = () => { };

  return (
    <>
      <div className="payslipsDetails">
        <small className="goback" onClick={gotodashboard}>
          Back to Dashboard
        </small>
        <p className="mb-0">
          <strong>Payslips</strong>
        </p>

        <div className="payslipsdiv my-3">
          <div className="childdiv">
            <label htmlFor="">
              Select Financial Year
            </label>
            <Form.Select aria-label="Default select example">
              {/* <option>Open this select menu</option> */}
              <option value="2022-2023">2022 - 2023</option>
              <option value="2023-2024">2023 - 2024</option>
            </Form.Select>

            <div className="my-4">
              <CreateButton name="Download PDF" />
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card p-3 form16card">
                  <h5 className="">Form 16</h5>
                  <p className="mb-0">View / download your Form 16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
