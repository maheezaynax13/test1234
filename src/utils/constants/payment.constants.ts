import { IGatewayData } from '@libs/api/interfaces';

export const gatewayData: IGatewayData[] = [
	{
		id: 'NAGAD',
		name: 'Nagad Payment',
		imageURL: '/images/shopping/gateway-nagad.png',
		description: {
			title: 'Please take note of the following before you proceed',
			items: [
				'You have an active bKash Account',
				'Ensure you have sufficient balance in your bKash account to cover the total cost of the order',
				'Ensure you are able to receive your OTP (one-time-password) on your mobile and have bKash PIN',
			],
		},
	},
	{
		id: 'BKASH',
		name: 'bKash Payment',
		imageURL: '/images/shopping/gateway-bkash.png',
		description: {
			title: 'Please take note of the following before you proceed',
			items: [
				'You have an active bKash Account',
				'Ensure you have sufficient balance in your bKash account to cover the total cost of the order',
				'Ensure you are able to receive your OTP (one-time-password) on your mobile and have bKash PIN',
			],
		},
	},
	{
		id: 'SSLCOMMERZ',
		name: 'Card/Other Payment',
		imageURL: '/images/shopping/gateway-card.png',
		description: {
			title: 'Please take note of the following before you proceed',
			items: [
				'You have an active bKash Account',
				'Ensure you have sufficient balance in your bKash account to cover the total cost of the order',
				'Ensure you are able to receive your OTP (one-time-password) on your mobile and have bKash PIN',
			],
		},
	},
	{
		id: 'COD',
		name: 'Cash on Delivery',
		imageURL: '/images/shopping/cod.png',
		description: {
			title: 'Please take note of the following before you proceed',
			items: [
				'You can pay in cash to our courier when you receive the goods at your doorstep.',
				'Please prepare exact amount money, our courier service staff will reach your doorstep as soon as possible.',
			],
		},
	},
];
