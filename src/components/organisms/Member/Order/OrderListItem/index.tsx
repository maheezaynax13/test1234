import { Card } from '@components/atoms';
import { IAllOrders } from '@libs/api/interfaces';
import { FC, useState } from 'react';
import { OrderItemHeader } from './OrderItemHeader';
import { PackageItem } from './PackageItem';
import { ProductTracking } from './ProductTracking';

export const OrderListItem: FC<OrderListItemProps> = (props) => {
	const [isSidebar, setSidebar] = useState<OrderListItemProps['packages'][0]>(null);
	const { orderID, paymentStatus, createdAt, packages, itemStatusArr } = props;
	const headerProps = { orderID, itemStatusArr, paymentStatus, createdAt };

	return (
		<Card className="overflow-hidden mb-3">
			<OrderItemHeader {...headerProps} />
			{packages?.map((e, i) => (
				<PackageItem key={i} {...e} clickHandler={setSidebar} />
			))}
			<ProductTracking {...isSidebar} onHide={() => setSidebar(null)} />
		</Card>
	);
};

export type OrderListItemProps = IAllOrders['items'][0];
