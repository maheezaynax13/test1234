/* eslint-disable no-empty */
import { GridProduct } from '@components/organisms';
import { productAPI } from '@libs/api';
import { IProduct } from '@libs/api/interfaces';
import { getCartState } from '@store/actions';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';

const AddedCartPopup: FC<PropsType> = (props) => {
	const [items, setItems] = useState<IProduct[]>(null);
	const _isMounted = useRef(true);
	const router = useRouter();
	const { totalItems } = useSelector(getCartState);
	const {
		query: { slug },
	} = router;

	const settings = {
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	useEffect(() => props.onHide(), [router]);

	useEffect(() => {
		const getItems = async () => {
			try {
				const { success, data } = await productAPI.getRelatedProducts(slug);
				if (success) {
					if (_isMounted.current) {
						setItems(data);
					}
				}
			} catch (error) {}
		};
		getItems();

		return () => {
			_isMounted.current = false;
		};
	}, []);

	return (
		<Modal centered size="lg" {...props}>
			<Modal.Header className="border-0 pb-0" closeButton />
			<Modal.Body className="text-center pt-0">
				<MessageText>
					A new item has been added. You now have {totalItems} {totalItems > 1 ? 'items' : 'item'} in your
					Shopping Cart.
				</MessageText>
				<div className="w-100 d-flex justify-content-center">
					<EventButton variant="dark" onClick={() => router.push('/cart')}>
						Checkout
					</EventButton>
					<EventButton variant="outline-dark" onClick={props.onHide}>
						Continue Shopping
					</EventButton>
				</div>
				<hr />
				<div className="w-100 productSlider">
					<Slider {...settings}>
						{items?.map((el, index) => (
							<div key={index} className="pl-1 pr-1 text-align-left">
								<GridProduct {...el} />
							</div>
						))}
					</Slider>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default AddedCartPopup;

interface PropsType {
	show: boolean;
	onHide: () => void;
}

const MessageText = styled.h5`
	color: var(--dark);
	max-width: 500px;
	margin: 0 auto 20px;
	font-weight: 500;
`;

const EventButton = styled(Button)`
	min-width: 200px;
	min-height: 41px;
	font-weight: 500;
	border-radius: 50rem;
	text-transform: uppercase;

	& + .btn {
		margin-left: 10px;
	}
`;
