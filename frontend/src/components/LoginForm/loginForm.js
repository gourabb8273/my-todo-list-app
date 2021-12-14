import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import NavBar from "../NavBar/navbar";
import "./loginForm.css";
import { login } from "../../store/slices/credentialSlice";
import axiosInstance from "../../services/AxiosInstance";

/**
 * USER LOGIN COMPONENT
 */
function LoginForm() {
  const initialState = {
    userId: "",
    password: "",
  };
  const loginApiURL = "http://localhost:8080/api/login";
  const dispatch = useDispatch();
  const history = useNavigate();
  const [cookies, setCookie] = useCookies(["jwtAuth"]);
  const [userCredentialState, setUserCredentialState] = useState(initialState);
  const shouldNavBarTitleRender = true;

  /**
   * SET THE STATE WITH LOGIN CREDENTIALS
   */
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        loginApiURL,
        userCredentialState
      );
      const userCredentialInfo = await response.data;
      setCookie("jwtAuth", userCredentialInfo.userToken, { path: "/" });
      dispatch(login(userCredentialInfo));
      history("/");
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * SET THE LOGIN EMAIL ID
   */
  function handleChangeEmail(e) {
    e.preventDefault();
    setUserCredentialState({
      ...userCredentialState,
      userId: e.target.value,
    });
  }

  /**
   * SET THE LOGIN PASSWORD
   */
  function handleChangePassword(e) {
    e.preventDefault();
    setUserCredentialState({
      ...userCredentialState,
      password: e.target.value,
    });
  }

  return (
    <>
      <NavBar shouldNavBarTitleRender={shouldNavBarTitleRender} />
      <div className="form-login__container">
        <h3>Please Login </h3>
        <Form className="form-login" onSubmit={handleOnSubmit}>
          <Form.Group
            className="mb-3 form-login__email"
            controlId="formBasicEmail"
          >
            <Form.Label className="form-login__email--label">
              Email address
            </Form.Label>
            <Form.Control
              onChange={handleChangeEmail}
              value={userCredentialState.userId}             
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 form-login__password"
            controlId="formBasicPassword"
          >
            <Form.Label className="form-login__password--label">
              Password
            </Form.Label>
            <Form.Control
              onChange={handleChangePassword}
              value={userCredentialState.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="form-login__button"
            disabled={
              !(
                userCredentialState.userId.length &&
                userCredentialState.password.length
              )
            }
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
