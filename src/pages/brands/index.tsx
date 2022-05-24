import { MainLayout } from '@components/templates/Layouts';
import { pagesAPI } from '@modules/api/pages';
import { ITopBrands } from '@modules/interfaces/brands';
import { NextPage } from 'next';
import { Col, Container, Row } from 'react-bootstrap';
import BrandSection from './_components/BrandSection';
import TopBanners from './_components/TopBanners';

const Brands: NextPage<PropsType> = ({ data, ...rest }) => {
	const { banner = [], allBrands = [] } = data;

	return (
		<MainLayout {...rest}>
			<Container>
				<Row>
					<Col>
						<TopBanners data={banner} />
						<BrandSection data={allBrands} />
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

Brands.getInitialProps = async (): Promise<PropsType> => {
	try {
		const { success, data } = await pagesAPI.getBrands();
		if (success) return { data };
		throw new Error();
	} catch (error) {
		return { data: null };
	}
};

export default Brands;

interface PropsType {
	data: ITopBrands;
}
