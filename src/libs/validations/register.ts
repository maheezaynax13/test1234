/* eslint-disable indent */
import { isPhoneNumber } from '@utils/helpers';

export const validations = (name: string, value: string | boolean): string => {
	let errors: string | null = null;

	switch (name) {
		case 'firstName':
			if (!value) {
				errors = 'First name is required';
			} else {
				errors = null;
			}
			break;

		case 'lastName':
			if (!value) {
				errors = 'Last name is required';
			} else {
				errors = null;
			}
			break;

		case 'userID':
			if (!value) {
				errors = 'Phone number is required';
			} else if (value && !isPhoneNumber(String(value))) {
				errors = 'Phone number is invalid';
			} else {
				errors = null;
			}
			break;

		case 'code':
			if (!value) {
				errors = 'Code is required';
			} else {
				errors = null;
			}
			break;

		case 'password1':
			if (!value) {
				errors = 'Password is required';
			} else if (value && String(value).length < 8) {
				errors = 'Password should be at least 8 characters';
			} else {
				errors = null;
			}
			break;

		case 'password2':
			if (!value) {
				errors = 'Retype password is required';
			} else if (value && String(value).length < 8) {
				errors = 'Password should be at least 8 characters';
			} else {
				errors = null;
			}
			break;
	}

	return errors;
};

export const validatePassword = (password1: string, password2: string): boolean => {
	if (password1 !== password2) return true;
	return false;
};
