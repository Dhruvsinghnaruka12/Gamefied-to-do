import React, { useState } from 'react';
import './DropdownMenu.css';
import menu from '../../assets/menu.png'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleMenu}>
      <img src={menu} alt="Menu" style={{ width: '20px', height: '20px' }} /> 
      </button>     
      {isOpen && (
        <ul className="dropdown-content">
          <li>About us </li>
          <li>Testimonial</li>
          <li>Register</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
