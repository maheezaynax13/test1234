import { ProductCollection, ProductCollectionProps } from '@components/organisms';
import { FC } from 'react';
import { BlockLayout, BlockLayoutProps } from './BlockLayout';
import { HandheldScroller } from './HandheldScroller';

export const Collections: FC<CollectionsProps> = (props) => {
	const { icon, title, viewMoreLink, banner, items } = props;
	const layoutProps = { icon, title, viewMoreLink, banner };

	return (
		<BlockLayout {...layoutProps}>
			<HandheldScroller>
				{items?.map((e, i) => (
					<ProductCollection key={i} {...e} />
				))}
			</HandheldScroller>
		</BlockLayout>
	);
};

export interface CollectionsProps extends BlockLayoutProps {
	items: ProductCollectionProps[];
}
