import React from 'react';
import FormInput from '../FormInput'; 
import Button from '../Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState ({
      email: '',
      password: ''
    })
  } 
  
  handleChange = event => {
    const { value, name } = event.target;

    this.setState ({
      [name]: value
    })
  }

  render() {
    return (
      <div className='log-in'>
        <h2>I already have an account</h2>
        <span>sign in with your email and pw</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required 
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
