import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';
// import Icon, { itemReturn } from '@libs/icons';

const ReturnWarranty: FC<ISingleProduct['policies']> = ({ availableReturnDays, hasWarranty }) => (
	<Wrap>
		<Title>
			{/* <Icon path={itemReturn} width={22} height={22} fill="#2B2B2B" />  */}
			Return &amp; Warranty
		</Title>
		<TextWrap>
			<span className="text-secondary">{availableReturnDays} Days Return Policy</span>
			<span className="text-secondary ml-4">{!hasWarranty && 'No'} Warranty Available</span>
		</TextWrap>
	</Wrap>
);

export default ReturnWarranty;

const Wrap = styled.div`
	margin-bottom: 15px;
`;

const Title = styled.p`
	font-weight: 500;
	margin-bottom: 0;
`;

const TextWrap = styled.div`
	width: 100%auto;
	display: block;
`;
