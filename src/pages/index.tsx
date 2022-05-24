import { HandheldHomepage, MainLayout } from '@components/templates';
import { pagesAPI } from '@libs/api';
import { IHHomepage } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { cmsAPI } from '@modules/api/cms';
import { HomePageEntity, IHomepageBlogs, ItemTypeEnum } from '@modules/api/cms/interfaces';
import { NextPage, NextPageContext } from 'next';
import { Fragment } from 'react';
import DesktopHomepage from './_components';

const Homepage: NextPage<PropsType> = ({ res, ...rest }) => {
	return (
		<Fragment>
			<MainLayout {...rest}>
				<MetaData title="Your Trusted Global Online Shopping Mall" />
				{rest.isMobile ? (
					<HandheldHomepage data={res.mobile} blogs={res.blogs} />
				) : (
					<DesktopHomepage data={res.desktop} blogs={res.blogs} />
				)}
			</MainLayout>
		</Fragment>
	);
};

Homepage.getInitialProps = async (ctx: NextPageContext): Promise<PropsType> => {
	const { isMobile } = ctx;
	const res: PropsType['res'] = { desktop: null, mobile: null, blogs: null };

	try {
		const { success, data } = await cmsAPI.getHomePageBlogs();
		if (success) res.blogs = data;
	} catch (error) {
		return { res };
	}
	try {
		if (isMobile) {
			const { success, data } = await pagesAPI.getHHomepage();
			if (success) res.mobile = data;
			return { res };
		} else {
			const { success, data } = await cmsAPI.getHomepage();
			if (success) res.desktop = data;
			return { res };
		}
	} catch (error) {
		return { res };
	}
};

export default Homepage;

interface PropsType {
	res: {
		desktop?: HomePageEntity<ItemTypeEnum>[];
		mobile?: IHHomepage[];
		blogs?: IHomepageBlogs[];
	};
	isMobile?: boolean;
}
