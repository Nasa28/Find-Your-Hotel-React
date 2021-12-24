import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginError = ({ error }) => {
  const [isError, setIsError] = useState();

  return (
    <div>
      {isError ? (
        <p className="alert alert-success"> Logged in Successfully</p>
      ) : (
        <p className="alert alert-danger">{error}</p>
      )}
    </div>
  );
};

export default LoginError;

LoginError.propTypes = {
  error: PropTypes.string.isRequired,
};
