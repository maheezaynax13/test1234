import Product from '@components/old/parts/products/Product';
import { CardWithShadow } from '@components/old/UI';
import { FullWidthProducts } from '@modules/api/cms/interfaces';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import BlockHeader from './BlockHeader';
import NewProductSlider from './NewProductSlider';

const ProductSlider = ({ data }: propsType): JSX.Element => {
	const settings = {
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};

	if (data && Object.keys(data).length > 0) {
		const { icon, title, viewMoreLink, items = [] } = data;
		const headerProps = { icon, header: title, viewMore: viewMoreLink };

		return (
			<>
				<NewProductSlider />
				<CardWithShadow className="productSlider" style={{ marginTop: '25px' }}>
					<Row>
						<BlockHeader {...headerProps} />
						<Col xs={12}>
							<Slider {...settings}>
								{items.map((el, i) => (
									<div key={i} className="pl-1 pr-1">
										<Product {...el} />
									</div>
								))}
							</Slider>
						</Col>
					</Row>
				</CardWithShadow>
			</>
		);
	}

	return null;
};

export default ProductSlider;

interface propsType {
	data: FullWidthProducts;
	isLoading?: boolean;
}

