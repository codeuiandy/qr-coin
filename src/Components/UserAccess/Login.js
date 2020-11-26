import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Home/Navbar';
import image from '../../Assets/Group 53.png';

// style in index.css
function Login() {
    return (
        <div className="sigup-page">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="main-content-body">
                <div className="container-box">
                    <img src={image} alt="Signup image" className="lock-imgage" />
                    <div className="title-text">Sign In</div>
                    <div className="form-container">
                        <form className="form-main" onSubmit={() => { }}>
                            <input placeholder="Username" onChange={() => { }} className="input" />
                            <div className="password-wrapper">
                                <input placeholder="Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <div className="forgot-password">
                                <Link to="/forgot_password">Forgot password</Link>
                            </div>
                            <input type="submit" value="Sign In" className="btn-submit input" />
                        </form>
                    </div>
                    <div className="form-bottom">
                        <div>Don't have an account</div>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
