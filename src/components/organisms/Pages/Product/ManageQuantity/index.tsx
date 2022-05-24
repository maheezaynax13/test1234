import { decrementQty, incrementQty } from '@store/actions';
import { formatNumber } from '@utils/helpers';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, CountText, QtyWrap, StockAvailable, Title, Wrapper } from './styles';

export const ManageQuantity: FC<ManageQuantityProps> = (props) => {
	const { quantity, stock, isStock, inline } = props;
	const dispatch = useDispatch();

	return (
		<Wrapper className={inline ? 'd-flex align-items-center' : 'd-inline-block'}>
			<Title style={{ marginBottom: inline ? '0' : '8px', marginRight: inline ? '10px' : '0' }}>Quantity:</Title>
			<div className="d-flex align-items-center">
				<QtyWrap>
					<Button onClick={() => dispatch(decrementQty())} disabled={quantity <= 1}>
						-
					</Button>
					<CountText>{quantity}</CountText>
					<Button onClick={() => dispatch(incrementQty())} disabled={!(quantity < stock) || quantity >= 10}>
						+
					</Button>
				</QtyWrap>
				{isStock && <StockAvailable>Available: {formatNumber(stock)}</StockAvailable>}
			</div>
		</Wrapper>
	);
};

ManageQuantity.defaultProps = {
	isStock: false,
	inline: false,
};

interface ManageQuantityProps {
	quantity: number;
	stock: number;
	isStock?: boolean;
	inline?: boolean;
}
