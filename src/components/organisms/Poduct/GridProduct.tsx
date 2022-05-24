import { Link } from '@components/atoms';
import { IShop } from '@libs/api/interfaces';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ImageSkeleton } from './ImageSkeleton';
import { GridWrapper, ImageWrapper, Title, Price, OldPrice, OfferBadge } from './styles';

export const GridProduct: FC<IShop['items'][0]> = (props) => {
	const {
		slug,
		image: { imageURL, altText },
		name,
		pricing: { price, oldPrice, discountText },
	} = props;

	return (
		<Link href={`/product/${slug}`} className="d-block text-decoration-none">
			<GridWrapper>
				<ImageWrapper>
					<ImageSkeleton src={imageURL} alt={altText} />
				</ImageWrapper>
				<Title>{name}</Title>
				<Price>{formatPrice(price)}</Price>
				{oldPrice > 0 && (
					<Row>
						<Col>
							<OldPrice>{formatPrice(oldPrice)}</OldPrice>
						</Col>
						<Col>
							<OfferBadge rounded variant="dark">
								{discountText[0]}
							</OfferBadge>
						</Col>
					</Row>
				)}
			</GridWrapper>
		</Link>
	);
};
