import Icon, { IconProps, star } from '@libs/icons';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Tag } from '../styles';

const Rating: FC<RatingProps> = (props) => {
	const { rating, width, height, ...rest } = props;
	const iconProps = { width, height };

	return (
		<StartTag pill {...rest}>
			{Number(rating) > -1 ? rating : 0}
			<Icon {...iconProps} path={star} fill="var(--primary)" />
		</StartTag>
	);
};

export default Rating;

Rating.defaultProps = {
	width: 14,
	height: 14,
};

interface RatingProps extends HTMLAttributes<HTMLSpanElement>, Pick<IconProps, 'width' | 'height'> {
	rating: number | string;
}

const StartTag = styled(Tag)`
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	margin-left: 0;

	svg {
		margin-left: 3px;
	}
`;
