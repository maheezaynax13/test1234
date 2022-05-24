import { ListItems } from '@components/old/styles/productStyles';
import { CardWithShadow } from '@components/old/UI';
import { FeaturedBrands } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { FC } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import BlockHeader from './BlockHeader';

const TopBrandList: FC<PropsType> = ({ data, colSize = 6 }) => {
	if (data && Object.keys(data).length > 0) {
		const { icon, title: header, viewMoreLink: viewMore, items = [] } = data;
		const headerProps = { icon, header, viewMore };

		return (
			<CardWithShadow style={{ marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col xs={12}>
						<ListItems>
							{items.map(({ imageURL, altText, slug }, i) => (
								<li key={i} style={{ width: `calc(${100 / colSize}% - 8px)` }}>
									<Link href={`/brand/${slug}`}>
										<a>
											<Image fluid src={imageURL} alt={altText} style={{ borderRadius: '5px' }} />
										</a>
									</Link>
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

export default TopBrandList;

interface PropsType {
	data: FeaturedBrands;
	colSize?: number;
	isLoading?: boolean;
}
