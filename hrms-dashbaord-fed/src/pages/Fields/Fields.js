import React, { useState } from "react";
import "./Fields.scss";
import Data from "./MOCK_DATA.json";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import CustomInput from "./CustomInput";
import * as yup from "yup";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { Images } from "../../utils/images";
import { FieldsTable } from "./FieldsTable";
import { Link } from "react-router-dom";


const handleValidation = yup.object().shape({
  info: yup.array().of(
    yup.object().shape({
      name: yup.string().required("This field is required"),
      type: yup.string().required("Please enter the type"),
      length: yup
        .number()
        .required("Please enter the length of the string here"),
    })
  ),
});


const initialValues = {
  info: [
    {
      name: "",
      type: "",
      length: "",
    },
  ],
};

const removeFromList = (i, values, setValues) => {
  const info = [...values.info];
  info.splice(i, 1);
  setValues({ ...values, info });
};

const updateForm = (values, setValues) => {
  const info = [...values.info];
  info.push({
    name: "",
    type: "",
    length: "",
  });
  setValues({ ...values, info });
};

const handleSubmit = (values) => {
  console.log(values.info);
};

const AdminFields = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="header_color">Admin fields</h5>
          <button className="btn btn-danger" onClick={handleShow}>
            Add Fields
          </button>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="fieldsDetails w-50">
            <FieldsTable />
          </div>
        </div>

        {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!! modal for add end edit the fields !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <ModalComponent
          show={show}
          onHide={handleClose}
          modal_header="Add Fields"
          modal_body={
            <>
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
                              <div className="d-flex align-items-center justify-content-between">
                                <CustomInput
                                  label="Field Name"
                                  name={`info.${i}.name`}
                                  placeholder="Field name"
                                  className="customInp"
                                />
                                <CustomInput
                                  label="Field Type"
                                  name={`info.${i}.type`}
                                  placeholder="Field type"
                                  className="customInp"
                                />
                                <CustomInput
                                  label="Field Length"
                                  name={`info.${i}.length`}
                                  placeholder="Field Length"
                                />
                                {values.info.length > 1 && (
                                  <img
                                    src={Images.deleteLogo}
                                    alt=""
                                    onClick={() =>
                                      removeFromList(i, values, setValues)
                                    }
                                    className="deleteLogo"
                                  />
                                )}
                              </div>
                            </div>
                          );
                        })
                      }
                    </FieldArray>

                    <div className="d-flex align-items-center justify-content-center">
                      <button
                        // style={{ margin: "25px 10px 10px 0" }}
                        className="btn btn-info mx-2"
                        type="button"
                        onClick={(e) => updateForm(values, setValues)}
                      >
                        Add more fields
                      </button>

                      <button
                        className="btn btn-primary mx-2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          }
        />
      </div>
    </>
  );
};

const CompanyFields = () => {
  return (
    <>
      <h5>Company Feilds are</h5>
    </>
  );
};

const Settings = () => {
  return (
    <>
      <h5>Settings Feilds are</h5>
    </>
  );
};

export const Fields = () => {

  const [tableName, setTableName] = useState("");

  const setTableNamefun = (e) => {
    setTableName(e.target.value);
  };

  return (
    <>
      <div className="fieldsDetails">
        <div className="d-flex justify-content-between mt-4">
          <h3>Configure Fields</h3>
          <Link to="/" className="goback">Back to Dashboard</Link>
        </div>

        <div className="fieldsmaindiv my-4">
          <div className="formchilddiv w-50">
            <label htmlFor="">
              Select the table name :
            </label>
            <select
              aria-label="Default select example"
              onChange={setTableNamefun}
              className="mx-2 dropdownTable"
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

