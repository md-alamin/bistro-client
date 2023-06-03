import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<div className="w-2/3 mx-auto py-10">
			<h2 className="font-bold text-center text-5xl lg:mt-10">Please Login</h2>
			<LoginForm></LoginForm>
		</div>
	);
};

export default Login;
