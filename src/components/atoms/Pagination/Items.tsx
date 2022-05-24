import { FC } from 'react';
import { Item } from './Item';
import { paginationRanges } from './ranges';
import { PagiItems } from './styles';

export const Items: FC<PropsType> = ({ current, total, onClick }) => (
	<PagiItems>
		{current > 1 && (
			<Item className="optional" onClick={() => onClick(current - 1)}>
				Previous
			</Item>
		)}

		{[...paginationRanges(current, total)].map((i) => (
			<Item
				key={i}
				isDots={!!(i === '...')}
				className={i === current ? 'active' : ''}
				onClick={() => onClick(Number(i))}
			>
				{i}
			</Item>
		))}

		{current < total && (
			<Item className="optional" onClick={() => onClick(current + 1)}>
				Next
			</Item>
		)}
	</PagiItems>
);

interface PropsType {
	current: number;
	total: number;
	onClick: (page: number) => void;
}
