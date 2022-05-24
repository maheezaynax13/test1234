import { Button as Btn } from '@components/atoms';
import Icon, { IconProps, love, loveO } from '@libs/icons';
import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const WishlistButton: FC<WishlistButtonProps> = ({ fill, isActive, ...rest }) => (
	<Button variant="link" {...rest}>
		<Icon path={isActive ? love : loveO} width={20} height={20} fill={isActive ? 'var(--primary)' : fill} />
	</Button>
);

WishlistButton.defaultProps = {
	fill: '#707070',
	isActive: false,
	bordered: false,
};

export interface WishlistButtonProps extends HTMLAttributes<HTMLButtonElement>, Partial<Pick<IconProps, 'fill'>> {
	isActive?: boolean;
	bordered?: boolean;
}

export const Button = styled(Btn)<Pick<WishlistButtonProps, 'bordered'>>`
	padding: 5px;
	border-radius: 100%;

	& + & {
		margin-left: 5px;
	}

	${({ bordered }) => {
		if (bordered) {
			return css`
				width: 52px;
				height: 52px;
				border: 1px solid #ececec;

				&:hover {
					background-color: var(--light);
				}
			`;
		}
	}}
`;
