import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Input_element } from '../../../components/input_field/Input_element';
import './forgot.scss'

export const ForgotPassword = () => {
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted syccessfully")
        setIsSent(true)
    }
    const navigate = useNavigate()
    const handleClickLogin = () => {
        navigate('/')
    }
    return (
        <>
            {isSent ? <>
                <div className='formforgot_width'>
                    <h6 className="text-light">
                        Please check your email. We have sent you a mail with reset instructions. Please check your spam if you do not see the email within a minute.
                    </h6>
                    <div className='text-center mt-4'>
                        <p className='text-light m-0'>Back to <Link to="/" className='forgot_link'>login</Link></p>
                        {/* <Button type="button" className='btn_submit' onClick={handleClickLogin}>LOGIN</Button> */}
                    </div>
                </div>
            </> :
                <> <div className='my-4 text-center'>
                    <h3>Forgot Password?</h3>
                </div>
                    <div className='formsignin_width'>
                        <Form onSubmit={handleSubmit} autoComplete="off">
                            <Input_element input_label="Email Address" type="email" placeholder="Enter Email Address" />
                            <Button type="submit" className='btn_submit'>Reset</Button>
                        </Form>
                    </div>
                </>
            }

        </>
    )
}
