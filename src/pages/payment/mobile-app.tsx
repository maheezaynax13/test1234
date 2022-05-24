/* eslint-disable no-empty */
import { Payment } from '@components/templates';
import { paymentAPI } from '@libs/api';
import { IPaymentValidate } from '@libs/api/interfaces';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PaymentMobileApp: NextPage = () => {
	const [data, setData] = useState<IPaymentValidate>(null);
	const [isLoading, setLoading] = useState<boolean>(true);
	const {
		query: { checkoutOrderID },
	} = useRouter();

	useEffect(() => {
		const getData = async () => {
			try {
				const { success, data } = await paymentAPI.validatePayment(checkoutOrderID as string);
				if (success) setData(data);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, []);

	return <Payment {...data} />;
};

PaymentMobileApp.getInitialProps = (ctx: NextPageContext) => {
	const {
		query: { token = null },
	} = ctx;
	ctx.res?.setHeader('set-cookie', [`token=${token}`]);
	return { data: null };
};

export default PaymentMobileApp;
