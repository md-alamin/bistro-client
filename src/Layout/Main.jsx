import React from 'react';
import Header from '../Shared/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
	const location = useLocation();
	const noHeaderFooter =
		location.pathname.includes('login') ||
		location.pathname.includes('register');
	return (
		<div>
			{noHeaderFooter ? '' : <Header></Header>}
			<Outlet></Outlet>
			{noHeaderFooter ? '' : <Footer></Footer>}
		</div>
	);
};

export default Main;
