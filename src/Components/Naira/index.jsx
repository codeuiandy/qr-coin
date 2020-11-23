import React,{useState} from 'react'
import Layout from '../Layout/index'
import basketImg from '../../Assets/basket.png'
import BankImg from '../../Assets/bank.png'
import AtmImg from '../../Assets/atm.png'
import DepositOptions from './DepositsOptions'
import Withdraw from './Withdraw'
export default function Index(props) {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    const [activeTab,setActiveTab] = useState("Withdraw")
    return (
        <div>
            <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
                <div className="content-wrap-action-box">

                   <div className="logs-3-col-box">

                       <div className="log-box-one">
                           <div className="account-balance-container">
                               <div className="acc-bal-col1">
                                   <p className="acc-bal-7yhgu">Naira Wallet Balance</p>
                                   <p className="acc-bal-7yu">50,558.00 <span>NGN</span></p>
                                   <div className="toggle-hide-showAcc">
                                    <span>Hide Balance</span> <input type="checkbox"/>
                                   </div>
                               </div>
                              
                           </div>
                           <div className="action-images-naira">
                               <div onClick={()=>setActiveTab("Deposit")} className={`imgWrap-naira ${activeTab === "Deposit"? "imgWrap-naira-active" : ""}`}>
                                   <img src={AtmImg} />
                                   <span>Deposit</span>
                               </div>

                               <div onClick={()=>setActiveTab("Withdraw")} className={`imgWrap-naira ${activeTab === "Withdraw"? "imgWrap-naira-active" : ""}`}>
                               <img src={BankImg} />
                               <span>Withdraw</span>
                               </div>

                               <div onClick={()=>setActiveTab("Buy/Sell")} className={`imgWrap-naira ${activeTab === "Buy/Sell"? "imgWrap-naira-active" : ""}`}>
                               <img src={basketImg} />
                               <span>Buy/Sell</span>
                               </div>
                               
                             
                               
                           </div>
                           

                       </div>

                      
                   </div>


                   <div className="data-view-col-box">
                   <div className="log-box-two">
                         <div className="acc-bal-col1">
                         {activeTab === "Deposit"?  <DepositOptions /> : ""}
                         {activeTab === "Withdraw"?  <Withdraw /> : ""}
                            

                          </div>

                       </div>
                       
                       <div className="log-box-three">

                         <div className="withdraw-header-transations">
                            <span className="widrawTitle">NGN DEPOSIT HISTORY</span>
                            <span className="widrawPlus">View More</span>
                        </div>
                        
                       </div>

                   </div>
                </div>
            </Layout>
            
        </div>
    )
}
