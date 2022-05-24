import { ProductBrand, ProductPrice, ProductReview } from '@components/organisms';
import { ISingleProduct } from '@libs/api/interfaces';
import { getProductState } from '@store/actions';
import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Information: FC<PropsType> = (props) => {
	const { name, brand, productReview, orderCount } = props;
	const reviewProps = { productReview, orderCount };
	const { price } = useSelector(getProductState);

	return (
		<Fragment>
			<ProductBrand brand={brand} />
			<Title>{name}</Title>
			<ProductReview {...reviewProps} />
			<ProductPrice size="lg" {...price} />
		</Fragment>
	);
};

export default Information;

type PropsType = Pick<ISingleProduct, 'name' | 'brand' | 'productReview' | 'orderCount'>;

const Title = styled.h2`
	color: var(--dark);
	font-size: 18px;
	font-weight: 400;
	line-height: 21px;
`;
