import { BannerSingle } from '@components/old/parts/Banners';
import { Col, Row } from 'react-bootstrap';

const BannerAds = ({ data, colSize = 12 }: propsType): JSX.Element => {
	if (data && data.length > 0) {
		return (
			<Row>
				{data.map((e, i) => (
					<Col key={i} md={colSize}>
						<BannerSingle style={{ marginTop: '25px' }} {...e} />
					</Col>
				))}
			</Row>
		);
	}

	return null;
};
export default BannerAds;

interface propsType {
	data: any;
	colSize?: number;
}
