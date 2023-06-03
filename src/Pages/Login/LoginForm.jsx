import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const email = data.email;
		const password = data.password;
		console.log(email, password);
	};
	console.log(errors.password);
	return (
		<div className="hero min-h-[50vh] mt-6 bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className="text-center lg:text-left">
					<h1 className="text-4xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control">
							{/* register your input into the hook by invoking the "register" function */}
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								placeholder="email"
								type="email"
								className="input input-bordered"
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							{/* include validation with required or other standard HTML validation rules */}
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								{...register('password', {
									required: true,
									minLength: 6,
									maxLength: 20,
								})}
							/>
							{/* errors will return when field validation fails  */}
							{errors.password && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>

						<input className="my-btn" type="submit" />
					</form>
					<p className="text-center mb-6">
						Do not have an account? Please{' '}
						<Link to="/register">
							<span className="link-hover link-primary">Register</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
