import { Product } from '@components/old/parts/products';
import { ListItems } from '@components/old/styles/productStyles';
import { CardWithShadow } from '@components/old/UI';
import { HalfWidthProducts } from '@modules/api/cms/interfaces';
import { Col, Row } from 'react-bootstrap';
import BlockHeader from './BlockHeader';

const ProductList = ({ data, colSize = 3 }: propsType): JSX.Element => {
	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		return (
			<CardWithShadow style={{ marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col xs={12}>
						<ListItems>
							{items.map((el, i) => (
								<li key={i} style={{ width: `calc(${100 / colSize}% - 8px)` }}>
									<Product {...el} />
								</li>
							))}
						</ListItems>
					</Col>
				</Row>
			</CardWithShadow>
		);
	}

	return null;
};

export default ProductList;

interface propsType {
	data: HalfWidthProducts;
	colSize?: number;
	isLoading?: boolean;
}
