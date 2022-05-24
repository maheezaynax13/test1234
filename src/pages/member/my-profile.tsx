import { MemberLayout, Profile } from '@components/templates';
import { customerAPI } from '@libs/api';
import { IProfile } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage, NextPageContext } from 'next';

const MyProfile: NextPage<PropsType> = ({ data, ...rest }) => {
	return (
		<MemberLayout {...rest}>
			<MetaData title="My Account" />
			<Profile {...data} />
		</MemberLayout>
	);
};

MyProfile.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const { success, data } = await customerAPI.getProfile(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default withAuth(MyProfile);

type PropsType = {
	data: IProfile;
};
