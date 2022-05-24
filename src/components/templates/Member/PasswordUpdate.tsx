/* eslint-disable quotes */
/* eslint-disable no-empty */
import { Button, FormInput } from '@components/atoms';
import { ContentCard } from '@components/organisms';
import { customerAPI } from '@libs/api';
import { useForm } from '@libs/hooks';
import { changePasswordValidations } from '@libs/validations';
import Router from 'next/router';
import { FC, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

export const PasswordUpdate: FC = () => {
	const handleUpdate = async () => {
		try {
			const { success, message } = await customerAPI.updatePassword(values);
			if (success) Router.push('/member/my-profile');
			throw message[0];
		} catch (error) {
			setErrors((prevState) => ({ ...prevState, currentPassword: error }));
		}
	};

	const { values, errors, setErrors, handleSubmit, handleChange } = useForm({
		initialValues,
		initialErrors,
		validate: changePasswordValidations,
		onCallback: handleUpdate,
	});

	const handleConfirmPassword = () => {
		const { newPassword, confirmPassword } = values;
		if (newPassword !== confirmPassword) {
			setErrors((prevState) => ({ ...prevState, confirmPassword: "Confirm password doesn't matched" }));
		} else {
			setErrors((prevState) => ({ ...prevState, confirmPassword: null }));
		}
	};

	return (
		<Fragment>
			<Button pill variant="dark" className="mb-2" onClick={() => Router.back()}>
				Go Back Profile
			</Button>
			<ContentCard title="Change Password">
				<form onSubmit={handleSubmit} noValidate>
					<Row>
						<Col md={6}>
							<FormInput
								srOnly
								type="password"
								name="currentPassword"
								placeholder="Enter current password"
								value={values.currentPassword}
								onChange={handleChange}
								message={errors.currentPassword}
								required
							/>
							<FormInput
								srOnly
								type="password"
								name="newPassword"
								placeholder="New password"
								value={values.newPassword}
								onChange={handleChange}
								message={errors.newPassword}
								required
							/>
							<FormInput
								srOnly
								type="password"
								name="confirmPassword"
								placeholder="Confirm new password"
								value={values.confirmPassword}
								onChange={handleChange}
								onKeyUp={handleConfirmPassword}
								message={errors.confirmPassword}
								required
							/>
							<Button pill type="submit">
								Save Changes
							</Button>
						</Col>
					</Row>
				</form>
			</ContentCard>
		</Fragment>
	);
};

export const initialValues = {
	currentPassword: '',
	newPassword: '',
	confirmPassword: '',
};

export const initialErrors = {
	currentPassword: null,
	newPassword: null,
	confirmPassword: null,
};
