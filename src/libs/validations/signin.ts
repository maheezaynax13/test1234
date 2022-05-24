/* eslint-disable indent */
import { isPhoneNumber } from '@utils/helpers';

export const validations = (name: string, value: string | boolean): string => {
	let errors: string | null = null;

	switch (name) {
		case 'userID':
			if (!value) {
				errors = 'Phone number is required';
			} else if (value && !isPhoneNumber(String(value))) {
				errors = 'Phone number is invalid';
			} else {
				errors = null;
			}
			break;

		case 'password':
			if (!value) {
				errors = 'Password is required';
			} else {
				errors = null;
			}
			break;
	}

	return errors;
};
