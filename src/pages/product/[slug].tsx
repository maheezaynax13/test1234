import { HandheldProductLayout, HandheldSingleProduct, MainLayout } from '@components/templates';
import { productAPI } from '@libs/api';
import { ISingleProduct } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { clearProduct, incrementQty, updatePrice, updateSKUData, updateStock, updateWishlist } from '@store/actions';
import { serverRedirect } from '@utils/helpers';
import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Desktop } from './_components/Desktop';

const Product: NextPage<PropsType> = ({ data, isMobile, ...rest }) => {
	const { metaTags, ...restData } = data;
	const dispatch = useDispatch();

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.backgroundColor = '#ffffff';

		return () => {
			body.style.backgroundColor = '';
		};
	}, []);

	useEffect(() => {
		if (restData && Object.keys(restData).length > 0) {
			const {
				pricing: { discountText },
				stock: { variants },
				isWishlistItem,
			} = restData;
			const { skuID, stockRemaining, price, oldPrice } = variants[0];
			dispatch(updatePrice({ current: price, old: oldPrice, discount: discountText[0] }));
			dispatch(updateSKUData(skuID));
			dispatch(updateStock(stockRemaining));
			if (stockRemaining > 0) dispatch(incrementQty());
			dispatch(updateWishlist(isWishlistItem));
		}

		return () => {
			dispatch(clearProduct());
		};
	}, [restData]);

	if (isMobile) {
		return (
			<HandheldProductLayout {...rest}>
				<MetaData {...metaTags} />
				<HandheldSingleProduct {...restData} />
			</HandheldProductLayout>
		);
	}

	return (
		<MainLayout {...rest}>
			<MetaData {...metaTags} />
			<Desktop {...restData} />
		</MainLayout>
	);
};

Product.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const { success, data } = await productAPI.getProductBySlug(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		await serverRedirect('/404', ctx);
		return { data: null };
	}
};

export default Product;

interface PropsType {
	data: ISingleProduct;
	isMobile?: boolean;
}
