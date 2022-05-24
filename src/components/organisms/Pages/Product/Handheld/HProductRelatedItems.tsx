import { FC } from 'react';
import styled from 'styled-components';
import { HGridProductList, HGridProductListProps } from '../../../Poduct';

export const HProductRelatedItems: FC<HGridProductListProps> = ({ items }) => {
	return (
		<Wrapper>
			<h6 className="text-uppercase text-secondary font-weight-semibold text-center mt-5 mb-3">
				You may also like
			</h6>
			<HGridProductList isTitle xs={6} items={items} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: block;
`;
