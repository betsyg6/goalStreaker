import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	container: {
		display: 'flex',
		height: '100%',
		width: '100%',
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.container}>
				<Navigation />
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container>
						<Route exact path={ROUTES.LANDING} component={Landing} />
						<Route path={ROUTES.SIGN_UP} component={SignUp} />
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
						<Route path={ROUTES.HOME} component={Home} />
						<Route path={ROUTES.ACCOUNT} component={Account} />
						<Route path={ROUTES.ADMIN} component={Admin} />
					</Container>
				</div>
			</div>
		</Router>
	);
};

export default withAuthentication(App);
