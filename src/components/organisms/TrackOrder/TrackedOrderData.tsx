import { IAllOrders } from '@libs/api/interfaces';
import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { TrackedOrder } from './TrackedOrder';

export const TrackedOrderData: FC<PropsType> = ({ isActive, data, onHide }) => {
	return (
		<Modal centered size="lg" show={isActive} onHide={onHide}>
			<Modal.Header className="border-0 p-0 m-0" closeButton></Modal.Header>
			<TrackedOrder {...data} />
		</Modal>
	);
};

interface PropsType {
	isActive: boolean;
	data: IAllOrders['items'][0];
	onHide: () => void;
}
