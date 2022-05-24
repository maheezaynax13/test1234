/* eslint-disable indent */
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Icon, { cart, cartFull, mapPin, mapPinFull, wallet, walletFull } from '@libs/icons';

export const ShoppingSteps: FC = () => {
	const [isActive, setActive] = useState<number>(null);
	const router = useRouter();
	const { pathname } = router;

	useEffect(() => {
		switch (pathname) {
			case '/cart':
				setActive(1);
				break;

			case '/shipping':
				setActive(2);
				break;

			case '/payment':
				setActive(3);
				break;
		}
	}, [router]);

	const ItemStep: FC<ItemStepProps> = ({ step, title, path, pathActive }) => {
		return (
			<Item>
				<Icon
					path={isActive > step ? pathActive : path}
					width={21}
					height={21}
					fill={isActive >= step ? 'var(--primary)' : 'var(--light-gray)'}
				/>
				<span className={isActive > step ? 'text-primary' : ''}>{title}</span>
			</Item>
		);
	};

	if (pathname === '/cart' || pathname === '/shipping' || pathname === '/payment') {
		return (
			<Wrapper>
				<Container>
					<Row>
						<Col>
							<ListItems>
								<ItemStep step={1} title="Checkout" path={cart} pathActive={cartFull} />
								<ItemStep step={2} title="Shipping Information" path={mapPin} pathActive={mapPinFull} />
								<ItemStep step={3} title="Payment" path={wallet} pathActive={walletFull} />
							</ListItems>
						</Col>
					</Row>
				</Container>
			</Wrapper>
		);
	}

	return null;
};

interface ItemStepProps {
	step: number;
	title: string;
	path: string;
	pathActive: string;
}

const Wrapper = styled.div`
	padding: 0.625rem 0;
	background-color: var(--white);
`;

const ListItems = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
`;

const Item = styled.li`
	list-style: none;
	margin: 0.313rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		color: var(--light-gray);
		font-weight: 500;
		margin-left: 0.625rem;
		text-transform: uppercase;
	}
`;
