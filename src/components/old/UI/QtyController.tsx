import { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { incrementQty, decrementQty } from '@store/actions';
import { formatNumber } from '@utils/helpers';

const QtyController: FC<PropsType> = ({ quantity, stock, isStock, inline }) => {
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
					<Button onClick={() => dispatch(incrementQty())} disabled={!(quantity < stock)}>
						+
					</Button>
				</QtyWrap>
				{isStock && <StockAvailable>Available: {formatNumber(stock)}</StockAvailable>}
			</div>
		</Wrapper>
	);
};

export default QtyController;

interface PropsType {
	quantity: number;
	stock: number;
	isStock?: boolean;
	inline?: boolean;
}

QtyController.defaultProps = {
	isStock: false,
	inline: false,
};

const Wrapper = styled.div`
	margin-bottom: 15px;
`;

const Title = styled.span`
	font-weight: 500;
`;

const QtyWrap = styled.div`
	overflow: hidden;
	width: 100px;
	height: 38px;
	line-height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ececec;
`;

const Button = styled.button`
	min-width: 32px;
	height: calc(100% + 5px);
	color: var(--dark);
	font-size: 22px;
	font-weight: 500;
	border: 0;
	padding: 0;
	margin-top: -5px;
	background-color: transparent;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;

		&:hover {
			background-color: transparent;
		}
	}
`;

const CountText = styled.div`
	width: 100%;
	text-align: center;
`;

const StockAvailable = styled.span`
	color: var(--gray);
	margin-left: 10px;
`;
