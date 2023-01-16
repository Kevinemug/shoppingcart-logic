import React, { Component } from 'react';
//stateless functional component
const NavBar = ({totalCounters}) => {
    return (
        <nav 
        className=" navbar navbar-light bg-light">
        <a href="#" className='nav-brand' >Navbar {" "}
        <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        
        
        </a>
        </nav>
    );

}
 
export default NavBar;



