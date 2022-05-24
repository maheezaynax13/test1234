import { FormInput } from '@components/old/Form';
import { useInterval } from '@libs/hooks';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import ResendButton from './ResendButton';
import UpdateUID from './UpdateUID';

const SecondStep = ({ changeHandler, clickHandler, values, errors }: propsType): JSX.Element => {
	const [isDisabled, setDisabled] = useState(false);
	const [countdown, setCountdown] = useState(0);
	const seconds = 30;

	useEffect(() => {
		if (values.userID) {
			setDisabled(true);
			setCountdown(seconds);
		}
	}, []);

	useInterval(() => {
		if (countdown >= 0) {
			setCountdown(countdown - 1);
		}
	}, 1000);

	return (
		<Fragment>
			<InputWrap>
				<FormInput
					name="userID"
					placeholder="Phone number or email address"
					maxLength={11}
					value={values.userID ?? ''}
					onChange={changeHandler}
					errorMessage={errors.userID}
					disabled={isDisabled}
					required
				/>
				{isDisabled ? (
					<UpdateUID clickHandler={() => setDisabled(false)} countdown={countdown} />
				) : (
					values.userID &&
					!errors.userID && (
						<ResendButton
							clickHandler={() => {
								clickHandler();
								setDisabled(true);
								setCountdown(seconds);
							}}
						/>
					)
				)}
			</InputWrap>
			<FormInput
				name="code"
				placeholder="Verification code"
				className="mb-0"
				maxLength={6}
				value={values.code ?? ''}
				onChange={changeHandler}
				errorMessage={errors.code}
				required
			/>
		</Fragment>
	);
};

export default SecondStep;

interface propsType {
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	clickHandler: () => void;
	values: Record<string, string>;
	errors: Record<string, string>;
}

const InputWrap = styled.div`
	position: relative;
`;
