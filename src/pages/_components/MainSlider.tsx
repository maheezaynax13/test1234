import { HomePageImageEntity } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const MainSlider = ({ data, ...rest }: propsType): JSX.Element => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	if (data && data.length > 0) {
		return (
			<div className="HeroSlider" style={{ marginTop: '25px' }} {...rest}>
				<Slider {...settings}>
					{data.map((el, index) => {
						console.log(el.slug);
						return (
							<div key={index} className="HeroImageSlider-Item">
								<Link href={el.slug || '/'}>
									<a>
										<Image
											fluid
											src={el.imageURL}
											alt={el.altText}
											style={{ borderRadius: '10px' }}
										/>
									</a>
								</Link>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}

	return null;
};

export default MainSlider;

interface propsType extends HTMLAttributes<HTMLDivElement> {
	data: HomePageImageEntity[];
	isLoading?: boolean;
}
