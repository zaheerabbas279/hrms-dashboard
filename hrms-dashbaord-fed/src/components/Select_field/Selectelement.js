import React from 'react'
import { Form } from 'react-bootstrap'
import './selectelement.scss'

export const Selectelement = (props) => {
    const { lableClass, select_Label, name, handleBlur, handleChange, value, optionArray, defaultValue, formikValidation } = props
    return (
        <Form.Group className="mb-2">
            <Form.Label className={lableClass}>{select_Label}</Form.Label>
            <Form.Select
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
            >
                <option value=""></option>
                {optionArray}
            </Form.Select>
            {formikValidation}
        </Form.Group>
    )
}
