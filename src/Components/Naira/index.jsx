import React from 'react'
import Layout from '../Layout/index'
export default function Index(props) {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    console.log(props)
    return (
        <div>
            <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
                <div className="content-wrap-action-box">

                   <div className="logs-3-col-box">

                       <div className="log-box-one">
                           <div className="account-balance-container">
                               <div className="acc-bal-col1">
                                   <p>Naira Wallet Balance</p>
                                   <p>50,558.00 <span>NGN</span></p>
                                   <div className="toggle-hide-showAcc">
                                    <span>Hide Balance</span> <input type="checkbox"/>
                                   </div>
                               </div>
                              
                           </div>

                       </div>

                       <div className="log-box-two">

                       </div>
                       
                       <div className="log-box-three">

                       </div>

                   </div>
                </div>
            </Layout>
            
        </div>
    )
}
