/* eslint-disable no-empty */
import { Button, Image, Link } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { cartAPI, wishlistAPI } from '@libs/api';
import { IWishlistItem } from '@libs/api/interfaces';
import { deleteBin } from '@libs/icons';
import { updateCart } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export const WishlistItem: FC<IWishlistItem> = (props) => {
	const dispatch = useDispatch();
	const {
		image: { medium: imageURL },
		name,
		slug,
		attributes,
		pricing: { price },
		productID,
		skuID,
	} = props;

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
			if (success) Router.push('/member/wishlist', null, { scroll: false });
		} catch (error) {}
	};

	return (
		<ItemWrapper>
			<Row>
				<Col md="auto">
					<ProductImage thumbnail src={imageURL} alt={name} />
				</Col>
				<Col>
					<Row>
						<Col md={9}>
							<Link href={`/product/${slug}`} className="ItemTitle">
								{name}
							</Link>
							{attributes &&
								Object.keys(attributes).length > 0 &&
								Object.entries(attributes).map(([key, value], i) => (
									<AttrItem key={i} as="span">
										{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
									</AttrItem>
								))}
							<AttrItem>Price: {formatPrice(price)}</AttrItem>
							<Button pill outline variant="dark" onClick={handleMoveToCart}>
								Move to Cart
							</Button>
							<IconButton
								path={deleteBin}
								fill="var(--danger)"
								className="ml-3"
								onClick={handleDeleteItem}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</ItemWrapper>
	);
};

const AttrItem = styled.p`
	color: var(--light-gray);
	margin-right: 1rem;
`;

const ProductImage = styled(Image)`
	width: 8.875rem;
	height: 8.875rem;
	display: block;
	object-fit: cover;
`;

const ItemWrapper = styled.div`
	margin: 0 -1rem;
	padding: 0.625rem 1rem;
	border-bottom: 1px solid var(--border);

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.ItemTitle {
		display: block;
		min-height: 2.625rem;
		margin-bottom: 0.5rem;
		color: var(--dark);
	}

	@media (max-width: 767.99px) {
		text-align: center;
		margin: 0;
		padding: 0.625rem 0.35rem !important;
		border-bottom: none;
		width: 50%;
		height: 100%;

		${ProductImage} {
			margin: auto !important;
		}
		.ItemTitle {
			min-height: 1.25rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		${AttrItem} {
			margin-right: 0.25rem;
		}
	}
`;
