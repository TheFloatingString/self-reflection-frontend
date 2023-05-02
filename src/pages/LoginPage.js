import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

function LoginPage() {
    const clientId = 'your-google-client-id';
  
    const handleSuccess = (response) => {
      // Implement success logic here
      console.log(response);
    };
  
    const handleFailure = (response) => {
      // Implement failure logic here
      console.log(response);
    };
  
    return (
      <div>
        <h1>Login</h1>
        <Button>Sign in with Google</Button>
        {/* <GoogleLogin
          clientId={clientId}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          buttonText="Login with Google"
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>
    );
  }
  
  export default LoginPage;
