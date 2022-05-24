import { Link } from '@components/atoms';
import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

export const ProductSellerInfo: FC<ProductSellerInfoProps> = (props) => {
	const { sellerID, name, country } = props;

	return (
		<Title>
			Sold by:{' '}
			<Link href={`/shop/${sellerID}`} className="text-secondary">
				{name} {country && <span className="font-weight-normal">({country})</span>}
			</Link>
		</Title>
	);
};

type ProductSellerInfoProps = ISingleProduct['seller'];

const Title = styled.p`
	font-weight: 500;
	margin-bottom: 1rem;
`;
