import React, { useState } from 'react'
import './createrole.scss'
import { Button, Form, Table } from 'react-bootstrap'
import { ModalComponent } from '../../components/modal/ModalComponent'
import { Input_element } from '../../components/input_field/Input_element'
import { Selectelement } from '../../components/Select_field/Selectelement'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

export const CreateRole = () => {
    const [viewRole, setViewRole] = useState(false)
    const [createRole, setCreateRole] = useState(false)
    const [assignRole, setAssignRole] = useState(false)

    const employees = ['01', '02', '03', '04', '05']
    const roles = ['admin', 'subadmin', 'employe']

    const formikRole = useFormik({
        initialValues: {
            role_name: ""
        },
        onSubmit: (value) => {
            console.log(value);
        },
        validate: (values) => {
            let errors = {}
            if (!values.role_name) {
                errors.role_name = "Required"
            }
            return errors
        }
    })

    const formik = useFormik({
        initialValues: {
            selected_employee: "",
            selected_role: ""
        },
        validate: (values) => {
            let errors = {}
            if (!values.selected_employee) {
                errors.selected_employee = "select employee"
            }
            if (!values.selected_role) {
                errors.selected_role = "select role"
            }
            return errors
        },
        onSubmit: (value) => {
            console.log(value);
        }
    })

    return (
        <div className="createrole_style">
            <div className="d-flex justify-content-between mb-4">
                <div><h3>Roles</h3></div>
                <div>
                    <Link to="/" className="goback">Back to Dashboard</Link>
                    <Button type='button' onClick={viewRole ? () => setViewRole(false) : () => setViewRole(true)}>{viewRole ? "Roles List" : "Create Roles"}</Button>
                </div>
            </div>
            <div className='mt-5'>
                {viewRole ? <div className='role_div'>
                    <h5>Add Roles</h5>
                    <div className="mb-4 text-end">
                        <Button type='button' className='mx-3' onClick={() => setCreateRole(true)}>Add New Role</Button>
                    </div>
                    <div className='roles'>
                        <Table striped bordered hover className='table_role'>
                            <thead>
                                <tr>
                                    <th>Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((value) => {
                                    return (
                                        <tr>
                                            <td key={`${value}`}>{value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div> : <div className='table_div'>
                    <h5>Assigned Roles List</h5>
                    <div className="mb-4 text-end">
                        <Button type='button' className='mx-3' onClick={() => setAssignRole(true)}>Assign Role</Button>
                    </div>
                    <Table striped bordered hover className='table_assignrole'>
                        <thead>
                            <tr>
                                <th>Emp Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><Button type='button' className='edit_role' onClick={() => setAssignRole(true)}>Admin</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>}
            </div>

            <ModalComponent
                show={createRole}
                onHide={() => setCreateRole(false)}
                modal_header="Create Role"
                modal_body={<>
                    <Form onSubmit={formikRole.handleSubmit}>
                        <Input_element input_label="Role Name" name="role_name" handleChange={formikRole.handleChange}
                            handleBlur={formikRole.handleBlur} value={formikRole.values.role_name} type="text" placeholder="Enter Role"
                            formikValidation={formikRole.touched.role_name && formikRole.errors.role_name ?
                                <small className='text-danger'>{formikRole.errors.role_name}</small> : null}
                        />
                        <div className='text-end mt-4'><Button type="submit">Submit</Button></div>
                    </Form>
                </>}
            />
            <ModalComponent
                show={assignRole}
                onHide={() => setAssignRole(false)}
                modal_header="Assign Role"
                modal_body={<Form onSubmit={formik.handleSubmit}>
                    <Selectelement select_Label="Emp. Id" name="selected_employee" handleChange={formik.handleChange} handleBlur={formik.handleBlur}
                        optionArray={employees.map((value) => {
                            return (
                                <option key={`${value}`} value={`${value}`}>
                                    {value}
                                </option>
                            );
                        })}
                        formikValidation={formik.touched.selected_employee && formik.errors.selected_employee ? <small className='text-danger'>{formik.errors.selected_employee}</small> : null}
                    />
                    <Selectelement select_Label="Role" name="selected_role" handleChange={formik.handleChange} handleBlur={formik.handleBlur}
                        optionArray={roles.map((value) => {
                            return (
                                <option key={`${value}`} value={`${value}`}>
                                    {value}
                                </option>
                            );
                        })}
                        formikValidation={formik.touched.selected_role && formik.errors.selected_role ? <small className='text-danger'>{formik.errors.selected_role}</small> : null}
                    />
                    <div className='text-end mt-4'><Button type="submit">Submit</Button></div>
                </Form>}
            />
        </div>
    )
}
