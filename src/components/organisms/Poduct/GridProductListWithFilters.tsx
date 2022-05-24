import { Pagination, PaginationProps } from '@components/atoms';
import { filter } from '@libs/icons';
import { FC, useEffect, useState } from 'react';
import { SidebarFilters, SidebarFiltersProps, TopFilters, TopFiltersProps } from '../Filters';
import { GridProductList, GridProductListProps } from './GridProductList';
import { FilterButton, FilterWrapper, ListWrapper } from './styles';

export const GridProductListWithFilters: FC<GridProductListWithFiltersProps> = (props) => {
	const [isFilters, setFilters] = useState<boolean>(false);
	const { pageHeading, pageNumber, totalPages, nextPage, total, facets, ...rest } = props;
	const pagiProps = { pageNumber, totalPages, nextPage, total };
	const topFilterProps = { ...pagiProps, pageHeading, itemCount: rest?.items?.length };

	const BackdropOpened = () => {
		const backdrop = document.createElement('div');
		backdrop.className = 'ModalBackdrop';
		backdrop.addEventListener('click', closeFilterbar);
		document.body.appendChild(backdrop);
		document.querySelector('body').classList.add('modal-open');
	};

	const BackdropClosed = () => {
		document.querySelector('body').classList.remove('modal-open');
		document?.querySelector('.ModalBackdrop')?.remove();
	};

	const closeFilterbar = () => setFilters(false);

	useEffect(() => {
		if (isFilters) {
			BackdropOpened();
		} else {
			BackdropClosed();
		}

		return () => {
			BackdropClosed();
		};
	}, [isFilters]);

	return (
		<div className="w-100 d-block position-relative">
			<TopFilters {...topFilterProps} />
			<FilterButton path={filter} width={18} height={18} fill="var(--secondary)" onClick={() => setFilters(true)}>
				Filter
			</FilterButton>
			<FilterWrapper style={{ right: isFilters ? 0 : '-305px' }}>
				<SidebarFilters facets={facets} />
			</FilterWrapper>
			<ListWrapper>
				<GridProductList xs={6} md={3} {...rest} />
				<Pagination {...pagiProps} />
			</ListWrapper>
		</div>
	);
};

export type GridProductListWithFiltersProps = Partial<TopFiltersProps> &
	Partial<SidebarFiltersProps> &
	GridProductListProps &
	Partial<PaginationProps>;
