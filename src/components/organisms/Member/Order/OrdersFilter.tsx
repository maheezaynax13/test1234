/* eslint-disable quotes */
import { Card, CardBody, Link } from '@components/atoms';
import { formatTitleCase } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const orderStatus = ['ALL', 'UNPAID', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'REFUNDED', 'RETURNED'];
export const OrdersFilter: FC = () => {
	const {
		query: { status = 'ALL' },
	} = useRouter();

	useEffect(() => {
		getOffset();
	}, [status]);

	const getOffset = () => {
		if (typeof window !== undefined) {
			const element = document.getElementById(`active${status}`);
			const rect = element?.getBoundingClientRect();
			if (rect?.x) document.getElementById('items').scrollLeft = rect.x - rect.width - 28;
		}
	};

	return (
		<Card className="mb-2">
			<CardBody className="py-0">
				<Row>
					<Col>
						<Items id="items">
							{orderStatus.map((e, i) => {
								return (
									<Link
										key={i}
										id={`active${e}`}
										href={`/member/orders${e !== 'ALL' ? `?status=${e}` : ''}`}
										className={status === e ? 'active' : ''}
									>
										{formatTitleCase(e.replace(/_/gi, ' '))}
									</Link>
								);
							})}
						</Items>
					</Col>
				</Row>
			</CardBody>
		</Card>
	);
};

const Items = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	overflow: hidden;
	overflow-x: auto;

	a {
		position: relative;
		color: var(--dark);
		font-weight: 500;
		display: inline-block;
		padding: 0.75rem 0.25rem;
		margin: 0 0.875rem;

		&.active {
			&:after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -1px;
				width: 100%;
				height: 0.25rem;
				background-color: var(--primary);
				border-top-left-radius: 0.313rem;
				border-top-right-radius: 0.313rem;
			}
		}

		&:hover {
			color: var(--primary);
			text-decoration: none;
		}
	}
`;
