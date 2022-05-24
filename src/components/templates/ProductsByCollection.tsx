import { Card, CardBody, Pagination } from '@components/atoms';
import { GridProductList } from '@components/organisms';
import { ICollection } from '@libs/api/interfaces/collection/collectionSingle';
import { formatNumber } from '@utils/helpers';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const ProductsByCollection: FC<ICollection> = (props) => {
	const { collectionInfo, items, ...rest } = props;

	return (
		<Container>
			<Row>
				<Col>
					<Card className="mb-3">
						<CardBody className="text-center pt-5 pb-5">
							<h4>{collectionInfo?.title}</h4>
							<p className="text-secondary mb-0">{formatNumber(rest?.total)} Products</p>
						</CardBody>
					</Card>

					<GridProductList xs={6} md={2} items={items} />

					<Pagination {...rest} />
				</Col>
			</Row>
		</Container>
	);
};
