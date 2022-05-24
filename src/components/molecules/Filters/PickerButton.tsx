import { ButtonProps } from '@components/atoms';
import Icon, { triangleArrowDown } from '@libs/icons';
import { FC } from 'react';
import { Button } from './styles';

export const PickerButton: FC<ButtonProps> = ({ children, ...rest }) => (
	<Button {...rest}>
		{children} <Icon width={18} height={18} path={triangleArrowDown} fill="var(--light-gray)" />
	</Button>
);

PickerButton.defaultProps = {
	variant: 'link',
};
