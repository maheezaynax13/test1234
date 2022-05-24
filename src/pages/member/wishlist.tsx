import { HandheldWishlistItems, MemberLayout } from '@components/templates';
import { wishlistAPI } from '@libs/api';
import { IWishlistItem } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const Wishlist: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MemberLayout {...rest}>
			<MetaData title="Wishlist" />
			<HandheldWishlistItems data={data} />
		</MemberLayout>
	);
};

Wishlist.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	try {
		const { success, data } = await wishlistAPI.getWishlists(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(Wishlist);

interface PropsType {
	data: IWishlistItem[];
	isMobile?: boolean;
}
