/* eslint-disable indent */
import { Badge, BadgeProps } from '@components/atoms';
import { BadgeVariant } from '@components/atoms/interfaces';
import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const BadgeLight: FC<BadgeLightProps> = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export interface BadgeLightProps extends BadgeProps, HTMLAttributes<HTMLSpanElement> {
	variant?: Exclude<BadgeVariant, 'light' | 'success'>;
}

const Wrapper = styled(Badge)<BadgeProps>`
	color: ${({ variant }) => `var(--${variant})`};
	${({ variant }) => {
		switch (variant) {
			case 'primary':
				return css`
					background-color: rgba(0, 181, 91, 0.12);
				`;

			case 'secondary':
				return css`
					background-color: rgba(108, 117, 125, 0.12);
				`;

			case 'info':
				return css`
					background-color: rgba(23, 162, 184, 0.12);
				`;

			case 'warning':
				return css`
					background-color: rgba(255, 193, 7, 0.12);
				`;

			case 'danger':
				return css`
					background-color: rgba(255, 0, 101, 0.12);
				`;

			case 'dark':
				return css`
					background-color: rgba(77, 77, 77, 0.12);
				`;
		}
	}}
`;

BadgeLight.defaultProps = {
	variant: 'primary',
};
