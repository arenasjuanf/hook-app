import React from 'react';
import {
    NavLink,
} from "react-router-dom";

import './NavBar.css';

export const NavBar = () => {
    return (
       
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UseContext</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="./">Home</NavLink> 
                
                
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="./about">About</NavLink> 
                
                
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="./login">Login</NavLink> 
                    
                   
                </ul>
                </div>
            </div>
        </nav>
    )
}
