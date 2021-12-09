import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import NavBar from "../NavBar/navbar";
import "./login.css";
import { login } from "../../store/slices/credentialSlice";
import axiosInstance from "../../services/AxiosInstance";

/**
 * LOGIN USER CREDENTIAL COMPONENT
 */
function Login() {
  const loginApiURL = "http://localhost:8080/api/login";
  const dispatch = useDispatch();
  const history = useNavigate();
  const [cookies, setCookie] = useCookies(["jwtAuth"]);

  const initialState = {
    userId: "",
    password: "",
  };
  const [loginState, setLoginState] = useState(initialState);

  /**
   * SET THE STATE WITH LOGIN CREDENTIALS
   */
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        loginApiURL,
        loginState
      );
      const data = await response.data;
      setCookie("jwtAuth", data.userToken, { path: "/" });
      dispatch(login(data));
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
    setLoginState({
      ...loginState,
      userId: e.target.value,
    });
  }

  /**
   * SET THE LOGIN PASSWORD
   */
  function handleChangePassword(e) {
    e.preventDefault();
    setLoginState({
      ...loginState,
      password: e.target.value,
    });
  }

  return (
    <div className="login-container">
      <NavBar isValidPage={true} />
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
              value={loginState.email}
              classNamë="form-login__email--field"
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
              value={loginState.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="form-login__button"
            disabled={!(loginState.userId.length && loginState.password.length)}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
