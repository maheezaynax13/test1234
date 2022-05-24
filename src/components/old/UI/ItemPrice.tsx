import { FC } from 'react';
import styled from 'styled-components';
import { formatPrice } from '@utils/helpers';
import { Tag } from './styles';

const ItemPrice: FC<PropsType> = ({ size = 'md', current, old, discount }) => (
	<Price className={size}>
		<PriceCurrent>{formatPrice(current)}</PriceCurrent>
		{old > 0 && <PriceOld>{formatPrice(old)}</PriceOld>}
		{discount && <Badge pill>{discount}</Badge>}
	</Price>
);

export default ItemPrice;

interface PropsType {
	size?: 'md' | 'lg';
	current: number;
	old: number;
	discount: number;
}

const PriceCurrent = styled.span`
	color: var(--dark);
`;

const PriceOld = styled.del`
	color: #cecece;
	margin-left: 20px;
`;

const Badge = styled(Tag)`
	font-weight: normal;
`;

const Price = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	&.lg {
		${PriceCurrent} {
			font-size: 25px;
			font-weight: 500;
		}

		${PriceOld} {
			font-weight: 500;
		}

		${Badge} {
			font-weight: 500;
		}
	}
`;
