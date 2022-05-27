import * as React from 'react';
import {Link, NavLink }from 'react-router-dom';



function NavBar() {

  return (
    <nav>
          <NavLink to="/" value="Home" >
            Home
          </NavLink>
          <NavLink to="/CoinsTable" value="CoinsTable" >
            CoinsTable
          </NavLink>
          <NavLink to="/News" value="News">
            News
          </NavLink>
          <NavLink to="/About" value="About">
            About 
          </NavLink>
    </nav>
  );
}

export default NavBar;

