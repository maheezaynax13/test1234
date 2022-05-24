import { MainLayout } from '@components/templates/Layouts';
import { Col, Container, Image, Row } from 'react-bootstrap';

const NotFound = (): JSX.Element => {
	return (
		<MainLayout>
			<Container>
				<Row>
					<Col>
						<div className="w-100 d-block text-center pt-5 pb-5">
							<Image
								fluid
								src="/images/item-not-found.png"
								alt="Product not found"
								style={{ maxWidth: '500px' }}
							/>
							<p className="text-secondary">Sorry! This product is no longer available</p>
						</div>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

export default NotFound;
