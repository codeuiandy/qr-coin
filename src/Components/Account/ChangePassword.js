import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import "./account.css";


export const ChangePassword = () => {
    const history = useHistory();
    return (
        <div className="accouts-1">
            <div className="nav-container">
                <Navbar />
            </div>
            <div className="main-content-body">
                <div className="account-container-box">
                    <div className="inner-container-box-2">
                        <div>
                            <div className="account-title-top">
                                <h5>Change Your Password</h5>
                            </div>
                            <div className="setup-body">
                                <form onSubmit={() => { }} className="body-form">
                                    <label htmlFor="oldpassword">Old Password</label>
                                    <input type="text" name="oldpassword" className="body-form-input" />
                                    <label htmlFor="password">Password*</label>
                                    <input type="text" name="password" className="body-form-input" placeholder="Please set your account password" />
                                    <label htmlFor="confirmpassword">Confirm Password*</label>
                                    <input type="text" name="confirmpassword" className="body-form-input" placeholder="Confirm your password" />
                                    <div className="btn-wrapper">
                                        <div className="cancel-back-btn" onClick={() => history.goBack()}>Back</div>
                                        <input type="submit" value="Change password" className="submit-form-2-btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
