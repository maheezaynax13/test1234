import { FC } from 'react';
import { HGridProductList, HGridProductListProps } from '../../../Poduct';
import { BlockLayout, BlockLayoutProps } from './BlockLayout';

export const TernaryProducts: FC<TernaryProductsProps> = (props) => {
	const { icon, title, viewMoreLink, banner, ...rest } = props;
	const layoutProps = { icon, title, viewMoreLink, banner };

	return (
		<BlockLayout {...layoutProps}>
			<HGridProductList {...rest} />
		</BlockLayout>
	);
};

export type TernaryProductsProps = BlockLayoutProps & HGridProductListProps;
