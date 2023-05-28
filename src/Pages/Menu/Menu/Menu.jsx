import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import bannerBg from '../../../assets/menu/banner3.jpg';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import menuBg from '../../../assets/menu/menu-bg.png';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
	const [menu] = useMenu();
	const dessert = menu.filter((item) => item.category === 'dessert');
	const soup = menu.filter((item) => item.category === 'soup');
	const pizza = menu.filter((item) => item.category === 'pizza');
	const salad = menu.filter((item) => item.category === 'salad');
	const offered = menu.filter((item) => item.category === 'offered');
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Menu</title>
			</Helmet>
			<Cover img={bannerBg} title="our menu"></Cover>

			<SectionTitle
				subHeading="Don't Miss"
				heading="Today's offer"
			></SectionTitle>
			<MenuCategory items={offered}></MenuCategory>

			<SectionTitle subHeading="Don't Miss" heading="Dessert"></SectionTitle>
			<MenuCategory
				items={dessert}
				title="Dessert"
				coverImg={dessertBg}
			></MenuCategory>

			<SectionTitle subHeading="Don't Miss" heading="Soup"></SectionTitle>
			<MenuCategory items={soup} title="Soup" coverImg={soupBg}></MenuCategory>

			<SectionTitle subHeading="Don't Miss" heading="Salad"></SectionTitle>
			<MenuCategory
				items={salad}
				title="Salad"
				coverImg={saladBg}
			></MenuCategory>

			<SectionTitle subHeading="Don't Miss" heading="Pizza"></SectionTitle>
			<MenuCategory
				items={pizza}
				title="Pizza"
				coverImg={pizzaBg}
			></MenuCategory>
		</div>
	);
};

export default Menu;
