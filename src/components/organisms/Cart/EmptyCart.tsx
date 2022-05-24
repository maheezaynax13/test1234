import { Button, Image } from '@components/atoms';
import { LoaderButton } from '@components/molecules';
import { productAPI } from '@libs/api';
import { ICartProductSuggestion } from '@libs/api/interfaces/product/productItem';
import Router from 'next/router';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridProductList } from '..';

export const EmptyCart: FC = () => {
	const [productsData, setProductsData] = useState<ICartProductSuggestion>(initialProductsData);
	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getProductData(1);
	}, []);

	const getProductData = async (page: number) => {
		setLoading(true);
		const { success, data } = await productAPI.getCartProductSuggestion(page);
		if (success) {
			setProductsData((prevState) => ({
				items: [...prevState.items, ...data.items],
				total: data.total,
				totalPages: data.totalPages,
				pageNumber: data.pageNumber,
				nextPage: data.nextPage,
			}));
		}
		setLoading(false);
	};

	return (
		<div>
			<div className="w-100 text-center pt-5 pb-5">
				<Image src="/images/shopping/empty-cart.svg" alt="Empty Cart" className="mb-5" />
				<h5 className="text-dark">Your Cart Is Empty, Darling!</h5>
				<p className="text-dark">Why don&apos;t you put some items here?</p>
				<Button pill className="pl-5 pr-5" onClick={() => Router.push('/')}>
					Start Shopping
				</Button>
			</div>

			{!!productsData && (
				<div className="w-100 d-block my-5">
					<Header>HERE ARE SOME SUGGESTIONS</Header>
					<GridProductList xs={6} md={4} lg={3} xl={2} items={productsData?.items} />
					{productsData?.pageNumber < productsData?.totalPages && (
						<LoaderButton
							pill
							outline
							variant="dark"
							isActive={isLoading}
							onClick={() => getProductData(productsData?.nextPage)}
						>
							SHOW MORE
						</LoaderButton>
					)}
				</div>
			)}
		</div>
	);
};

const initialProductsData = {
	items: [],
	total: 0,
	totalPages: 0,
	pageNumber: 0,
	nextPage: 0,
};

const Header = styled.h4`
	position: relative;
	display: inline-block;
	margin-bottom: 2rem;

	&:after {
		position: absolute;
		left: 0;
		bottom: -10px;
		content: '';
		width: 100%;
		height: 4px;
		background-color: black;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}
`;
