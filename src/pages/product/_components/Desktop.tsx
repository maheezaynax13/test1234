import { ISingleProduct } from '@libs/api/interfaces';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainBlock from './MainBlock';
import MoreDetails from './MoreDetails';
import Recommendations from './Recommendations';

export const Desktop: FC<Omit<ISingleProduct, 'metaTags'>> = (props) => {
	const { specification, longDescription, ...rest } = props;
	const moreProps = {
		name: rest.name,
		productID: rest.productID,
		mainImage: rest.mainImage,
		stock: rest.stock,
		specification,
		longDescription,
	};

	return (
		<Container>
			<Row>
				<Col>
					<MainBlock {...rest} />
					<MoreDetails {...moreProps} />
					<Recommendations id={rest.id} />
				</Col>
			</Row>
		</Container>
	);
};

export default Desktop;
