import { Image } from 'react-bootstrap';
import styled from 'styled-components';

export const PaymentLogo = (): JSX.Element => (
	<NavItems>
		<Image src="/images/bkash.svg" alt="bKash" />
		<Image src="/images/nagad.svg" alt="Nagad" />
		<Image src="/images/rocket.svg" alt="Rocket" />
		<Image src="/images/visa.svg" alt="VISA" />
		<Image src="/images/mastercard.svg" alt="Master Card" />
		<Image src="/images/amex.svg" alt="AMEX" />
	</NavItems>
);

const NavItems = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	& > * {
		margin: 0.313rem;
	}
`;
