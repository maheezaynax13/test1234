import { Card } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { IAllOrders } from '@libs/api/interfaces';
import { close } from '@libs/icons';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { PackageHeader } from './PackageHeader';
import { PackageProduct } from './PackageProduct';
import { TrackingList } from './TrackingList';

export const ProductTracking: FC<ProductTrackingProps> = (props) => {
	const { packageID, shopInfo, fulfilledby, packageName, items, onHide } = props;
	const headerProps = { shopInfo, fulfilledby, packageName };

	useEffect(() => {
		const body = document.body;
		const backdrop = document.createElement('div');

		if (packageID) {
			backdrop.className = 'ModalBackdrop';
			backdrop.addEventListener('click', () => onHide());
			body.appendChild(backdrop);
			body.classList.add('ModalActive');
		} else {
			body.classList.remove('ModalActive');
			backdrop.removeEventListener('click', () => onHide());
			backdrop.remove();
		}

		return () => {
			body.classList.remove('ModalActive');
			backdrop.removeEventListener('click', () => onHide());
			backdrop.remove();
		};
	}, [packageID]);

	return (
		<Wrapper show={!!packageID}>
			<Card className="Card">
				<IconButton className="IconBtn" path={close} onClick={onHide} />
				<PackageHeader {...headerProps} />
				<PackageProduct isSidebar {...items?.[0]} />
				<TrackingList data={items?.[0]?.history} />
			</Card>
		</Wrapper>
	);
};

type Package = IAllOrders['items'][0]['packages'][0];
export interface ProductTrackingProps extends Package {
	onHide: () => void;
}

const Wrapper = styled.div<{ show: boolean }>`
	position: fixed;
	top: 0;
	right: ${({ show }) => (show ? '0rem' : '-29rem')};
	width: 28rem;
	min-height: 100vh;
	z-index: 1060;
	border-left: 1px solid var(--border);
	box-shadow: 0 0 6px rgba(200, 200, 200, 0.16);
	background-color: var(--white);
	transition: right 0.3s ease-in-out;

	.Card {
		border: 0;
	}

	.IconBtn {
		position: absolute;
		top: 5px;
		left: 5px;
		z-index: 1090;
		display: none;
	}

	@media (max-width: 767.99px) {
		width: 100%;

		.IconBtn {
			display: block;
		}
	}
`;
