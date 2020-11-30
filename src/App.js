import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound'
import QRNaira from './Components/Naira/index'
import QBitcoin from './Components/Bitcoin/index'
import Etheretum from './Components/Etheretum/index'
import Dash from './Components/Dash/index'
import Ripple from './Components/Ripple/index'
import Tether from './Components/Tether/index'
import Index from './Components/Home/index'
import './App.css'
import Signup from "./Components/UserAccess/Signup";
import Login from "./Components/UserAccess/Login";
import MyAccount from "./Components/Account/MyAccount";
import { TwoFactorAuth } from "./Components/Account/TwoFactorAuth";
import { ChangePassword } from "./Components/Account/ChangePassword";
import { LevelOneAccountInfo } from "./Components/Account/LevelOneAccountInfo";
import { ChangeCountry } from "./Components/Account/ChangeCountry";
import { ChangeUsername } from "./Components/Account/ChangeUsername";
import { DeveloperSettings } from "./Components/Account/DeveloperSettings";
class App extends Component {
	render() {
		return (
			<React.Fragment>

				<Router>
					<Switch>
						<Route exact="/" path="/" component={Index} />
						<Route exact path="/sign_up" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route exact="/q_coin_naira" path="/q_coin_naira" component={QRNaira} />
						<Route exact="/q_coin_bitcoin" path="/q_coin_bitcoin" component={QBitcoin} />
						<Route exact="/q_coin_etheretum" path="/q_coin_etheretum" component={Etheretum} />
						<Route exact="/q_coin_dash" path="/q_coin_dash" component={Dash} />
						<Route exact="/q_coin_ripple" path="/q_coin_ripple" component={Ripple} />
						<Route exact="/q_coin_tether" path="/q_coin_tether" component={Tether} />
						<Route exact path="/my_account" component={MyAccount} />
						<Route exact path="/two_factor_auth" component={TwoFactorAuth} />
						<Route exact path="/change_password" component={ChangePassword} />
						<Route exact path="/change_username" component={ChangeUsername} />
						<Route exact path="/level_1_account_info" component={LevelOneAccountInfo} />
						<Route exact path="/change_country" component={ChangeCountry} />
						<Route exact path="/developer_settings" component={DeveloperSettings} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;