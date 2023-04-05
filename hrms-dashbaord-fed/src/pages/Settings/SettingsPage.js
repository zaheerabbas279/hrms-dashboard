import React from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'
import { AccordionItem } from '../../components/AccordionItem/AccordionItem'
import CreateButton from '../../components/CreateButton/CreateButton'
import { Input_element } from '../../components/input_field/Input_element'
import './setting.scss'
import { useFormik } from 'formik'

export const SettingsPage = () => {

    const formik = useFormik({
        initialValues: {
            role_name: "",
            name: "",
            email: "",
            emp_id: "",
            ph_no: "",
            gender: "",
            dateofbirth: "",
            pan: "",
            ifsc: "",
            acc_no: "",
            benef_name: ""
        },
        onSubmit: (values) => {
            console.log(values);
            alert("information Updated")
        },
        validate: (values) => {
            let errors = {};
            if (!values.role_name) {
                errors.role_name = "Required"
            }
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.email) {
                errors.email = "Required"
            }
            if (!values.emp_id) {
                errors.emp_id = "Required"
            }
            if (!values.ph_no) {
                errors.ph_no = "Required"
            }
            if (!values.gender) {
                errors.gender = "Required"
            }
            if (!values.dateofbirth) {
                errors.dateofbirth = "Required"
            }
            if (!values.pan) {
                errors.pan = "Required"
            }
            if (!values.ifsc) {
                errors.ifsc = "Required"
            }
            if (!values.acc_no) {
                errors.acc_no = "Required"
            }
            if (!values.benef_name) {
                errors.benef_name = "Required"
            }
            return errors
        }
    })

    return (
        <div className='setting_style'>
            <h3 className='header_color my-4'>Settings</h3>
            <Form onSubmit={formik.handleSubmit}>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <AccordionItem accordionKey="0" acordion_head="Basic Information" acordion_data={
                        <>
                            <Input_element input_label="Role" name="role_name" handleChange={formik.handleChange}
                                value={formik.values.role_name}
                                handleBlur={formik.handleBlur} lableClass="font_color" type="text" placeholder="enter field"
                                formikValidation={formik.touched.role_name && formik.errors.role_name ? <>
                                    <small className="text-danger">{formik.errors.role_name}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Name" name="name" handleChange={formik.handleChange}
                                value={formik.values.name}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.name && formik.errors.name ? <>
                                    <small className="text-danger">{formik.errors.name}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Email" name="email" handleChange={formik.handleChange}
                                value={formik.values.email}
                                handleBlur={formik.handleBlur} type="email" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.email && formik.errors.email ? <>
                                    <small className="text-danger">{formik.errors.email}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Employee ID" name="emp_id" handleChange={formik.handleChange}
                                value={formik.values.emp_id}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.emp_id && formik.errors.emp_id ? <>
                                    <small className="text-danger">{formik.errors.emp_id}</small>
                                </>
                                    : null}
                            />
                        </>
                    } />
                    <AccordionItem accordionKey="1" acordion_head="Contact Information" acordion_data={
                        <>
                            <Input_element input_label="Phone Number" name="ph_no" handleChange={formik.handleChange}
                                value={formik.values.ph_no}
                                handleBlur={formik.handleBlur} type="number" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.ph_no && formik.errors.ph_no ? <>
                                    <small className="text-danger">{formik.errors.ph_no}</small>
                                </>
                                    : null}
                            />

                            <Input_element input_label="Gender" name="gender" handleChange={formik.handleChange}
                                value={formik.values.gender}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.gender && formik.errors.gender ? <>
                                    <small className="text-danger">{formik.errors.gender}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Date of Birth" name="dateofbirth" handleChange={formik.handleChange}
                                value={formik.values.dateofbirth}
                                handleBlur={formik.handleBlur} type="date" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.dateofbirth && formik.errors.dateofbirth ? <>
                                    <small className="text-danger">{formik.errors.dateofbirth}</small>
                                </>
                                    : null}
                            />
                        </>
                    } />
                    <AccordionItem accordionKey="2" acordion_head="Bank Information" acordion_data={
                        <>
                            <Input_element input_label="PAN" name="pan" handleChange={formik.handleChange}
                                value={formik.values.pan}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.pan && formik.errors.pan ? <>
                                    <small className="text-danger">{formik.errors.pan}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="IFSC Code" name="ifsc" handleChange={formik.handleChange}
                                value={formik.values.ifsc}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.ifsc && formik.errors.ifsc ? <>
                                    <small className="text-danger">{formik.errors.ifsc}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Account Number" name="acc_no" handleChange={formik.handleChange}
                                value={formik.values.acc_no}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.acc_no && formik.errors.acc_no ? <>
                                    <small className="text-danger">{formik.errors.acc_no}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Beneficiary Name" name="benef_name" handleChange={formik.handleChange}
                                value={formik.values.benef_name}
                                handleBlur={formik.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formik.touched.benef_name && formik.errors.benef_name ? <>
                                    <small className="text-danger">{formik.errors.benef_name}</small>
                                </>
                                    : null}
                            />
                        </>
                    } />
                </Accordion>

                <div className='text-end mt-4'><Button type='submit'>Submit</Button></div>
            </Form>
        </div>
    )
}
