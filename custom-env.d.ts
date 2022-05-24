import { IAuth } from '@libs/api/interfaces';
import { IBkash } from '@libs/payment/bkash/interfaces';

declare module 'next/dist/shared/lib/utils' {
	interface NextPageContext {
		authUser?: IAuth;
		isMobile?: boolean;
	}
}

declare global {
	const bKash: IBkash;
}
