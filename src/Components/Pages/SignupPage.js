import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Home/NavBar';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// style in index.css

function SignupPage() {
    return (
        <div className="sigup-page">
            <NavBar />
            <div className="main-content-body">
                <div className="container-box">
                    <div className="title-text">Sign Up</div>
                    <div className="form-container">
                        <form className="form-main" onSubmit={() => { }}>
                            <input placeholder="Username" onChange={() => { }} className="input" />
                            <input placeholder="Email address" onChange={() => { }} className="input" />
                            <div className="password-wrapper">
                                <input placeholder="Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <div className="password-wrapper">
                                <input placeholder="Confirm Password" onChange={() => { }} className="password" />
                                <FontAwesomeIcon icon={faEye} size="xs" />
                            </div>
                            <input placeholder="Referal Code (Optional)" onChange={() => { }} className="input" />
                            <input type="submit" value="Sign Up" className="btn-submit input" />
                        </form>
                    </div>
                    <div className="form-bottom">
                        <div>Alredy have an account</div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
