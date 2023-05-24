import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
	return (
		<div className="featured-item bg-fixed rounded-3xl">
			<SectionTitle
				subHeading="Check it out"
				heading="Featured item"
			></SectionTitle>
			<div className="md:flex justify-center items-center py-8 px-16 md:space-x-10">
				<div>
					<img className="rounded-xl" src={featuredImg} alt="" />
				</div>
				<div>
					<p>May 24, 2023</p>
					<p className="my-2">WHERE CAN I GET SOME?</p>
					<p className="my-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
						quaerat? Tenetur sunt officia, modi reiciendis quo asperiores enim
						delectus. Dolorem facere porro facilis laboriosam debitis culpa
						optio tempora voluptatibus, quibusdam, architecto commodi esse
						possimus! Deleniti quaerat dolores ipsa cumque labore.
					</p>
					<button className="btn btn-outline border-0  text-white hover:bg-black hover:border-b-black">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
