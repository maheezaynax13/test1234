import { Conditions, ContactUs, Faqs } from '@components/organisms';
import { HandheldHelp } from '@components/templates';
import { MainLayout } from '@components/templates/Layouts';
import { pagesAPI } from '@libs/api';
import { IFAQs } from '@libs/api/interfaces';
import { NextPage } from 'next';
import { Context } from 'next-redux-wrapper';
import { Col, Container, Row } from 'react-bootstrap';

const HelpCenter: NextPage<PropsType> = ({ data, ...rest }) => {
	if (rest.isMobile) {
		return <HandheldHelp data={data} />;
	}

	return (
		<MainLayout {...rest}>
			<Container>
				<Row>
					<Col>
						<Conditions />
						<Faqs data={data} />
						<ContactUs />
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

HelpCenter.getInitialProps = async (ctx: Context): Promise<PropsType> => {
	try {
		const { success, data } = await pagesAPI.getHelpFaqs(ctx);
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default HelpCenter;

interface PropsType {
	data: IFAQs;
	isMobile?: boolean;
}
