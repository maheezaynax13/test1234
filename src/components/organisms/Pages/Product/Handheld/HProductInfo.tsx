import { ISingleProduct } from '@libs/api/interfaces';
import { getProductState } from '@store/actions';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProductBrand } from '../ProductBrand';
import { ProductPrice } from '../ProductPrice';
import { ProductReview } from '../ProductReview';
import { WishlistButton, WishlistButtonProps } from '../WishlistButton';

export const HProductInfo: FC<HProductInfoProps> = (props) => {
	const { id, name, brand, origin, productReview, orderCount, ...rest } = props;
	const brandProps = { brand, origin };
	const reviewProps = { productReview, orderCount };
	const { price } = useSelector(getProductState);

	return (
		<Wrapper>
			<ProductBrand {...brandProps} />
			<Row className="align-items-center mb-2">
				<Col xs="auto">
					<ProductPrice className="mb-0" size="lg" {...price} />
				</Col>
				<Col className="text-right">
					<WishlistButton className="p-0" {...rest} />
				</Col>
			</Row>
			<Title>{name}</Title>
			<ProductReview className="Rating" width={10} height={10} {...reviewProps} />
		</Wrapper>
	);
};

type HProductInfoProps = Pick<ISingleProduct, 'id' | 'name' | 'brand' | 'origin' | 'productReview' | 'orderCount'> &
	Pick<WishlistButtonProps, 'isActive' | 'onClick'>;

const Title = styled.h2`
	color: var(--dark);
	font-size: 0.813rem;
	font-weight: 400;
	line-height: 1.2rem;
`;

const Wrapper = styled.div`
	width: 100%;
	display: block;

	.Rating {
		span {
			font-size: 0.813rem;

			&:first-child {
				padding: 0;
				background-color: transparent;
			}

			&:not(:first-child) {
				margin-left: 1rem;
				color: var(--light-gray);
			}
		}
	}
`;
