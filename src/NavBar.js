import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav id="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/streak">Streak</NavLink>
		
		</nav>
	);
};

export default Navbar;