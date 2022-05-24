import { FC } from 'react';
import Router from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import { Brand, IconButton } from '@components/molecules';
import { arrowLeft } from '@libs/icons';
import { HandheldHeader } from '../styles';

export const HandheldShoppingHeader: FC = () => (
	<HandheldHeader>
		<Container>
			<Row className="align-items-center">
				<Col>
					<Brand isClickable height={40} />
				</Col>
				<Col className="text-right">
					<IconButton path={arrowLeft} fill="var(--dark)" onClick={() => Router.back()} />
				</Col>
			</Row>
		</Container>
	</HandheldHeader>
);
