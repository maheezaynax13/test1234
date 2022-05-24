import { FC } from 'react';
import { Col, ColProps, Row } from 'react-bootstrap';
import { ProductCollection, ProductCollectionProps } from './ProductCollection';

export const ProductCollectionList: FC<ProductCollectionListProps> = ({ items, ...rest }) => {
	if (items?.length > 0) {
		return (
			<Row>
				{items.map((e, i) => (
					<Col key={i} {...rest}>
						<ProductCollection {...e} />
					</Col>
				))}
			</Row>
		);
	}

	return null;
};

ProductCollectionList.defaultProps = {
	md: 3,
};

export interface ProductCollectionListProps extends ColProps {
	items: ProductCollectionProps[];
}
