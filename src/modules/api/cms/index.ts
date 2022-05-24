import { BR, IHHomepage } from '@libs/api/interfaces';
import { BaseAPI } from '@modules/api/baseAPI';
import { NextPageContext } from 'next';
import { HomePageEntity, IHomepageBlogs, IPaginateProduct, ItemTypeEnum } from './interfaces';

class CMSAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getHomepage = () => this.get<BR<HomePageEntity<ItemTypeEnum>[]>>('homepage');

	getCustomPage = (slug: string) =>
		this.get<BR<HomePageEntity<ItemTypeEnum>[]>>(`pages/section/web?pageSlug=${slug}`);

	getHCustomPage = (slug: string) => this.get<BR<IHHomepage[]>>(`pages/section/web/responsive?pageSlug=${slug}`);

	getPaginatePage = (pageNumber: number, itemType?: string) =>
		this.get<BR<IPaginateProduct>>(`homepage/paginate-data?page=${pageNumber}&itemType=${itemType}`);

	getHomePageBlogs = (ctx?: NextPageContext) => this.get<BR<IHomepageBlogs[]>>('homepage/get_wp_blogs', ctx);
}

export const cmsAPI = new CMSAPI(process.env.apiCmsURL);
