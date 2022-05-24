import { Breadcrumbs, BreadcrumbsWrapper } from '@components/atoms';
import { GridProductListWithFilters } from '@components/organisms';
import { ISearchResults } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SearchNotFound } from './SearchNotFound';

export const ProductsWithFilters: FC<ISearchResults> = (props) => {
	return (
		<Container>
			{/*********  (have to fix.... ) margin-bottom not working */}
			<BreadWrapper
				data={props.breadcrumbs?.map(({ category, slug }) => ({ href: `/category/${slug}`, title: category }))}
			/>
			<Row>
				<Col>
					{/* <GridProductListWithFilters md={3} {...props} /> */}
					{props?.items?.length > 0 ? <GridProductListWithFilters md={3} {...props} /> : <SearchNotFound />}
				</Col>
			</Row>
		</Container>
	);
};

const BreadWrapper = styled(Breadcrumbs)`
	margin-bottom: 0;

	${BreadcrumbsWrapper} {
		margin-bottom: 0 !important;
	}
`;
