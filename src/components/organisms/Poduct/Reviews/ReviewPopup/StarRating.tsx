import Icon, { star, starLine } from '@libs/icons';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const StarRating: FC<PropsType> = (props) => {
	const { count, value, changeHandler } = props;
	const stars = Array.from({ length: count }, () => starLine);

	return (
		<Fragment>
			<p className="font-weight-semibold my-2">Rate & Review</p>
			{stars.map((el, i) => (
				<Star
					className="mr-2"
					path={i < value ? star : el}
					fill={i < value ? 'var(--primary)' : '#999999'}
					onClick={() => changeHandler(i + 1)}
				/>
			))}
		</Fragment>
	);
};

interface PropsType {
	count: number;
	value: number;
	changeHandler: (e: number) => void;
}

const Star = styled(Icon)`
	&:hover {
		cursor: pointer;
	}
`;
