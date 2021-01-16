import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
//material ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const SignIn = () => (
	<div>
		<SignInForm />
	</div>
);

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null,
};

class SignInFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
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
		const { email, password, error } = this.state;

		const isInvalid = password === '' || email === '';

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<Avatar>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form onSubmit={this.onSubmit} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							value={email}
							onChange={this.onChange}
							autoComplete='email'
							autoFocus
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							value={password}
							onChange={this.onChange}
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<Button
							type='submit'
							disabled={isInvalid}
							fullWidth
							variant='contained'
							color='primary'
						>
							Sign In
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>{error && <p>{error.message}</p>}</Grid>
						</Grid>
						<Grid container>
							<Grid item xs>
								<PasswordForgetLink />
							</Grid>
							<Grid item>
								<SignUpLink />
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignIn;

export { SignInForm };
