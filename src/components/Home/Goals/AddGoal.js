import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
// import { FirebaseContext } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
import { AuthUserContext } from '../../Session';
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

	onSubmit = (event, authUser) => {
		const { title, daysCompleted, totalDays } = this.state;

		this.props.firebase
			.goal(authUser.uid)
			//pushes each goal object into the user's goal array
			.push({ title, daysCompleted, totalDays })
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { title, daysCompleted, totalDays, error } = this.state;
		//user can only sign up if none of the fields are left empty
		const isInvalid = title === '' || daysCompleted === '' || totalDays === '';

		return (
			<AuthUserContext.Consumer>
				{(authUser) => (
					<Container component='main' maxWidth='xs'>
						<CssBaseline />
						<div>
							<Typography component='h1' variant='h5'>
								New Goal
							</Typography>

							<form
								noValidate
								onSubmit={(event) => this.onSubmit(event, authUser)}
							>
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
									Add Goal
								</Button>
								<Grid container justify='flex-end'>
									<Grid item>{error && <p>{error.message}</p>}</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				)}
			</AuthUserContext.Consumer>
		);
	}
}

const AddGoalForm = compose(withRouter, withFirebase)(AddGoalFormBase);
export default AddGoal;
export { AddGoalForm };
