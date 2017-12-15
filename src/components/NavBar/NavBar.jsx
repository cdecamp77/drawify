import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
  let verify = props.user ?
    <nav>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/" className="brand-logo left">Drawify</a>
      <ul className="right">
        <li><a href="/photobooth" className='NavBar-Link'>PhotoBooth</a></li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li><a href="" className='NavBar-link' onClick={props.handleLogout} >Log Out</a></li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li><span className='NavBar-welcome brand-logo center'>Welcome, {props.user.name}</span></li>
      </ul>
    </nav> :
    <nav>
      <ul className="right">
        <li><a href="/login" className='NavBar-link'>Log In</a></li>
        <li><a href="/signup" className='NavBar-link'>Sign Up</a></li>
      </ul>
    </nav>;

  return (
    <nav className='NavBar'>
      {verify}
    </nav>
  );
};

export default NavBar;