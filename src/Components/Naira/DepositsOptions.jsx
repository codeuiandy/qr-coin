import React from 'react'
import AtmImg from '../../Assets/atm.png'
export default function DepositsOptions() {
    return (
        <div>
                 <div className="deposit-option-header">
                               <h1>Deposit Naira</h1>
                               <p>You can fund your wallet using any of the option below</p>

                           </div>

                         {
                             [...'1234'].map(()=>{
                                 return(
                                <div className="deposit-options-wrap">

                                <div className="deposit-options">

                                <img src={AtmImg} />

                                <div className="payment-sytem">
                                     <h1>Pay with paystack</h1>
                               <p>Fund your wallet using any of the options 
                                  available with Paystack.</p>
                                </div>
                                
                           </div>

                          
                              

                           </div>
                                 )
                             })
                         }


        </div>
    )
}
