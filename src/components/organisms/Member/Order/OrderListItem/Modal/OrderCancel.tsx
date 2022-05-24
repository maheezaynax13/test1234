import { Button, FormInput, Modal, ModalBody, ModalProps, SelectPicker } from '@components/atoms';
import { orderAPI } from '@libs/api';
import { useForm } from '@libs/hooks';
import Icon, { alert } from '@libs/icons';
import Router from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

export const OrderCancel: FC<PropsType> = ({ id, ...rest }) => {
	const onCallback = async () => {
		try {
			const { success } = await orderAPI.cancelEntireOrder(id, values.reason, values.comments);
			if (success) {
				rest.onHide();
				Router.push(Router.asPath);
			}
		} catch (error) {}
	};

	const { values, handleChange, handleSelectChange, handleSubmit } = useForm({ initialValues, onCallback });

	return (
		<Modal {...rest}>
			<ModalHeader>Cancel Request</ModalHeader>
			<ModalBody className="border-bottom">
				<div className="w-100 d-flex align-items-center">
					<Icon path={alert} width={48} height={48} fill="var(--danger)" />
					<p className="ml-3 mb-0">
						<span className="font-weight-semibold">Note:</span> Please make sure that you select the right
						option before you submit the cancel request.
					</p>
				</div>
			</ModalBody>
			<ModalBody>
				<form onSubmit={handleSubmit}>
					<SelectPicker
						srOnly
						items={cancelReason}
						placeholder="Choose an option"
						name="reason"
						value={values.reason}
						clickHandler={handleSelectChange}
					/>
					<FormInput
						as="textarea"
						rows={4}
						label="Comments"
						name="comments"
						placeholder="(Optional)"
						value={values.comments}
						onChange={handleChange}
					/>
					<Button pill type="submit" variant="danger" className="d-block text-uppercase ml-auto">
						Submit Cancel Request
					</Button>
				</form>
			</ModalBody>
		</Modal>
	);
};

interface PropsType extends Omit<ModalProps, 'id'> {
	id: number;
}

OrderCancel.defaultProps = {
	closeButton: true,
};

const initialValues = {
	reason: '',
	comments: '',
};

const ModalHeader = styled(ModalBody)`
	background-color: var(--danger);
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	text-transform: uppercase;
	text-align: center;
	color: var(--white);
`;

const cancelReason = [
	{ label: 'CHNAGE_OF_MIND', value: 'CHNAGE_OF_MIND' },
	{ label: 'CHANGE_DELIVERY_ADDRESS', value: 'CHANGE_DELIVERY_ADDRESS' },
	{ label: 'SHIPPING_FEES', value: 'SHIPPING_FEES' },
	{ label: 'FOUND_CHAPER_ELSEWHERE', value: 'FOUND_CHAPER_ELSEWHERE' },
	{ label: 'FORGOT_TO_USER_VOUCHER_VOUCHER_ISSUE', value: 'FORGOT_TO_USER_VOUCHER_VOUCHER_ISSUE' },
	{ label: 'DECIDE_FOR_ALTERNATIVE_PRODUCT', value: 'DECIDE_FOR_ALTERNATIVE_PRODUCT' },
	{ label: 'CHANGE_PAYMENT_METHODS', value: 'CHANGE_PAYMENT_METHODS' },
	{ label: 'DELIVERY_TIME_TOO_LONG', value: 'DELIVERY_TIME_TOO_LONG' },
	{ label: 'DUPLICATE_ORDER', value: 'DUPLICATE_ORDER' },
	{ label: 'CHANGE_COMBINE_ORDER', value: 'CHANGE_COMBINE_ORDER' },
];
