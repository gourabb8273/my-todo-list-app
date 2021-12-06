import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../NavBar/navbar';
import './login.css'
import { login } from '../../store/slices/credentialSlice';

function Login(props) {

    const dispatch = useDispatch();    
    const initialState = {
        email: '',
        password: ''
    }
    const [loginState, setLoginState] = useState(initialState);


    /**
     * SET THE STATE WITH LOGIN CREDENTIALS      
     */
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(login(loginState))

    }

    /**
     * SET THE LOGIN EMAIL ID      
     */
    function handleChangeEmail(e) {
        e.preventDefault();
        setLoginState({
            ...loginState, email: e.target.value
        })
        // console.log(e.target.value)
    }

    /**
     * SET THE LOGIN PASSWORD      
     */
    function handleChangePassword(e) {
        e.preventDefault();
        setLoginState({
            ...loginState, password: e.target.value
        })

    }

    return (
        <div className="login-container">
            <NavBar />
            <div className="form-login__container">
                <h3>Please Login </h3>
                <Form className="form-login" onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3 form-login__email" controlId="formBasicEmail">
                        <Form.Label className="form-login__email--label">Email address</Form.Label>
                        <Form.Control onChange={handleChangeEmail} value={loginState.email} classNamë="form-login__email--field" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 form-login__password" controlId="formBasicPassword">
                        <Form.Label className="form-login__password--label">Password</Form.Label>
                        <Form.Control onChange={handleChangePassword} value={loginState.password} type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button className="form-login__button" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;