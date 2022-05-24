import { IShop } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, ColProps, Row } from 'react-bootstrap';
import { GridProduct } from './GridProduct';

export const GridProductList: FC<GridProductListProps> = ({ items, ...rest }) => {
	if (items?.length > 0) {
		return (
			<Row>
				{items.map((e, i) => (
					<Col key={i} {...rest}>
						<GridProduct {...e} />
					</Col>
				))}
			</Row>
		);
	}

	return null;
};

GridProductList.defaultProps = {
	md: 2,
};

export interface GridProductListProps extends ColProps {
	items: IShop['items'];
}
