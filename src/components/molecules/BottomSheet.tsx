import { Avatar, Button } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { close } from '@libs/icons';
import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const BottomSheet: FC<BottomSheetProps> = (props) => {
	const { title, image, isActive, onHide, clickHandler, children } = props;

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
					<Avatar size="lg" className="ItemImage" src={image} alt="" />
				</Col>
				<Col>
					<p className="Title">{title}</p>
				</Col>
				<Col xs="auto">
					<IconButton path={close} onClick={onHide} fill="var(--dark)" />
				</Col>
			</Row>
			{children}
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

export interface BottomSheetProps {
	title: any;
	image: string;
	isActive: boolean;
	onHide: () => void;
	clickHandler: () => void;
}

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

	.ItemImage {
		margin-top: -3.625rem;
		border-radius: 0.625rem;
	}
	.Title {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0;
	}
`;

const ButtonWrapper = styled.div`
	width: 100%;
	position: absolute;
	bottom: 1rem;
`;
