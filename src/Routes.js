import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home"
import Streak from './Streak';

const Routes = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<main>
					<h1>Goal Streaker</h1>
					<Switch>
						<Route exact path="/" component={Home} />
            <Route path="/streak" component={Streak} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default Routes;
