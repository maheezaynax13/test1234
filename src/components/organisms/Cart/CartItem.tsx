import { Image } from '@components/atoms';
import { BadgeLight, IconButton, QuantityPicker } from '@components/molecules';
import { ICart } from '@libs/api/interfaces';
import { deleteBin, love, loveO } from '@libs/icons';
import { formatPrice } from '@utils/helpers';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const CartItem: FC<CartItemProps> = (props) => {
	const {
		productInfo: { productName, imageURL, chosenVariant },
		pricing: { price, oldPrice, discountText },
		stockRemaining,
		quantity,
		isWishlistItem,
		deleteHandler,
		wishlistHandler,
		subtractHandler,
		addHandler,
	} = props;
	const qtyProps = { stock: stockRemaining, quantity, subtractHandler, addHandler };

	return (
		<Row>
			<Col xs="auto">
				<ProductImage thumbnail src={imageURL} alt={productName} />
			</Col>
			<Col>
				<Row>
					<Col md={8}>
						<Title>{productName}</Title>
					</Col>
					<Col xs={{ span: 4, order: 1 }} md={{ span: 4, order: 0 }} className="text-right">
						<IconButton
							path={isWishlistItem ? love : loveO}
							fill={isWishlistItem ? 'var(--primary)' : 'var(--light-gray)'}
							onClick={wishlistHandler}
						/>
						<IconButton path={deleteBin} fill="var(--danger)" className="ml-3" onClick={deleteHandler} />
					</Col>
					<Col xs={8} md={12}>
						{chosenVariant && Object.keys(chosenVariant).length > 0 && (
							<Attributes>
								{Object.entries(chosenVariant).map(([key, value], i) => (
									<span key={i}>
										{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
									</span>
								))}
							</Attributes>
						)}

						<div className="w-100 d-flex align-items-center mb-2">
							<span>Quantity:</span>
							<QuantityPicker className="ml-2" {...qtyProps} />
						</div>
						<div className="d-flex align-items-center">
							<p className="mb-0">Price: {formatPrice(price)}</p>
							{oldPrice > 0 && <del className="text-light-gray ml-4">{formatPrice(oldPrice)}</del>}
							{discountText?.length > 0 && (
								<BadgeLight pill className="ml-4">
									{discountText[0]}
								</BadgeLight>
							)}
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

type ICartItem = ICart['packages'][0]['items'][0];
export interface CartItemProps extends ICartItem {
	deleteHandler: () => void;
	wishlistHandler: () => void;
	subtractHandler: () => void;
	addHandler: () => void;
}

const ProductImage = styled(Image)`
	width: 7.5rem;
	height: 8.75rem;
	display: block;
	object-fit: cover;

	@media (max-width: 575.98px) {
		width: 5.5rem;
		height: 6.75rem;
		border: none;
		padding: 0;
	}
`;

const Title = styled.p`
	margin-bottom: 0.5rem;

	@media (max-width: 767.98px) {
		min-height: 2.625rem;
	}
`;

const Attributes = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 0.5rem;

	span {
		color: var(--light-gray);

		& + span {
			margin-left: 2rem;
		}
	}
`;
