import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Description } from './Common/Description';
import { Title } from './Common/Title';
import { sellTextArray, startSellingData } from './constants';

export const SellOnSelling: FC = () => {
	return (
		<SellingContainer className=" py-4 px-md-5">
			<div className="px-5">
				<Row>
					<div className="w-100 m-auto d-flex flex-column justify-content-center align-items-center">
						<img style={{ maxWidth: '271px' }} src="/images/sell-on/human.png" alt="" />
						<Title className="title mb-3 mb-sm-5 mx-auto font-weight-normal">Why sell on zDrop?</Title>
					</div>
					<Row>
						{sellTextArray?.map((texts) => {
							return (
								<Col lg={6} xl={3}>
									<div className="mr-2 text-md-left text-center mb-3 px-sm-4">
										<img className="mb-2" src={texts?.icon} alt="" />
										<Title className="text-left md-title" size="md">
											{texts?.heading}
										</Title>
										<Description className="description text-sm-left" variant="white">
											{texts?.details}
										</Description>
									</div>
								</Col>
							);
						})}
					</Row>
				</Row>
			</div>
			<div className="py-3 px-md-5">
				<Title className="title my-4 mx-auto text-center font-weight-normal">How To Start Selling</Title>
				<Row className="w-100 mt-5 mx-auto card-box">
					{startSellingData?.map((data) => {
						return (
							<Col sm={6} xl={3} className="mb-3 mb-sm-0 selling-col">
								<SellingBox className="mx-auto selling-box">
									<div className="mx-4">
										<IconSvg className="mb-3">{data.icon}</IconSvg>
										<Title className="mb-4 text-left card-title" size="sm">
											{data?.title}
										</Title>
										<Description className="text-sm-left" variant="white">
											{data?.details}
										</Description>
									</div>
								</SellingBox>
							</Col>
						);
					})}
				</Row>
			</div>
		</SellingContainer>
	);
};

const SellingContainer = styled.div`
	background-color: #000000;
	border-radius: 0px 0px 35px 35px;
	@media only screen and (max-width: 425px) {
		.md-title {
			margin-top: 15px;
		}
	}
	@media only screen and (max-width: 534px) {
		.card-box {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.selling-box {
			max-width: 260px;
			margin: auto;
		}

		.sell-card {
			min-width: 100% !important;
		}
	}
`;

const SellingBox = styled.div`
	background-color: var(--primary);
	border-radius: 35px;
	color: #fff;
	min-height: 245px;
	padding-top: 35px;
	position: relative;

	@media only screen and (max-width: 1199px) {
		max-width: 285px;
		margin-bottom: 35px;
	}
	@media only screen and (max-width: 991px) {
		max-width: 225px;
		margin-bottom: 25px;
	}
	@media only screen and (max-width: 575px) {
		max-width: 255px;
		/* margin-bottom: 25px; */
	}
	::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		background-image: url('/images/sell-on/green.svg');
	}
`;
const IconSvg = styled.h2`
	display: inline-block;
	border: 1px solid;
	background-color: #fff;
	color: var(--primary);
	width: 35px;
	height: 35px;
	text-align: center;
	font-size: 1.5rem;
	border-radius: 35px;
`;
