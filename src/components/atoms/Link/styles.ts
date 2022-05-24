import styled, { css } from 'styled-components';
import { LinkProps } from '.';

export const Wrapper = styled.a<Pick<LinkProps, 'variant'>>`
	display: inline-block;
	${({ variant }) => {
		if (variant === 'dark') {
			return css`
				color: var(--dark);

				&:hover {
					color: var(--dark);
				}
			`;
		}
	}}
`;
