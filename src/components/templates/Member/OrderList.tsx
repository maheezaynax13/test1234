/* eslint-disable react/no-unescaped-entities */
import { Pagination } from '@components/atoms';
import { ContentCard, OrderListItem, OrdersFilter } from '@components/organisms';
import { IAllOrders } from '@libs/api/interfaces';
import { FC, Fragment } from 'react';
import { NotFound } from './NotFound';

export const OrderList: FC<IAllOrders> = ({ items, pageNumber, totalPages, total }) => {
	const pagiProps = { pageNumber, totalPages, total };

	return (
		<Fragment>
			<OrdersFilter />
			{items?.length > 0 ? (
				<Fragment>
					{items.map((e, i) => (
						<OrderListItem key={i} {...e} />
					))}
					<Pagination {...pagiProps} />
				</Fragment>
			) : (
				<ContentCard>
					<NotFound>You don't have any order. Let's add some items in cart.</NotFound>
				</ContentCard>
			)}
		</Fragment>
	);
};
