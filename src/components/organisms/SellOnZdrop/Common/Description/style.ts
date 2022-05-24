import styled from 'styled-components';
import { DescriptionProps } from '.';
export const DescriptionWrapper = styled.p<DescriptionProps>`
	color: ${({ variant }) => (variant === 'black' ? 'var(--black)' : 'var(--white)')};
	font-size: ${({ size }) => (size === 'sm' ? '.8rem' : size === 'md' ? '1rem' : '1.2rem')};
	text-align: justify;
`;
