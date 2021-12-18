import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function AuthError({ error }) {
  const [isError, setIsError] = useState(null);

  return (
    <div>
      {isError ? (
        <p className="alert alert-success"> Logged in Successfully</p>
      ) : (
        <p className="alert alert-danger">{error}</p>
      )}
    </div>
  );
  // if (!isError) {
  //   return (
  //     <div>
  //       <p className="alert alert-danger">{error}</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p className="alert alert-success">{state}</p>
  //     </div>
  // //   );
  // }
}

export default AuthError;

AuthError.propTypes = {
  error: PropTypes.string.isRequired,
};
