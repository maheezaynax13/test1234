import { Card, Image } from '@components/atoms';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const data = [
	{
		imageUrl: '/images/shopping/firm.png',
		title: '100% Authentic Products',
		subTitle: 'Shop millions of authentic products at one place effortlessly',
	},
	{
		imageUrl: '/images/shopping/secure-check.png',
		title: '100% Secure',
		subTitle: 'All payments are processed instantly over a secure payment protocol.',
	},
	{
		imageUrl: '/images/shopping/wallet.png',
		title: 'Money Back Guarantee',
		subTitle: 'Receive your item as described or your money back.',
	},
	{
		imageUrl: '/images/shopping/delivery.png',
		title: 'Faster Delivery',
		subTitle: 'We are committed to deliver products you order as fast as possible',
	},
];

export const BuyerProtection: FC = () => (
	<CardWithShadow>
		<Row>
			{data.map(({ imageUrl, title, subTitle }, i) => (
				<Col key={i} md={3}>
					<div className="Content mb-4 mb-md-0">
						<Image fluid src={imageUrl} alt={title} />
						<p className="text-primary font-weight-semibold mt-2 mb-0">{title}</p>
						<p className="text-secondary mb-0">{subTitle}</p>
					</div>
				</Col>
			))}
		</Row>
	</CardWithShadow>
);

const CardWithShadow = styled(Card)`
	text-align: center;
	padding: 1.875rem 1rem;
	margin-bottom: 3.75rem;
	border-color: transparent;
	box-shadow: 0 0 0.375rem rgba(138, 138, 138, 0.1);

	.Content {
		width: 100%;
		display: block;
	}

	@media (max-width: 767.98px) {
		box-shadow: none;
		margin-bottom: 0;

		.Content {
			max-width: 13rem;
			margin: 0 auto;
		}
	}
`;
