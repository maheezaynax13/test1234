/* eslint-disable no-empty */
import { Image } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { AddressPicker } from '@components/old/UI';
import { productAPI } from '@libs/api';
import { ISingleProduct } from '@libs/api/interfaces';
import { information } from '@libs/icons';
import { getProductState, updateShipping } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const ProductDeliveryOptions: FC<ProductDeliveryOptionsProps> = ({ productID }) => {
	const [isActive, setActive] = useState<boolean>(false);
	const dispatch = useDispatch();
	const { shipping } = useSelector(getProductState);

	useEffect(() => {
		const address = { region: 'Dhaka', city: 'Dhaka-North', area: 'Gulshan 1' };
		handleUpdate(address);
	}, []);

	const handleUpdate = async ({ region, city, area }: IAddress) => {
		try {
			const { success, data } = await productAPI.getDeliveryCharge({ productID, region, city });
			if (success) {
				const { price, duration } = data;
				dispatch(updateShipping({ address: `${region}, ${city}, ${area}`, duration, charge: price }));
			}
		} catch (error) {}
	};

	if (shipping && Object.keys(shipping).length > 0) {
		const { address, duration, charge } = shipping;

		return (
			<Wrap>
				<Image src="/images/DeliveryVan.svg" height={30} style={{ marginTop: '-4px' }} alt="van" />
				<Col>
					<Title>Deliver to:</Title>
					<InputContainer>
						<Row className="h-100 align-items-center">
							<Col md={7}>
								<p className="text-dark mb-0">{address}</p>
							</Col>
							<Col md={5} className="text-md-right">
								<p className="text-dark mb-0">
									Delivery Fee: {formatPrice(charge)}
									<Button onClick={() => setActive(!isActive)}>Change</Button>
								</p>
								<AddressPicker
									show={isActive}
									onHide={() => setActive(false)}
									callback={handleUpdate}
								/>
							</Col>
						</Row>
					</InputContainer>
					<p className="text-secondary mt-1 mb-0">
						{duration}
						<IconButton title={duration} className="ml-1" path={information} height={17} width={17} />
					</p>
				</Col>
			</Wrap>
		);
	}

	return null;
};

type ProductDeliveryOptionsProps = Pick<ISingleProduct, 'productID'>;

interface IAddress {
	region: string;
	city: string;
	area: string;
}

const Wrap = styled(Row)`
	margin-bottom: 15px;
`;

const Title = styled.p`
	font-weight: 600;
	margin-bottom: 3px;
`;

const InputContainer = styled.div`
	max-width: 500px;
	padding: 4px 0 8px 0;
	border-bottom: 1px solid #ececec;
`;

const Button = styled.button`
	color: var(--primary);
	font-weight: 500;
	padding: 0;
	margin-left: 5px;
	border: 0;
	background-color: transparent;
`;
