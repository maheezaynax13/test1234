import { CardWithShadow } from '@components/old/UI';
import { IAllBrands } from '@modules/interfaces/brands';
import Link from 'next/link';
import { Col, Image, Row } from 'react-bootstrap';
import styled, { CSSProperties } from 'styled-components';

const BrandSection = ({ data }: propsType): JSX.Element => {
	if (data && data.length > 0) {
		return (
			<BrandWrap>
				{data.map(({ title, items = [] }, i) => (
					<Container key={i}>
						<Header>{title}</Header>
						<Row>
							{items.map(({ id, title, items, image }, j) => (
								<Col key={j} md={2}>
									<div key={i} className="TopBrands-Slider__Item">
										<Link href={`/brand/${id}`}>
											<a style={brandItemStyle}>
												<CardWithShadow>
													<Image fluid src={image} alt={title} className="mx-auto" />
													<p className="mt-3 mb-3">{items} Items</p>
												</CardWithShadow>
											</a>
										</Link>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				))}
			</BrandWrap>
		);
	}

	return null;
};

export default BrandSection;

interface propsType {
	data: IAllBrands[];
}

const brandItemStyle: CSSProperties = {
	display: 'block',
	color: '#515151',
	textAlign: 'center',
	padding: 0,
	margin: 0,
	textDecoration: 'none',
};

const BrandWrap = styled.div`
	margin: 15px 0;
`;

const Container = styled.div`
	margin: 50px 0;
`;

const Header = styled.h4`
	color: var(--dark);
`;
