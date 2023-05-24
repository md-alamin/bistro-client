import React from 'react';

const MenuItem = ({ item }) => {
	const { name, recipe, image, price } = item;
	return (
		<div className="flex space-x-4">
			<img
				className="w-[118px] h-[104px] rounded-full rounded-ss-none"
				src={image}
				alt=""
			/>
			<div>
				<h3 className="uppercase">{name} ---------------------</h3>
				<p>{recipe}</p>
			</div>
			<p className="text-yellow-500">${price}</p>
		</div>
	);
};

export default MenuItem;
