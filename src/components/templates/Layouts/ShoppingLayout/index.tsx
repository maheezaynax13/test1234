import { PageHeader, ShoppingFooter, ShoppingHeader, ShoppingSteps } from '@components/organisms';
import { FC, Fragment } from 'react';
import { IDefaultProps } from '../interfaces';
import { HandheldShoppingLayout } from './Handheld';

export const ShoppingLayout: FC<IShoppingLayout> = ({ heading, subHeading, isMobile, children }) => {
	const pageHeaderProps = { heading, subHeading };

	if (isMobile) return <HandheldShoppingLayout>{children}</HandheldShoppingLayout>;

	return (
		<Fragment>
			<ShoppingHeader />
			<ShoppingSteps />
			<main>
				<PageHeader {...pageHeaderProps} />
				{children}
			</main>
			<ShoppingFooter />
		</Fragment>
	);
};

interface IShoppingLayout extends IDefaultProps {
	heading?: string;
	subHeading?: string;
}
