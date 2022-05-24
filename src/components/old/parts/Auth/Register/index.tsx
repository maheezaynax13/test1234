/* eslint-disable no-empty */
import { Link } from '@components/atoms';
import { authAPI } from '@libs/api';
import { useOldForm } from '@libs/hooks';
import { validatePassword, validations } from '@libs/validations/register';
import { authPopup, getUserState, setAuthUser } from '@store/actions';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SocialLogin } from '../SocialLogin';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Register = (): JSX.Element => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [step, setStep] = useState<number>(1);
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
		const { firstName, lastName, userID } = values;
		try {
			const { success, message } = await authAPI.authRegister(firstName, lastName, userID);
			if (!success) setErrors((prevState) => ({ ...prevState, userID: String(message) }));
		} catch (error) {}
	};

	// User registration
	const handleSubmit = async () => {
		setLoading(true);
		if (Object.keys(values).length === 3) {
			// Registration first step
			try {
				const { firstName, lastName, userID } = values;
				const { success, message } = await authAPI.authRegister(firstName, lastName, userID);
				if (success) {
					setStep(2);
				} else {
					setErrors((prevState) => ({ ...prevState, userID: String(message) }));
				}
			} catch (error) {
			} finally {
				if (_isMounted.current) {
					setLoading(false);
				}
			}
		} else if (Object.keys(values).length === 4) {
			// Registration second step
			try {
				const { userID, code } = values;
				const { success, message } = await authAPI.authVerifyOTP(userID, code);
				if (success) {
					setStep(3);
				} else {
					setErrors((prevState) => ({ ...prevState, userID: String(message) }));
				}
			} catch (error) {
			} finally {
				if (_isMounted.current) {
					setLoading(false);
				}
			}
		} else if (Object.keys(values).length === 6) {
			// Registration final step
			try {
				const { password1, password2 } = values;
				if (validatePassword(password1, password2)) {
					setErrors((prevState) => ({ ...prevState, password2: 'Passwords did not match' }));
				} else {
					setErrors((prevState) => ({ ...prevState, password2: null }));
					const { userID, password1, password2 } = values;
					const { success, data, message } = await authAPI.authSetPassword(userID, password1, password2);
					if (success) {
						setAuthUser(data);
						if (!isActive) router.push('/member/my-profile');
					} else {
						setErrors((prevState) => ({ ...prevState, userID: String(message) }));
					}
				}
			} catch (error) {
			} finally {
				if (_isMounted.current) {
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
				{isLoading ? 'Please wait...' : step === 1 ? 'Send Code' : step === 2 ? 'Next' : 'Complete Register'}
			</Button>
			<p className="text-center text-secondary my-3">Register with</p>
			<SocialLogin />
			<p className="text-black-50 text-center mt-2 mb-2">
				By continuing, you agree to zDrop&apos;s{' '}
				<Link href="/terms">
					<a>Conditions of Use</a>
				</Link>{' '}
				and{' '}
				<Link href="/privacy">
					<a>Privacy Policy</a>
				</Link>
				.
			</p>
		</Form>
	);
};

export default Register;
