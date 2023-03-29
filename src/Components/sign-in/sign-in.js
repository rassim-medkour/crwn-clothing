import React, { useState } from 'react'
import './sign-in.scss'
import {FormInput} from '../form-input/form-input'
import { CustomButton } from '../custom-button/custom-button';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

export  function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async event =>{
        event.preventDefault();

        try {
            const {user} = await auth.signInWithEmailAndPassword(email,password);
            if(user){
                setEmail('');
                setPassword('');
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }

    }

     const handleChange = event =>{
        const {value, name} = event.target;
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'email')
        setEmail(value);

    }

    const handleSignInWithGoogle = async () => {
        try {
            const { user } = await signInWithGoogle();
            if (user) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={handleSubmit }>
              <FormInput name='email' type='email' label='Email' required value={email} handleChange={handleChange} />
              <FormInput name='password' type='password' label='Password' required value={password} handleChange={handleChange} />
              <div className='buttons'>
                  <CustomButton type='submit' name='submit'>Signin</CustomButton>
                  <CustomButton isGoogleSignIn onClick={handleSignInWithGoogle}>Signin With Google</CustomButton>
              </div>

        </form>
    </div>
  )
}
