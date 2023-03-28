import React from 'react'
import { Form } from 'react-bootstrap'

export const Input_element = (props) => {
    const { input_label, type, placeholder, name, handleBlur, handleChange } = props
    return (
        <Form.Group className="mb-3">
            <Form.Label className='text-light'>{input_label}</Form.Label>
            <Form.Control type={type} className="form-control" placeholder={placeholder} name={name} onBlur={handleBlur} onChange={handleChange} />
        </Form.Group>
    )
}
