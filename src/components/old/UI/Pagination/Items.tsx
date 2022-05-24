import { Pagination } from 'react-bootstrap';
import Item from './Item';
import { paginationRanges } from './ranges';

const Items = ({ current, total, clickHandler }: propsType): JSX.Element => (
	<Pagination className="mb-0 mr-3">
		{current > 1 && (
			<Item isOptional clickHandler={() => clickHandler(current - 1)}>
				Previous
			</Item>
		)}

		{[...paginationRanges(current, total)].map((i) => (
			<Item
				key={i}
				isActive={!!(i === current)}
				clickHandler={() => clickHandler(Number(i))}
				disabled={!!(i === '...')}
			>
				{i}
			</Item>
		))}

		{current < total && (
			<Item isOptional clickHandler={() => clickHandler(current + 1)}>
				Next
			</Item>
		)}
	</Pagination>
);

export default Items;

interface propsType {
	current: number;
	total: number;
	clickHandler: (number: number) => void;
}
