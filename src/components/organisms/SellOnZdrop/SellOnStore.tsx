import { Button } from '@components/atoms';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Description } from './Common/Description';
import { Title } from './Common/Title';

const storeData = {
	title: 'Create your free store in 4 easy steps',
	description:
		'Register today and keep expanding you online business with us. Your success is inevitable here with zDrop. What are you waiting for?',
};

export const SellOnStore: FC = () => {
	return (
		<StoreContainer className="mt-3 mb-5 px-xl-5 store-container">
			<div className="image-container"></div>
			<div className="py-5 px-4 px-sm-5">
				<Row>
					<Col xl={3} lg={4}>
						<div className="">
							<Title className="mb-4 text-sm-left md-title" size="md">
								{storeData?.title}
							</Title>
							<Description className="px-sm-5 px-md-0 text-sm-left" variant="white">
								{storeData?.description}
							</Description>
						</div>
					</Col>
					<Col xl={9} lg={8}>
						<div className="pt-sm-4 h-100  button-box d-flex justify-content-center justify-content-lg-end  justify-content-sm-center flex-wrap align-items-center">
							<Button
								className="px-4 mx-3 my-2"
								style={{
									borderRadius: '23px',
									backgroundColor: '#2B2B2B',
									border: 'none',
									color: '#fff',
								}}
								onClick={() => Router.push(process.env.sellerCaveURL + '/registration')}
							>
								Open Your Free Store Now
							</Button>
							<Button
								className="px-4 mx-3 my-2"
								style={{
									borderRadius: '23px',
									backgroundColor: '#fff',
									border: 'none',
									color: '#000',
								}}
								onClick={() => Router.push(process.env.sellerCaveURL + '/signin')}
							>
								Login to Seller Center
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</StoreContainer>
	);
};

const StoreContainer = styled.div`
	position: relative;
	background-color: black;
	color: #fff;
	border-radius: 35px;
	overflow: hidden;

	.image-container::before {
		content: '';
		background: url('/images/sell-on/bg-2.svg') no-repeat right;
		width: 100%;
		height: 100%;
		display: block;
	}
	.image-container {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
`;
