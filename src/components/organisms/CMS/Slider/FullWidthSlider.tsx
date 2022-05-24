import { Image, Link } from '@components/atoms';
import { FC } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

export const FullWidthSlider: FC<FullWidthSliderProps> = ({ data, ...rest }) => {
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

	if (data?.length > 0) {
		return (
			<Slider {...settings} {...rest}>
				{data.map(({ imageURL, slug, altText }, i) => (
					<div key={i} className="SliderItem">
						<Link href={slug}>
							<Image fluid src={imageURL} alt={altText} />
						</Link>
					</div>
				))}
			</Slider>
		);
	}

	return null;
};

interface Image {
	altText: string;
	imageURL: string;
	slug: string;
}

export interface FullWidthSliderProps {
	data: Image[];
}

const Slider = styled(SlickSlider)`
	position: relative;

	.SliderItem {
		img {
			border-radius: 0.625rem;
		}
	}

	.slick-dots {
		bottom: 0.625rem;
		z-index: 1;

		li {
			width: 0.625rem;
			height: 0.625rem;
			text-align: center;

			button {
				width: auto;
				height: auto;
				padding: 0;

				&:before {
					content: '';
					width: 0.5rem;
					height: 0.5rem;
					border-radius: 50rem;
					opacity: 1;
					background-color: rgba(26, 26, 26, 0.53);

					@media (min-width: 768px) {
						width: 0.625rem;
						height: 0.625rem;
					}
				}
			}

			&.slick-active {
				button {
					&:before {
						background-color: var(--primary);
					}
				}
			}
		}
	}
`;
