import { Link } from '@components/atoms';
import { IShop } from '@libs/api/interfaces';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import { ImageSkeleton } from '../ImageSkeleton';
import { GridWrapper, ImageWrapper, OfferBadge, Price, Title } from './styles';

export const HGridProduct: FC<HGridProductProps> = (props) => {
	const {
		slug,
		name,
		isTitle,
		isSold,
		sold,
		image: { imageURL, altText },
		pricing: { price, discountText },
	} = props;

	return (
		<Link href={`/product/${slug}`} className="d-block text-decoration-none mb-2">
			<GridWrapper>
				<ImageWrapper>
					<ImageSkeleton src={imageURL} alt={altText} />
				</ImageWrapper>
				{isTitle && <Title>{name}</Title>}
				<Price>{formatPrice(price)}</Price>
				<div className={isSold ? 'd-flex align-items-center justify-content-between' : ''}>
					{isSold && <span className="text-secondary">Sold: {sold}</span>}
					{discountText?.length > 0 && (
						<OfferBadge pill variant="NORMAL">
							{discountText[0]}
						</OfferBadge>
					)}
				</div>
			</GridWrapper>
		</Link>
	);
};

export type HGridProductProps = {
	isTitle?: boolean;
	isSold?: boolean;
} & IShop['items'][0];
