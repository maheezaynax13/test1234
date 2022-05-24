import { FC } from 'react';
import { Modal, Image } from 'react-bootstrap';

export const OrderPlaced: FC<PropsType> = (props) => {
	return (
		<Modal
			{...props}
			aria-labelledby="OrderPlaced"
			dialogClassName="LoaderOrderPlaced"
			animation={false}
			backdrop="static"
			centered
		>
			<Modal.Body>
				<div className="text-center pt-4 pb-4">
					<Image fluid src="/images/checkmark.png" alt="" />
					<p className="LoaderOrderPlaced-Title">
						Your order has been placed successfully! Now, we are taking you to payment options.
					</p>
					<div className="spinner">
						<div className="bounce1"></div>
						<div className="bounce2"></div>
						<div className="bounce3"></div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

interface PropsType {
	show?: boolean;
	onHide?: () => void;
}
