import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';
import OrderTab from './OrderTab';

const Order = () => {
	const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
	const { category } = useParams();
	const initialIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(
		initialIndex === -1 ? 0 : initialIndex
	);
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
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Dessert</Tab>
					<Tab>Drinks</Tab>
				</TabList>
				<TabPanel>
					<OrderTab items={salad}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={pizza}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={soup}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={dessert}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab items={drinks}></OrderTab>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Order;
