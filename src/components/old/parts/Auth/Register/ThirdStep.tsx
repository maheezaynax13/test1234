import { FormInput } from '@components/old/Form';
import { ChangeEvent, Fragment } from 'react';

const SecondStep = ({ changeHandler, values, errors }: propsType): JSX.Element => (
	<Fragment>
		<FormInput
			name="password1"
			type="password"
			placeholder="Enter your password"
			value={values.password1 ?? ''}
			onChange={changeHandler}
			errorMessage={errors.password1}
			required
		/>
		<FormInput
			name="password2"
			type="password"
			placeholder="Retype your password"
			className="mb-0"
			value={values.password2 ?? ''}
			onChange={changeHandler}
			errorMessage={errors.password2}
			required
		/>
	</Fragment>
);

export default SecondStep;

interface propsType {
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	values: Record<string, string>;
	errors: Record<string, string>;
}
