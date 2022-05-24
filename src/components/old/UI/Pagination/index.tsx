import { CardWithShadow } from '@components/old/UI';
import { formatNumber } from '@utils/helpers';
import { useRouter } from 'next/router';
import Items from './Items';

const Pagination = ({ currentPage = 1, totalPages = 1, totalCount = 0, classes = '' }: propsType): JSX.Element => {
	const router = useRouter();

	/**
	 * Go to target pagination
	 * @param number
	 */
	const handlePage = (number: number) => {
		const { pathname, query: quaries } = router;

		if (String(number) === '1') {
			delete quaries.page;
		} else {
			quaries.page = String(number);
		}

		router.push({ pathname: pathname, query: { ...quaries } });
	};

	return (
		<div className={`d-flex align-items-center mt-3 ${classes}`}>
			{totalPages > 1 && (
				<CardWithShadow className="rounded-pill mt-0">
					<Items current={currentPage} total={totalPages} clickHandler={handlePage} />
				</CardWithShadow>
			)}
			{totalCount > 0 && (
				<span className="font-weight-semibold ml-3">Total results {formatNumber(totalCount)}</span>
			)}
		</div>
	);
};

export default Pagination;

interface propsType {
	currentPage: number;
	totalPages: number;
	totalCount?: number;
	classes?: string;
}
