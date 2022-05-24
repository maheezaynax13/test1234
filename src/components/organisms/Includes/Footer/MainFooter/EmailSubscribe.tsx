import { Button, FormGroup, FormInput } from '@components/atoms';
import { customerAPI } from '@libs/api';
import Icon, { planeSend } from '@libs/icons';
import { isEmailAddress } from '@utils/helpers';
import { FC, useState } from 'react';
import styled from 'styled-components';

export const EmailSubscribe: FC = () => {
	const [value, setValue] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [fillColor, setFillColor] = useState<string>('var(--dark)');

	const handleSubmit = async () => {
		if (value?.length > 0) {
			const isValid = isEmailAddress(value);
			if (isValid) {
				try {
					const { success, message } = await customerAPI.emailSubscribe(value);
					if (success) {
						setValue('');
						setMessage('Subscribe done successfully!');
						setTimeout(() => setMessage(''), 4000);
					} else {
						throw new Error(message.toString());
					}
				} catch (error) {
					setMessage(error.message);
				}
			} else {
				setMessage('Email address is not valid!');
			}
		} else {
			setMessage("Email field can't be empty!");
		}
	};

	return (
		<Wrapper>
			<Header>Subscribe</Header>
			<p className="mb-1">Get the latest news from zDrop</p>
			<div className="w-100 position-relative">
				<FormInput
					srOnly
					type="email"
					placeholder="Email address"
					value={value}
					onChange={(e) => {
						setMessage('');
						setValue(e.target.value);
					}}
					onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
					onFocus={() => setFillColor('var(--primary)')}
					onBlur={() => setFillColor('var(--dark)')}
				/>
				<Button variant="link" onClick={handleSubmit}>
					<Icon path={planeSend} fill={fillColor} />
				</Button>
			</div>
			<p className={message === 'Subscribe done successfully!' ? 'text-primary mb-0' : 'text-danger mb-0'}>
				{message && message}
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 1rem;

	${FormGroup} {
		margin-bottom: 0;

		input {
			padding-left: 0;
			border-radius: 0;
			border-top-color: transparent;
			border-left-color: transparent;
			border-right-color: transparent;

			&:focus {
				border-top-color: transparent;
				border-left-color: transparent;
				border-right-color: transparent;
				box-shadow: none;
			}
		}
	}

	button {
		position: absolute;
		right: 0;
		padding-right: 0;
		top: calc(50% - 1.375rem);
	}
`;

const Header = styled.h5`
	color: var(--dark);
	font-size: 0.875rem;
	font-weight: 600;
	text-transform: uppercase;
`;
