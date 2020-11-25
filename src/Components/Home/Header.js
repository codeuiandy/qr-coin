import React from 'react';
// import Background from '../../Assets/home-header-background.svg';

export const Header = () => {
    return (
            <div className="home-header">
                <div className="header-items-container">
                    <div className="header-item-left">
                        <div className="bg-text">
                            <h3>BUY, Bitcoin, ETHEREUM and OTHER CRYPTO IN NIGERIA</h3>
                        </div>
                        <div className="sm-text">
                            <small>Easily buy, sell & trade different cryptocurrencies</small>
                        </div>
                        <button className="btn-button">Create A free Account</button>
                    </div>
                    <div className="header-item-right form-item">
                        <div className="input-container">
                            <form onsubmit={()=> {}} className="exchange-coin">
                                <label htmlFor="send">
                                    <div className="action">Send</div>
                                    <div className="form-input-item">
                                        <select className="crypt"><option>Bitcoin</option></select>
                                        <span><input type="number" placeholder="125.00 USD" onchange={() => {}} /></span>
                                    </div>
                                </label>
                                <label htmlFor="get">
                                    <div className="action">Get</div>
                                    <div className="form-input-item">
                                        <select className="crypt"><option>Bitcoin</option></select>
                                        <span><input type="number" placeholder="125.00 USD" onchange={() => {}} /></span>
                                    </div>
                                </label>
                            </form>
                            <div className="button-wrapper">
                                <button className="btn-button btn-trade">Exchange Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
