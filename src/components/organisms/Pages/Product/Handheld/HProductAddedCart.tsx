import { Button, Modal, ModalProps } from '@components/atoms';
import { getCartState } from '@store/actions';
import Router from 'next/router';
import { FC } from 'react';
import { ModalBody } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const HProductAddedCart: FC<ModalProps> = (props) => {
	const { totalItems } = useSelector(getCartState);

	return (
		<Modal {...props} size="sm" closeButton>
			<ModalBody>
				<MessageText>
					A new item has been added. You now have {totalItems} {totalItems > 1 ? 'items' : 'item'} in your
					Shopping Cart.
				</MessageText>
				<EventButton pill block outline onClick={props.onHide}>
					Continue Shopping
				</EventButton>
				<EventButton pill block className="mt-3" onClick={() => Router.push('/cart')}>
					Go to checkout
				</EventButton>
			</ModalBody>
		</Modal>
	);
};

const MessageText = styled.p`
	color: var(--dark);
	margin: 1rem auto;
	font-weight: 500;
	text-align: center;
`;

const EventButton = styled(Button)`
	max-width: 12rem;
	margin: 0 auto;
	font-weight: 500;
	text-transform: uppercase;
`;
