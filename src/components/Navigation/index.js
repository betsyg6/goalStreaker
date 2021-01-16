import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOut from '../SignOut';
import { AuthUserContext } from '../Session';
//material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
		</AuthUserContext.Consumer>
	</div>
);

const NavigationAuth = () => (
	<div>
		<ListItem button component={Link} to={ROUTES.LANDING}>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary='Landing' />
		</ListItem>
		<ListItem button component={Link} to={ROUTES.HOME}>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary='Home' />
		</ListItem>
		<ListItem button component={Link} to={ROUTES.ACCOUNT}>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary='Account' />
		</ListItem>
		<ListItem button component={Link} to={ROUTES.ADMIN}>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary='Admin' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<SignOut />
		</ListItem>
	</div>
);

const NavigationNonAuth = () => (
	<div>
		<ListItem button component={Link} to={ROUTES.LANDING}>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary='Landing' />
		</ListItem>
		<ListItem button component={Link} to={ROUTES.SIGN_IN}>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary='Sign In' />
		</ListItem>
	</div>
);

export default Navigation;
