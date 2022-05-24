export type orderTypes =
	| 'PRE_ORDER'
	| 'PENDING'
	| 'CONFIRMED'
	| 'IN_PROCESS'
	| 'READY_TO_SHIP'
	| 'SHIPPED'
	| 'DELIVERED'
	| 'RETURN_REQUEST'
	| 'RETURN_REQUEST_IN_PROGRESS'
	| 'RETURNED'
	| 'BACK_ORDER'
	| 'FULFILLED'
	| 'REFUND_REQUEST_IN_PROGRESS'
	| 'REQUEST_IN_PROCESS'
	| 'REFUNDED'
	| 'CANCELLED'
	| 'TRASH';

export type paymentTypes = 'PARTIALLY_PAID' | 'PAID' | 'UNPAID' | 'COD';
