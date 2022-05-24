import Link from 'next/link';
import { Row, Col, Badge } from 'react-bootstrap';
import { formatPrice } from '@utils/helpers';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Block, Title, Price, OldPrice, DiscountBadge } from './styles';

const GridItem = (props: propsType): JSX.Element => {
	if (props && Object.keys(props).length > 0) {
		const {
			id,
			name,
			imageUrl,
			price: { regular, sale, discountPercentage },
			isTitle,
		} = props;

		return (
			<Block>
				<Link href={`/product/${id}`}>
					<a>
						<ImageWithSkeleton imageUrl={imageUrl} altText={name} />
						<Title className={isTitle ? 'd-none' : ''}>{name}</Title>
						<Price>{formatPrice(sale)}</Price>
						<Row className="align-items-center">
							<Col xs={8} className="ProductList-Item__Sold">
								{regular > 0 && <OldPrice>{formatPrice(regular)}</OldPrice>}
							</Col>
							<Col xs={4} className="text-md-right" style={{ minHeight: '21px' }}>
								{discountPercentage > 0 && (
									<DiscountBadge as={Badge} pill>
										{discountPercentage}%
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

export default GridItem;

export interface propsType {
	id: number;
	name: string;
	categoryID?: string;
	imageUrl: string;
	altText: string;
	price: Price;
	sold?: number;
	rating?: string;
	isWishlistItem?: boolean;
	country?: string;
	isTitle?: boolean;
}

interface Price {
	regular: number;
	sale: number;
	discountAmount: number;
	discountPercentage: number;
}
