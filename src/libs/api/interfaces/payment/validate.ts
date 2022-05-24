import { IAllOrders } from '../order';
import { GatewaysType } from './gateway';

export interface IPaymentValidate {
	availableGateways: GatewaysType;
	dueAmount: number;
	summary: IAllOrders['items'][0]['orderSummary'];
}
