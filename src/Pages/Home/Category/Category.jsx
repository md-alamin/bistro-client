import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import category1 from '../../../assets/home/slide1.jpg';
import category2 from '../../../assets/home/slide2.jpg';
import category3 from '../../../assets/home/slide3.jpg';
import category4 from '../../../assets/home/slide4.jpg';
import category5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
	return (
		<>
			<SectionTitle
				subHeading={'---From 11:00am to 10:00pm---'}
				heading={'ORDER ONLINE'}
			></SectionTitle>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className="rounded-3xl" src={category1} alt="" />
					<h3 className="text-2xl lg:text-4xl uppercase text-center lg:w-2/3 -mt-16 text-white">
						Salad
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded-3xl" src={category2} alt="" />
					<h3 className="text-2xl lg:text-4xl uppercase text-center lg:w-2/3 -mt-16 text-white">
						Pizza
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded-3xl" src={category3} alt="" />
					<h3 className="text-2xl lg:text-4xl uppercase text-center lg:w-2/3 -mt-16 text-white ">
						Soup
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded-3xl" src={category4} alt="" />
					<h3 className="text-2xl lg:text-4xl uppercase text-center lg:w-2/3 -mt-16 text-white ">
						Dessert
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded-3xl" src={category5} alt="" />
					<h3 className="text-2xl lg:text-4xl uppercase text-center lg:w-2/3 -mt-16 text-white ">
						Salad
					</h3>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Category;
