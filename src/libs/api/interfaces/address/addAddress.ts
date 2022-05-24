import { IAddAddressPayload } from './addAddressPayload';

export interface IAddAddress extends IAddAddressPayload {
	zID: string;
	createdAt: Date;
	updatedAt: Date;
	id: string;
}
