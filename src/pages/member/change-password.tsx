import { MemberLayout, PasswordUpdate } from '@components/templates';
import { IProfile } from '@libs/api/interfaces';
import { withAuth } from '@libs/hoc';
import MetaData from '@libs/MetaData';
import { NextPage } from 'next';

const ChangePassword: NextPage<PropsType> = (props) => {
	return (
		<MemberLayout {...props}>
			<MetaData title="Change Password" />

			<PasswordUpdate />
		</MemberLayout>
	);
};

export default withAuth(ChangePassword);

type PropsType = {
	data: IProfile;
};
