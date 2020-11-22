import React,{useState} from 'react'
import icon1 from '../../Assets/naira.png'
import icon2 from '../../Assets/cryptoB.png'
import icon3 from '../../Assets/ep.png'
import icon4 from '../../Assets/t.png'
import icon5 from '../../Assets/ripple.png'
import icon6 from '../../Assets/Dash.png'
import logo from '../../Assets/logo.png'
export default function Sidebar(props) {
    const [activeRoute, SetActiveRoute] = useState("naira")
    let CurrentRoute = props.CurrentRoute
    return (
        <div className="sidebar-wrap">
            
            <ul className="sidebar-list">
                <li className="sidebarLogo"><img src={logo} alt=""/></li>

             <li onClick={()=>SetActiveRoute("naira")} className={CurrentRoute==="/qr_coin_naira"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon1} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Naira</span>
                    {CurrentRoute==="/qr_coin_naira"?<span className="sidbar-link-total">10000 <span>NGN</span></span> :""}
                    </span>  
                    </div>

                    {CurrentRoute==="/qr_coin_naira"?<div className="active-dot-sidebar"></div> :""}
        
              </li>

              <li onClick={()=>SetActiveRoute("BitCoin")} className={activeRoute==="BitCoin"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon2} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Bitcoin</span>
                    {activeRoute==="BitCoin"?<span className="sidbar-link-total">10000 <span>BTC</span></span> :""}
                    </span>  
                    </div>

                    {activeRoute==="BitCoin"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>SetActiveRoute("Etheretum")} className={activeRoute==="Etheretum"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon3} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Etheretum</span>
                    {activeRoute==="Etheretum"?<span className="sidbar-link-total">10000 <span>ETH</span></span> :""}
                    </span>  
                    </div>

                    {activeRoute==="Etheretum"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>SetActiveRoute("tether")} className={activeRoute==="tether"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon4} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Tether</span>
                    {activeRoute==="tether"?<span className="sidbar-link-total">10000 <span>NGN</span></span> :""}
                    </span>  
                    </div>

                    {activeRoute==="tether"?<div className="active-dot-sidebar"></div> :""}
        
              </li>


              <li onClick={()=>SetActiveRoute("ripple")} className={activeRoute==="ripple"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon5} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Ripple</span>
                    {activeRoute==="ripple"?<span className="sidbar-link-total">10000 <span>NGN</span></span> :""}
                    </span>  
                    </div>

                    {activeRoute==="ripple"?<div className="active-dot-sidebar"></div> :""}
        
              </li>



              <li onClick={()=>SetActiveRoute("Dash")} className={activeRoute==="Dash"?"active-sidebar-route" : ""}> 
                <div className="sidebar-chf5">
                         <img src={icon6} className="sidebar-i" />  

                   <span className="sidebar-link">
                       <span className="routeName">Dash</span>
                    {activeRoute==="Dash"?<span className="sidbar-link-total">10000 <span>NGN</span></span> :""}
                    </span>  
                    </div>

                    {activeRoute==="Dash"?<div className="active-dot-sidebar"></div> :""}
        
              </li>

            </ul>
        </div>
    )
}
