/* eslint-disable no-empty */
import { authAPI } from '@libs/api';
import store, { wrapper } from '@store';
import { authSignIn, setDealLinks, setGlobeData, setMobile } from '@store/actions';
import { isMobileDevice } from '@utils/helpers';
import App, { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../../public/css/slick-theme.min.css';
import '../../public/css/slick.min.css';
import '../../public/scss/app.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const dispatch = useDispatch();
	// console.log(pageProps?.isAllowIp);

	useEffect(() => {
		NProgress.configure({ showSpinner: true });
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());
		if (pageProps?.authUser) {
			const { token, ...rest } = pageProps.authUser;
			if (token) {
				dispatch(authSignIn(rest));
				store.dispatch(setGlobeData());
			}
		}

		dispatch(setMobile(pageProps?.isMobile));
		store.dispatch(setDealLinks());
	}, []);

	return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
	const { ctx } = appContext;

	ctx.isMobile = isMobileDevice(ctx?.req?.headers?.['user-agent']);
	const cookies = parseCookies(ctx);
	if (ctx?.req) {
		if (cookies?.token) {
			try {
				const { success, data } = await authAPI.validateAuth(ctx);
				if (success && data?.token) ctx.authUser = data;
			} catch (error) {}
		}
	} else if (typeof window !== 'undefined') {
		const {
			app: { isMobile },
			user: { profile, isAuthenticate },
		} = store.getState();

		ctx.isMobile = isMobile;
		if (isAuthenticate) {
			const data = { ...profile, token: cookies.token };
			ctx.authUser = data;
		}
	}

	const appProps = await App.getInitialProps({ ...appContext });
	appProps.pageProps = {
		...appProps.pageProps,
		authUser: ctx?.authUser,
		isMobile: ctx?.isMobile,
	};
	return { ...appProps };
};

export default wrapper.withRedux(MyApp);
