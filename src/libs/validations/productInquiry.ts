/* eslint-disable indent */
import { isEmailAddress, isPhoneNumber } from '@utils/helpers';

export const validations = (name: string, value: string | boolean): string => {
	let errors: string | null = null;

	switch (name) {
		case 'productName':
			if (!value) {
				errors = 'Product name is required';
			} else {
				errors = null;
			}
			break;

		case 'productURL':
			if (!value) {
				errors = 'Product URL is required';
			} else {
				errors = null;
			}
			break;

		case 'quantity':
			if (!value) {
				errors = 'Quantity is required';
			} else {
				errors = null;
			}
			break;

		case 'price':
			if (!value) {
				errors = 'Price is required';
			} else {
				errors = null;
			}
			break;

		case 'customerNote':
			if (!value) {
				errors = 'Customer note is required';
			} else {
				errors = null;
			}
			break;

		case 'customerName':
			if (!value) {
				errors = 'Customer name is required';
			} else {
				errors = null;
			}
			break;

		case 'emailAddress':
			if (!value) {
				errors = 'Email address is required';
			} else if (value && !isEmailAddress(String(value))) {
				errors = 'Email address is invalid';
			} else {
				errors = null;
			}
			break;

		case 'phoneNumber':
			if (!value) {
				errors = 'Phone number is required';
			} else if (value && !isPhoneNumber(String(value))) {
				errors = 'Phone number is invalid';
			} else {
				errors = null;
			}
			break;

		case 'whatsApp':
			if (!value) {
				errors = 'WhatsApp is required';
			} else if (value && !isPhoneNumber(String(value))) {
				errors = 'WhatsApp is invalid';
			} else {
				errors = null;
			}
			break;
	}

	return errors;
};
