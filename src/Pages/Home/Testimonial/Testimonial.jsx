import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className="my-20">
			<SectionTitle
				subHeading="What Our Clients Say"
				heading="Testimonials"
			></SectionTitle>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className="md:mx-48 text-center">
							<Rating
								className="mx-auto"
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>
							<FaQuoteLeft className="mx-auto my-6 h-28 w-28" />
							<p>{review.details}</p>
							<h3 className="text-2xl text-orange-400 mt-8">{review.name}</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonial;
