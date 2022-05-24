import { Button } from 'react-bootstrap';
import { CSSProperties } from 'styled-components';

const LoadMore = ({ currentPage = 1, totalPages = 1, className, clickHandler, ...rest }: propsType): JSX.Element => {
	if (totalPages > currentPage) {
		return (
			<Button
				variant="outline-dark"
				className={`text-uppercase font-weight-semibold rounded-pill mt-3 mb-3 ${className}`}
				onClick={() => clickHandler(currentPage + 1)}
				{...rest}
			>
				Load More
			</Button>
		);
	}

	return null;
};

export default LoadMore;

interface propsType {
	currentPage: number;
	totalPages: number;
	className?: string;
	style?: CSSProperties;
	clickHandler?: (page: number) => void;
}
