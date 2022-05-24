import { Image } from '@components/atoms';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const items = [
	{
		icon: '/images/Bulk-Heart.svg',
		heading: 'Quality and Saving',
		subHeading: 'Comprehensive quality control and affordable prices',
	},
	{
		icon: '/images/Bold-Bookmark.svg',
		heading: 'Global Brands',
		subHeading: 'Buy you favorite items from your favorite global brands',
	},
	{
		icon: '/images/Bulk-Send.svg',
		heading: 'Fast Delivery',
		subHeading: 'Fast and convenient door to door delivery',
	},
	{
		icon: '/images/Bulk-Wallet.svg',
		heading: 'Secure Payment',
		subHeading: 'Different secure payment methods',
	},
	{
		icon: '/images/Bulk-Chat.svg',
		heading: 'Professional Service',
		subHeading: 'Efficient customer support from passionate team',
	},
];

export const CoreOffers: FC = () => (
	<Wrapper>
		<Container>
			<Row>
				{items.map((item, index) => (
					<Col key={index} md={20}>
						<OfferWrap>
							<div className="text-center mb-2">
								<Image fluid src={item.icon} alt={item.heading} />
							</div>
							<Header>{item.heading}</Header>
							<SubHeader>{item.subHeading}</SubHeader>
						</OfferWrap>
					</Col>
				))}
			</Row>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	padding: 2.5rem 0;
`;

const OfferWrap = styled.div`
	max-width: 12rem;
	margin: 0 auto;
	text-align: center;
`;

const Header = styled.h5`
	color: #707070;
	font-size: 16px;
	font-weight: 500;
`;

const SubHeader = styled.p`
	color: #707070;
	margin-bottom: 0;
`;
