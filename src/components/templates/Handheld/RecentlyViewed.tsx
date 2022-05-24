import { GridProduct } from '@components/organisms';
import { Container } from '@components/organisms/Pages/Product/ProductAttributes/styles';
import { IProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const RecentlyViewed: FC<PropsType> = ({ data }) => {
	if (data?.length > 0) {
		return (
			<Container>
				<Row className="pl-3 pr-2">
					{data.map((e, i) => (
						<Col key={i} xs={6} md={3}>
							<GridProduct {...e} />
						</Col>
					))}
				</Row>
			</Container>
		);
	}
};

interface PropsType {
	data: IProduct[];
}
