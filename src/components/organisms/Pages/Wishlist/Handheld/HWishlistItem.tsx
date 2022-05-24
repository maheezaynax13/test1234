import { Badge, Button, Card, Image, Link } from '@components/atoms';
import { HWishlistModal } from '@components/organisms';
import { cartAPI, wishlistAPI } from '@libs/api';
import { IWishlistItem } from '@libs/api/interfaces';
import Icon, { heart } from '@libs/icons';
import { updateCart } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import Router from 'next/router';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export const HWishlistItem: FC<PropsType> = ({ data, index }) => {
	const dispatch = useDispatch();
	const {
		image: { medium: imageURL },
		name,
		slug,
		pricing: { price, oldPrice, discountText },
		productID,
		skuID,
		attributes,
	} = data;

	const handleMoveToCart = async () => {
		const payload = { productID, skuID, quantity: 1 };
		try {
			const { success, data } = await cartAPI.addToCart(payload);
			if (success) {
				dispatch(updateCart(data));
				Router.push('/member/wishlist');
			}
		} catch (error) {}
	};

	const handleDeleteItem = async () => {
		const payload = { productID, skuID };
		try {
			const { success } = await wishlistAPI.removeFromWishlist(payload);
			if (success) Router.push('/member/wishlist');
		} catch (error) {}
	};

	return (
		<Wrapper>
			<div className="Header">
				<Icon path={heart} fill="var(--primary)" width={18} height={18} onClick={() => handleDeleteItem()} />
				<Image src={imageURL} className="Product_Img" alt={name} />
			</div>
			<Link href={`/product/${slug}`} className="ItemTitle">
				{name}
			</Link>
			<p className="font-weight-semibold mb-1">{formatPrice(price)}</p>
			{oldPrice && (
				<div className="d-flex justify-content-between align-items-center mb-2">
					<span style={{ color: 'var(--light-gray)' }}>
						<del>{formatPrice(oldPrice)}</del>
					</span>{' '}
					<Badge rounded className="py-0 px-1">
						{discountText}
					</Badge>
				</div>
			)}
			<CartBtn block outline type="button" variant="dark">
				Move to Cart
			</CartBtn>
		</Wrapper>
	);
};

interface PropsType {
	data: IWishlistItem;
	index: number;
}

const Wrapper = styled(Card)`
	border: none;
	box-shadow: 0 0 8px #8a8a8a19;
	margin-bottom: 0.75rem;
	padding: 0.75rem;

	.Header {
		position: relative;
		margin-top: 0.5rem;
		text-align: center;

		.Product_Img {
			width: 7.5rem;
			height: 9.375rem;
			object-fit: cover;
			padding: 0.75rem;
		}
		svg {
			position: absolute;
			top: -6px;
			left: 2px;
		}
	}
	.ItemTitle {
		display: block;
		min-height: 2.625rem;
		margin-bottom: 0.5rem;
		color: var(--dark);
	}
`;

const CartBtn = styled(Button)`
	color: black;
	font-weight: 600;
	padding: 0.45rem 0.75rem;
`;
