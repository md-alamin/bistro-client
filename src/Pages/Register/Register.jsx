import React from 'react';
import RegisterForm from './RegisterForm';

const Register = () => {
	return (
		<div>
			<div className="w-2/3 mx-auto py-10">
				<h2 className="font-bold text-center text-5xl lg:mt-10">
					Please Register
				</h2>
				<RegisterForm></RegisterForm>
			</div>
		</div>
	);
};

export default Register;
