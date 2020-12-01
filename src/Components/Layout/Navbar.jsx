import React from 'react'
import Avatar from '../../Assets/avatar.png'
export default function Navbar({BrowserRoter}) {
    return (
    <div className="navbar-position">
         <div className="navbar-wrap">
             <div className="navbar-pad">

                 <div className="account-bal-nav">
                     <span>BTC / NGN 7,344,546.89</span>
                 </div>

                 <div className="nav-actions">
                        <span>
                        Wallets
                        </span>
                        <span>
                        Buy/Sell
                        </span>
                       <img onClick={()=>BrowserRoter(`/my_account`)} className="avatarIcaon-nav" src={Avatar} />
                 </div>

             </div>
            
        </div>
  </div>
       
    )
}
