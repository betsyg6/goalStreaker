import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    //add a ternary conditional for if the user is logged in to display home or userhome
	return (
		<nav id="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/streak">Streak</NavLink>
            <NavLink to="/userhome">User Home</NavLink>
            {/* <NavLink to="/usergoals">User Goals</NavLink> */}
            {/* <NavLink to="/singlegoal">Single Goal</NavLink> */}
            {/* <NavLink to="/addgoal">Add Goal</NavLink> */}
		</nav>
	);
};

export default Navbar;