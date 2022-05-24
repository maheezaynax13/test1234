import { Product } from '@components/old/parts/products';
import { ListItems } from '@components/old/styles/productStyles';
import { CardWithShadow } from '@components/old/UI';
import { FeaturedProductsWithBanner } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';
import BlockHeader from './BlockHeader';

const AsideProductList = ({ data, colSize = 4 }: propsType): JSX.Element => {
	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, image, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		return (
			<CardWithShadow style={{ marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col md={4}>
						<Link href={`/product/${image.slug}`}>
							<a>
								<Image fluid src={image.imageURL} alt={image.altText} />
							</a>
						</Link>
					</Col>
					<Col md={8}>
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

export default AsideProductList;

interface propsType {
	data: FeaturedProductsWithBanner;
	colSize?: number;
	isLoading?: boolean;
}
