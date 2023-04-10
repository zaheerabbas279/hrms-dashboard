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
import { Link } from 'react-router-dom'


export const SettingsPage = () => {

    return (
        <div className='setting_style'>
            <div className="d-flex justify-content-between align-items-center my-4">
                <h3 className='header_color'>Settings</h3>
                <Link to="/" className="goback">Back to Dashboard</Link>
            </div>

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
            </div>
        </div >
    )
}