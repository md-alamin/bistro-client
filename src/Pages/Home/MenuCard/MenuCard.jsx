import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const MenuCard = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/menu')
			.then((res) => res.json())
			.then((data) => {
				const popular = data.filter((item) => item.category === 'popular');
				setMenu(popular);
			});
	}, []);
	return (
		<div className="my-20">
			<SectionTitle
				subHeading="---Check it out---"
				heading="FROM OUR MENU"
			></SectionTitle>
			<div className="grid md:grid-cols-2 gap-10">
				{menu.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<div className="text-center mt-6">
				<button className="btn btn-outline border-0 border-b-4 hover:bg-black hover:border-b-black">
					View Full Menu
				</button>
			</div>
		</div>
	);
};

export default MenuCard;
