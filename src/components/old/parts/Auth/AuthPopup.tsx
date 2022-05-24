import { Brand } from '@components/molecules';
import { authPopup, getUserState } from '@store/actions';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ForgotPasswordForm, RegisterForm, SigninForm } from '.';

const AuthPopup = (): JSX.Element => {
	const dispatch = useDispatch();
	const {
		popup: { isActive, type },
	} = useSelector(getUserState);

	return (
		<Modal
			centered
			size="sm"
			show={isActive}
			onHide={() => dispatch(authPopup({ isActive: false, type: null }))}
			backdrop="static"
		>
			<ModalHeader className="border-0 pb-0" closeButton>
				<Brand isClickable />
			</ModalHeader>
			<Modal.Body>
				<TabList>
					<Button
						variant="link"
						active={!!(type === 'register')}
						onClick={() => dispatch(authPopup({ isActive: true, type: 'register' }))}
					>
						Register
					</Button>
					<Button
						variant="link"
						active={!!(type === 'signin')}
						onClick={() => dispatch(authPopup({ isActive: true, type: 'signin' }))}
					>
						Sign In
					</Button>
				</TabList>
				{type === 'register' ? <RegisterForm /> : type === 'signin' ? <SigninForm /> : <ForgotPasswordForm />}
			</Modal.Body>
		</Modal>
	);
};

export default AuthPopup;

const ModalHeader = styled(Modal.Header)`
	justify-content: center;
`;

const TabList = styled.div`
	display: flex;
	margin: 0 0 16px 0;
	padding: 0;
	border-bottom: 1px solid #dee2e6;

	button {
		position: relative;
		width: 50%;
		color: #515151;
		font-weight: 600;
		text-align: center;
		padding: 8px 0;
		border: 0;
		text-transform: uppercase;
		box-shadow: none;

		&:hover,
		&:focus {
			color: #515151;
			text-decoration: none;
			box-shadow: none;
		}

		&.active {
			color: var(--primary);

			&:after {
				position: absolute;
				left: 0;
				bottom: -1px;
				content: '';
				width: 100%;
				height: 4px;
				display: block;
				background-color: #00b55b;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;
