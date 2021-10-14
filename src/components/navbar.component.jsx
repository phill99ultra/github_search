import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <div className="container-fluid">
                <div className="navbar-brand">
                    Github Search
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/about" className="nav-link">Info</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}