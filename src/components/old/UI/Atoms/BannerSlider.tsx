import Slider from 'react-slick';
import styled from 'styled-components';
import Banner, { IBanner } from './Banner';

const BannerSlider = ({ col = 4, content }: propsType): JSX.Element => {
	const settings = {
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: col,
		slidesToScroll: col,
	};

	return (
		<Wrapper className="productSlider">
			<Slider {...settings}>
				{content.map((el, i) => (
					<Banner key={i} {...el} />
				))}
			</Slider>
		</Wrapper>
	);
};

export default BannerSlider;

interface propsType {
	col?: number;
	content: IBanner[];
}

const Wrapper = styled.div`
	.slick {
		&-prev {
			left: 0;
		}

		&-next {
			right: 0;
		}
	}
`;
