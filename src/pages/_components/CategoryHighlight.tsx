import { CardWithShadow } from '@components/old/UI';
import { FeaturedCollectionsWithBackground } from '@modules/api/cms/interfaces';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CategoryHighlight = ({ data }: propsType): JSX.Element => {
	const buttonStyle: CSSProperties = {
		color: '#ffffff',
		fontWeight: 500,
		textTransform: 'uppercase',
		padding: '8px 16px',
		borderRadius: '0 50rem 50rem 50rem',
		textDecoration: 'none',
	};

	const { heading, badgeText, buttonSlug, buttonText, color, image, items, subHeading, underButtonText } = data;

	return (
		<Row>
			<Col md={12}>
				<div className="w-100 mt-md-5">
					<Row>
						<Col xs={6} md={5} className="text-md-right">
							<Image fluid src={image.imageURL} alt={image.altText} />
						</Col>
						<Col xs={6} md={7}>
							<Badge style={{ backgroundColor: color ?? '#00b55b' }}>{badgeText}</Badge>
							<Header>{heading}</Header>
							<SubHeader>{subHeading}</SubHeader>
							<Link href={buttonSlug}>
								<a
									style={{
										...buttonStyle,
										backgroundColor: color ?? '#00b55b',
									}}
								>
									{buttonText}
								</a>
							</Link>
							<OfferText>{underButtonText}</OfferText>
							<CategoryWrap>
								<Row>
									{items.map(({ altText, imageURL, slug }, i) => (
										<Col md={4} key={i}>
											<Link href={slug}>
												<a>
													<CardWithShadow>
														<Image fluid src={imageURL} alt={altText} />
													</CardWithShadow>
												</a>
											</Link>
										</Col>
									))}
								</Row>
							</CategoryWrap>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default CategoryHighlight;

interface propsType {
	data: FeaturedCollectionsWithBackground;
	isLoading?: boolean;
}

const Badge = styled.p`
	font-size: 16px;
	color: var(--white);
	padding: 4px 16px;
	margin-bottom: 8px;
	display: inline-block;
	border-radius: 50rem;
`;

const Header = styled.h1`
	max-width: 400px;
	font-weight: 500;
	color: var(--dark);
`;

const SubHeader = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: var(--dark);
`;

const OfferText = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: var(--dark);
	margin-top: 16px;
`;

const CategoryWrap = styled.div`
	max-width: 528px;
	display: block;
`;
