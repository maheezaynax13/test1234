import { Button, FormInput } from '@components/atoms';
import { orderAPI } from '@libs/api';
import { IAllOrders } from '@libs/api/interfaces';
import { isNotEmpty, isPhoneNumber, IUseFormValues, useNewForm } from '@libs/hooks';
import { FC, Fragment, useState } from 'react';
import { TrackedOrderData } from './TrackedOrderData';

export const TrackOrderForm: FC<PropsType> = ({ closeForm }) => {
	const [trackedOrder, setTrackedOrder] = useState<IAllOrders['items'][0]>(null);
	const [showModal, setModal] = useState(false);

	const onSuccess = async (e: IUseFormValues<typeof initialState>) => {
		try {
			const { success, data, message } = await orderAPI.getTrackingOrder(e?.orderId, e?.phoneNumber);
			if (success) {
				setTrackedOrder(null);
				setTrackedOrder(data);
				setModal(true);
			} else {
				setErrors((prevState) => ({ ...prevState, phoneNumber: String(message) }));
			}
		} catch (error) {}
	};

	const { values, errors, setErrors, handleChange, handleSubmit } = useNewForm(initialState, onSuccess);

	return (
		<Fragment>
			<form onSubmit={handleSubmit} noValidate>
				<FormInput
					label="Phone Number"
					placeholder="01XXXXXXXXX"
					name="phoneNumber"
					value={values.phoneNumber}
					message={errors.phoneNumber}
					onChange={handleChange}
					required
				/>
				<FormInput
					label="Order ID"
					placeholder="Enter Order ID"
					name="orderId"
					value={values.orderId}
					message={errors.orderId}
					onChange={handleChange}
					required
				/>
				<Button block type="submit">
					Submit
				</Button>
			</form>

			<TrackedOrderData
				data={trackedOrder}
				isActive={showModal}
				onHide={() => {
					closeForm();
					setModal(false);
				}}
			/>
		</Fragment>
	);
};

interface PropsType {
	closeForm: () => void;
}

const initialState = {
	phoneNumber: {
		value: '',
		message: null,
		validate: [isNotEmpty, isPhoneNumber],
	},
	orderId: {
		value: '',
		message: null,
		validate: [isNotEmpty],
	},
};
