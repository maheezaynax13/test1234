/* eslint-disable no-empty */
import { paymentAPI } from '@libs/api';
import store from '@store';
import { updateLoader } from '@store/actions';

export const initBkash = (orderID: string, amount: number): void => {
	let paymentID = '';

	const config = {
		paymentMode: 'checkout',
		paymentRequest: {
			amount: String(amount),
			intent: 'sale',
		},

		createRequest: async function () {
			try {
				const { success, data } = await paymentAPI.createbKashPayment(String(orderID), Number(amount));
				if (success && data?.paymentID) {
					paymentID = data.paymentID;
					bKash.create().onSuccess(data);
				} else {
					bKash.create().onError();
				}
			} catch (error) {
				bKash.create().onError();
			} finally {
				store.dispatch(updateLoader(false));
			}
		},

		executeRequestOnAuthorization: async function () {
			try {
				const { data } = await paymentAPI.executebKashPayment(paymentID);
				if (data && data?.transactionStatus === 'Completed') {
					window.location.href = `/payment/success?orderID=${orderID}`;
				} else {
					window.location.href = `/payment/failed?orderID=${orderID}&type=bkash&errorCode=${data.errorCode}`;
				}
			} catch (error) {
				window.location.href = `/payment/failed?orderID=${orderID}`;
			}
		},

		onClose: function () {
			window.location.reload();
		},
	};

	bKash.init(config);
};

export const createBkashButton = (): void => {
	const button = document.createElement('button');
	button.style.display = 'none';
	button.id = 'bKash_button';
	document.querySelector('body').appendChild(button);
};

export const triggerBkash = (): void => {
	const createdButton = document.querySelector<HTMLButtonElement>('#bKash_button');
	if (createdButton) {
		createdButton.click();
		createdButton.remove();
	}
};

export * from './loadDeps';
