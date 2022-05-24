/* eslint-disable react/no-unescaped-entities */
import { ShippingPolicyComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const ShippingPolicy: NextPage<{ isMobile: boolean }> = (props) => {
	if (props.isMobile) {
		return (
			<HandheldSecondaryLayout title="Shipping Policy">
				<ShippingPolicyComponent isMobile />;
			</HandheldSecondaryLayout>
		);
	}
	return (
		<MainLayout {...props}>
			<ShippingPolicyComponent />
		</MainLayout>
	);
};

export default ShippingPolicy;
