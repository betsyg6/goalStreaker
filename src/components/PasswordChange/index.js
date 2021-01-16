import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
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
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class PasswordChange extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { passwordOne } = this.state;

		this.props.firebase
			.doPasswordUpdate(passwordOne)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
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
		const { passwordOne, passwordTwo, error } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<Avatar>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Change Password
					</Typography>
					<form onSubmit={this.onSubmit} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='passwordOne'
							label='New Password'
							name='passwordOne'
							value={passwordOne}
							onChange={this.onChange}
							autoComplete='passwordOne'
							autoFocus
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='passwordTwo'
							value={passwordTwo}
							onChange={this.onChange}
							label='Confirm New Password'
							type='password'
							id='passwordTwo'
							autoComplete='current-password'
						/>
						<Button
							type='submit'
							disabled={isInvalid}
							fullWidth
							variant='contained'
							color='primary'
						>
							Reset My Password
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

export default withFirebase(PasswordChange);
