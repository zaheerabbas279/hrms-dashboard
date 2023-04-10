import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input_element } from '../../components/input_field/Input_element'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './leaves.scss'
import Chip from '@mui/material/Chip';
import { useFormik } from 'formik';
import { LeavesTable } from '../LeavesTable/LeavesTable';
import { Selectelement } from '../../components/Select_field/Selectelement';

export const Leaves = () => {
    const [holidays, setHolidays] = useState(true)
    const [dateArray, setDateArray] = useState([])
    const [dateArray2, setDateArray2] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [dayError, setDayError] = useState(false)
    const [addleave, setAddleave] = useState(false)

    let emptyday = []

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const handleSwitchChange = (e) => {
        let checkedStatus = e.target.checked
        if (checkedStatus == false) {
            setStartDate(new Date())
            setDateArray(emptyday)
            setDateArray2(emptyday)
            setHolidays(false)
        } else {
            setStartDate(new Date())
            setDateArray2(emptyday)
            setHolidays(true)
        }
    }

    const handleHalfHoliday = (date) => {
        setDayError(false)
        let item = [date]
        setDateArray2(item)
        setStartDate(date)
    }

    const handlelistHolidays = (date) => {
        let selectedDate = new Date(date).toDateString()
        let items = [...dateArray]
        let items2 = [...dateArray2]
        if (!dateArray.includes(selectedDate)) {
            items.push(selectedDate)
            items.sort((date1, date2) => new Date(date1) - new Date(date2))
            items2.push(date)
            items2.sort((date1, date2) => new Date(date1) - new Date(date2))
        } else {
            const isSameNumber = (element) => element == selectedDate;
            let indexNumber = dateArray.findIndex(isSameNumber)
            items = items.filter(date => date != selectedDate)
            items.sort((date1, date2) => new Date(date1) - new Date(date2))

            delete items2[indexNumber]

            items2 = items2.filter(function (el) {
                return el != null;
            });
            items2.sort((date1, date2) => new Date(date1) - new Date(date2))
        }
        setDayError(false)
        setDateArray(items)
        setDateArray2(items2)
        setStartDate(date)
    }

    const handleDelete = (e) => {
        if (((dateArray2.length) - 1) == 0) {
            setDayError(true)
        };
        let a = e.target.parentElement.getAttribute("id");

        const remData = (b) => {
            delete dateArray2[b]
            delete dateArray[b]
            let remData = dateArray.filter(el => el != null)
            let remData2 = dateArray2.filter(el => el != null)
            setDateArray2(remData2)
            setDateArray(remData)
        }
        if (a == null) {
            let b = e.target.parentElement.parentElement.getAttribute("id");
            remData(b)
        } else {
            remData(a)
        }
    }

    const leaveTypeArray = ["Casual Leave", "Sick Leave",
        "Privilege Leave or Earned Leave", "Maternity Leave",
        "Compensatory Off", "Marriage Leave",
        "Paternity Leave", "Bereavement Leave",
        "Loss of Pay(LOP) / Leave Without Pay"]


    const formik = useFormik({
        initialValues: {
            emp_id: "DB001",
            reason_leave: "",
            leavetype: "",
            holidays_list: dateArray2
        },
        validate: (values) => {
            let errors = {}
            if (!values.emp_id) {
                errors.emp_id = "Required"
            }
            if (!values.reason_leave) {
                errors.reason_leave = "Required"
            }
            if (!values.leavetype) {
                errors.leavetype = "Required"
            }
            return errors
        },
        onSubmit: (value) => {
            if (dateArray2.length !== 0) {
                const value2 = { ...value, holidays_list: dateArray }
                console.log(value2);
            }

        }
    })

    const triggerError = () => {
        if (dateArray2.length == 0) {
            setDayError(true)
        }
    }

    const handleFocus = () => {
        if (dateArray2.length == 0) {
            setDayError(true)
        }
    }

    return (
        <div className='leves_style'>
            <div className="text-end">
                <Button variant='primary' onClick={() => {
                    setAddleave(!addleave)
                }}>{addleave ? "All leaves" : "Apply Leave"}</Button>
            </div>
            {/* <LeavesTable /> */}
            <div className="mb-4">
                <h3 className="header_color">Leave Management</h3>
            </div>
            <div>
                {addleave ? <>
                    <Form onSubmit={formik.handleSubmit} autoComplete="off">
                        <Input_element type="text" name="emp_id" input_label="Emp. Id" placeholder="Enter field"
                            handleBlur={formik.handleBlur} handleChange={formik.handleChange} disabled={true} value={formik.values.emp_id}
                            formikValidation={formik.touched.emp_id && formik.errors.emp_id ? <small className='text-danger'>{formik.errors.emp_id}</small> : null}
                        />
                        <Selectelement
                            select_Label="Leave Type"
                            name="leavetype"
                            handleBlur={formik.handleBlur}
                            handleChange={formik.handleChange}
                            optionArray={<>
                                {leaveTypeArray.map((leave, i) => {
                                    return (
                                        <option key={i} value={leave}>{leave}</option>
                                    )
                                })}
                            </>}
                            formikValidation={formik.touched.leavetype && formik.errors.leavetype ? <small className='text-danger'>{formik.errors.leavetype}</small> : null}
                        />
                        <Form.Group className="mb-2">
                            <Form.Label>Reason for Leave</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter field"
                                style={{ minHeight: '80px' }}
                                name="reason_leave"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.reason_leave && formik.errors.reason_leave ? <small className='text-danger'>{formik.errors.reason_leave}</small> : null}
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Select leave Dates</Form.Label>
                            <div className="mb-2 d-flex align-items-center">
                                <Form.Label className={`me-3 ${holidays ? "" : "half_day"}`}>Half <span className="text-dark">Day</span> </Form.Label>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    onChange={handleSwitchChange}
                                    defaultChecked="checked"
                                />
                                <Form.Label className={`ms-3 ${holidays ? "more_day" : ""}`}>One or More Days</Form.Label>
                            </div>
                            <DatePicker
                                shouldCloseOnSelect={false}
                                selected={startDate}
                                onChange={holidays ? handlelistHolidays : handleHalfHoliday}
                                highlightDates={dateArray2}
                                calendarClassName={holidays ? "datepicker-calendar" : "datepicker-calendar halfday"}
                                minDate={new Date()}
                                filterDate={isWeekday}
                                onClickOutside={handleFocus}
                                onKeyDown={(e) => {
                                    e.preventDefault();
                                }}
                            />
                            <div className='my-3' name="holidays_list" onChange={formik.handleChange}>
                                {dateArray2.length == 0 ? null : 'Selected Date :'}  {dateArray2.map((date, i) => {
                                    return (
                                        <Chip key={date} className="mx-2" color='primary' id={i} label={new Date(date)?.toISOString()?.split("T")[0] || ""} onDelete={handleDelete} />
                                    )
                                })}
                            </div>
                            {dayError ? <small className='text-danger'>Select Date</small> : null}
                        </Form.Group>

                        <div className="text-end mt-4"><Button type='submit' onClick={triggerError}>Submit</Button></div>
                    </Form>

                </> : <>
                    <LeavesTable />
                </>}
            </div>


        </div>
    )
}
