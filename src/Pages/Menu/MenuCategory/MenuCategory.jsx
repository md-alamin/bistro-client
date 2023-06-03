import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
	return (
		<div className="py-10">
			{title && <Cover img={coverImg} title={title}></Cover>}
			<div className="grid md:grid-cols-2 gap-10 pt-6">
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<Link to={title ? `/order/${title}` : '/order/default'}>
				<div className="text-center mt-6">
					<button className="btn btn-outline border-0 border-b-4 hover:bg-black hover:border-b-black">
						Order Your Favorite Food
					</button>
				</div>
			</Link>
		</div>
	);
};

export default MenuCategory;
