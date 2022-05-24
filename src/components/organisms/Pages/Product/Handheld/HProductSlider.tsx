import { Badge, Image } from '@components/atoms';
import { ISingleProduct } from '@libs/api/interfaces';
import { useScroll } from '@libs/hooks';
import { FC, HTMLAttributes, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export const HProductSlider: FC<HProductSliderProps> = ({ name, images, mainImage, ...rest }) => {
	const [active, setActive] = useState<number>(0);
	const sliderRef = useRef<HTMLDivElement>(null);

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

	if (images?.length > 0 || !!mainImage?.big) {
		useScroll(({ pageYOffset }) => {
			const targetElement = document.getElementById('ProductNavbar');
			const sliderHeight = sliderRef.current.clientHeight;

			if (pageYOffset > sliderHeight) {
				targetElement.classList.add('active');
			} else {
				targetElement.classList.remove('active');
			}
		});

		return (
			<Wrapper ref={sliderRef}>
				<Slider {...settings} {...rest} afterChange={setActive}>
					{images?.length > 0 ? (
						images.map(({ big }, i) => (
							<div key={i} className="SliderItem">
								<Image fluid src={big} alt={name} />
							</div>
						))
					) : (
						<div className="SliderItem">
							<Image fluid src={mainImage.big} alt={name} />
						</div>
					)}
				</Slider>
				<CounterBadge pill variant="secondary">
					{active + 1}/{images?.length > 0 ? images.length : 1}
				</CounterBadge>
			</Wrapper>
		);
	}

	return null;
};

type HProductSliderProps = Pick<ISingleProduct, 'name' | 'images' | 'mainImage'> &
	Pick<HTMLAttributes<HTMLDListElement>, 'className' | 'style'>;

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 0.5rem;
	position: relative;
	object-fit: cover;

	.slick {
		&-dots {
			bottom: 1.25rem;

			li {
				width: 0.5rem;
				height: 0.5rem;

				button {
					width: 0.5rem;
					height: 0.5rem;
					padding: 0;

					&:before {
						content: '';
						width: 0.5rem;
						height: 0.5rem;
						border-radius: 100%;
						background-color: rgba(26, 26, 26, 0.53);
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
	}
`;

const CounterBadge = styled(Badge)`
	position: absolute;
	right: 0.5rem;
	bottom: 0.75rem;
	background-color: rgba(26, 26, 26, 0.53);
`;
