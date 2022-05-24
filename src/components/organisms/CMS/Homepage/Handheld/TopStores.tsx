import { GridStore, GridStoreProps } from '@components/organisms/Store';
import { FC } from 'react';
import { BlockLayout, BlockLayoutProps } from './BlockLayout';
import { HandheldScroller } from './HandheldScroller';

export const TopStores: FC<TopStoresProps> = (props) => {
	const { icon, title, viewMoreLink, banner, items } = props;
	const layoutProps = { icon, title, viewMoreLink, banner };

	return (
		<BlockLayout {...layoutProps}>
			<HandheldScroller>
				{items?.map((e, i) => (
					<GridStore key={i} {...e} />
				))}
			</HandheldScroller>
		</BlockLayout>
	);
};

export interface TopStoresProps extends BlockLayoutProps {
	items: GridStoreProps[];
}
