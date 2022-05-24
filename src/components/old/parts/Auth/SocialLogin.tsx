import { Button, Image } from '@components/atoms';
import { authAPI } from '@libs/api';
import { getUserState, setAuthUser } from '@store/actions';
import * as firebase from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import firebaseConfig from '../../../../../firebase.config';

export const SocialLogin: FC = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [err, setErr] = useState<string>(null);
	const _isMounted = useRef(true);

	const router = useRouter();
	const {
		popup: { isActive },
	} = useSelector(getUserState);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	const LogIn = async (type: string) => {
		setLoading(true);

		firebase.initializeApp(firebaseConfig);

		let provider: any;
		if (type === 'GOOGLE') {
			provider = new GoogleAuthProvider();
		}
		if (type === 'FACEBOOK') {
			provider = new FacebookAuthProvider();
		}

		const auth = getAuth();

		signInWithPopup(auth, provider)
			.then(async (result) => {
				let credential: any;
				if (type === 'GOOGLE') {
					credential = GoogleAuthProvider.credentialFromResult(result);
				}
				if (type === 'FACEBOOK') {
					credential = FacebookAuthProvider.credentialFromResult(result);
				}
				const token = credential.idToken;
				const payload = { idToken: token, provider: type };
				handleSubmit(payload);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
				setErr('Something went wrong!');
				setTimeout(() => setErr(null), 4000);
				setLoading(false);
			});
	};

	const handleSubmit = async (payload: IFirebasePayload) => {
		setLoading(true);
		try {
			const { success, data, message } = await authAPI.firebaseAuth(payload);
			if (success) {
				setAuthUser(data);
				if (!isActive) router.push(router.query?.redirect ? String(router.query.redirect) : '/');
			} else {
				setErr(message.toString());
				setTimeout(() => setErr(null), 4000);
			}
		} catch (error) {
		} finally {
			if (_isMounted.current) {
				setLoading(false);
			}
		}
	};

	return (
		<div>
			{/* <ButtonWrapper block type="button" variant="light" onClick={() => LogIn('FACEBOOK')}>
				<Image src="/images/facebook2.png" height={20} />
				Facebook
			</ButtonWrapper> */}

			<ButtonWrapper block variant="light" type="button" onClick={() => LogIn('GOOGLE')} disabled={isLoading}>
				{isLoading ? (
					'Please wait...'
				) : (
					<>
						<Image className="mr-1" src="/images/google.png" height={20} />
						Google
					</>
				)}
			</ButtonWrapper>
			{err && <p className="text-danger text-center">{err}</p>}
		</div>
	);
};

const ButtonWrapper = styled(Button)`
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ced4da;
	background-color: white;
	margin: 10px 0;
`;

export interface IFirebasePayload {
	idToken: string;
	provider: string;
}
