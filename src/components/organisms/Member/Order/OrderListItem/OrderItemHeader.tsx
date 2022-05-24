import { Button, CardHeader, Link } from '@components/atoms';
import { BadgeByStatus } from '@components/molecules';
import { IAllOrders } from '@libs/api/interfaces';
import { getAppState } from '@store/actions';
import dateFormat from 'dateformat';
import { useRouter } from 'next/router';
import { FC, Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { OrderCancel } from './Modal';

export const OrderItemHeader: FC<OrderItemHeaderProps> = (props) => {
	const [isModal, setModal] = useState<'CANCEL' | 'REFUND'>(null);
	const { orderID, createdAt, paymentStatus, itemStatusArr } = props;
	const {
		query: { orderID: URLOrderID = null },
	} = useRouter();
	const { isMobile } = useSelector(getAppState);

	return (
		<Fragment>
			<CardHeader className="bg-light">
				<Row className="align-items-center">
					<Col xs={12} md={6}>
						<p className="mb-0">ORDER #{orderID}</p>
						<span className="text-light-gray">{dateFormat(createdAt, process.env.dateTimeFormat)}</span>
					</Col>
					<ButtonRow xs={12} md={6} className={`text-md-right ${isMobile ? 'Handheld' : ''}`}>
						{!URLOrderID && (
							<Link href={`/member/orders/${orderID}`} className="text-dark">
								Manage Order
							</Link>
						)}
						{itemStatusArr.includes('PENDING') && (
							<Button pill variant="danger" className="ml-3" onClick={() => setModal('CANCEL')}>
								Cancel Entire Order
							</Button>
						)}
						{itemStatusArr.includes('CANCELLED') &&
							!itemStatusArr.includes('PENDING') &&
							(paymentStatus === 'PARTIAL' || paymentStatus === 'PAID') && (
								<Button pill variant="dark" className="ml-3" onClick={() => setModal('REFUND')}>
									Request for Refund
								</Button>
							)}
						{paymentStatus === 'PAID' ? (
							<BadgeByStatus pill variant="PAID" className="ml-3">
								Paid
							</BadgeByStatus>
						) : (
							itemStatusArr[0] !== 'CANCELLED' && (
								<Link
									href={`/payment?checkoutOrderID=${orderID}`}
									className="ml-3 btn btn-primary rounded-pill"
								>
									Pay Now
								</Link>
							)
						)}
					</ButtonRow>
				</Row>
			</CardHeader>
			<OrderCancel id={orderID} isActive={isModal === 'CANCEL'} onHide={() => setModal(null)} />
		</Fragment>
	);
};

export type OrderItemHeaderProps = Pick<
	IAllOrders['items'][0],
	'orderID' | 'createdAt' | 'paymentStatus' | 'itemStatusArr'
>;

const ButtonRow = styled(Col)`
	&.Handheld {
		margin-top: 0.4rem;

		a,
		button,
		span {
			&:not(:first-child) {
				margin-left: 0.5rem !important;
			}
		}

		a {
			padding-top: 0.219rem;
			padding-bottom: 0.219rem;
		}

		button {
			padding: 0.219rem 1rem;
		}
	}
`;
