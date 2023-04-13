import React, { useState } from 'react'
import "./createshift.scss"
import { Link } from 'react-router-dom'
import { Button, Form, Table } from 'react-bootstrap'
import { Images } from '../../utils/images'
import { Input_element } from '../../components/input_field/Input_element'
import { useFormik } from 'formik'

export const CreateShift = () => {
    const shifts = ["APAC : 6:00 am to 03:00 pm", "Day: 10:00 am to 07:00 pm",
        "EMEA (Shift 1) : 11:30 am to 08:30 pm", "EMEA (Shift 2) : 12:30 pm to 09:30 pm", "EMEA (Shift 3) : 01:00 pm to 10:00 pm"]

    const [createShift, setCreateShift] = useState(true)

    const [shiftlist, setShiftList] = useState(shifts)

    const handleShiftDelete = (e) => {
        console.log("delete");
    }
    const handleShiftEdit = (e) => {
        console.log("edit");

    }

    const formik = useFormik({
        initialValues: {
            shift_type: ""
        },
        validate: (values) => {
            let errors = {}
            if (!values.shift_type) {
                errors.shift_type = "Required"
            }
            return errors
        },
        onSubmit: (values) => {
            console.log(values);
            shiftlist.push(values.shift_type)
            console.log("🚀 ~ file: CreateShift.js:35 ~ CreateShift ~ shifts:", shifts)
            setCreateShift(true)
            setShiftList(shiftlist)
        }
    })


    return (
        <div className='shift_style'>
            <div className="d-flex justify-content-between mb-4">
                <div><h3>Shifts</h3></div>
                <div className='text-end'>
                    <Link to="/" className="goback">Back to Dashboard</Link>
                    <Button type='button' onClick={createShift ? () => setCreateShift(false) : () => setCreateShift(true)}>{createShift ? "Create New Shift" : "Shift List"}</Button>
                </div>
            </div>
            <div className='shifts'>
                {createShift ?
                    <div className='table_shift_div'>
                        <h5 className='mb-3'>Shift List</h5>
                        <Table striped bordered className='table_shift'>
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Roles</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shiftlist.map((value, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{value}</td>
                                            <td>
                                                <img src={Images.editLogo} alt="icon" className='mx-2' onClick={handleShiftEdit} />
                                                <img src={Images.deleteLogo} alt="icon" className='mx-2' onClick={handleShiftDelete} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    :
                    <div className='shift_form'>
                        <Form onSubmit={formik.handleSubmit}>
                            <Input_element input_label="Shift Type"
                                type="text" name="shift_type" lableClass="font_color"
                                handleChange={formik.handleChange} handleBlur={formik.handleBlur}

                                formikValidation={formik.touched.shift_type && formik.errors.shift_type ? <small className='text-danger position-absolute'>{formik.errors.shift_type}</small> : null}
                            />
                            <div className='text-end mt-4'><Button type="submit">Add</Button></div>
                        </Form>
                    </div>
                }

            </div>
        </div>
    )
}
