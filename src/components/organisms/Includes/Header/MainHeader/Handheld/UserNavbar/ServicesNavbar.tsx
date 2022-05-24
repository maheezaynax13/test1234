import { Image, Link } from '@components/atoms';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const ServicesNavbar: FC<PropsType> = ({ onHide }) => {
	return (
		<Wrapper>
			<Row>
				<Col>
					<p className="font-weight-semibold text-secondary ">Services</p>
				</Col>
				<Col xs={12}>
					<Row>
						<Col xs={3}>
							<Link href="/help" onClick={onHide} className="d-block text-center">
								<Image src="/images/call-icon-pink.svg" />
								<small className="text-secondary d-block mt-1">Help Center</small>
							</Link>
						</Col>
						<Col xs={3}>
							<Link
								href="/member/orders?status=RETURNED"
								onClick={onHide}
								className="d-block text-center"
							>
								<Image src="/images/Return-orange.svg" />
								<small className="text-secondary d-block mt-1">Returns</small>
							</Link>
						</Col>
						<Col xs={3}>
							<Link href="/member/address-book" onClick={onHide} className="d-block text-center">
								<Image src="/images/Address_Book.svg" />
								<small className="text-secondary d-block mt-1">Address Book</small>
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Wrapper>
	);
};

interface PropsType {
	onHide?: () => void;
}

const Wrapper = styled.div`
	width: calc(100% - 2rem);
	display: block;
	margin: 1rem;
	padding: 0.5rem;
	border-bottom: 1px solid var(--border);
`;
