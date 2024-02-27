import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import DropdownMenu from './Dropdown'; // Updated import

const Navbar = ({ theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState(['Home', 'About', 'Login', 'Signup']);

    const handleMenuItemClick = (item) => {
        console.log('Clicked on:', item);
    }

    return (
        <div className='navbar'>
            <img src={logo_light} alt='' className='logo' />
            {/* Render toggle menu on smaller screens */}
           

            {/* Render individual menu items only on larger screens */}
            <ul className={!isMenuOpen ? 'menu-closed' : ''}>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleMenuItemClick(item)}>{item}</li>
                ))}
            </ul>
            <DropdownMenu />
        </div>
    );
}

export default Navbar;
