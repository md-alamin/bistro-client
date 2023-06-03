import React from 'react';

const FoodCart = ({ item }) => {
	const { name, recipe, image, price } = item;
	return (
		<div className="card w-96 bg-base-100 shadow-xl text-center relative">
			<figure>
				<img src={image} alt="Shoes" />
			</figure>
			<div className="card-body text-center">
				<h2 className="card-title text-center mx-auto">{name}</h2>
				<p>{recipe}</p>
				<p className="font-semibold bg-black px-2 absolute text-white rounded-md top-2 right-4">
					${price}
				</p>
				<button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:bg-black hover:border-b-black hover:text-yellow-600">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default FoodCart;
