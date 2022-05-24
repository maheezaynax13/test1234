/* eslint-disable no-empty */
import { FormInput } from '@components/old/Form';
import { authAPI } from '@libs/api';
import { useOldForm } from '@libs/hooks';
import { validations } from '@libs/validations/signin';
import { authPopup, getUserState, setAuthUser } from '@store/actions';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SocialLogin } from './SocialLogin';

const Signin = (): JSX.Element => {
	const [isLoading, setLoading] = useState<boolean>(false);
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

	const handleSubmit = async () => {
		setLoading(true);
		const { userID, password } = values;
		try {
			const { success, data, message } = await authAPI.authSignin(userID, password);
			if (success) {
				setAuthUser(data);
				if (!isActive) router.push(router.query?.redirect ? String(router.query.redirect) : '/');
			} else {
				setErrors((prevState) => ({ ...prevState, userID: String(message) }));
			}
		} catch (error) {
		} finally {
			if (_isMounted.current) {
				setLoading(false);
			}
		}
	};

	const { values, errors, setErrors, changeHandler, submitHandler } = useOldForm(handleSubmit, validations);

	return (
		<Form onSubmit={submitHandler} noValidate>
			<FormInput
				name="userID"
				placeholder="Phone number"
				maxLength={11}
				onChange={changeHandler}
				errorMessage={errors.userID}
				required
			/>
			<FormInput
				name="password"
				type="password"
				placeholder="Password"
				className="mb-0"
				onChange={changeHandler}
				errorMessage={errors.password}
				required
			/>
			<Button
				variant="link"
				className="pl-0"
				onClick={() => {
					if (isActive) {
						dispatch(authPopup({ isActive: true, type: 'forgot-password' }));
					} else {
						router.push('/forgot-password');
					}
				}}
			>
				Forgot password?
			</Button>
			<Button
				block
				type="submit"
				variant="primary"
				className="font-weight-semibold text-uppercase"
				disabled={isLoading}
			>
				{isLoading ? 'Please wait...' : 'Sign In'}
			</Button>
			<p className="text-center text-secondary my-3">Sign In with</p>
			<SocialLogin />
			<p className="text-center text-secondary my-3">Don’t have an account?</p>
			<Button
				block
				variant="primary"
				className="pl-0 font-weight-semibold"
				onClick={() => {
					if (isActive) {
						dispatch(authPopup({ isActive: true, type: 'register' }));
					} else {
						router.push('/register');
					}
				}}
			>
				Create a new account
			</Button>
		</Form>
	);
};

export default Signin;
