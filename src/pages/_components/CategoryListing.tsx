import { Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { FeaturedCategories } from '@modules/api/cms/interfaces';

const CategoryListing = ({ data, colSize = 2 }: propsType): JSX.Element => {
	const {
		headerImage: { altText, imageURL, slug },
		items,
	} = data;
	return (
		<ListingWrap>
			<Link href={`category/${slug}`}>
				<a>
					<Image fluid src={imageURL} alt={altText} className="d-block mx-auto mb-3" />
				</a>
			</Link>
			<Row className="justify-content-center">
				{items.map(({ altText, imageURL, slug, title }, j) => (
					<Col md={colSize} key={j}>
						<Link href={slug}>
							<a className="d-block mt-2 mb-2 text-center">
								<Image fluid src={imageURL} alt={altText} className="ItemImage mx-auto" />
							</a>
						</Link>
						<p className="font-weight-semibold text-center">{title}</p>
					</Col>
				))}
			</Row>
		</ListingWrap>
	);
};

export default CategoryListing;

interface propsType {
	data: FeaturedCategories;
	colSize?: number;
	isLoading?: boolean;
}

const ListingWrap = styled.div`
	margin: 80px 0 30px 0;

	.ItemImage {
		overflow: hidden;
		border-radius: 50rem;
		background-color: var(--white);
	}
`;
