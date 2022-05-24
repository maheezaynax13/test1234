import { Button, Image, Link } from '@components/atoms';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const OrdersNavbar: FC<PropsType> = ({ onHide }) => {
	const router = useRouter();

	return (
		<Wrapper>
			<Row>
				<Col>
					<p className="font-weight-semibold text-secondary ">Orders</p>
				</Col>
				<Col className="text-right">
					<Button
						variant="link"
						className="text-secondary p-0"
						onClick={() => {
							onHide();
							router.push('/member/orders');
						}}
					>
						View All
					</Button>
				</Col>
				<Col xs={12}>
					<Row>
						<Col xs={3}>
							<Link href="/member/orders?status=UNPAID" onClick={onHide} className="d-block text-center">
								<Image src="/images/order-unpaid.svg" />
								<small className="text-secondary d-block mt-1">Unpaid</small>
							</Link>
						</Col>
						<Col xs={3}>
							<Link
								href="/member/orders?status=PROCESSING"
								onClick={onHide}
								className="d-block text-center"
							>
								<Image src="/images/order-processing.svg" />
								<small className="text-secondary d-block mt-1">Processing</small>
							</Link>
						</Col>
						<Col xs={3}>
							<Link href="/member/orders?status=SHIPPED" onClick={onHide} className="d-block text-center">
								<Image src="/images/order-shipped.svg" />
								<small className="text-secondary d-block mt-1">Shipped</small>
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
