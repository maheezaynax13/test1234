/* eslint-disable indent */
import { CardBody } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import { formatStatus } from '@utils/helpers';
import dateFormat from 'dateformat';
import { FC } from 'react';
import styled, { css } from 'styled-components';

export const TrackingList: FC<TrackingListProps> = ({ data }) => {
	if (data?.length > 0) {
		return (
			<CardBody>
				<ListWrapper isCancelled={data[data.length - 1].status === 'CANCELLED'}>
					{data.map(({ status, message, timestamp }, i) => (
						<ListItem key={i}>
							<p className="font-weight-semibold">{formatStatus(status)}</p>
							<p className="text-dark">{message}</p>
							<p className="text-secondary">{dateFormat(timestamp, process.env.dateTimeFormat)}</p>
						</ListItem>
					))}
				</ListWrapper>
			</CardBody>
		);
	}

	return null;
};

export type TrackingListProps = {
	data: IAllOrders['items'][0]['packages'][0]['items'][0]['history'];
};

const ListItem = styled.li`
	list-style: none;
	display: block;
	width: 100%;
	margin: 0 0 1rem 2rem;
	position: relative;

	p {
		margin-bottom: 0;

		&:first-child {
			color: var(--primary);
		}
	}

	&:after {
		content: '';
		position: absolute;
		top: 21px;
		left: -1.4rem;
		width: 1px;
		height: 100%;
		border-left: 1px dashed var(--primary);
	}

	&:before {
		content: '';
		position: absolute;
		top: 3px;
		left: -2rem;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z' fill='rgba(0,181,91,1)'/%3E%3C/svg%3E");
		z-index: 1;
	}
`;

const ListWrapper = styled.ul<{ isCancelled: boolean }>`
	margin: 0;
	padding: 0;

	${ListItem} {
		${({ isCancelled }) => {
			if (isCancelled) {
				return css`
					p:first-child {
						color: var(--danger);
					}

					&:after {
						border-left: 1px dashed var(--danger);
					}

					&:before {
						background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z' fill='rgba(255,5,42,1)'/%3E%3C/svg%3E");
					}
				`;
			}
		}}
	}
`;
