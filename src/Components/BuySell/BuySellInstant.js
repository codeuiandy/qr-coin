import React from 'react';
import './buysell.css';
import Layout from '../Layout/index';

export const BuySellInstant = (props) => {
    let BrowserRoter = props.history.push
    let CurrentRoute = props.location.pathname
    return (
        <Layout CurrentRoute={CurrentRoute} BrowserRoter={BrowserRoter} >
            <div className="outer-container-box">
                <div className="inner-container-box">
                    <div className="buy-sell-header">
                        <h5>Buy or Sell Instantly</h5>
                        <p>A simple way to buy or sell cryptocurrency in less than a minute</p>
                    </div>
                    <div className="buy-sell-btn-container">
                        <button className="button-toggle button-buy"
                            style={{ backgroundColor: props.focused ? "#307ccc" : "#fff" }}
                        >Buy</button>
                        <button className="button-toggle button-sell">Sell</button>
                    </div>
                    <div className="buy-sell-input-container">
                        <div>
                            <h6>Currency to Buy</h6>
                            <div className="input-select">
                                <select name="" id="">
                                    <option value="">Select wallet</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h6>Buy with</h6>
                            <div className="input-select">
                                <select name="" id="">
                                    <option value="">Select wallet</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
