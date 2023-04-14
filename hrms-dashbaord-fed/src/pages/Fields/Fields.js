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
      type: yup.string().required("Select the Type"),
      length: yup
        .number()
        .required("enter the length of the string"),
      required: yup.string().required("Select Field"),
      dropdown_options: yup.string().test('dropdown_options', (value, context) => {
        if (context.parent?.type == "select") {
          if (!context.parent?.dropdown_options) {
            return context.createError({ message: "Enter dropdown Values" })
          }
        }
        return true
      })

    })
  ),
});


const initialValues = {
  info: [
    {
      name: "",
      type: "",
      length: "",
      required: "",
      dropdown_options: ""
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
    required: "",
    dropdown_options: ""
  });
  setValues({ ...values, info });
};

const handleSubmit = (values) => {
  console.log(values.info);
};

const AdminFields = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOptionClick = (e, i) => {
    let optionSelected = e.target.value;
    let selectedOption = document.getElementById(`options_value${i}`)
    if (optionSelected == "select") {
      selectedOption.removeAttribute("disabled", "")
    } else {
      selectedOption.setAttribute("disabled", "")
    }
  }

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
          <div className="fieldsDetails">
            <FieldsTable Data={Data} />
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
                                <div className="row no-gutters">
                                  <div className="col-md-4">
                                    <CustomInput
                                      label="Field Label Name"
                                      name={`info.${i}.name`}
                                      placeholder="Field name"
                                    />
                                  </div>
                                  <div className="col-md-4">

                                    <CustomInput
                                      as="select"
                                      label="Field Input Type"
                                      name={`info.${i}.type`}
                                      placeholder="Field type"
                                      // onChange={handleOptionClick}
                                      onClick={(e) => handleOptionClick(e, i)}
                                      options={<>
                                        <option value="" disabled selected>select</option>
                                        <option value="text">text</option>
                                        <option value="email">email</option>
                                        <option value="number">number</option>
                                        <option value="textarea">textarea</option>
                                        <option value="select">Dropdown</option>
                                      </>}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <CustomInput
                                      label="Input Length"
                                      name={`info.${i}.length`}
                                      placeholder="Field Length"
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <CustomInput
                                      as="select"
                                      label="Field Required"
                                      name={`info.${i}.required`}
                                      placeholder="Field required"
                                      options={<>
                                        <option value="" disabled selected>select</option>
                                        <option value="true">Mandatory</option>
                                        <option value="false">Optional</option>
                                      </>}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <CustomInput
                                      label="values for Dropdown"
                                      name={`info.${i}.dropdown_options`}
                                      placeholder="Field Length"
                                      disabled
                                      id={`options_value${i}`}
                                    />
                                  </div>
                                </div>
                                <div>
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

const errorMessage = {
  color: "#e35050",
  position: "absolute",
  fontSize: "12px",
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

