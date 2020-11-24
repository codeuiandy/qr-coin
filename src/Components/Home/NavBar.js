import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png';
// import qcoin from '../../Assets/qcoin.png';


export const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="logo-container">
                    <img className="logo-image" src={logo} alt="Qcoin logo" />
                </div>
                <div className="items-container">
                    <select><option>Products</option></select>
                    <select><option>Company</option></select>
                    <select><option>Rates</option></select>
                    <select><option>Learn</option></select>
                </div>
                <div className="user-actions-container">
                    <Link to="/signin">Sign In</Link>
                    <button className="btn-primary btn-signin">Create Account</button>
                </div>
            </div>
            
        </div>
    )
}
