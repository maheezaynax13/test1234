import { Button } from '@components/atoms';
import { productAPI } from '@libs/api';
import { IProductReview } from '@libs/api/interfaces';
import Icon, { star } from '@libs/icons';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ReviewPopup } from './ReviewPopup';

export const Reviews: FC<PropsType> = (props) => {
	const [reviewData, setReviewData] = useState<IProductReview>(null);
	const [isModal, setModal] = useState(false);

	useEffect(() => {
		const getReviewData = async () => {
			const { success, data } = await productAPI.getProductReview(props.productID);
			if (success) setReviewData(data);
		};
		getReviewData();
	}, []);

	if (reviewData) {
		const { rating, ratingPercentage, reviews, totalRating } = reviewData;

		return (
			<Row>
				<Col md="auto">
					<AverageRating>{Number(rating) > -1 ? rating : 0}</AverageRating>
					<RatingStar>
						<span style={{ width: `${Number(rating) * 26.4}px` }} />
					</RatingStar>
					<p className="text-md-center text-uppercase font-weight-semibold text-secondary">
						{totalRating} Ratings
					</p>
				</Col>
				<Col>
					<Row>
						<Col md={6}>
							<RatingPercentage>
								{Object.entries(ratingPercentage).map(([key, value], i) => (
									<li key={key}>
										{5 - i}
										<Icon path={star} width={16} height={16} fill="#00b55b" />
										<PercentageLine>
											<span style={{ width: `${value > -1 ? value : 0}%` }} />
										</PercentageLine>
										{value > -1 ? value : 0}%
									</li>
								))}
							</RatingPercentage>
						</Col>
						<Col md={6} className="text-md-right">
							<Button pill variant="dark" className="text-uppercase px-3" onClick={() => setModal(true)}>
								Write Review
							</Button>
						</Col>
					</Row>
				</Col>
				{reviews && reviews.length > 0 && (
					<Col xs={12}>
						<hr />
						<p className="text-uppercase font-weight-semibold text-dark mb-0">Ratings & Reviews</p>

						{reviews.map(({ customerName, review, productInfo: { chosenVariant } }, i) => (
							<div className="w-100 mt-3" key={i}>
								<p className="mb-0">{customerName}</p>
								{Object.keys(chosenVariant).length > 0 &&
									Object.entries(chosenVariant)?.map(([key, value], i) => (
										<p key={i} className="mb-1">
											{key}: <span className="text-secondary">{value}</span>
										</p>
									))}
								<p className="mb-1">{review}</p>
							</div>
						))}
					</Col>
				)}

				<ReviewPopup isActive={isModal} onHide={() => setModal(false)} {...props} />
			</Row>
		);
	}

	return null;
};

interface PropsType {
	name: string;
	skuID: string;
	productID: string;
	imageURL: string;
}

const AverageRating = styled.div`
	font-size: 82px;
	text-align: center;
`;

const RatingStar = styled.span`
	width: 132px;
	height: 18px;
	margin: 0 auto;
	display: inline-block;
	position: relative;
	background-image: url('/images/star-gray.png');

	span {
		position: absolute;
		left: 0;
		top: 0;
		height: 18px;
		background-image: url('/images/star-green.png');
	}
`;

const RatingPercentage = styled.ul`
	padding-left: 0;
	margin-bottom: 0;

	li {
		width: 100%;
		color: var(--dark);
		font-weight: 500;
		display: block;
		list-style: none;
		padding-left: 30px;
		margin-bottom: 15px;
		display: flex;
		align-items: center;

		svg {
			margin-left: 8px;
			margin-right: 20px;
		}
	}
`;

const PercentageLine = styled.span`
	width: 190px;
	height: 10px;
	margin-right: 10px;
	display: inline-block;
	position: relative;
	background-color: #dbdbdb;
	border-radius: 20px;

	span {
		position: absolute;
		left: 0;
		top: 0;
		height: 10px;
		background-color: var(--primary);
		border-radius: 20px;
	}
`;
