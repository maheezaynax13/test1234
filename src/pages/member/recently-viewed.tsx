import { HandheldSecondaryLayout } from '@components/templates';
import { RecentlyViewed } from '@components/templates/Handheld/RecentlyViewed';
import { productAPI } from '@libs/api';
import { IProduct } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import { NextPage, NextPageContext } from 'next';

const RecentlyViewedPage: NextPage<PropsType> = ({ data }) => {
	return (
		<HandheldSecondaryLayout title="Recently Viewed">
			<RecentlyViewed data={data} />
		</HandheldSecondaryLayout>
	);
};

RecentlyViewedPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const { success, data } = await productAPI.getAllRecentProduct(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(RecentlyViewedPage);

interface PropsType {
	data: IProduct[];
}
