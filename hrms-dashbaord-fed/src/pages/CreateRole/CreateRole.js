import React, { useState } from 'react'
import './createrole.scss'
import { Button, Form, Table } from 'react-bootstrap'
import { ModalComponent } from '../../components/modal/ModalComponent'
import { Input_element } from '../../components/input_field/Input_element'
import { Selectelement } from '../../components/Select_field/Selectelement'
import { Link } from 'react-router-dom'
import { RouteStrings } from '../../utils/common'

export const CreateRole = () => {
    const [viewRole, setViewRole] = useState(false)
    const [createwRole, setCreateRole] = useState(false)
    const [assignRole, setAssignRole] = useState(false)

    const employees = ['01', '02', '03', '04', '05']
    const roles = ['admin', 'subadmin', 'employe']

    const handleRoleSubmit = (e) => {
        e.preventDefault()
        console.log("role created");
        roles.push("ex-employee")
    }
    const handleAssignSubmit = (e) => {
        e.preventDefault()
        console.log("role assigned");
    }
    return (
        <div className="createrole_style">
            <div className="d-flex justify-content-end mb-4">
                <Button type='button' className='mx-3' onClick={() => setViewRole(false)}>Assign Roles</Button>
                <Button type='button' className='mx-3' onClick={() => setViewRole(true)}>Roles</Button>
            </div>
            <div className='mt-5'>
                {viewRole ? <div className='role_div'>
                    <div className="mb-4 text-end">
                        <Button type='button' className='mx-3' onClick={() => setCreateRole(true)}>Create Roles</Button>
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
                    <div className="mb-4 text-end">
                        <Button type='button' className='mx-3' onClick={() => setAssignRole(true)}>ADD</Button>
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

            {/* View role Modals */}
            {/* <ModalComponent
                show={viewRole}
                onHide={() => setViewRole(false)}
                modal_header="Roles"
                modal_body={<>
                    <ul>
                        {roles.map((value) => {
                            return (
                                <li key={`${value}`}>{value}</li>
                            );
                        })}
                    </ul>
                </>
                }
            />*/}
            <ModalComponent
                show={createwRole}
                onHide={() => setCreateRole(false)}
                modal_header="Create Role"
                modal_body={<>
                    <Form onSubmit={handleRoleSubmit}>
                        <Input_element input_label="Role Name" type="text" placeholder="Enter Role" />
                        <div className='text-end mt-4'><Button type="submit">Submit</Button></div>
                    </Form>
                </>}
            />
            <ModalComponent
                show={assignRole}
                onHide={() => setAssignRole(false)}
                modal_header="Assign Role"
                modal_body={<Form onSubmit={handleAssignSubmit}>
                    <Selectelement select_Label="Emp. Id" optionArray={employees.map((value) => {
                        return (
                            <option key={`${value}`} value={`${value}`}>
                                {value}
                            </option>
                        );
                    })} />
                    <Selectelement select_Label="Role" optionArray={roles.map((value) => {
                        return (
                            <option key={`${value}`} value={`${value}`}>
                                {value}
                            </option>
                        );
                    })} />
                    <div className='text-end mt-4'><Button type="submit">Submit</Button></div>
                </Form>}
            />
        </div>
    )
}
