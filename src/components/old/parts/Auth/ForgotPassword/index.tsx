/* eslint-disable no-empty */
import { authAPI } from '@libs/api';
import { useOldForm } from '@libs/hooks';
import { validatePassword, validations } from '@libs/validations/register';
import { authPopup, getUserState } from '@store/actions';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SecondStep from '../Register/SecondStep';
import ThirdStep from '../Register/ThirdStep';
import FirstStep from './FirstStep';

const ForgotPassword = (): JSX.Element => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [step, setStep] = useState(1);
	const _isMounted = useRef(true);
	const router = useRouter();
	const dispatch = useDispatch();
	const {
		popup: { isActive },
	} = useSelector(getUserState);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	// OTP resend API request
	const handleResendOTP = async () => {
		const { userID } = values;
		try {
			const { success, message } = await authAPI.authPassReset(userID);
			if (success) {
				setStep(2);
			} else {
				setErrors((prevState) => ({ ...prevState, userID: String(message) }));
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async () => {
		setLoading(true);
		if (Object.keys(values).length === 1) {
			await handleResendOTP();
		} else if (Object.keys(values).length === 2) {
			const { userID, code } = values;
			try {
				const { success, message } = await authAPI.authPassVerifyOTP(userID, code);
				if (success) {
					setStep(3);
				} else {
					setErrors((prevState) => ({ ...prevState, code: String(message) }));
				}
			} catch (error) {
			} finally {
				setLoading(false);
			}
		} else if (Object.keys(values).length === 4) {
			const { userID, password1, password2 } = values;
			if (validatePassword(password1, password2)) {
				setErrors((prevState) => ({ ...prevState, password2: 'Passwords did not match' }));
				setLoading(false);
			} else {
				try {
					const { success, message } = await authAPI.authPassSetPassword(userID, password1, password2);
					if (success) {
						if (isActive) {
							dispatch(authPopup({ isActive: true, type: 'signin' }));
						} else {
							router.push('/signin');
						}
					} else {
						setErrors((prevState) => ({ ...prevState, password1: String(message) }));
					}
				} catch (error) {
				} finally {
					setLoading(false);
				}
			}
		}
	};

	const { values, errors, setErrors, changeHandler, submitHandler } = useOldForm(handleSubmit, validations);

	return (
		<Form onSubmit={submitHandler} noValidate>
			{step === 1 && <FirstStep changeHandler={changeHandler} values={values} errors={errors} />}
			{step === 2 && (
				<SecondStep
					changeHandler={changeHandler}
					clickHandler={handleResendOTP}
					values={values}
					errors={errors}
				/>
			)}
			{step === 3 && <ThirdStep changeHandler={changeHandler} values={values} errors={errors} />}

			<Button
				variant="link"
				className="pl-0"
				onClick={() => {
					if (isActive) {
						dispatch(authPopup({ isActive: true, type: 'signin' }));
					} else {
						router.push('/signin');
					}
				}}
			>
				Back to Sign In
			</Button>
			<Button
				block
				type="submit"
				variant="primary"
				className="font-weight-semibold text-uppercase"
				disabled={isLoading}
			>
				{isLoading ? 'Please wait...' : step === 1 ? 'Send Code' : step === 2 ? 'Next' : 'Reset Password'}
			</Button>
		</Form>
	);
};

export default ForgotPassword;
