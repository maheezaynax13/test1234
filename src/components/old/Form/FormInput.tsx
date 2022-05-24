import { ChangeEventHandler, FocusEventHandler } from 'react';
import { Form, Row } from 'react-bootstrap';

const FormInput = (props: propsType): JSX.Element => {
	const { isInline, colSize, id, className, label, errorMessage, required, children, ...rest } = props;

	return (
		<Form.Group as={isInline ? Row : 'div'} controlId={id} className={className}>
			<Form.Label srOnly={!!(label === undefined)} column={!!isInline} sm={colSize}>
				{label} {required && <span className="text-danger">*</span>}
			</Form.Label>
			<div className={`position-relative${colSize ? ` col-sm-${12 - colSize}` : ''}`}>
				<Form.Control isInvalid={!!errorMessage} required={required} {...rest} />
				{children}
				{required && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
			</div>
		</Form.Group>
	);
};

export default FormInput;

type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type InputType = 'text' | 'password';
interface propsType {
	isInline?: boolean;
	colSize?: number;
	label?: string;
	name?: string;
	placeholder?: string;
	plaintext?: boolean;
	maxLength?: number;
	readOnly?: boolean;
	disabled?: boolean;
	value?: string | string[] | number;
	defaultValue?: string | string[] | number;
	onChange?: ChangeEventHandler<InputElement>;
	onFocus?: FocusEventHandler<InputElement>;
	custom?: boolean;
	type?: InputType;
	id?: string;
	errorMessage?: string;
	className?: string;
	required?: boolean;
	as?: 'textarea';
	rows?: number;
	children?: JSX.Element | JSX.Element[];
}
