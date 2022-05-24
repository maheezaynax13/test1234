/* eslint-disable indent */
/* eslint-disable no-empty */
import { Gateway, OrderSummary } from '@components/organisms';
import { paymentAPI } from '@libs/api';
import { GatewaysType, IPaymentValidate } from '@libs/api/interfaces';
import { initBkash, loadDeps, triggerBkash } from '@libs/payment/bkash';
import { getAppState, updateLoader } from '@store/actions';
import { gatewayData } from '@utils/constants';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export const Payment: FC<IPaymentValidate> = ({ dueAmount, summary }) => {
	const [isActive, setActive] = useState<GatewaysType>(null);
	const dispatch = useDispatch();
	const router = useRouter();
	const { isMobile } = useSelector(getAppState);
	const {
		query: { checkoutOrderID: orderID },
	} = router;

	const handlePayment = async () => {
		if (orderID) {
			dispatch(updateLoader(true));
			switch (isActive) {
				case 'NAGAD':
					try {
						const { success, data } = await paymentAPI.createNagadPayment(String(orderID), dueAmount);
						if (success && data) router.replace(data);
					} catch (error) {
					} finally {
						dispatch(updateLoader(true));
					}
					break;

				case 'BKASH':
					await loadDeps();
					initBkash(String(orderID), dueAmount);
					triggerBkash();
					break;

				case 'SSLCOMMERZ':
					try {
						const { success, data } = await paymentAPI.createSSLPayment(String(orderID), dueAmount);
						if (success && data) router.replace(data);
					} catch (error) {
					} finally {
						dispatch(updateLoader(true));
					}
					break;
				case 'COD':
					try {
						const { success, data } = await paymentAPI.executeCodPayment(String(orderID));
						if (success && data) router.replace(`/payment/success?orderID=${orderID.toString()}`);
					} catch (error) {}
					break;
			}
		}
	};

	return (
		<Container>
			<Row>
				<Col md={8} xl={9}>
					{isMobile && <p className="font-weight-semibold">Pay with</p>}
					{gatewayData.map((el, i) => (
						<Gateway
							key={i}
							{...el}
							isActive={isActive}
							onChange={() => setActive(el.id)}
							onClick={handlePayment}
						/>
					))}
				</Col>
				{!isMobile && (
					<Col md={4} xl={3}>
						<OrderSummary {...summary} />
					</Col>
				)}
			</Row>
		</Container>
	);
};
