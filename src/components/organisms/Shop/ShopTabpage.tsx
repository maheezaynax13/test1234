/* eslint-disable no-empty */
import { shopAPI } from '@libs/api';
import { IShop } from '@libs/api/interfaces';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { GridProductListWithFilters } from '../Poduct';

export const ShopTabpage: FC = () => {
	const [items, setItems] = useState<IShop>(initialState);
	const { query } = useRouter();

	useEffect(() => {
		const { tab, ...rest } = query;
		const params = { ...rest };
		if (tab === 'all_products') params.sort = 'NEW_ARRIVAL';

		const getShopItems = async () => {
			try {
				const { success, data } = await shopAPI.getShopByID(params);
				if (success) setItems(data);
			} catch (error) {}
		};
		getShopItems();
	}, [query]);

	return <GridProductListWithFilters md={3} {...items} />;
};

const initialState = {
	items: [],
	facets: [],
	total: 0,
	totalPages: 0,
	nextPage: 0,
	pageNumber: 0,
};
