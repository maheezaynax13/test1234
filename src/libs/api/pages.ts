import { BaseAPI } from './baseAPI';
import { BR, ICategory, IFAQs, IHHomepage, ISubHeader } from './interfaces';

class PagesAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getMegaMenu = () => this.get<BR<ICategory[]>>('homepage/get_web_mega_menu');

	getSuberHeader = () => this.get<BR<ISubHeader[]>>('sub-header');

	getHelpFaqs = (ctx) => this.get<BR<IFAQs>>('help-center/getFaq', ctx);

	getHHomepage = () => this.get<BR<IHHomepage[]>>('homepage/responsive');

	faqStatistics = (payload) => this.post<BR<string | string[]>>('help-center/createfaqStatistics', payload);
}

export const pagesAPI = new PagesAPI(process.env.apiCmsURL);
