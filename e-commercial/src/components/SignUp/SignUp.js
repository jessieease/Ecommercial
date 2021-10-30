import React from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmedPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    const { displayName, email, password, confirmedPassword } = this.state;

    if(password !== confirmedPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      })
    } catch(error) {
      console.error();
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;

    return(
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmedPassword'
            value={confirmedPassword}
            handleChange={this.handleChange}
            label='Confirmed Password'
            required
          />
          <Button type='submit'>
            Sign Up
          </Button>
        </form>
      </div>
    )
  }
}

export default SignUp;
