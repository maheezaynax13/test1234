import { NewProduct } from '@components/old/parts/products';
import { CardWithShadow } from '@components/old/UI';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const NewProductSlider: FC = () => {
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
	return (
		<CardWithShadow className="productSlider" style={{ marginTop: '25px' }}>
			<Row>
				<Col xs={12}>
					<Slider {...settings}>
						{newProductData?.map((productData, i) => {
							return (
								<div className="pl-1 pr-1" key={i}>
									<NewProduct />
								</div>
							);
						})}
					</Slider>
				</Col>
			</Row>
		</CardWithShadow>
	);
};

export default NewProductSlider;

const newProductData = [
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
	{
		productTitle: 'Health Apple Cider Vinegar With Mother',
		productDescription: 'bottle of 500 ml Liquid',
		productRating: 4,
		ratingCount: 122,
		previousPrice: 450,
		discountPercentage: 29,
		currentPrice: 316,
	},
];
