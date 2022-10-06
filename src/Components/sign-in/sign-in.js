import React, { useState } from 'react'
import './sign-in.scss'
import {FormInput} from '../form-input/form-input'
import { CustomButton } from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export  function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    function handleSubmit (event){
        event.preventDefault();
        console.log('On submit');
        setEmail('');
        setPassword('');
    }

     const handleChange = event =>{
        const {value, name} = event.target;
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'email')
        setEmail(value);

    }

  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={handleSubmit }>
              <FormInput name='email' type='email' label='Email' required value={email} handleChange={handleChange} />
              <FormInput name='password' label='Password' required value={password} handleChange={handleChange} />
              <CustomButton type='submit' name='submit'>Signin</CustomButton>
              <CustomButton onClick={signInWithGoogle}>Signin With Google</CustomButton>

        </form>
    </div>
  )
}
