import { Card, CardBody } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import { FC } from 'react';

export const OrderAddress: FC<IAllOrders['items'][0]['shippingAddress'] & PropsType> = (props) => {
	const { isBilling, name, phoneNumber, house, road, area, city, region } = props;

	return (
		<Card className="mb-3">
			<CardBody>
				<div className="w-100 mb-3">
					<h6 className="text-uppercase">{isBilling ? 'Billing' : 'Shipping'} Info</h6>
					<p className="text-secondary mb-1">{name}</p>
					<p className="text-secondary mb-1">{phoneNumber}</p>
				</div>
				<div className="w-100">
					<h6 className="font-weight-semibold">Address</h6>
					<p className="text-secondary mb-0">
						{house + ', ' + road + ', ' + area + ', ' + city + ', ' + region + ', Bangladesh'}
					</p>
				</div>
			</CardBody>
		</Card>
	);
};

interface PropsType {
	isBilling?: boolean;
}
