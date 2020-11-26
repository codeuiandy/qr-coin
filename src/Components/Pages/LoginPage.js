import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Home/NavBar';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// style in index.css

function LoginPage() {
    return (
        <div className="sigup-page">
            <NavBar />
            <div className="main-content-body">
                <div className="container-box">
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

export default LoginPage;

