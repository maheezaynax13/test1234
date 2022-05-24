import styled from 'styled-components';
import { TitleProps } from '.';

export const TitleWrapper = styled.h1<TitleProps>`
	color: ${({ variant }) => (variant === 'black' ? 'var(--black)' : 'var(--white)')};
	font-size: ${({ size }) => (size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2.5rem')};
	font-weight: 600;
	text-align: center;

	@media only screen and (max-width: 778px) {
		font-size: ${({ size }) => (size === 'sm' ? '1rem' : size === 'md' ? '1.3rem' : '2.2rem')};
	}

	@media only screen and (max-width: 425px) {
		font-size: ${({ size }) => (size === 'sm' ? '1rem' : size === 'md' ? '1.2rem' : '1.6rem')};
	}
`;
