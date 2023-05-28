import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../components/FoodCart';

const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
	const dessert = menu.filter((item) => item.category === 'dessert');
	const soup = menu.filter((item) => item.category === 'soup');
	const pizza = menu.filter((item) => item.category === 'pizza');
	const salad = menu.filter((item) => item.category === 'salad');
	const drinks = menu.filter((item) => item.category === 'drinks');
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Order</title>
			</Helmet>
			<Cover img={orderCover} title="Order Food"></Cover>
			<Tabs
				className="text-center"
				defaultIndex={tabIndex}
				onSelect={(index) => console.log(index)}
			>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Dessert</Tab>
					<Tab>Drinks</Tab>
				</TabList>
				<TabPanel>
					<div className="grid lg:grid-cols-3 ">
						{salad.map((item) => (
							<FoodCart key={item._id} item={item}></FoodCart>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid lg:grid-cols-3 ">
						{pizza.map((item) => (
							<FoodCart key={item._id} item={item}></FoodCart>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid lg:grid-cols-3 ">
						{soup.map((item) => (
							<FoodCart key={item._id} item={item}></FoodCart>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid lg:grid-cols-3 ">
						{dessert.map((item) => (
							<FoodCart key={item._id} item={item}></FoodCart>
						))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="grid lg:grid-cols-3 ">
						{drinks.map((item) => (
							<FoodCart key={item._id} item={item}></FoodCart>
						))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;
