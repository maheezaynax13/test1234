import { AddressList, MemberLayout } from '@components/templates';
import { addressAPI } from '@libs/api';
import { IAddAddress } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const Addressbook: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MemberLayout {...rest}>
			<MetaData title="Address Book" />
			<AddressList data={data} />
		</MemberLayout>
	);
};

Addressbook.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const { success, data } = await addressAPI.getAddresses(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(Addressbook);

type PropsType = {
	data: IAddAddress[];
};
