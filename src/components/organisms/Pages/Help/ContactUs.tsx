import { CardWithBorder } from '@components/old/UI';
import Icon, { customerService, phoneDialPad } from '@libs/icons';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const ContactUs: FC = () => {
	return (
		<CardWithBorder className="bg-light mt-4 pt-4 pb-4">
			<Row>
				<Col md={4} className="text-center">
					<h5 className="mb-0">Need help?</h5>
					<p className="text-black-50 mb-0">We&apos;d love to help you out!</p>
				</Col>
				<Col md={4} className="text-center">
					<div className="d-flex align-items-center justify-content-center mt-2 mt-md-0">
						<Icon path={phoneDialPad} width={28} height={28} />
						<div className="ml-2">
							<p className="text-black-50 mb-0">Phone Support</p>
							<p className="text-dark mb-0">{process.env.supportNumber}</p>
						</div>
					</div>
				</Col>
				<Col md={4} className="text-center">
					<div className="d-flex align-items-center justify-content-center mt-2 mt-md-0">
						<Icon path={customerService} width={28} height={28} />
						<div className="ml-2">
							<p className="text-black-50 mb-0">24/7 Live Chat</p>
							<p className="text-dark mb-0">Chat with us amytime</p>
						</div>
					</div>
				</Col>
			</Row>
		</CardWithBorder>
	);
};
