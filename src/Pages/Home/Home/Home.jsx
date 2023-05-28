import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MenuCard from '../MenuCard/MenuCard';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Bistro Boss</title>
			</Helmet>
			<Banner></Banner>
			<Category></Category>
			<MenuCard></MenuCard>
			<CallUs></CallUs>
			<ChefRecommends></ChefRecommends>
			<Featured></Featured>
			<Testimonial></Testimonial>
		</>
	);
};

export default Home;
