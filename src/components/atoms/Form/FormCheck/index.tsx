import { ElementBorders } from '@components/atoms/interfaces';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { FormFeedback } from '../FormInput/styles';
import { FormControl, FormGroup, FormLabel } from './styles';

export const FormCheck: FC<FormCheckProps> = ({ id, label, message, className, style, ...rest }) => {
	const groupProps = { className, style };
	const controlProps = { id, ...rest };

	return (
		<FormGroup {...groupProps}>
			<FormControl {...controlProps} />
			<FormLabel htmlFor={id}>{label}</FormLabel>
			{rest.required && <FormFeedback>{message}</FormFeedback>}
		</FormGroup>
	);
};

export interface FormCheckProps extends InputHTMLAttributes<HTMLInputElement>, Pick<ElementBorders, 'rounded'> {
	type: 'checkbox' | 'radio';
	label?: ReactNode;
	message?: string;
}

FormCheck.defaultProps = {
	rounded: false,
	label: '',
};
