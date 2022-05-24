/* eslint-disable no-empty */
import { Card, CardBody, CardHeader } from '@components/atoms';
import { cartAPI, wishlistAPI } from '@libs/api';
import { ICart } from '@libs/api/interfaces';
import { updateCart as updateStoreCart } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { StoreInfo } from '../Store';
import { CartItem } from './CartItem';

export const PackageItems: FC<PackageItemsProps> = (props) => {
	const { shopInfo, fulfilledBy, estimatedDeliveryDays, shippingCharge, items, packageNumber, setCartData } = props;
	const dispatch = useDispatch();
	const router = useRouter();

	const handleWishlist = async (productID: string, skuID: string, isWishlistItem: boolean) => {
		const payload = { productID, skuID };
		try {
			const { success } = isWishlistItem
				? await wishlistAPI.removeFromWishlist(payload)
				: await wishlistAPI.addToWishlist(payload);
			if (success) {
				setCartData((prevState) => {
					const newPackages = [...prevState];
					newPackages.forEach(({ items }) => {
						items.forEach((e) => {
							if (e.productID === productID && e.skuID === skuID) {
								e.isWishlistItem = !e.isWishlistItem;
							}
						});
					});
					return newPackages;
				});
			}
		} catch (error) {}
	};

	const handleDelete = async (productID: string, skuID: string) => {
		const payload = { productID, skuID };
		try {
			const { success, data } = await cartAPI.deleteCartItem(payload);
			if (success) {
				router.push('/cart');
				dispatch(updateStoreCart(data));
			}
		} catch (error) {}
	};

	const handleQuantity = async (productID: string, skuID: string, type: 'increase' | 'decrease') => {
		const payload = { productID, skuID };
		try {
			const { success, data } =
				type === 'decrease' ? await cartAPI.decreaseQty(payload) : await cartAPI.increaseQty(payload);
			if (success) {
				setCartData((prevState) => {
					const newPackages = [...prevState];
					newPackages.forEach(({ items }) => {
						items.forEach((e) => {
							if (e.productID === productID && e.skuID === skuID) {
								if (type === 'decrease') {
									e.quantity--;
								} else {
									e.quantity++;
								}
							}
						});
					});
					return newPackages;
				});
				dispatch(updateStoreCart(data));
			}
		} catch (error) {}
	};

	return (
		<GroupItems>
			<CardHeader className="position-relative">
				<Count>Package {packageNumber}</Count>
				<Row className="align-items-center">
					<Col md={6}>
						<StoreInfo {...shopInfo} fulfilledBy={fulfilledBy} />
					</Col>
					<Col md={6}>
						<div className="d-none d-md-block text-right">
							<p className="text-dark mb-0">Delivery Fee: {formatPrice(shippingCharge)}</p>
							<p className="text-dark mb-0">Estimate Delivery on {estimatedDeliveryDays}</p>
						</div>
					</Col>
				</Row>
			</CardHeader>
			{items?.map((item, i) => {
				const { productID, skuID, isWishlistItem } = item;
				return (
					<CardBody key={i}>
						<CartItem
							{...item}
							wishlistHandler={() => handleWishlist(productID, skuID, isWishlistItem)}
							deleteHandler={() => handleDelete(productID, skuID)}
							subtractHandler={() => handleQuantity(productID, skuID, 'decrease')}
							addHandler={() => handleQuantity(productID, skuID, 'increase')}
						/>
					</CardBody>
				);
			})}
		</GroupItems>
	);
};

type IPackage = ICart['packages'][0];
export interface PackageItemsProps extends IPackage {
	packageNumber?: number;
	setCartData?: Dispatch<SetStateAction<ICart['packages']>>;
}

const GroupItems = styled(Card)`
	display: inline-block;
	margin-bottom: 2rem;

	&:last-child {
		margin-bottom: 0;
	}

	& + & {
		margin-top: 2rem;
		position: relative;

		&:before {
			content: '';
			width: 100%;
			height: 1px;
			position: absolute;
			top: -2rem;
			border-top: 1px dashed var(--border);
		}
	}

	@media (max-width: 767.98px) {
		width: calc(100% + 1.875rem);
		margin-left: -0.938rem;
		margin-right: -0.938rem;
		margin-bottom: 0.5rem;
		border-radius: 0;
		border-left: none;
		border-right: none;

		& + & {
			margin-top: 0.5rem;

			&:before {
				content: none;
			}
		}
	}
`;

const Count = styled.span`
	position: absolute;
	top: 2rem;
	left: -4.8rem;
	display: inline-block;
	color: var(--white);
	font-weight: 500;
	padding: 0.5rem 1.2rem;
	border-radius: 0.375rem;
	background-color: var(--dark);
	transform: rotate(-90deg);

	@media (max-width: 767.98px) {
		left: inherit;
		top: 1.5rem;
		right: 0;
		transform: rotate(0deg);
		border-top-left-radius: 1.25rem;
		border-top-right-radius: 0;
		border-bottom-left-radius: 1.25rem;
		border-bottom-right-radius: 0;
	}
`;
