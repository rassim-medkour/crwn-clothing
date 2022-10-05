import React, { useState } from 'react'
import './sign-in.scss'
import {FormInput} from '../form-input/form-input'

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
        console.log(name);
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
              <FormInput name='email' type='email' label='Email' value={email} onChange={handleChange} />
              <FormInput name='password' label='Password' value={password} onChange={handleChange} />
            <input type='submit' name='submit' value='Signin' />
        </form>
    </div>
  )
}
