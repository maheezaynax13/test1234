import { FormInput, SelectPicker, SelectPickerEvent } from '@components/atoms';
import { FC } from 'react';

const PaymentMethod: FC<PropsType> = ({ handleSelectChange, values }) => {
	return (
		<div>
			<div className="mt-5 pr-3 pl-4">
				<h3 className="text-center" style={{ color: '#959595', fontSize: '14px' }}>
					Select Your Refund Method
				</h3>
				<SelectPicker
					items={options}
					name="options"
					placeholder="Refund by bKash"
					value={values.options && `Refund by ${values.options}`}
					clickHandler={handleSelectChange}
				/>
				<FormInput
					srOnly
					className="mb-2"
					placeholder={
						values.options === 'Bank Account' ? `Bank Name` : `Enter Your ${values.options} Number`
					}
				/>
				{values.options === 'Bank Account' && (
					<div>
						<FormInput srOnly className="mb-2" placeholder="Branch Name" />
						<FormInput srOnly className="mb-2" placeholder="Account Number" />
						<FormInput srOnly placeholder="Account Holder Name" />
						<FormInput srOnly placeholder="Routing Number" />
					</div>
				)}
			</div>
		</div>
	);
};

export default PaymentMethod;

const options = [
	{ label: 'bkash', value: 'bkash' },
	{ label: 'nagad', value: 'nagad' },
	{ label: 'rocket', value: 'rocket' },
	{ label: 'Bank Account', value: 'Bank Account' },
];

type PropsType = {
	handleSelectChange: (e: SelectPickerEvent) => void;
	values: any;
};
