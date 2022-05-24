/* eslint-disable indent */
import { initialErrors, initialValues } from '@components/templates/Member/PasswordUpdate';
import { formatValidatorKey } from '@utils/helpers';

export const changePasswordValidations = (values: Partial<typeof initialValues>): Partial<typeof initialErrors> => {
	const errors: Partial<typeof initialErrors> = {};

	if (values && Object.keys(values).length > 0) {
		for (const [key, value] of Object.entries(values)) {
			if (key in initialErrors) {
				if (!value) {
					errors[key] = `${formatValidatorKey(key)} is required`;
				} else {
					if (key === 'newPassword' && value.length < 8) {
						errors.newPassword = 'Password should be at least 8 characters';
					} else {
						errors[key] = null;
					}
				}
			}
		}
	}

	return errors;
};
