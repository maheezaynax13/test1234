import { FC, LabelHTMLAttributes } from 'react';
import { LabelWrapper } from './style';

export const Label: FC<LabelProps> = ({ children, ...rest }) => {
	return <LabelWrapper {...rest}>{children}</LabelWrapper>;
};

Label.defaultProps = {
	variant: 'normal',
};

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	variant?: 'normal';
}
