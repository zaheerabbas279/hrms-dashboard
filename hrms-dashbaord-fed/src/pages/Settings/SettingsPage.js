import React from 'react'
import { Accordion, Button, Tab, Tabs } from 'react-bootstrap'
import { AccordionItem } from '../../components/AccordionItem/AccordionItem'
import CreateButton from '../../components/CreateButton/CreateButton'
import { Input_element } from '../../components/input_field/Input_element'
import './setting.scss'
import { useFormik } from 'formik'
import referData from '../CompanyDetails/referData.json'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from '../Fields/CustomInput'


export const SettingsPage = () => {
    // console.log("===>referData", referData.fileds);


    // const formik = useFormik({
    //     initialValues: {
    //         role_name: "",
    //         name: "",
    //         email: "",
    //         emp_id: "",
    //         ph_no: "",
    //         gender: "",
    //         dateofbirth: "",
    //         pan: "",
    //         ifsc: "",
    //         acc_no: "",
    //         benef_name: ""
    //     },
    //     onSubmit: (values) => {
    //         console.log(values);
    //         alert("information Updated")
    //     },
    //     validate: (values) => {
    //         let errors = {};
    //         if (!values.role_name) {
    //             errors.role_name = "Required"
    //         }
    //         if (!values.name) {
    //             errors.name = "Required"
    //         }
    //         if (!values.email) {
    //             errors.email = "Required"
    //         }
    //         if (!values.emp_id) {
    //             errors.emp_id = "Required"
    //         }
    //         if (!values.ph_no) {
    //             errors.ph_no = "Required"
    //         }
    //         if (!values.gender) {
    //             errors.gender = "Required"
    //         }
    //         if (!values.dateofbirth) {
    //             errors.dateofbirth = "Required"
    //         }
    //         if (!values.pan) {
    //             errors.pan = "Required"
    //         }
    //         if (!values.ifsc) {
    //             errors.ifsc = "Required"
    //         }
    //         if (!values.acc_no) {
    //             errors.acc_no = "Required"
    //         }
    //         if (!values.benef_name) {
    //             errors.benef_name = "Required"
    //         }
    //         return errors
    //     }
    // })
    const formikBasic = useFormik({
        initialValues: {
            role_name: "",
            name: "",
            email: "",
            emp_id: ""
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

            return errors
        }
    })

    const formikContact = useFormik({
        initialValues: {
            ph_no: "",
            gender: "",
            dateofbirth: ""
        },
        onSubmit: (values) => {
            console.log(values);
            alert("information Updated")
        },
        validate: (values) => {
            let errors = {};
            if (!values.ph_no) {
                errors.ph_no = "Required"
            }
            if (!values.gender) {
                errors.gender = "Required"
            }
            if (!values.dateofbirth) {
                errors.dateofbirth = "Required"
            }
            return errors
        }
    })

    const formikBank = useFormik({
        initialValues: {
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
            {/* <Tabs
                // defaultActiveKey="basic_info"
                id="justify-tab-example"
                className="mb-3"
                justify
            >

                {referData.map(testfield => {
                    var jkl = testfield.fileds;
                    // console.log("🚀 ~ file: SettingsPage.js:163 ~ SettingsPage ~ xyz:", xyz)
                    var xyz = []
                    jkl.filter(item => {
                        xyz.push(item.field_name)
                    })

                    var res = xyz.reduce((acc, curr) => (acc[curr] = '', acc), {});
                    return (
                        <Tab eventKey={testfield.title} title={testfield.title} className='setting_tab'>
                            <Formik
                                initialValues={res}
                                validate={(values, i) => {
                                    const errors = {};


                                    Object.keys(values).forEach(function (key, index) {

                                        if (values[key] == "") {
                                            errors[key] = `${key} required`
                                        }
                                        if (!values.email) {

                                        } else {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                errors.email = 'Invalid email address';
                                            }
                                        }
                                    });

                                    return errors
                                }}
                                onSubmit={(values) => {
                                    console.log(`====>${testfield.title} `, values);
                                }}
                            >

                                <Form>
                                    {jkl.map((field, i) => {
                                        return (
                                            <div>
                                                <CustomInput label={field.field_name} type={field.field_type} name={field.field_name} />
                                            </div>
                                        )
                                    })}
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-primary font_color">Submit</button>
                                    </div>
                                </Form>
                            </Formik>
                        </Tab>
                    )

                })}

            </Tabs> */}

            <div className='information_tab'>
                <Tabs
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >

                    {referData.map(testfield => {
                        var jkl = testfield.fileds;
                        var xyz = []
                        jkl.filter(item => {
                            xyz.push(item.field_name)
                        })
                        var res = xyz.reduce((acc, curr) => (acc[curr] = '', acc), {});

                        return (
                            <Tab eventKey={testfield.title} title={testfield.title} className='setting_tab'>
                                <Formik
                                    initialValues={res}
                                    validate={(values, i) => {
                                        const errors = {};
                                        Object.keys(values).forEach(function (key) {
                                            if (values[key] == "") {
                                                errors[key] = `${key} required`
                                            }
                                            if (values.email) {
                                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                    errors.email = 'Invalid email address';
                                                }
                                            }
                                        });

                                        return errors
                                    }}
                                    onSubmit={(values, { resetForm }) => {
                                        console.log(`====>${testfield.title} `, values);
                                        resetForm()
                                    }}
                                >

                                    <Form>
                                        {jkl.map((field, i) => {
                                            return (
                                                <div>
                                                    <CustomInput label={field.field_name} type={field.field_type} name={field.field_name} />
                                                </div>
                                            )
                                        })}
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-primary font_color">Submit</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </Tab>
                        )

                    })}

                </Tabs>



                {/* <Tabs
                    // defaultActiveKey="basic_info"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >


                    <Tab eventKey="basic_info" title="Basic Information" className='setting_tab'>
                        <Form onSubmit={formikBasic.handleSubmit}>
                            <>
                                <Input_element input_label="Role" name="role_name" handleChange={formikBasic.handleChange}
                                    value={formikBasic.values.role_name}
                                    handleBlur={formikBasic.handleBlur} lableClass="font_color" type="text" placeholder="enter field"
                                    formikValidation={formikBasic.touched.role_name && formikBasic.errors.role_name ? <>
                                        <small className="text-danger">{formikBasic.errors.role_name}</small>
                                    </>
                                        : null}
                                />
                                <Input_element input_label="Name" name="name" handleChange={formikBasic.handleChange}
                                    value={formikBasic.values.name}
                                    handleBlur={formikBasic.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                    formikValidation={formikBasic.touched.name && formikBasic.errors.name ? <>
                                        <small className="text-danger">{formikBasic.errors.name}</small>
                                    </>
                                        : null}
                                />
                                <Input_element input_label="Email" name="email" handleChange={formikBasic.handleChange}
                                    value={formikBasic.values.email}
                                    handleBlur={formikBasic.handleBlur} type="email" lableClass="font_color" placeholder="enter field"
                                    formikValidation={formikBasic.touched.email && formikBasic.errors.email ? <>
                                        <small className="text-danger">{formikBasic.errors.email}</small>
                                    </>
                                        : null}
                                />
                                <Input_element input_label="Employee ID" name="emp_id" handleChange={formikBasic.handleChange}
                                    value={formikBasic.values.emp_id}
                                    handleBlur={formikBasic.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                    formikValidation={formikBasic.touched.emp_id && formikBasic.errors.emp_id ? <>
                                        <small className="text-danger">{formikBasic.errors.emp_id}</small>
                                    </>
                                        : null}
                                />
                                <div className='text-end mt-4'><Button type='submit'>Submit</Button></div>
                            </>
                        </Form>
                    </Tab>
                    <Tab eventKey="contact_info" title="Contact Information" className='setting_tab'>
                        <Form onSubmit={formikContact.handleSubmit}>
                            <Input_element input_label="Phone Number" name="ph_no" handleChange={formikContact.handleChange}
                                value={formikContact.values.ph_no}
                                handleBlur={formikContact.handleBlur} type="number" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikContact.touched.ph_no && formikContact.errors.ph_no ? <>
                                    <small className="text-danger">{formikContact.errors.ph_no}</small>
                                </>
                                    : null}
                            />

                            <Input_element input_label="Gender" name="gender" handleChange={formikContact.handleChange}
                                value={formikContact.values.gender}
                                handleBlur={formikContact.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikContact.touched.gender && formikContact.errors.gender ? <>
                                    <small className="text-danger">{formikContact.errors.gender}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Date of Birth" name="dateofbirth" handleChange={formikContact.handleChange}
                                value={formikContact.values.dateofbirth}
                                handleBlur={formikContact.handleBlur} type="date" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikContact.touched.dateofbirth && formikContact.errors.dateofbirth ? <>
                                    <small className="text-danger">{formikContact.errors.dateofbirth}</small>
                                </>
                                    : null}
                            />
                            <div className='text-end mt-4'><Button type='submit'>Submit</Button></div>
                        </Form>
                    </Tab>
                    <Tab eventKey="bank_info" title="Bank Information" className='setting_tab'>
                        <Form onSubmit={formikBank.handleSubmit}>
                            <Input_element input_label="PAN" name="pan" handleChange={formikBank.handleChange}
                                value={formikBank.values.pan}
                                handleBlur={formikBank.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikBank.touched.pan && formikBank.errors.pan ? <>
                                    <small className="text-danger">{formikBank.errors.pan}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="IFSC Code" name="ifsc" handleChange={formikBank.handleChange}
                                value={formikBank.values.ifsc}
                                handleBlur={formikBank.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikBank.touched.ifsc && formikBank.errors.ifsc ? <>
                                    <small className="text-danger">{formikBank.errors.ifsc}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Account Number" name="acc_no" handleChange={formikBank.handleChange}
                                value={formikBank.values.acc_no}
                                handleBlur={formikBank.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikBank.touched.acc_no && formikBank.errors.acc_no ? <>
                                    <small className="text-danger">{formikBank.errors.acc_no}</small>
                                </>
                                    : null}
                            />
                            <Input_element input_label="Beneficiary Name" name="benef_name" handleChange={formikBank.handleChange}
                                value={formikBank.values.benef_name}
                                handleBlur={formikBank.handleBlur} type="text" lableClass="font_color" placeholder="enter field"
                                formikValidation={formikBank.touched.benef_name && formikBank.errors.benef_name ? <>
                                    <small className="text-danger">{formikBank.errors.benef_name}</small>
                                </>
                                    : null}
                            />
                            <div className='text-end mt-4'><Button type='submit'>Submit</Button></div>
                        </Form>

                    </Tab> 
            </Tabs>*/}
            </div>
            {/* <Form onSubmit={formik.handleSubmit}>
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
            </Form> */}
        </div >
    )
}