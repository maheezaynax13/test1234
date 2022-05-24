import styled, { css } from 'styled-components';
import { orderTypes, paymentTypes } from '@modules/interfaces/types';
import { hexToRgba } from '@utils/helpers';
import { colors } from '../styles';

const Badge2 = ({ children, ...rest }: propsType): JSX.Element => {
	return <Badge {...rest}>{children}</Badge>;
};

export default Badge2;

interface propsType {
	pill: boolean;
	className?: string;
	variant?: orderTypes | paymentTypes;
	children: string | number | JSX.Element | JSX.Element[];
}

const Badge = styled.span`
	display: inline-block;
	padding: 4px 12px;
	text-align: center;

	${({ pill, variant }: propsType) => {
		const type = variant.toLowerCase();
		return css`
			border-radius: ${pill ? '20px' : 0};
			color: ${colors[type] ?? colors.primary};
			background-color: ${hexToRgba(colors[type] ?? colors.primary, 0.15)};
		`;
	}}
`;
