import React,{useState} from 'react'
import { FormInput } from '../form-input/form-input'
import { CustomButton } from '../custom-button/custom-button'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.scss';
export function SignUp() {

    const [displayName,setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user,{displayName});
        } catch (error) {
            console.log(error.message);
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDisplayName('');
    }

    const handleChange = event => {
        const { value, name } = event.target;
        if (name === 'displayName')
            setDisplayName(value);
        if (name === 'email')
            setEmail(value);
        if (name === 'password')
            setPassword(value);
        if (name === 'confirmPassword')
            setConfirmPassword(value);

    }
  return (
    <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>SignUp With your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
              <FormInput name='displayName' label='Username' type='text' required value={displayName} handleChange={handleChange} />
              <FormInput name='email' type='email' label='Email' required value={email} handleChange={handleChange} />
              <FormInput name='password' type='password' label='Password' required value={password} handleChange={handleChange} />
              <FormInput name='confirmPassword' type='password' label='Confirm Password' required value={confirmPassword} handleChange={handleChange} />
              <CustomButton type='submit' name='submit'>Sign Up</CustomButton>
        </form>
    </div>
  )
}
