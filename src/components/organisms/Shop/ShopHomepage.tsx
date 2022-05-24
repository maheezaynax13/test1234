/* eslint-disable no-empty */
import { LoaderButton } from '@components/molecules';
import { shopAPI } from '@libs/api';
import { IShop } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridProductList } from '../Poduct';

export const ShopHomepage: FC = () => {
	const [newArrivals, setNewArrivals] = useState<IShop>(initialState);
	const [bestSellings, setBestSellings] = useState<IShop>(initialState);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { query } = useRouter();

	useEffect(() => {
		getShopItems('newArrival', 1);
		getShopItems('bestSelling', 1);

		return () => {
			setNewArrivals(initialState);
			setBestSellings(initialState);
		};
	}, []);

	const getShopItems = async (sort: 'newArrival' | 'bestSelling', page: number) => {
		const params = { ...query };
		params.sort = sort === 'newArrival' ? 'NEW_ARRIVAL' : 'BEST_SELLER';
		params.page = page.toString();
		params.perPage = '12';
		setLoading(true);

		try {
			const { success, data } = await shopAPI.getShopByID(params);
			if (success) {
				const { items, pageNumber, totalPages } = data;
				if (sort === 'newArrival') {
					setNewArrivals((prevState) => {
						const clonedObj = JSON.parse(JSON.stringify(prevState));
						const updatedObj = { items: [...clonedObj.items, ...items], pageNumber, totalPages };
						return { ...clonedObj, ...updatedObj };
					});
				} else {
					setBestSellings((prevState) => {
						const clonedObj = JSON.parse(JSON.stringify(prevState));
						const updatedObj = { items: [...clonedObj.items, ...items], pageNumber, totalPages };
						return { ...clonedObj, ...updatedObj };
					});
				}
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-100 d-block mt-3">
			{newArrivals.items.length > 0 && (
				<div className="w-100 d-block mb-5">
					<Header>New Arrival</Header>
					<GridProductList xs={6} md={4} lg={3} xl={2} items={newArrivals.items} />
					{newArrivals.pageNumber < newArrivals.totalPages && (
						<LoaderButton
							pill
							outline
							variant="dark"
							isActive={isLoading}
							onClick={() => getShopItems('newArrival', newArrivals.pageNumber + 1)}
						>
							LOAD MORE
						</LoaderButton>
					)}
				</div>
			)}
			{bestSellings.items.length > 0 && (
				<div className="w-100 d-block mb-5">
					<Header>Best Selling Products</Header>
					<GridProductList xs={6} md={4} lg={3} xl={2} items={bestSellings.items} />
					{bestSellings.pageNumber < bestSellings.totalPages && (
						<LoaderButton
							pill
							outline
							variant="dark"
							isActive={isLoading}
							onClick={() => getShopItems('bestSelling', bestSellings.pageNumber + 1)}
						>
							LOAD MORE
						</LoaderButton>
					)}
				</div>
			)}
		</div>
	);
};

const Header = styled.h5`
	width: 100%;
	display: block;
	padding: 0.5rem 1rem;
	margin-bottom: 1rem;
	text-transform: uppercase;
	background-image: linear-gradient(to right, #ebfff5, transparent);
`;

const initialState: IShop = {
	items: [],
	total: 0,
	totalPages: 0,
	nextPage: 0,
	pageNumber: 0,
};
