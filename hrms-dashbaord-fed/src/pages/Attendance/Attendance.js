import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Input_element } from '../../components/input_field/Input_element'
import './attendance.scss'

export const Attendance = () => {
    const handleLeaveSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='attendance_style'>
            <div className="mb-4">
                <h3 className="text-light">Attendance</h3>
            </div>
            <Form onSubmit={handleLeaveSubmit}>
                <Input_element type="text" lableClass="text-light" input_label="Emp. Id" placeholder="Enter field" />
                <Form.Group className="mb-2">
                    <Form.Label className='text-light'>Reason for Leave</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter field"
                        style={{ 'min-height': '80px' }}
                    />
                </Form.Group>
                <div className="text-end mt-4"><Button type='submit'>Submit</Button></div>
            </Form>
        </div>
    )
}
