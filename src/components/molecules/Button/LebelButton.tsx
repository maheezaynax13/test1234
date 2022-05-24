import { FC } from 'react';
import styled from 'styled-components';
import { Button as Btn, ButtonProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';

export const LabelButton: FC<LabelButtonProps> = (props) => {
	const { label, smallLabel, path, width, height, fill, isCount, count, ...rest } = props;
	const iconProps = { path, width, height, fill };

	return (
		<Button {...rest}>
			<div className="d-flex align-items-center">
				<Icon {...iconProps} />
				<ButtonLabel>
					{smallLabel && <small className="d-block">{smallLabel}</small>}
					{label} {isCount && <Count>{count}</Count>}
				</ButtonLabel>
			</div>
		</Button>
	);
};

export interface LabelButtonProps extends ButtonProps, Pick<IconProps, 'path' | 'width' | 'height' | 'fill'> {
	label: string;
	smallLabel?: string;
	isCount?: boolean;
	count?: number;
}

LabelButton.defaultProps = {
	variant: 'link',
	fill: 'var(--dark)',
	isCount: false,
	count: 0,
};

const Button = styled(Btn)`
	padding: 0;
	position: relative;
`;

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
