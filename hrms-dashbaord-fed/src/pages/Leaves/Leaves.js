import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input_element } from "../../components/input_field/Input_element";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./leaves.scss";
import Chip from "@mui/material/Chip";
import { useFormik } from "formik";
import { LeavesTable } from "../LeavesTable/LeavesTable";
import { Selectelement } from "../../components/Select_field/Selectelement";
import { Link } from "react-router-dom";
import Select from "react-select";

export const Leaves = () => {
  const [holidays, setHolidays] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [dateArray2, setDateArray2] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [dayError, setDayError] = useState(false);
  const [addleave, setAddleave] = useState(false);
  const [selected, setSelected] = useState(null);

  let emptyday = [];

  // ! react multiselect options
  const options = [
    { value: "hr@dollarbirdinc.com", label: "HR" },
    { value: "devopsmanager@dollarbirdinc.com", label: "Dev Ops Manager" },
    {
      value: "asstdevopsmanager@dollarbirdinc.com",
      label: "Asst Dev Ops Manager",
    },
    { value: "devopsteamlead@dollarbirdinc.com", label: "Dev Team Lead" },
  ];

  // const isWeekday = (date) => {
  //   const day = date.getDay();
  //   return day !== 0 && day !== 6;
  // };

  const handleSwitchChange = (e) => {
    let checkedStatus = e.target.checked;

    if (checkedStatus == true) {
      setStartDate(new Date());
      setDateArray2(emptyday);
      setHolidays(true);
    } else {
      setStartDate(new Date());
      setDateArray(emptyday);
      setDateArray2(emptyday);
      setHolidays(false);
    }
  };

  const handleHalfHoliday = (date) => {
    setDayError(false);
    let item = [date];
    setDateArray2(item);
    setStartDate(date);
  };

  const handlelistHolidays = (date) => {
    let selectedDate = new Date(date).toDateString();
    let items = [...dateArray];
    let items2 = [...dateArray2];
    if (!dateArray.includes(selectedDate)) {
      items.push(selectedDate);
      items.sort((date1, date2) => new Date(date1) - new Date(date2));
      items2.push(date);
      items2.sort((date1, date2) => new Date(date1) - new Date(date2));
    } else {
      const isSameNumber = (element) => element == selectedDate;
      let indexNumber = dateArray.findIndex(isSameNumber);
      items = items.filter((date) => date != selectedDate);
      items.sort((date1, date2) => new Date(date1) - new Date(date2));

      delete items2[indexNumber];

      items2 = items2.filter((el) => el != null);
      items2.sort((date1, date2) => new Date(date1) - new Date(date2));
    }
    setDayError(false);
    setDateArray(items);
    setDateArray2(items2);
    setStartDate(date);
  };

  const handleDelete = (e) => {
    if (dateArray2.length - 1 == 0) {
      setDayError(true);
    }
    let a = e.target.parentElement.getAttribute("id");

    const remData = (b) => {
      delete dateArray2[b];
      delete dateArray[b];
      let remData = dateArray.filter((el) => el != null);
      let remData2 = dateArray2.filter((el) => el != null);
      setDateArray2(remData2);
      setDateArray(remData);
    };
    if (a == null) {
      let b = e.target.parentElement.parentElement.getAttribute("id");
      remData(b);
    } else {
      remData(a);
    }
  };

  const leaveTypeArray = [
    "Casual Leave",
    "Sick Leave",
    "Privilege Leave or Earned Leave",
    "Maternity Leave",
    "Compensatory Off",
    "Marriage Leave",
    "Paternity Leave",
    "Bereavement Leave",
    "Loss of Pay(LOP) / Leave Without Pay",
  ];

  const sendArray = ["HR", "Manager", "Team Lead"];

  const formik = useFormik({
    initialValues: {
      emp_id: "DB001",
      reason_leave: "",
      leavetype: "",
      holidays_list: dateArray2,
      send_to: "",
      send_cc: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.emp_id) {
        errors.emp_id = "Required";
      }
      if (!values.reason_leave) {
        errors.reason_leave = "Required";
      }
      if (!values.leavetype) {
        errors.leavetype = "Required";
      }
      if (!values.send_to) {
        errors.send_to = "Required";
      }
      if (!values.send_cc) {
        errors.send_cc = "Required";
      }
      return errors;
    },
    onSubmit: (value) => {
      if (dateArray2.length !== 0) {
        const value2 = { ...value, holidays_list: dateArray };
        console.log(value2);
      }
    },
  });

  const triggerError = () => {
    if (dateArray2.length == 0) {
      setDayError(true);
    }
  };

  const handleFocus = () => {
    if (dateArray2.length == 0) {
      setDayError(true);
    }
  };

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="leves_style">
      <div className="d-flex justify-content-between mt-4">
        <div>
          <h3 className="header_color">Leave Management</h3>
        </div>
      </div>
      <div className="text-end">
        <Link to="/" className="goback">
          Back to Dashboard
        </Link>
        <Button
          variant="primary"
          onClick={() => {
            setAddleave(!addleave);
          }}
        >
          {addleave ? "All leaves" : "Apply Leave"}
        </Button>
      </div>

      <div>
        {addleave ? (
          <div className="leave_div">
            <h4 className="mb-4 font_color">Apply for Leave</h4>
            <Form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="row">
                {/* <div className="col-md-6">
                  <Input_element
                    type="text"
                    name="emp_id"
                    input_label="Emp. Id"
                    lableClass="font_color"
                    placeholder="Enter field"
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    disabled={true}
                    value={formik.values.emp_id}
                    formikValidation={
                      formik.touched.emp_id && formik.errors.emp_id ? (
                        <small className="text-danger">
                          {formik.errors.emp_id}
                        </small>
                      ) : null
                    }
                  />
                </div> */}
                <div className="col-md-6">
                  <Selectelement
                    select_Label="Leave Type"
                    name="leavetype"
                    lableClass="font_color"
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    optionArray={
                      <>
                        {leaveTypeArray.map((leave, i) => {
                          return (
                            <option key={i} value={leave}>
                              {leave}
                            </option>
                          );
                        })}
                      </>
                    }
                    formikValidation={
                      formik.touched.leavetype && formik.errors.leavetype ? (
                        <small className="text-danger">
                          {formik.errors.leavetype}
                        </small>
                      ) : null
                    }
                  />
                </div>
                <div className="col-md-6">
                  <Selectelement
                    select_Label="To"
                    name="send_to"
                    lableClass="font_color"
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                    optionArray={
                      <>
                        {sendArray.map((send, i) => {
                          return (
                            <option key={i} value={send}>
                              {send}
                            </option>
                          );
                        })}
                      </>
                    }
                    formikValidation={
                      formik.touched.send_to && formik.errors.send_to ? (
                        <small className="text-danger">
                          {formik.errors.send_to}
                        </small>
                      ) : null
                    }
                  />
                </div>
                <div className="col-md-12">
                  <div className="mb-2">
                    <label htmlFor="" className="text-light">
                      CC
                    </label>
                    <Select
                      // defaultValue={[options[2], options[3]]}
                      isMulti
                      name="send_cc"
                      options={options}
                      onBlur={formik.handleBlur}
                      onChange={(selectedOption) =>
                        formik.setFieldValue("send_cc", selectedOption.value)
                      }
                      className="basic-multi-select"
                      classNamePrefix="select"
                      value={formik.values.send_cc}
                    />
                    {formik.touched.send_cc && formik.errors.send_cc ? (
                      <small className="text-danger">{formik.errors.send_cc}</small>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-12">
                  <Form.Group className="mb-2">
                    <Form.Label className="font_color">Reason for Leave</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter field"
                      style={{ minHeight: "80px" }}
                      name="reason_leave"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.reason_leave && formik.errors.reason_leave ? (
                      <small className="text-danger">
                        {formik.errors.reason_leave}
                      </small>
                    ) : null}
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group className="mb-2">
                    <Form.Label className="font_color">
                      Select leave Dates
                    </Form.Label>
                    <div className="mb-2 d-flex align-items-center">
                      <Form.Label
                        className={`me-3 font_color ${holidays ? "half_day" : ""}`}
                      >
                        Half
                        <span className={`me-3 ${holidays ? "text-dark" : ""}`}>
                          Day
                        </span>
                      </Form.Label>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={handleSwitchChange}
                      />
                    </div>
                    <DatePicker
                      shouldCloseOnSelect={false}
                      selected={startDate}
                      onChange={holidays ? handleHalfHoliday : handlelistHolidays}
                      highlightDates={dateArray2}
                      calendarClassName={
                        holidays
                          ? "datepicker-calendar halfday"
                          : " datepicker-calendar"
                      }
                      minDate={new Date()}
                      // filterDate={isWeekday}
                      onClickOutside={handleFocus}
                      onKeyDown={(e) => {
                        e.preventDefault();
                      }}
                    />

                    {dayError ? (
                      <small className="text-danger">Select Date</small>
                    ) : null}
                  </Form.Group>
                </div>
                <div className="col-md-8 my-auto">
                  <div
                    name="holidays_list"
                    onChange={formik.handleChange}
                  >
                    <label className="font_color mb-2">{dateArray2.length == 0 ? null : "Selected Date :"}{" "}</label>
                    <div className="chip_div">
                      {dateArray2.map((date, i) => {
                        return (
                          <Chip
                            key={date}
                            className="mx-2 my-2"
                            color="primary"
                            id={i}
                            label={
                              new Date(date)?.toISOString()?.split("T")[0] || ""
                            }
                            onDelete={handleDelete}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>




              {/* <Selectelement
                select_Label="CC"
                name="send_cc"
                lableClass="font_color"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                optionArray={
                  <>
                    {sendArray.map((send, i) => {
                      return (
                        <option key={i} value={send}>
                          {send}
                        </option>
                      );
                    })}
                  </>
                }
                formikValidation={
                  formik.touched.send_cc && formik.errors.send_cc ? (
                    <small className="text-danger">
                      {formik.errors.send_cc}
                    </small>
                  ) : null
                }
              /> */}





              <div className="text-end mt-4">
                <Button type="submit" onClick={triggerError}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        ) : (
          <>
            <LeavesTable />
          </>
        )}
      </div>
    </div>
  );
};
