import { formatNumber } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';
import { Items } from './Items';
import { PageCount, Wrapper } from './styles';

export const Pagination: FC<PaginationProps> = (props) => {
	const { nextPage, pageNumber, totalPages, total, ...rest } = props;
	const router = useRouter();

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
		<Wrapper {...rest}>
			{totalPages > 1 && <Items current={pageNumber} total={totalPages} onClick={handlePage} />}
			{total > 0 && <PageCount>Total results {formatNumber(total)}</PageCount>}
		</Wrapper>
	);
};

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
	pageNumber: number;
	totalPages: number | null;
	nextPage?: number | null;
	total?: number | null;
}

Pagination.defaultProps = {
	pageNumber: 1,
	totalPages: null,
	total: null,
};
