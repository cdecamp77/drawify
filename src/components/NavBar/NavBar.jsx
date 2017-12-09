import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">Drawify</a>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/images">Gallery</a></li>
                    <li><a href="badges.html">Log In</a></li>
                </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="/images">Gallery</a></li>
        <li><a href="#">Log In</a></li>
      </ul>
    </div>
  </nav>
    );
};

export default NavBar;