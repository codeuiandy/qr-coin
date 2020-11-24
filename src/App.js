import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import QRNaira from './Components/Naira/index';
import HomePage from './Components/Home/HomePage';
import './App.css'
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/qr_coin_naira" component={QRNaira} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;