/* eslint-disable no-empty */
import { Card, CardBody } from '@components/atoms';
import { AddressesModal, AddressPreview, CheckoutSummary, OrderPlaceBtn } from '@components/organisms';
import { cartAPI } from '@libs/api';
import { IAddAddress } from '@libs/api/interfaces';
import { setCartCount } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const initialAddress = { shipping: null, billing: null };
const initialModal = { isActive: false, type: null };
export const Shipping: FC<ShippingProps> = ({ data }) => {
	const [addresses, setAddresses] = useState<IAddAddress[]>(null);
	const [address, setAddress] = useState<Record<keyof typeof initialAddress, IAddAddress>>(initialAddress);
	const [isModal, setModal] = useState<typeof initialModal>(initialModal);
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		const newObj = { ...initialAddress };
		if (data?.length > 0) {
			data.forEach((e, i) => {
				if (e.shipping) {
					newObj.shipping = e;
				} else {
					newObj.shipping = data[i];
				}

				if (e.billing) {
					newObj.billing = e;
				} else {
					newObj.billing = data[i];
				}
			});
			setAddress(newObj);
			setAddresses(data);
		}
	}, [data]);

	const handleAddress = (data: IAddAddress, type: keyof typeof initialAddress) => {
		setAddress((prevState) => {
			const { shipping, billing } = prevState;
			if (!shipping && !billing) return { shipping: data, billing: data };
			return { ...prevState, [type]: data };
		});
	};

	const handlePlaceOrder = async () => {
		const {
			shipping: { id: shippingAddressID },
			billing: { id: billingAddressID },
		} = address;
		try {
			const { success, data } = await cartAPI.placeOrder({ shippingAddressID, billingAddressID });
			if (success && data?.orderID) {
				setCartCount(dispatch);
				router.push(`/payment?checkoutOrderID=${data.orderID}`);
			}
		} catch (error) {}
	};

	return (
		<Container>
			<Row>
				<Col md={8} xl={9}>
					<Wrapper>
						<CardBody>
							<AddressPreview
								header="Shipping Address"
								handleAddress={(data) => handleAddress(data, 'shipping')}
								updateHandler={() => setModal({ isActive: true, type: 'shipping' })}
								{...address.shipping}
							/>
						</CardBody>
						{address.billing && (
							<CardBody style={{ borderTopStyle: 'dashed' }}>
								<AddressPreview
									header="Billing Address"
									isBilling={address.shipping?.billing}
									handleAddress={(data) => handleAddress(data, 'billing')}
									updateHandler={() => setModal({ isActive: true, type: 'billing' })}
									clickHandler={handlePlaceOrder}
									{...address.billing}
								/>
								{address.shipping && !address.shipping?.billing && (
									<OrderPlaceBtn className="mt-3" onClick={handlePlaceOrder} />
								)}
							</CardBody>
						)}
					</Wrapper>
					<AddressesModal
						{...isModal}
						data={addresses}
						selected={isModal.type === 'shipping' ? address.shipping : address.billing}
						onHide={() => setModal({ ...initialModal })}
						setAddress={setAddress}
					/>
				</Col>
				<Col md={4} xl={3}>
					<CheckoutSummary />
				</Col>
			</Row>
		</Container>
	);
};

interface ShippingProps {
	data: IAddAddress[];
}

const Wrapper = styled(Card)`
	@media (max-width: 767.98px) {
		width: calc(100% + 1.875rem);
		margin-left: -0.938rem;
		margin-right: -0.938rem;
		margin-bottom: 0.5rem;
		border-radius: 0;
		border-left: none;
		border-right: none;
	}
`;
