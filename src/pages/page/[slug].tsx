/* eslint-disable indent */
import { HandheldHomepage, MainLayout } from '@components/templates';
import { IHHomepage } from '@libs/api/interfaces';
import MetaData from '@libs/MetaData';
import { cmsAPI } from '@modules/api/cms';
import { HomePageEntity, ItemTypeEnum } from '@modules/api/cms/interfaces';
import DesktopHomepage from '@pages/_components';
import { NextPage } from 'next';

const CustomPage: NextPage<PropsType> = ({ res, ...rest }) => {
	return (
		<MainLayout {...rest}>
			<MetaData title="Your Trusted Global Online Shopping Mall" />

			{rest.isMobile ? <HandheldHomepage data={res.mobile} /> : <DesktopHomepage data={res.desktop} />}
		</MainLayout>
	);
};

CustomPage.getInitialProps = async (ctx): Promise<PropsType> => {
	const {
		isMobile,
		query: { slug },
	} = ctx;

	const res: PropsType['res'] = { desktop: null, mobile: null };
	try {
		if (isMobile) {
			const { success, data } = await cmsAPI.getHCustomPage(String(slug));
			if (success) res.mobile = data;
			return { res };
		} else {
			const { success, data } = await cmsAPI.getCustomPage(String(slug));
			if (success) res.desktop = data;
			return { res };
		}
	} catch (error) {
		return { res };
	}
};

export default CustomPage;

interface PropsType {
	res: {
		desktop?: HomePageEntity<ItemTypeEnum>[];
		mobile?: IHHomepage[];
	};
	isMobile?: boolean;
}
