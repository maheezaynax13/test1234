import { FC, InputHTMLAttributes } from 'react';
import { InputWrapper } from './styles';

export const Input: FC<InputProps> = ({ ...rest }) => {
	return <InputWrapper {...rest}></InputWrapper>;
};

Input.defaultProps = {
	variant: 'normal',
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'normal';
}
