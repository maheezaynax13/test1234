import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BuyerProtection } from './BuyerProtection';
import { SSLSeal } from './SSLSeal';
import { PaymentCabinet } from './PaymentCabinet';
import { Copyright } from '../Copyright';

export const ShoppingFooter: FC = () => (
	<Footer>
		<Container>
			<Row>
				<Col>
					<BuyerProtection />
					<SSLSeal />
					<PaymentCabinet />
					<Copyright />
				</Col>
			</Row>
		</Container>
	</Footer>
);

const Footer = styled.footer`
	width: 100%;
	padding: 3rem 0 2rem 0;
	display: block;

	@media (max-width: 48rem) {
		padding: 3rem 0.469rem 2rem 0.469rem;
	}
`;
