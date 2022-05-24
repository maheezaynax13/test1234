import { IconButton } from '@components/molecules';
import { close } from '@libs/icons';
import { FC, HTMLAttributes, useEffect } from 'react';
import { ElementSize } from '../interfaces';
import { Wrapper } from './styles';

export const Modal: FC<ModalProps> = ({ isActive, onHide, children, closeButton, ...rest }) => {
	const BackdropOpened = () => {
		const backdrop = document.createElement('div');
		backdrop.className = 'ModalBackdrop';
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

	if (isActive) {
		return (
			<Wrapper isActive={isActive} {...rest}>
				<div className="Dialog">
					<div className="Dialog-Content">
						{closeButton && <IconButton className="Dialog-Close" path={close} onClick={onHide} />}
						{children}
					</div>
				</div>
			</Wrapper>
		);
	}

	return null;
};

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isActive: boolean;
	onHide: () => void;
	closeButton?: boolean;
	size?: ElementSize;
}

Modal.defaultProps = {
	isActive: false,
	closeButton: false,
};

export * from './ModalBody';
