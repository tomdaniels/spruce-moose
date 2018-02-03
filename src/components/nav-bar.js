import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <div>
        <NavLink to="/music" activeClassName="is-active" >Music</NavLink>
    </div>
);

export default NavBar;