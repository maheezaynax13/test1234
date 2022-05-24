import { Button } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { cart } from '@libs/icons';
import { getCartState } from '@store/actions';
import Router from 'next/router';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { WishlistButton, WishlistButtonProps } from '../WishlistButton';

export const HProductFloatingBar: FC<HProductFloatingBarProps> = ({ clickHandler, ...rest }) => {
	const { totalItems } = useSelector(getCartState);

	return (
		<Wrapper>
			<div className="ButtonGroup">
				<IconButton
					isCount
					count={totalItems}
					path={cart}
					fill="var(--primary)"
					onClick={() => Router.push('/cart')}
				/>
				<Button
					pill
					size="xl"
					className="text-uppercase font-weight-semibold"
					style={{ minWidth: '14.25rem' }}
					onClick={clickHandler}
				>
					Add to cart
				</Button>
				<WishlistButton {...rest} />
			</div>
		</Wrapper>
	);
};

export type HProductFloatingBarProps = {
	clickHandler?: () => void;
} & WishlistButtonProps;

const Wrapper = styled.div`
	width: 100%;
	display: block;
	position: fixed;
	left: 0;
	bottom: 0.875rem;
	padding: 0 1rem;
	z-index: 999;

	.ButtonGroup {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		border-radius: 1.563rem;
		background-color: #e9fff5;
		box-shadow: 0 0 0.375rem rgba(138, 138, 138, 0.24);

		button {
			&:last-child {
				padding: 0;
			}
		}
	}
`;
