import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound'
import QRNaira from './Components/Naira/index'
import './App.css'
class App extends Component {
	render() {
		return (
	<React.Fragment>

			<Router>
				<Switch>
					{/* <Route exact="/" path="/" component={Login}/> */}
          <Route exact="/qr_coin_naira" path="/qr_coin_naira" component={QRNaira}/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>	
</React.Fragment>
		);
	}
}

export default App;