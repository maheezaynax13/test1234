import { IconDropdown } from '@components/molecules';
import { cart } from '@libs/icons';
import { FC } from 'react';

export const Cart: FC = () => {
	return (
		<IconDropdown path={cart}>
			<a href="#">proceed to cart</a>
		</IconDropdown>
	);
};
