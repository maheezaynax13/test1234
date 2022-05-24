import { Image } from '@components/atoms';
import { FC, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Copyright } from '../Copyright';
import { SocialLinks } from '../SocialLinks';
import { ContactInfo } from './ContactInfo';
import { CoreOffers } from './CoreOffers';
import { EmailSubscribe } from './EmailSubscribe';
import { NavItems } from './NavItems';
import { PaymentLogo } from './PaymentLogo';

export const MainFooter: FC = () => (
	<Fragment>
		<CoreOffers />
		<Footer>
			<Container>
				<Row className="justify-content-center">
					<Col md="auto">
						<Image src="/images/character.svg" />
					</Col>
					<Col>
						<Row>
							<Col md={{ offset: '3', span: '6' }}>
								<SocialLinks className="mb-4" />
								<EmailSubscribe />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<NavItems />
							</Col>
							<Col md={12}>
								<PaymentLogo />
							</Col>
						</Row>
					</Col>
					<Col md="auto">
						<ContactInfo />
					</Col>
					<Col md={12}>
						<Copyright />
					</Col>
				</Row>
			</Container>

			{/* don't delete >> */}

			{/* <Container>
				<Row>
					<Col md="auto">
						<Image src="/images/character.svg" />
					</Col>
					<Col>
						<Row>
							<Col md={8}>
								<Row>
									<Col md={{ offset: '3', span: '6' }}>
										<SocialLinks className="mb-4" />
										<EmailSubscribe />
									</Col>
								</Row>
								<NavItems />
								<PaymentLogo />
							</Col>
							<Col md={4}>
								<ContactInfo />
							</Col>
						</Row>
					</Col>
					<Col md={12}>
						<Copyright />
					</Col>
				</Row>
			</Container> */}
		</Footer>
	</Fragment>
);

const Footer = styled.footer`
	width: 100%;
	padding: 3rem 0 2rem 0;
	display: block;
	border-top: 1px solid var(--border);
	background-color: var(--white);
`;
