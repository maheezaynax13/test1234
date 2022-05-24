/* eslint-disable react/no-unescaped-entities */
import { ReturnPolicyComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const ReturnPolicy: NextPage<{ isMobile: boolean }> = (props) => {
	if (props.isMobile) {
		return (
			<HandheldSecondaryLayout title="Return Policy">
				<ReturnPolicyComponent isMobile />
			</HandheldSecondaryLayout>
		);
	}
	return (
		<MainLayout {...props}>
			<ReturnPolicyComponent />
		</MainLayout>
	);
};

export default ReturnPolicy;
