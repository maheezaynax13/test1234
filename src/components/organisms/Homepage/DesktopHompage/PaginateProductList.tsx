import { LoaderButton } from '@components/molecules';
import { Product } from '@components/old/parts/products';
import { CardWithShadow } from '@components/old/UI';
import { cmsAPI } from '@modules/api/cms';
import { HalfWidthProducts, IPaginateProduct } from '@modules/api/cms/interfaces';
import BlockHeader from '@pages/_components/BlockHeader';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const PaginateProductList: FC<PropsType> = ({ data, colSize = 3 }) => {
	if (data && Object.keys(data).length > 0) {
		const [paginateItems, setPagianateItems] = useState<IPaginateProduct>(null);
		const [isLoading, setLoading] = useState<boolean>(false);
		const { icon, title: header, items = [] } = data;
		const initialData = { items, pageNumber: 1, totalPages: 2 };
		const headerProps = { icon, header };

		useEffect(() => setPagianateItems(initialData), []);

		const getRecommendedData = async (pageNumber: number) => {
			try {
				setLoading(true);
				const { success, data } = await cmsAPI.getPaginatePage(pageNumber, 'RECOMMENDED_PRODUCTS');
				if (success) {
					const { items, pageNumber, totalPages } = data;
					setPagianateItems((prevState) => {
						const clonedObj = JSON.parse(JSON.stringify(prevState));
						const updatedObj = { items: [...clonedObj.items, ...items], pageNumber, totalPages };
						return { ...clonedObj, ...updatedObj };
					});
				}
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};

		return (
			<CardWithShadow style={{ marginTop: '25px' }}>
				<Row>
					<BlockHeader {...headerProps} />
					<Col xs={12}>
						<ListItems>
							{paginateItems?.items?.map((el, i) => (
								<li key={i} style={{ width: `calc(${100 / colSize}% - 8px)` }}>
									<Product {...el} />
								</li>
							))}
						</ListItems>
					</Col>
					<Col xs={12}>
						<div className="text-center my-2">
							<LoaderButton
								pill
								size="lg"
								className="px-5"
								isActive={isLoading}
								onClick={() => getRecommendedData(paginateItems?.pageNumber + 1)}
								disabled={paginateItems?.totalPages <= paginateItems?.pageNumber}
							>
								View More
							</LoaderButton>
						</div>
					</Col>
				</Row>
			</CardWithShadow>
		);
	}

	return null;
};

interface PropsType {
	data: HalfWidthProducts;
	colSize: number;
}

const ListItems = styled.ul`
	margin: 0;
	padding: 0;

	li {
		margin: 0 4px;
		display: inline-block;
	}
`;
