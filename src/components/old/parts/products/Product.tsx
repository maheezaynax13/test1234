import Link from 'next/link';
import { Row, Col, Badge } from 'react-bootstrap';
import { formatPrice } from '@utils/helpers';
// import { IProductListItem } from '@modules/interfaces/product';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Block, Price, SlodCount, DiscountBadge } from './styles';
import { ProductEntity } from '@modules/api/cms/interfaces';
import { FC } from 'react';

const Product: FC<ProductEntity> = (props): JSX.Element => {
	if (props && Object.keys(props).length > 0) {
		const {
			image: { imageURL, altText },
			pricing,
			sold,
			slug,
		} = props;

		return (
			<Block>
				<Link href={`/product/${slug}`}>
					<a>
						<ImageWithSkeleton imageUrl={imageURL} altText={altText} />
						<Price>{formatPrice(pricing.price)}</Price>
						<Row className="align-items-center">
							<Col xs={8} className="ProductList-Item__Sold">
								<SlodCount>Sold: {sold}</SlodCount>
							</Col>
							<Col xs={4} className="text-md-right" style={{ minHeight: '21px' }}>
								{pricing.discountText[0] && (
									<DiscountBadge as={Badge} pill>
										{pricing.discountText[0]}
									</DiscountBadge>
								)}
							</Col>
						</Row>
					</a>
				</Link>
			</Block>
		);
	}

	return null;
};

export default Product;
