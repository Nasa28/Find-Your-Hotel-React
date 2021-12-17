import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authenticate from '../../Redux/Actions/authenticate';
import axios from 'axios';
import { userSignup } from '../../Redux/Actions/signup';
const SignUp = () => {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);

  const [person, setPerson] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8000/api/v1/signup';
    axios
      .post(url, { user: person })
      .then((response) => {
        localStorage.setItem('logged', JSON.stringify(response));
        dispatch(
          userSignup({
            token: response.data.token,
            username: response.data.username,
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });

    if (person.username && person.password && person.password_confirmation) {
      dispatch(
        userSignup({
          ...person,
        }),
      );
      setPerson({
        username: '',
        password: '',
        password_confirmation: '',
      });
    }
  };

  if (signup.user.token) {
    const { user } = signup;
    dispatch(
      authenticate({
        status: true,
        token: user.token,
        username: user.username,
      }),
    );
  }
  const { username, password, password_confirmation } = person;
  return (
    <div>
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

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password "
            value={password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
