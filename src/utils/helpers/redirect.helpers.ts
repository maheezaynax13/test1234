import { NextPageContext } from 'next';
import Router from 'next/router';

export const serverRedirect = async (url: string, ctx: NextPageContext): Promise<void> => {
	const { res } = ctx;
	if (res) {
		res.writeHead(301, { Location: url });
		res.end();
	} else {
		await Router.push(url);
	}
};

export const clientRedirect = (url: string): void => {
	if (typeof window !== 'undefined') {
		Router.push(url);
	}
};
