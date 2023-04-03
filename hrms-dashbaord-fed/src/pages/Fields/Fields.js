import React, { useState } from "react";
import "./Fields.scss";
// import Form from "react-bootstrap/Form";
import Data from "./MOCK_DATA.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import CustomInput from "./CustomInput";
import * as yup from "yup";
import { ModalComponent } from '../../components/modal/ModalComponent'
import { Input_element } from "../../components/input_field/Input_element";


const handleValidation = yup.object().shape({
  info: yup.array().of(
    yup.object().shape({
      name: yup.string().required("This field is required")
    })
  )
});

const initialValues = {
  info: [
    {
      name: ""
    }
  ]
};

const removeFromList = (i, values, setValues) => {
  const info = [...values.info];
  info.splice(i, 1);
  setValues({ ...values, info });
};

const updateForm = (values, setValues) => {
  const info = [...values.info];
  info.push({
    name: ""
  });
  setValues({ ...values, info });
};

const handleSubmit = (values) => {
  console.log(values);
};

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
        <ModalComponent show={show} onHide={handleClose} modal_header="Add / Edit Fields"
          modal_body={<>
            <Formik
              validationSchema={handleValidation}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ values, setValues }) => (
                <Form>
                  <FieldArray name="info">
                    {() =>
                      values.info.map((item, i) => {
                        return (

                          <div key={i}>
                            <div className="d-flex">
                              {/* <CustomInput
                                label=""
                                name={`info.${i}.name`}
                                placeholder="Type"
                              /> */}
                              {/* <Input_element type="text" name={`info.${i}.name`} input_label="Field Name"
                              // formikValidation={<ErrorMessage component="div" name={`info.${i}.name`} style={errorMessage} />}
                              /> */}
                              {/* <ErrorMessage component="div" name={`info.${i}.name`} style={errorMessage} /> */}
                              <CustomInput
                                label="Field Name : "
                                name={`info.${i}.name`}
                                placeholder="Field name"
                              />
                              {values.info.length > 1 && (
                                <button
                                  className="pointer"
                                  onClick={() => removeFromList(i, values, setValues)}
                                >
                                  delete
                                </button>
                              )}
                            </div>
                          </div>

                        );
                      })
                    }
                  </FieldArray>

                  <button
                    style={{ margin: "25px 10px 10px 0" }}
                    className="pointer"
                    type="button"
                    onClick={(e) => updateForm(values, setValues)}
                  >
                    Click to add information
                  </button>

                  <button className="pointer" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </>}
        />

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
  const gotodashboard = () => { };

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
            <select
              aria-label="Default select example"
              onChange={setTableNamefun}
            >
              <option disabled selected>
                Select table
              </option>
              <option value="admin">Admin Fields</option>
              <option value="company">Company Details Fields</option>
              <option value="settings">Settings Fields</option>
            </select>
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
const errorMessage = {
  color: "red",
  // position: "absolute",
  fontSize: "11px"
};