import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/logo.png'

export default function Navbar() {

  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const clickedMenu = () => setShowMenu(!showMenu);

  return (
    <div className="home-nav">

      <div className="logo-home-wrap">
        <img src={Logo} alt="" />
      </div>

      <div className="home-nav-ceter-links">
        <ul>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Company
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Rates
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Learn
  </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="access-home">
        <button onClick={() => history.push("/login")}>Sign in</button>
        <button onClick={() => history.push("/signup")}>Create Account</button>
      </div>


      <div className="mobile-icon">
        {!showMenu && <FontAwesomeIcon onClick={() => clickedMenu()} icon={faBars} size="2x" color="#fff" />}
        {showMenu && <FontAwesomeIcon onClick={() => clickedMenu()} icon={faTimes} size="2x" color="#fff" />}
      </div>
    </div>
  )
}
