import { FC, HTMLAttributes } from 'react';
import { Button } from '@components/atoms';
import styled from 'styled-components';

export const OrderPlaceBtn: FC<OrderPlaceBtnProps> = ({ clickHandler, ...rest }) => (
	<Wrapper {...rest}>
		<Button pill onClick={clickHandler}>
			Place Your Order
		</Button>
	</Wrapper>
);

export interface OrderPlaceBtnProps extends HTMLAttributes<HTMLDivElement> {
	clickHandler?: () => void;
}

const Wrapper = styled.div`
	width: 100%;
	display: block;
	text-align: right;

	@media (max-width: 767.99px) {
		text-align: left;
	}
`;
