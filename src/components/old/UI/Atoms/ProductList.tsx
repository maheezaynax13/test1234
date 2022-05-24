import { OmitProduct } from '@libs/api/interfaces';
import styled from 'styled-components';
import Product from './Product';

const ProductList = ({ items, size = 3 }: propsType): JSX.Element => {
	if (items && items.length > 0) {
		return (
			<ListItems>
				{items.map((el, i) => (
					<li key={i} style={{ width: `calc(${100 / size}% - 8px)` }}>
						<Product {...el} />
					</li>
				))}
			</ListItems>
		);
	}

	return null;
};

export default ProductList;

interface propsType {
	items: OmitProduct[];
	size?: number;
}

const ListItems = styled.ul`
	margin: 0;
	padding: 0;

	li {
		margin: 0 4px;
		display: inline-block;
		vertical-align: top;
	}
`;
