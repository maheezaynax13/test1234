/* eslint-disable react/no-unescaped-entities */
import { RefundPolicyComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const RefundPolicy: NextPage<{ isMobile: boolean }> = (props) => {
	if (props.isMobile) {
		return (
			<HandheldSecondaryLayout title="Refund Policy">
				<RefundPolicyComponent isMobile />
			</HandheldSecondaryLayout>
		);
	}

	return (
		<MainLayout {...props}>
			<RefundPolicyComponent />
		</MainLayout>
	);
};

export default RefundPolicy;
