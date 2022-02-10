import React from 'react';
import logo from './contact_icon.png';
import './Header.css'

const Header = () => {
  return (
<div className="topnav">
<img src={logo} alt="" width="50" height="50"/>
<h2 href="#App">My Contacts Form</h2>
</div>
);
};

export default Header;
