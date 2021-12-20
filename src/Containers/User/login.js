import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authenticate from '../../Redux/Actions/authenticate';
import { userLogin, loginFailure } from '../../Redux/Actions/login';
import axios from 'axios';
import AuthError from './AuthError';
import { Navigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.authenticate);

  const [person, setPerson] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8000/api/v1/login';
    axios
      .post(url, { ...person })
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));

        dispatch(
          userLogin({
            token: response.data.token,
            username: response.data.username,
            id: response.data.id,
          }),
        );
        dispatch(
          authenticate({
            status: true,
            token: response.data.token,
            username: response.data.username,
            id: response.data.id,
          }),
        );
      })
      .catch(() => {
        dispatch(loginFailure('Invalid username or Password. Try again!'));
      });
  };
  const { username, password } = person;
  return (
    <div>
      {login.error && <AuthError error={login.error} />}
      {auth.status && <Navigate to="/" replace={true} />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
