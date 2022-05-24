import { HandheldProductHeader, ShoppingFooter } from '@components/organisms';
import { FC, Fragment } from 'react';

export const HandheldProductLayout: FC = ({ children }) => {
	return (
		<Fragment>
			<HandheldProductHeader />
			{children}
			<ShoppingFooter />
		</Fragment>
	);
};
