import React from 'react'
import { Input_element } from '../input_field/Input_element'
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import './userprofile.scss'

export const UserProfile = () => {

    const userData = [{ fieldname: "Name", fieldvalue: "HR" },
    { fieldname: "Official Email", fieldvalue: "example@dollarbirdinc.com" }]

    const formik = useFormik({
        initialValues: {
            curr_password: "",
            new_password: "",
            confirm_password: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.curr_password) {
                errors.curr_password = "Enter correct password";
            }
            if (!values.new_password) {
                errors.new_password = "Password is required";
            }
            if (!values.confirm_password) {
                errors.confirm_password = "Password is required";
            }

            return errors;
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <div className='userprofile_div'>
            <div className='mb-4'>
                <h3 className='font_color mb-3'>User Profile</h3>
                <div className='row'>
                    {userData.map(item => {
                        return (
                            <div className="col-md-6">
                                <Input_element
                                    input_label={item.fieldname}
                                    lableClass="font_color"
                                    type="text"
                                    disabled={true}
                                    value={item.fieldvalue}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h4 className='font_color mb-3'>Change Password</h4>
                <Form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Input_element
                        name="curr_password"
                        input_label="Current Password *"
                        type="password"
                        lableClass="font_color"
                        placeholder="Enter Current Password"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.curr_password}
                        formikValidation={formik.touched.curr_password && formik.errors.curr_password ? (
                            <>
                                <span className="text-danger">{formik.errors.curr_password}</span>
                            </>
                        ) : null}
                    />
                    <Input_element
                        name="new_password"
                        input_label="New Password *"
                        type="password"
                        lableClass="font_color"
                        placeholder="Enter New Password"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.new_password}
                        formikValidation={formik.touched.new_password && formik.errors.new_password ? (
                            <>
                                <span className="text-danger">{formik.errors.new_password}</span>
                            </>
                        ) : null}
                    />
                    <Input_element
                        name="confirm_password"
                        input_label="Confirm Password *"
                        type="password"
                        lableClass="font_color"
                        placeholder="Enter Confirm Password"
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={formik.values.confirm_password}
                        formikValidation={formik.touched.confirm_password && formik.errors.confirm_password ? (
                            <>
                                <span className="text-danger">{formik.errors.confirm_password}</span>
                            </>
                        ) : null}
                    />
                    <div className="text-end mt-4">
                        <Button type="submit" className="btn_submit">
                            Update Password
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
