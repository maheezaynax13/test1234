import { Button, Card, CardHeader } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import dateFormat from 'dateformat';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PackageItem } from '../Member/Order/OrderListItem/PackageItem';

export const TrackedOrder: FC<OrderListItemProps> = (props) => {
	const { orderID, createdAt, packages } = props;
	const router = useRouter();

	return (
		<Card className="overflow-hidden">
			<CardHeader className="bg-light">
				<Row className="align-items-center">
					<Col xs={12} md={6}>
						<p className="mb-0">ORDER #{orderID}</p>
						<span className="text-light-gray">{dateFormat(createdAt, process.env.dateTimeFormat)}</span>
					</Col>
					<Col xs={12} md={3} className="ml-auto">
						<Button
							pill
							variant="danger"
							className="ml-auto"
							onClick={() => router.push(`/member/orders/${orderID}`)}
						>
							Manage Order
						</Button>
					</Col>
				</Row>
			</CardHeader>
			{packages?.map((e, i) => (
				<PackageItem hideViewDetail key={i} {...e} />
			))}
		</Card>
	);
};

export type OrderListItemProps = IAllOrders['items'][0];
