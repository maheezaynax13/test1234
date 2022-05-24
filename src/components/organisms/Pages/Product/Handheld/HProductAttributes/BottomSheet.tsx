import { Avatar, Button } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { ISingleProduct } from '@libs/api/interfaces';
import { close } from '@libs/icons';
import { getProductState } from '@store/actions';
import { formatPrice } from '@utils/helpers';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ManageQuantity } from '../../ManageQuantity';
import { ProductAttributes } from '../../ProductAttributes';

export const BottomSheet: FC<BottomSheetProps> = (props) => {
	const [selectedImage, setSelectedImage] = useState<BottomSheetProps['attributes'][0]['imageURL']['medium']>(null);
	const { isActive, onHide, clickHandler, mainImage, attributes, stock } = props;
	const {
		price: { current },
		quantity,
		stock: itemStock,
	} = useSelector(getProductState);
	const attrsProps = { attributes, stock };
	const qtyProps = {
		isStock: true,
		quantity,
		stock: itemStock,
	};

	useEffect(() => {
		if (attributes?.length > 0 && attributes?.[0]?.imageURL?.medium) {
			setSelectedImage(attributes?.[0]?.imageURL?.medium);
		} else {
			setSelectedImage(mainImage?.medium);
		}
	}, [mainImage, attributes]);

	const BackdropOpened = () => {
		const backdrop = document.createElement('div');
		backdrop.className = 'ModalBackdrop';
		backdrop.addEventListener('click', () => onHide());
		document.body.appendChild(backdrop);
		document.querySelector('body').classList.add('ModalActive');
	};

	const BackdropClosed = () => {
		document.querySelector('body').classList.remove('ModalActive');
		document?.querySelector('.ModalBackdrop')?.remove();
	};

	useEffect(() => {
		if (isActive) {
			BackdropOpened();
		} else {
			BackdropClosed();
		}

		return () => {
			BackdropClosed();
		};
	}, [isActive]);

	return (
		<Wrapper style={{ bottom: `${isActive ? '0' : '-100vh'}` }}>
			<Row className="align-items-center mb-3">
				<Col xs="auto">
					<Avatar size="lg" className="ItemImage" src={selectedImage} alt="" />
				</Col>
				<Col>
					<p className="ItemPrice">{formatPrice(current)}</p>
				</Col>
				<Col xs="auto">
					<IconButton path={close} onClick={onHide} />
				</Col>
			</Row>
			<ProductAttributes {...attrsProps} clickHandler={(e) => setSelectedImage(e?.medium ?? e?.big)} />
			<ManageQuantity {...qtyProps} />
			<ButtonWrapper>
				<Button
					block
					pill
					size="lg"
					className="font-weight-semibold text-uppercase mx-auto"
					style={{ maxWidth: '14rem' }}
					onClick={clickHandler}
				>
					Continue
				</Button>
			</ButtonWrapper>
		</Wrapper>
	);
};

type PropsType = {
	isActive: boolean;
	onHide: () => void;
	clickHandler: () => void;
};
export type BottomSheetProps = Pick<ISingleProduct, 'mainImage' | 'attributes' | 'stock'> & PropsType;

const Wrapper = styled.div`
	width: 100%;
	min-height: 70vh;
	display: block;
	padding: 0.5rem 1rem 1rem 1rem;
	margin-left: -0.469rem;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	background-color: var(--white);
	position: fixed;
	transition: 0.3s;
	z-index: 9999;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	position: absolute;
	bottom: 1rem;
`;
