import { FC, HTMLAttributes } from 'react';
import { DescriptionWrapper } from './style';

export const Description: FC<DescriptionProps> = ({ children, ...rest }) => {
	return <DescriptionWrapper {...rest}>{children}</DescriptionWrapper>;
};

Description.defaultProps = {
	size: 'sm',
	variant: 'black',
};

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'lg' | 'md' | 'sm';
	variant?: 'white' | 'black';
}
