import React from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'
import { AccordionItem } from '../../components/AccordionItem/AccordionItem'
import CreateButton from '../../components/CreateButton/CreateButton'
import { Input_element } from '../../components/input_field/Input_element'
import './setting.scss'

export const SettingsPage = () => {
    const handleFormsubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='setting_style'>
            <h3 className='text-light my-4'>Settings</h3>
            <Form onSubmit={handleFormsubmit}>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <AccordionItem accordionKey="0" acordion_head="Basic Information" acordion_data={
                        <>
                            <Input_element input_label="Role" lableClass="text-light" type="text" placeholder="enter field" />
                            <Input_element input_label="Name" type="text" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Email" type="email" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Employee ID" type="text" lableClass="text-light" placeholder="enter field" />
                        </>
                    } />
                    <AccordionItem accordionKey="1" acordion_head="Contact Information" acordion_data={
                        <>
                            <Input_element input_label="Phone Number" type="number" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Gender" type="text" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Date of Birth" type="date" lableClass="text-light" placeholder="enter field" />
                        </>
                    } />
                    <AccordionItem accordionKey="2" acordion_head="Bank Information" acordion_data={
                        <>
                            <Input_element input_label="PAN" type="text" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="IFSC Code" type="text" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Account Number" type="text" lableClass="text-light" placeholder="enter field" />
                            <Input_element input_label="Beneficiary Name" type="text" lableClass="text-light" placeholder="enter field" />
                        </>
                    } />
                </Accordion>

                <div className='text-end mt-4'><Button type='submit'>Submit</Button></div>
            </Form>
        </div>
    )
}
