/* eslint-disable no-empty */
import { LoaderButton } from '@components/molecules';
import { WishlistButton } from '@components/organisms';
import { useProduct } from '@libs/hooks';
import { FC } from 'react';
import styled from 'styled-components';
import AddedCartPopup from './AddedCartPopup';

const ButtonGroup: FC<PropsType> = ({ id }) => {
	const { stock, isWishlist, isCartPopup, setCartPopup, handleAddToCart, handleWishlist } = useProduct(id);

	return (
		<Wrap>
			<LoaderButton
				pill
				size="xl"
				variant="primary"
				className="text-uppercase font-weight-semibold mr-3"
				style={{ minWidth: '225px' }}
				disabled={stock === 0}
				onClick={() => handleAddToCart()}
			>
				{stock < 1 ? 'Out of Stock' : 'Add to Cart'}
			</LoaderButton>
			<WishlistButton bordered isActive={isWishlist} onClick={handleWishlist} />
			<AddedCartPopup show={isCartPopup} onHide={() => setCartPopup(false)} />
		</Wrap>
	);
};

export default ButtonGroup;

interface PropsType {
	id: string;
}

const Wrap = styled.div`
	margin-bottom: 15px;
`;
