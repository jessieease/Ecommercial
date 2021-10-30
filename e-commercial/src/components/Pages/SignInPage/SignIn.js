import React from 'react';

import './SignIn.scss';
import Login from '../../Login'; 
import SignUp from '../../SignUp';

const SignIn = () => (
  <div className='sign-in'>
    <Login />
    <SignUp />
  </div>
);

export default SignIn;
