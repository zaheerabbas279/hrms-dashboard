import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input_element } from '../../components/input_field/Input_element'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './leaves.scss'
import Chip from '@mui/material/Chip';
import { useFormik } from 'formik';
import { LeavesTable } from '../LeavesTable/LeavesTable';

export const Leaves = () => {
    const [holidays, setHolidays] = useState(true)
    const [dateArray, setDateArray] = useState([])
    const [dateArray2, setDateArray2] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [dayError, setDayError] = useState(false)

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
            items2.push(date)
        } else {
            const isSameNumber = (element) => element == selectedDate;
            let indexNumber = dateArray.findIndex(isSameNumber)
            items = items.filter(date => date != selectedDate)

            delete items2[indexNumber]

            items2 = items2.filter(function (el) {
                return el != null;
            });
        }
        setDayError(false)
        setDateArray(items)
        setDateArray2(items2)
        setStartDate(date)
    }

    const formik = useFormik({
        initialValues: {
            emp_id: "",
            reason_leave: "",
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
    const [addleave, setAddleave] = useState(false)

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
                            handleBlur={formik.handleBlur} handleChange={formik.handleChange}
                            formikValidation={formik.touched.emp_id && formik.errors.emp_id ? <small className='text-danger'>{formik.errors.emp_id}</small> : null}
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
                                shouldCloseOnSelect={holidays ? false : true}
                                selected={startDate}
                                onChange={holidays ? handlelistHolidays : handleHalfHoliday}
                                highlightDates={dateArray2}
                                calendarClassName="datepicker-calendar"
                                minDate={new Date()}
                                filterDate={isWeekday}
                                onClickOutside={handleFocus}
                            />
                            <div className='my-3' name="holidays_list" onChange={formik.handleChange}>
                                {dateArray2.length == 0 ? null : 'Selected Date :'}  {dateArray2.map(date => {
                                    return (
                                        <Chip key={date} className="mx-2" color='primary' label={new Date(date)?.toISOString()?.split("T")[0] || ""} />
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
