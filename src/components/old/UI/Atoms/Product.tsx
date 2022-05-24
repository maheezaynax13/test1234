import { FC } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import { formatPrice } from '@utils/helpers';
import { CardWithShadow } from '../Card';
import ImageSkeleton from './ImageSkeleton';
import { DiscountBadge, ImageWrapper, OldPrice, Price, Title } from './styles';
import { OmitProduct } from '@libs/api/interfaces';

const Product: FC<OmitProduct> = (props) => {
	const {
		slug,
		name,
		image,
		pricing: { price, oldPrice, discountText },
	} = props;

	return (
		<Link href={`/product/${slug}`} passHref>
			<Wrapper>
				<CardWithShadow>
					<ImageWrapper>
						<ImageSkeleton imageUrl={image.imageURL} altText={image.altText} />
					</ImageWrapper>
					<Title>{name}</Title>
					<Price>{formatPrice(price)}</Price>
					<Row className="align-items-center">
						<Col xs={8} className="ProductList-Item__Sold">
							{oldPrice > 0 && <OldPrice>{formatPrice(oldPrice)}</OldPrice>}
						</Col>

						{discountText?.length > 0 && (
							<Col xs={4} className="text-md-right" style={{ minHeight: '21px' }}>
								<DiscountBadge as={Badge} pill>
									{discountText[0]}
								</DiscountBadge>
							</Col>
						)}
					</Row>
				</CardWithShadow>
			</Wrapper>
		</Link>
	);
};

export default Product;

// export interface ProductProps extends IRelatedProducts {
// 	isTitle?: boolean;
// }

// Product.defaultProps = {
// 	isTitle: false,
// };

const Wrapper = styled.a`
	text-align: left;

	&:hover {
		text-decoration: none;
	}
`;
