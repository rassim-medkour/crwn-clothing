import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

export function Header({currentUser}) {
  return (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
              <Link to='/shop' className='option'>SHOP</Link>
              <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> :
                <Link to='/signin' className='option'>SIGNIN</Link>
            }
        </div>
    </div>
  )
}
