import { FC, HTMLAttributes } from 'react';
import { TitleWrapper } from './style';

export const Title: FC<TitleProps> = ({ children, ...rest }) => {
	return <TitleWrapper {...rest}> {children}</TitleWrapper>;
};
Title.defaultProps = {
	size: 'lg',
	variant: 'white',
};

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	size?: 'lg' | 'md' | 'sm';
	variant?: 'white' | 'black';
}
