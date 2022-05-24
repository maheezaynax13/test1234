import CollectionItem from '@components/old/parts/CollectionItem';
import { CardWithShadow } from '@components/old/UI';
import { FeaturedCollections } from '@modules/api/cms/interfaces';
import { Col, Row } from 'react-bootstrap';
import BlockHeader from './BlockHeader';

const Collections = ({ data }: propsType): JSX.Element => {
	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		return (
			<CardWithShadow style={{ padding: '11.25px 15px', marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col md={12}>
						<Row>
							{items.map((e, i) => (
								<Col key={i} md={3}>
									<CollectionItem {...e} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</CardWithShadow>
		);
	}

	return null;
};

export default Collections;

interface propsType {
	data: FeaturedCollections;
	isLoading?: boolean;
}
