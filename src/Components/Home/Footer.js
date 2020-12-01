import { faAddressBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

export const Footer = () => {
    return (
        <div className="app-footer">
            <div className="logo-footer">
                <img src={logo} alt="qcoin logo" />
            </div>
            <div className="footer-info">
                <div className="footer-address">
                    4A, Idowu Olaitan Street, Gbagada
                </div>
                <div className="footer-links">
                    <Link to="#">Blog</Link>
                    <Link to="#">API</Link>
                    <Link to="#">Terms of use</Link>
                    <Link to="#">Privacy policy</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">FAQ</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <div>Get In Touch</div>
                <div className="footer-socials">
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff" icon={faAddressBook} /></Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff" icon={faAddressCard} /></Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff" icon={faAddressBook} /></Link>
                    <Link to="#" ><FontAwesomeIcon size="2x" color="#fff" icon={faAddressCard} /></Link>
                </div>
            </div>
        </div>
    )
}
