import { Button } from '@components/atoms';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Title } from './Common/Title';
import { texts } from './constants';

export const SellOnHeader: FC = () => {
	return (
		<SellSection className="mt-4 py-4 px-sm-5 px-lg-2 px-xl-5">
			<Row className="justify-content-between">
				<Col xs={12} md={12} lg={5}>
					<div className="px-5 py-3 py-sm-0 d-md-flex flex-md-column justify-content-md-center align-items-md-center d-lg-block">
						<Title className="title text-lg-left mb-3 text-center font-weight-normal">Sell on zDrop</Title>
						<div className="my-md-3 px-3 px-sm-0">
							{texts.map((s) => {
								return (
									<Text>
										<CheckIcon
											className=""
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 30"
											width="17"
											height="24"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path
												d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
												fill="rgba(185,255,220,1)"
											/>
										</CheckIcon>{' '}
										{s?.text}
									</Text>
								);
							})}
						</div>
					</div>
				</Col>
				<Col xs={12} md={12} lg={7} className="mt-sm-3">
					<div className="button-box ">
						<Button
							className="px-4 mx-3"
							style={{
								borderRadius: '23px',
								backgroundColor: '#000000',
							}}
							variant="dark"
							onClick={() => Router.push(process.env.sellerCaveURL + '/registration')}
						>
							Open Your Free Store Now
						</Button>
						<Button
							className="px-4 mx-3"
							style={{
								borderRadius: '23px',
								backgroundColor: '#fff',
								color: '#000',
							}}
							variant="light"
							onClick={() => Router.push(process.env.sellerCaveURL + '/signin')}
						>
							Log in to Seller Center
						</Button>
					</div>
				</Col>
			</Row>
		</SellSection>
	);
};

const SellSection = styled.div`
	background: var(--primary);
	border-radius: 35px 35px 0px 0px;
	position: relative;
	overflow: hidden;
	@media only screen and (max-width: 1199px) {
		.button-box {
			margin-right: 35px;
		}
	}
	@media only screen and (max-width: 767px) {
		.button-box {
			margin-right: 0px;
			flex-direction: column;
			Button:nth-child(2) {
				margin-top: 7px;
				margin-right: 20px;
			}
		}
	}
	.button-box {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		@media only screen and (max-width: 991px) {
			justify-content: center;
		}
		@media only screen and (max-width: 575px) {
			flex-direction: column;
			Button:nth-child(1) {
				margin-top: 15px;
				margin-bottom: 10px;
			}
			Button:nth-child(2) {
				margin-right: 20px;
			}
		}
	}

	::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		right: 0px;
		top: 0px;
		bottom: 0px;
		background: url('/images/sell-on/green.svg');
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
		@media only screen and (max-width: 460px) {
			background-size: cover;
		}
	}
`;
const Text = styled.p`
	color: #fff;
	padding: 0;
	margin: 0 0 5px 0;
`;
const CheckIcon = styled.svg`
	display: inline-block;
`;
