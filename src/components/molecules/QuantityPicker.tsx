import { add, subtract } from '@libs/icons';
import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconButton } from './Button';

export const QuantityPicker: FC<QuantityPickerProps> = ({ stock, quantity, subtractHandler, addHandler, ...rest }) => (
	<Wrapper {...rest}>
		<IconButton
			path={subtract}
			width={16}
			height={16}
			fill="var(--dark)"
			disabled={!(quantity > 1)}
			onClick={subtractHandler}
		/>
		<span className="qtyCount">{quantity}</span>
		<IconButton
			path={add}
			width={16}
			height={16}
			fill="var(--dark)"
			disabled={!(quantity < stock) || quantity >= 10}
			onClick={addHandler}
		/>
	</Wrapper>
);

export interface QuantityPickerProps extends HTMLAttributes<HTMLDivElement> {
	stock: number;
	quantity: number;
	subtractHandler: () => void;
	addHandler: () => void;
}

const Wrapper = styled.div`
	min-width: 5rem;
	padding: 3px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--border);

	.qtyCount {
		padding: 0 0.5rem;
		text-align: center;
		font-weight: 500;
	}
`;
