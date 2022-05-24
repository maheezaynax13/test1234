import { IconButton } from '@components/molecules';
import Icon, { arrowGoBack, shieldStar } from '@libs/icons';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const PageHeader: FC<PropsType> = ({ heading, subHeading }) => (
	<Container>
		<Row className="align-items-center mt-3 mb-3">
			<Col xs={7}>
				<Row className="align-items-center">
					<Col md="auto">
						<IconButton path={arrowGoBack} fill="var(--primary)" onClick={() => Router.back()} />
					</Col>
					<Col>
						<Heading>{heading}</Heading>
						<SubHeading>{subHeading}</SubHeading>
					</Col>
				</Row>
			</Col>
			<Col xs={5} className="text-right">
				<Icon path={shieldStar} width={21} height={21} fill="var(--primary)" />{' '}
				<span className="text-primary font-weight-semibold">100% Secure</span>
			</Col>
		</Row>
	</Container>
);

interface PropsType {
	heading: string;
	subHeading: string;
}

const Heading = styled.h2`
	font-size: 1rem;
	font-weight: 500;
	margin-bottom: 0;
	text-transform: uppercase;
`;

const SubHeading = styled.p`
	margin-bottom: 0;
`;
