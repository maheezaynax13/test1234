import { FC } from 'react';
import { ButtonProps, Dropdown, DropdownProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';
import styled from 'styled-components';

export const LabelDropdown: FC<LabelDropdownProps> = (props) => {
	const { label, smallLabel, isCount, count, path, width, height, fill, children, ...rest } = props;
	const iconProps = { path, width, height, fill };

	return (
		<Dropdown
			buttonLabel={
				<div className="d-flex align-items-center">
					<Icon {...iconProps} />
					<ButtonLabel>
						{smallLabel && <small className="d-block">{smallLabel}</small>}
						{label} {isCount && <Count>{count}</Count>}
					</ButtonLabel>
				</div>
			}
			{...rest}
		>
			{children}
		</Dropdown>
	);
};

export interface LabelDropdownProps
	extends Omit<DropdownProps, 'buttonLabel'>,
		Pick<IconProps, 'path' | 'width' | 'height' | 'fill'>,
		ButtonProps {
	label: string;
	smallLabel?: string;
	isCount?: boolean;
	count?: number;
}

LabelDropdown.defaultProps = {
	variant: 'link',
	fill: 'var(--dark)',
	isCount: false,
	count: 0,
};

const ButtonLabel = styled.p`
	color: var(--dark);
	text-align: left;
	line-height: 1.3;
	margin: 0 0 0 0.5rem;

	&:not(small) {
		font-weight: 600;
	}

	small {
		font-size: 0.75rem;
	}
`;

const Count = styled.span`
	width: 1rem;
	height: 1rem;
	font-size: 0.625rem;
	display: inline-block;
	text-align: center;
	line-height: 1.5;
	border-radius: 50rem;
	color: var(--white);
	background-color: var(--primary);
`;
