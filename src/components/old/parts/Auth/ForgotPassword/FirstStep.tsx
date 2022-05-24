import { FormInput } from '@components/old/Form';
import { ChangeEvent, Fragment } from 'react';

const FirstStep = ({ changeHandler, values, errors }: propsType): JSX.Element => (
	<Fragment>
		<FormInput
			name="userID"
			placeholder="Please enter your phone number"
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
