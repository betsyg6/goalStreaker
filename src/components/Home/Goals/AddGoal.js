//this is a component that will add a goal to firebase associated to user (currently modeled after sign up since it will be a similar structure for adding data to db)

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import { FirebaseContext } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
//material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const INITIAL_STATE = {
	title: '',
	daysCompleted: 0,
	totalDays: 0,
	error: null,
};

const AddGoal = () => (
	<div>
		<AddGoalForm />
	</div>
);

class AddGoalFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { title, daysCompleted, totalDays } = this.state;
		//not sure what goes here...would need to add the goal to the db and have it be associated to the user
		// .then((authUser) => {
		// this.setState({ ...INITIAL_STATE });
		// this.props.history.push(ROUTES.HOME);
		// })
		// .catch((error) => {
		// 	this.setState({ error });
		// });

		this.setState({ ...INITIAL_STATE });
		// this.props.history.push(ROUTES.HOME);

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { title, daysCompleted, totalDays, error } = this.state;
		//user can only sign up if their passwords match and none of the fields are left empty
		const isInvalid = title === '' || daysCompleted === '' || totalDays === '';

		console.log(this.state);
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<Typography component='h1' variant='h5'>
						New Goal
					</Typography>
					<form noValidate onSubmit={this.onSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='title'
									name='title'
									variant='outlined'
									value={title}
									required
									onChange={this.onChange}
									fullWidth
									id='title'
									label='Goal Title'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								{/* change this to something you can't edit on this page */}
								<TextField
									variant='outlined'
									required
									fullWidth
									value={daysCompleted}
									id='daysCompleted'
									label='Days Completed'
									onChange={this.onChange}
									name='daysCompleted'
									autoComplete='daysCompleted'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									value={totalDays}
									name='totalDays'
									label='Total Days'
									id='totalDays'
									onChange={this.onChange}
									autoComplete='totalDays'
								/>
							</Grid>
						</Grid>
						<Button
							disabled={isInvalid}
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
						>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>{error && <p>{error.message}</p>}</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

const AddGoalForm = compose(withRouter, withFirebase)(AddGoalFormBase);
export default AddGoal;
export { AddGoalForm };
