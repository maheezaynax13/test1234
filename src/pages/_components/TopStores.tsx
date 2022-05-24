/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { StoreGridItem } from '@components/old/parts/Store';
import { CardWithShadow } from '@components/old/UI';
import { FeaturedStores } from '@modules/api/cms/interfaces';
import { Col, Row } from 'react-bootstrap';
import BlockHeader from './BlockHeader';

const Collections = ({ data }: propsType): JSX.Element => {
	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		if (items && items.length > 0) {
			return (
				<CardWithShadow style={{ marginTop: '25px' }}>
					<Row>
						<BlockHeader {...headerProps} />
						<Col md={12}>
							<Row>
								{items.map((el, i) => (
									<Col key={i} md={3}>
										<StoreGridItem classes="bg-light" store={el} />
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</CardWithShadow>
			);
		}

		return null;
	}

	return null;
};

export default Collections;

interface propsType {
	data: FeaturedStores;
	isLoading?: boolean;
}
