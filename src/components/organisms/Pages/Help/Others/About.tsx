import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const About: FC<PropsType> = ({ isMobile = false }) => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={!isMobile && { span: 8, offset: 2 }}>
					<HelpInfoWrapper isMobile={isMobile}>
						{!isMobile && <h3 className="mb-3">About zDrop</h3>}
						<p className="text-justify">
							zDrop is an e-Commerce website with over 100+ Million products cataloged on the website
							being shipped from countries like China, US, UK and India from reliable and competitive
							Manufacturers / Merchants / Suppliers at affordable price with lots of varieties at a
							delivery speed previously incredible, we are pushing the limits of what can be achieved by
							merging bleeding edge technology and efficient supply chain management. zDrop is committed
							to offer customers an easier and convenient international online shopping experience. Things
							that you will not find anywhere else you will find at zDrop.
						</p>
						<p className="text-justify">
							We are a young company incorporated in the year 2020 and is driven by young and energetic
							Management team. With our dedicated distribution/consolidation centers in key locations
							around the globe (China, US, UK and India) we have been able to truly connect the world and
							combining it with a great customer experience, we are literally delivering happiness in a
							box.
						</p>
						<p className="text-justify">
							Now shop for your favorite lifestyle accessories, books, apparel, footwear, toys, posters,
							sports and fitness, baby care products, mobile phones, laptops, cameras, health and beauty
							and products from a number of other categories available at best deal.
						</p>
					</HelpInfoWrapper>
				</Col>
			</Row>
		</Container>
	);
};

interface PropsType {
	isMobile?: boolean;
}

export const HelpInfoWrapper = styled.div<PropsType>`
	width: 100%;
	${({ isMobile }) => {
		if (isMobile) {
			return css`
				margin: 0 0 3rem 0;
				padding: 1rem;
				font-size: 0.875rem;
				color: var(--secondary);
			`;
		} else {
			return css`
				margin: 3rem 0;
			`;
		}
	}}
`;
