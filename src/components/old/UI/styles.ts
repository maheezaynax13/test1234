import { Badge, Button as Btn } from 'react-bootstrap';
import styled from 'styled-components';

export const colors = {
	primary: '#00b55b',
	pre_order: '#000000',
	pending: '#0d6efd',
	confirmed: '#28a745',
	in_process: '#6f42c1',
	ready_to_ship: '#fd7e14',
	shipped: '#20c997',
	delivered: '#17a2b8',
	return_request: '#dc3545',
	return_request_in_progress: '#ffc107',
	returned: '#6c757d',
	back_order: '#6c757d',
	fulfilled: '#28a745',
	refund_request_in_progress: '#ffc107',
	request_in_process: '#6f42c1',
	refunded: '#17a2b8',
	cancelled: '#d50000',
	trash: '#e83e8c',
	cod: '#fd7e14',
	paid: '#28a745',
	partially_paid: '#17a2b8',
	unpaid: '#d50000',
};

export const Tag = styled(Badge)`
	height: 21px;
	line-height: 21px;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	color: var(--primary);
	padding: 0 10px;
	margin-left: 20px;
	background-color: rgba(0, 181, 91, 0.09);
`;

export const Button = styled(Btn)`
	padding: 5px;
	border-radius: 100%;

	& + & {
		margin-left: 5px;
	}

	&.isBorder {
		width: 52px;
		height: 52px;
		border: 1px solid #ececec;

		&:hover {
			background-color: var(--light);
		}
	}
`;
