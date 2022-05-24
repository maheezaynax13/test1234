import { FC } from 'react';
import { Col, ColProps, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { BlockLayout, BlockLayoutProps } from '../BlockLayout';
import { Category, CategoryProps } from './Category';

export const PopularCategories: FC<PopularCategoriesProps> = (props) => {
	const { icon, title, viewMoreLink, banner, items, ...rest } = props;
	const layoutProps = { icon, title, viewMoreLink, banner };

	return (
		<Wrapper>
			<BlockLayout {...layoutProps}>
				<Row>
					{items?.map((e, i) => (
						<Col key={i} {...rest}>
							<Category {...e} />
						</Col>
					))}
				</Row>
			</BlockLayout>
		</Wrapper>
	);
};

PopularCategories.defaultProps = {
	xs: 3,
};

export interface PopularCategoriesProps extends BlockLayoutProps, ColProps {
	items: CategoryProps[];
}

const Wrapper = styled.div`
	display: block;
	padding: 0.938rem;
	margin: 0 -0.938rem;
	background-image: linear-gradient(#f3fff6, #fef9ff);
`;
