import { Link } from '@components/atoms';
import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

const SellerInfo: FC<ISingleProduct['seller']> = ({ sellerID, name, country }) => (
	<Wrap>
		<Title>
			Sold by:{' '}
			<Link href={`/shop/${sellerID}`} className="text-secondary">
				{name} {country && <span className="font-weight-normal">({country})</span>}
			</Link>
		</Title>
	</Wrap>
);

export default SellerInfo;

const Wrap = styled.div`
	margin-bottom: 15px;
`;

const Title = styled.p`
	font-weight: 500;
	margin-bottom: 8px;
`;
