import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const Account = () => (
	<div>
		<h1>Manage My Account</h1>
		<PasswordForgetForm />
		<br />
		<PasswordChange />
	</div>
);

export default Account;
