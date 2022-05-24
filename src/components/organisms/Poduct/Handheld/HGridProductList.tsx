import { FC } from 'react';
import { Col, ColProps, Row } from 'react-bootstrap';
import { HGridProduct, HGridProductProps } from './HGridProduct';

export const HGridProductList: FC<HGridProductListProps> = (props) => {
	const { items, isTitle, isSold, ...rest } = props;

	if (items?.length > 0) {
		return (
			<Row>
				{items.map((e, i) => (
					<Col key={i} {...rest}>
						<HGridProduct isTitle={isTitle} isSold={isSold} {...e} />
					</Col>
				))}
			</Row>
		);
	}

	return null;
};

HGridProductList.defaultProps = {
	xs: 4,
};

export interface HGridProductListProps extends ColProps, Pick<HGridProductProps, 'isTitle' | 'isSold'> {
	items: Omit<HGridProductProps, 'isTitle'>[];
}
