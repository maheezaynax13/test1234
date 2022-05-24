import styled, { css } from 'styled-components';
import { ProgressBarProps } from '.';
import { getThemeColor } from '../utils';

export const ProgressWrapper = styled.div`
	width: 100%;
	height: 0.75rem;
	background-color: #f0f0f0;
	overflow: hidden;
	font-size: 0.65rem;
	border-radius: 50rem;
`;

export const ProgressInner = styled.div<ProgressBarProps>`
	width: ${({ now }) => `${now}%`};
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ variant }) => {
		if (variant) {
			return css`
				color: ${getThemeColor('white')};
				background-color: ${getThemeColor(variant)};
			`;
		}
	}}
`;
