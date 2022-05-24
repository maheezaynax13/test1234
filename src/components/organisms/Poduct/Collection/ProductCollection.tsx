import { Image, Link } from '@components/atoms';
import { formatNumber } from '@utils/helpers';
import { FC } from 'react';
import { GridWrapper, ImageWrapper, Title, TotalCount } from './styles';

export const ProductCollection: FC<ProductCollectionProps> = (props) => {
	const {
		title,
		count,
		image: { imageURL, altText, slug },
	} = props;

	return (
		<Link href={`/collection/${slug}`} className="d-block text-decoration-none">
			<GridWrapper>
				<ImageWrapper>
					<Image fluid src={imageURL} alt={altText} />
				</ImageWrapper>
				<Title>{title}</Title>
				<TotalCount>{formatNumber(count)} Products</TotalCount>
			</GridWrapper>
		</Link>
	);
};

export type ProductCollectionProps = {
	title: string;
	count: string;
	image: {
		imageURL: string;
		altText: string;
		slug: string;
	};
};
