/* eslint-disable react/no-unescaped-entities */
import { PrivacyPolicyComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage<{ isMobile: boolean }> = (props) => {
	if (props.isMobile) {
		return (
			<HandheldSecondaryLayout title="Privacy Policy">
				<PrivacyPolicyComponent isMobile />
			</HandheldSecondaryLayout>
		);
	}

	return (
		<MainLayout {...props}>
			<PrivacyPolicyComponent />
		</MainLayout>
	);
};

export default PrivacyPolicy;
