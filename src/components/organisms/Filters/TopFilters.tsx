import { PaginationProps } from '@components/atoms';
import { FilterByPrice, ProductSortBy, SearchBox } from '@components/molecules';
import { formatNumber, getPageShowing } from '@utils/helpers';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const TopFilters: FC<TopFiltersProps> = (props) => {
	const { pageHeading, ...rest } = props;
	const { showingFrom, showingTo, total } = getPageShowing(rest);

	return (
		<Wrapper>
			<Row className="align-items-center">
				{((showingFrom && showingTo) || pageHeading) && (
					<Col md={3}>
						{pageHeading && (
							<p className="text-uppercase font-weight-semibold text-dark mb-0">{pageHeading}</p>
						)}
						{showingFrom && showingTo && (
							<span className="text-secondary">
								Showing {showingFrom} – {showingTo} {total && `of ${formatNumber(total)} products`}
							</span>
						)}
					</Col>
				)}
				<Col xs={4} md={3} className="my-2 my-md-0">
					<FilterByPrice />
				</Col>
				<Col xs={8} md={3} className="my-2 my-md-0">
					<ProductSortBy />
				</Col>
				<Col>
					<SearchBox />
				</Col>
			</Row>
		</Wrapper>
	);
};

export interface TopFiltersProps extends Partial<PaginationProps> {
	pageHeading?: string;
	itemCount?: number;
}

const Wrapper = styled.div`
	display: block;
	padding: 1rem 0;
	border-bottom: 1px solid var(--border);

	@media (max-width: 767.98px) {
		padding-top: 0;
	}
`;
