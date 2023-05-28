import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, coverImg }) => {
	return (
		<div className="py-10">
			{title && <Cover img={coverImg} title={title}></Cover>}
			<div className="grid md:grid-cols-2 gap-10 pt-6">
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<div className="text-center mt-6">
				<button className="btn btn-outline border-0 border-b-4 hover:bg-black hover:border-b-black">
					Order Your Favorite Food
				</button>
			</div>
		</div>
	);
};

export default MenuCategory;
