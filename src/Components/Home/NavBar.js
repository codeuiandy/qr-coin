import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import qcoin from '../../Assets/qcoin.png';


export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const clickedMenu = () => setShowMenu(!showMenu);

    const history = useHistory();
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="logo-container">
                    <img className="logo-image" src={logo} alt="Qcoin logo" />
                </div>
                {showMenu && <div className="items-container">
                    <select><option>Products</option></select>
                    <select><option>Company</option></select>
                    <select><option>Rates</option></select>
                    <select><option>Learn</option></select>
                </div>}
                {showMenu && <div className="user-actions-container">
                    <Link to="/login">Sign In</Link>
                    <button className="btn-primary btn-signin" onClick={() => history.push("/signup")}>Create Account</button>
                </div>}
                <div className="mobile-icon">
                    {!showMenu && <FontAwesomeIcon onClick={() => clickedMenu()} icon={faBars} size="2x" color="#fff" />}
                    {showMenu && <FontAwesomeIcon onClick={() => clickedMenu()} icon={faTimes} size="2x" color="#fff" />}
                </div>
            </div>

        </div>
    )
}
