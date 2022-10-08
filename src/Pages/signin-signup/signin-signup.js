import React from 'react'
import './signin-signup.scss'
import {SignIn} from '../../Components/sign-in/sign-in.js'
import {SignUp} from '../../Components/sign-up/sign-up.js'
export function SigninSignup() {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
  )
}
