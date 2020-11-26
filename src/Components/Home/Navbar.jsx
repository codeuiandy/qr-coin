import React from 'react'
import Logo from '../../Assets/logo.png'
export default function Navbar() {
    return (
        <div className="home-nav">

            <div className="logo-home-wrap">
                <img src={Logo} alt=""/>
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
                <button>Sign in</button>
                <button>Create Account</button>
            </div>
        </div>
    )
}
