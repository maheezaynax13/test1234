import { ICreatePayment } from '@libs/api/interfaces';

export interface Config {
	paymentMode: string;
	paymentRequest: {
		amount: string;
		intent: string;
	};
	createRequest: () => Promise<void>;
	executeRequestOnAuthorization: () => Promise<void>;
	onClose: () => void;
}

export interface IBkash {
	create: () => {
		onSuccess: (data: ICreatePayment['bkash']) => void;
		onError: () => void;
	};
	execute: () => {
		onError: () => void;
	};
	init: (config: Config) => void;
	reconfigure: () => void;
}
