import { AboutComponent } from '@components/organisms';
import { HandheldSecondaryLayout, MainLayout } from '@components/templates';
import { NextPage } from 'next';

const About: NextPage<PropsType> = (props) => {
	if (props?.isMobile) {
		return (
			<HandheldSecondaryLayout title="About Us">
				<AboutComponent isMobile />
			</HandheldSecondaryLayout>
		);
	}

	return (
		<MainLayout {...props}>
			<AboutComponent />;
		</MainLayout>
	);
};

export default About;

interface PropsType {
	isMobile: boolean;
}
