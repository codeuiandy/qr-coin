import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/Home/HomePage';
import NotFound from './NotFound'
import QRNaira from './Components/Naira/index'
import QBitcoin from './Components/Bitcoin/index'
import Etheretum from './Components/Etheretum/index'
import Dash from './Components/Dash/index'
import Ripple from './Components/Ripple/index'
import Tether from './Components/Tether/index'
import './App.css'
class App extends Component {
	render() {
		return (
      <React.Fragment>
			<Router>
				<Switch>
	      <Route exact path="/" component={HomePage} />
                   <Route exact="/q_coin_naira" path="/q_coin_naira" component={QRNaira}/>
				   <Route exact="/q_coin_bitcoin" path="/q_coin_bitcoin" component={QBitcoin}/>
				   <Route exact="/q_coin_etheretum" path="/q_coin_etheretum" component={Etheretum}/>
				   <Route exact="/q_coin_dash" path="/q_coin_dash" component={Dash}/>
				   <Route exact="/q_coin_ripple" path="/q_coin_ripple" component={Ripple}/>
				   <Route exact="/q_coin_tether" path="/q_coin_tether" component={Tether}/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>	
</React.Fragment>
		);
	}
}

export default App;