import React from 'react';
import FoodCart from '../../../components/FoodCart';

const OrderTab = ({ items }) => {
	return (
		<div className="grid lg:grid-cols-3 ">
			{items.map((item) => (
				<FoodCart key={item._id} item={item}></FoodCart>
			))}
		</div>
	);
};

export default OrderTab;
