import React, { useState } from 'react';
import AddGoal from './Goals/AddGoal';
import ListGoals from './Goals/ListGoals';
//material ui
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	title: {
		flexGrow: 1,
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 600,
	},
}));

const Home = () => {
	const classes = useStyles();
	const [showAddGoal, setShowAddGoal] = useState(false);
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth='lg' className={classes.container}>
				<Grid container spacing={3}>
					{/* <Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<DisplayGoal />
						</Paper>
					</Grid> */}
					<Grid item xs={12} lg={12}>
						<Paper className={fixedHeightPaper}>
							<ListGoals />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Button onClick={() => setShowAddGoal(!showAddGoal)}>
								Add A Goal
							</Button>
							{showAddGoal && <AddGoal />}
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
export default Home;
