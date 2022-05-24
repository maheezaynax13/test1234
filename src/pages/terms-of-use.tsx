/* eslint-disable react/no-unescaped-entities */
import { TermsOfUseComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const TermsOfUse: NextPage<{ isMobile: boolean }> = (props) => {
	if (props.isMobile) {
		return (
			<HandheldSecondaryLayout title="Terms & Conditions">
				<TermsOfUseComponent isMobile />;
			</HandheldSecondaryLayout>
		);
	}

	return (
		<MainLayout {...props}>
			<TermsOfUseComponent />
		</MainLayout>
	);
};

export default TermsOfUse;
