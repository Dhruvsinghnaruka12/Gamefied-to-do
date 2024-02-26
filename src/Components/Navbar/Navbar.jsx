import React from 'react'
import './Navbar.css'
import logo_light from'../../assets/logo-black.png'
import logo_dark from'../../assets/logo-white.png'



const Navbar = ({theme,setTheme}) => {

    const toggle_mode=()=>{
        theme=='light'?setTheme('dark'): setTheme('light');
    }
  return (
    <div className='navbar'>
        <img src={theme=='light' ? logo_light: logo_dark}alt=''className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Testimonial</li>
            <li>Register</li>
        </ul>
    
   
    </div>
  )
}

export default Navbar
