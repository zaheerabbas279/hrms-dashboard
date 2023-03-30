import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input_element } from '../../components/input_field/Input_element'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './leaves.scss'
import Chip from '@mui/material/Chip';
import { useFormik } from 'formik';

export const Leaves = () => {
    const [holidays, setHolidays] = useState(true)
    const [halfDay, setHalfDay] = useState([])
    const [dateArray, setDateArray] = useState([])
    const [dateArray2, setDateArray2] = useState([])
    const [startDate, setStartDate] = useState(new Date());

    let emptyday = []
    const handleLeaveSubmit = (e) => {
        e.preventDefault();
    }
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
            setHalfDay(emptyday)
            setHolidays(true)
        }
    }
    const handleHalfHoliday = (date) => {
        let item = [date]
        setHalfDay(item)
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
        setDateArray(items)
        setDateArray2(items2)
        setStartDate(date)
    }

    const formik = useFormik({
        initialValues: {
            emp_id: "",
            reason_leave: "",
            holiday_list: holidays ? dateArray2 : halfDay
        },
        validate: (values) => {
            let erorrs = {}
            if (!values.emp_id) {
                erorrs.emp_id = "Required"
            }
            if (!values.reason_leave) {
                erorrs.reason_leave = "Required"
            }
            if ((holidays ? dateArray2 : halfDay) == []) {
                erorrs.holiday_list = "Required"
            }
        },
        onSubmit: (value) => {
            console.log(value)
        }
    })

    return (
        <div className='attendance_style'>
            <div className="mb-4">
                <h3 className="text-light">Leave Management</h3>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Input_element type="text" name="emp_id" lableClass="text-light" input_label="Emp. Id" placeholder="Enter field"
                    handleBlur={formik.handleBlur} handleChange={formik.handleChange}
                    formikValidation={formik.touched.emp_id && formik.errors.emp_id ? <small className='text-danger'>{formik.errors.emp_id}</small> : null}
                />
                <Form.Group className="mb-2">
                    <Form.Label className='text-light'>Reason for Leave</Form.Label>
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
                    <Form.Label className='text-light'>Select leave Dates</Form.Label>
                    <div className="mb-2 d-flex">
                        <Form.Label className='text-light me-3'>Half Day</Form.Label>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            onChange={handleSwitchChange}
                            defaultChecked="checked"
                        />
                        <Form.Label className='text-light ms-3'>One or More Days</Form.Label>
                    </div>
                    <DatePicker
                        shouldCloseOnSelect={false}
                        selected={startDate}
                        onChange={holidays ? handlelistHolidays : handleHalfHoliday}
                        highlightDates={holidays ? dateArray2 : halfDay}
                        calendarClassName="datepicker-calendar"
                        minDate={new Date()}
                        filterDate={isWeekday}
                    />
                    <div className='my-3'>
                        {holidays ? <div className='text-light'>
                            Selected Dates :  {dateArray2.map(date => {
                                return (
                                    <Chip key={date} className="mx-2" color='primary' label={new Date(date)?.toISOString()?.split("T")[0] || ""} />
                                )
                            })}
                        </div> : <div className='text-light'>
                            Selected Date :  {halfDay.map(date => {
                                return (
                                    <Chip key={date} color='primary' label={new Date(date)?.toISOString()?.split("T")[0] || ""} />
                                )
                            })}
                        </div>}
                    </div>
                </Form.Group>

                <div className="text-end mt-4"><Button type='submit'>Submit</Button></div>
            </Form>
        </div>
    )
}
