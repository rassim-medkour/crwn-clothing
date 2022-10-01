import React from 'react'
import './homepage.scss';
import  Directory from '../../Components/directory/directory.js';

export function HomePage() {
  return (
    <div className='homepage'>
        <Directory></Directory>
{/*         <div className='directory-menu'>
            <MenuItem title={'HATS'} subtitle={'Shop Now'}></MenuItem>
            <MenuItem title={'JACKETS'} subtitle={'Shop Now'}></MenuItem>
            <MenuItem title={'SNEAKERS'} subtitle={'Shop Now'}></MenuItem>
            <MenuItem title={'WOMENS'} subtitle={'Shop Now'}></MenuItem>
            <MenuItem title={'MENS'} subtitle={'Shop Now'}></MenuItem>
        </div>  */}
    </div>
  )
}
