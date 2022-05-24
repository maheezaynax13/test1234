import { FC } from 'react';
import styled from 'styled-components';
import { Image } from '@components/atoms';

export const PaymentCabinet: FC = () => (
	<ListItems>
		<Image fluid src="/images/shopping/bkash.svg" alt="bKash" />
		<Image fluid src="/images/shopping/nagad.svg" alt="Nagad" />
		<Image fluid src="/images/shopping/rocket.svg" alt="Rocket" />
		<Image fluid src="/images/shopping/visa.svg" alt="VISA" />
		<Image fluid src="/images/shopping/mastercard.svg" alt="Master card" />
		<Image fluid src="/images/shopping/amex.svg" alt="AMEX" />
	</ListItems>
);

export default PaymentCabinet;

const ListItems = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		@media (max-width: 48rem) {
			height: 2.25rem;
		}
	}
`;
