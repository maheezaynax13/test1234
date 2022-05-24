import { MainLayout } from '@components/templates';
import { NextPage } from 'next';
import Link from 'next/link';
import { Col, Container, Image, Row } from 'react-bootstrap';

const NotFound: NextPage = (props) => {
	return (
		<MainLayout {...props}>
			<Container>
				<Row>
					<Col>
						<div className="w-100 pt-5 pb-5 mt-5 mb-5 text-center">
							<Image fluid src="/images/not-found.svg" alt="Page not found" />
							<h3 className="mt-3">Oh dear! I don&apos;t know, what happened</h3>
							<Link href="/">
								<a className="btn btn-lg btn-primary text-uppercase font-weight-semibold rounded-pill pl-4 pr-4">
									Go to homepage
								</a>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

export default NotFound;
