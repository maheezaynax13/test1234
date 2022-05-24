import Icon, { love, loveO } from '@libs/icons';
import { FC, HTMLAttributes } from 'react';
import { Button } from '../styles';

const Wishlist: FC<WishlistProps> = (props) => {
	const { isActive, bordered, ...rest } = props;

	return (
		<Button variant="link" className={bordered ? 'isBorder' : ''} {...rest}>
			<Icon path={isActive ? love : loveO} width={20} height={20} fill={isActive ? '#00b55b' : '#707070'} />
		</Button>
	);
};

export default Wishlist;

Wishlist.defaultProps = {
	isActive: false,
	bordered: false,
};

interface WishlistProps extends HTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
	bordered?: boolean;
}
