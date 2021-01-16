import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from 'react-router-dom';
import { withFirebase } from '../Firebase';
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
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

const SignUp = () => (
	<div>
		<SignUpForm />
	</div>
);

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { username, email, passwordOne } = this.state;
		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then((authUser) => {
				//create a user in your Firebase realtime database
				return this.props.firebase
					.user(authUser.user.uid)
					.set({ username, email });
			})
			.then((authUser) => {
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
		const { username, email, passwordOne, passwordTwo, error } = this.state;
		//user can only sign up if their passwords match and none of the fields are left empty
		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			passwordTwo === '' ||
			email === '' ||
			username === '';

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<Avatar>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<form noValidate onSubmit={this.onSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='username'
									name='username'
									variant='outlined'
									value={username}
									required
									onChange={this.onChange}
									fullWidth
									id='username'
									label='User Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									value={email}
									id='email'
									label='E-mail'
									onChange={this.onChange}
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									value={passwordOne}
									name='passwordOne'
									label='Password'
									type='password'
									id='passwordOne'
									onChange={this.onChange}
									autoComplete='current-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									value={passwordTwo}
									onChange={this.onChange}
									name='passwordTwo'
									label='Confirm Password'
									type='password'
									id='passwordTwo'
									autoComplete='current-password'
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

const SignUpLink = () => (
	<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);
export default SignUp;
export { SignUpForm, SignUpLink };
