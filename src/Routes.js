import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home"
import Streak from './Streak';
import AddGoal from "./AddGoal"
import SingleGoal from "./SingleGoal"
import UserHome from "./UserHome"
import UserGoals from "./UserGoals"

const Routes = () => {
  //login with AWS or firebase
  //db will have user > goal(s) - days for the streak - days accomplished (in a row? still deciding)
	return (
		<Router>
			<div>
				<NavBar />
				<main>
					<h1>Goal Streaker</h1>
					<Switch>
						<Route exact path="/" component={Home} />
            {/* might not need the streak component */}
            <Route path="/streak" component={Streak} />
            {/* <Route path="/addgoal" component={AddGoal} /> */}
            {/* <Route path="/singlegoal" component={SingleGoal} /> */}
            <Route path="/userhome" component={UserHome} />
            {/* <Route path="/usergoals" component={UserGoals} /> */}
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default Routes;
