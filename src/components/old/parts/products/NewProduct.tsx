import { Image } from '@components/atoms';
import Rating from '@components/atoms/Rating';
import { formatPrice } from '@utils/helpers';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const NewProduct: FC = () => {
	return (
		<Block>
			<Link href={`/product/new-product`}>
				<a>
					<Img src="/images/medicine/medi.webp" height={180} className="mx-auto" alt="medicine" />
					<Title>Health Apple Cider Vinegar With Mother</Title>
					<ShortDescription>bottle of 500 ml Liquid</ShortDescription>
					<div className="d-flex align-items-center">
						<Rating />
						<p className="RatingCount">122 ratings</p>
					</div>
					<div>
						<p className="PriceContainer">
							BDT
							<span className="OfferText"> {formatPrice(450)}</span>{' '}
							<span className="OfferPercentage"> 29% off</span>{' '}
						</p>
					</div>
					<p className="MainPrice">{formatPrice(316)}</p>
				</a>
			</Link>
		</Block>
	);
};

export default NewProduct;

const Img = styled(Image)``;

const Block = styled.div`
	width: 100%;
	display: inline-block;
	margin: 10px 0;

	a {
		min-height: inherit;
		padding: 14.75px 3.75px 14.75px 10px;
		margin: 0;
		border-radius: 10px;
		display: block;
		transition: 0.1s;
		&:hover {
			text-decoration: none;
			box-shadow: 1px 1px 8px #7c7c7c37;
		}
	}
	.RatingCount {
		margin-bottom: 0;
		margin-left: 8px;
		color: var(--secondary);
		font-size: 12px;
	}
	.PriceContainer {
		font-size: 12px;
		color: var(--secondary);
		margin: 4px 0;
		.OfferText {
			text-decoration: line-through;
		}
		.OfferPercentage {
			color: var(--primary);
			margin-left: 6px;
		}
	}
	.MainPrice {
		margin-bottom: 0;
		font-size: 16px;
		color: var(--dark);
		font-weight: 600;
	}
`;

const Title = styled.h6`
	display: -webkit-box;
	max-width: 250px;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	font-size: 14px;
	font-weight: 500;
	color: var(--dark);
	margin: 0.625rem 0;
`;

const ShortDescription = styled.p`
	font-size: 12px;
	color: var(--secondary);
	display: -webkit-box;
	max-width: 250px;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin-bottom: 6px;
`;
