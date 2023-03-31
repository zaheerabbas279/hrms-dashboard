import React, { useState } from "react";
import "./Fields.scss";
import Form from "react-bootstrap/Form";
import Data from "./MOCK_DATA.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AdminFields = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="text-light">Admin fields</h5>
          <button className="btn btn-danger" onClick={handleShow}>
            Add / Edit Fields
          </button>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="fieldsDetails w-50">
            <Table bordered className="tableData">
              <>
                <thead>
                  <tr>
                    <th>Field Name</th>
                    <th>Field Type</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr>
                        <td>{item.field_name}</td>
                        <td>{item.type}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            </Table>
          </div>
        </div>

        {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!! modal for add end edit the fields !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add / Edit Fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Add / Edit Fields</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

const CompanyFields = () => {
  return (
    <>
      <h5 className="text-light">Company Fields are</h5>
    </>
  );
};

const Settings = () => {
  return (
    <>
      <h5 className="text-light">Settings Feilds are</h5>
    </>
  );
};

export const Fields = () => {
  // console.log("the mock data is", Data);
  const gotodashboard = () => {};

  const [tableName, setTableName] = useState("");

  const setTableNamefun = (e) => {
    // console.log("the table name is", e.target.value);
    setTableName(e.target.value);
  };

  return (
    <>
      <div className="fieldsDetails">
        <small className="text-light goback" onClick={gotodashboard}>
          Back to Dashboard
        </small>
        <p className="mb-0 text-light">
          <strong>Configure Fields</strong>
        </p>

        <div className="fieldsmaindiv my-4">
          <div className="formchilddiv w-50">
            <label htmlFor="" className="text-light">
              Select the table name
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={setTableNamefun}
            >
              <option disabled selected>
                Select table
              </option>
              <option value="admin">Admin Fields</option>
              <option value="company">Company Details Fields</option>
              <option value="settings">Settings Fields</option>
            </Form.Select>
          </div>
        </div>

        <div className="tableDetailsDiv">
          {/* <h4 className="text-light tableName">{tableName}</h4> */}

          {tableName === "admin" ? (
            <>
              <AdminFields data={Data} />
            </>
          ) : tableName === "company" ? (
            <>
              <CompanyFields />
            </>
          ) : tableName === "settings" ? (
            <>
              <Settings />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
