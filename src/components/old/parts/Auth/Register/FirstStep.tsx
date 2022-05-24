import { FormInput } from '@components/old/Form';
import { ChangeEvent, Fragment } from 'react';

const FirstStep = ({ changeHandler, values, errors }: propsType): JSX.Element => (
	<Fragment>
		<FormInput
			name="firstName"
			placeholder="First name"
			value={values.firstName ?? ''}
			onChange={changeHandler}
			errorMessage={errors.firstName}
			required
		/>
		<FormInput
			name="lastName"
			placeholder="Last name"
			value={values.lastName ?? ''}
			onChange={changeHandler}
			errorMessage={errors.lastName}
			required
		/>
		<FormInput
			name="userID"
			placeholder="Phone number"
			className="mb-0"
			maxLength={11}
			value={values.userID ?? ''}
			onChange={changeHandler}
			errorMessage={errors.userID}
			required
		/>
	</Fragment>
);

export default FirstStep;

interface propsType {
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	values: Record<string, string>;
	errors: Record<string, string>;
}
