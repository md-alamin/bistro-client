import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
	return (
		<Parallax
			blur={{ min: -15, max: 15 }}
			bgImage={img}
			bgImageAlt="the dog"
			strength={-200}
		>
			<div className="hero h-[400px] lg:h-[600px]">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-lg bg-gray-700 rounded-xl bg-opacity-60 px-20 py-10">
						<h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default Cover;
