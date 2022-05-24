import { Button, FormCheck, FormInput, SelectPicker, SelectPickerEvent } from '@components/atoms';
import { IAddAddressPayload } from '@libs/api/interfaces';
import { useAddress, useForm } from '@libs/hooks';
import { addressValidate } from '@libs/validations';
import { addressOptions } from '@utils/constants';
import { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { initialErrors, initialValues } from './constants';

export const AddressForm: FC<AddressFormProps> = ({ setAddress, ...rest }) => {
	const { address, setRegion, setCity } = useAddress();
	const form = useForm<typeof initialValues, typeof initialErrors>({
		initialValues,
		initialErrors,
		validate: addressValidate,
		onCallback: setAddress,
	});
	const { values, errors, setValues, setErrors, handleChange, handleSelectChange, handleSubmit } = form;

	useEffect(() => {
		if (rest && Object.keys(rest).length > 0) {
			setValues((prevState) => {
				const newObj = { ...prevState };
				for (const key in newObj) {
					if (rest[key]) newObj[key] = rest[key];
				}
				return newObj;
			});
		}
	}, []);

	const handleAddressChange = (e: Omit<SelectPickerEvent, 'value'> & { value: string }) => {
		const { name, value, required } = e;
		if (required) {
			const errorsData = addressValidate({ [name]: value });
			setErrors((prevState) => ({ ...prevState, ...errorsData }));
		}
		setValues((prevState) => {
			if (name === 'region') {
				setRegion(value);
				return { ...prevState, region: value, city: '', area: '' };
			} else if (name === 'city') {
				setCity(values.region, value);
				return { ...prevState, city: value, area: '' };
			} else {
				return { ...prevState, [name]: value };
			}
		});
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<Row>
				<Col md={6}>
					<FormInput
						label="Name"
						name="name"
						value={values.name}
						onChange={handleChange}
						message={errors.name}
						required
					/>
					<SelectPicker
						label="Region"
						name="region"
						placeholder="Please choose a option"
						items={address.region.map((e) => ({ label: e.en, value: e.en }))}
						value={values.region}
						clickHandler={handleAddressChange}
						message={errors.region}
						disabled={address.region.length < 1}
						required
					/>
					<SelectPicker
						label="City"
						name="city"
						placeholder="Please choose a option"
						items={address.city.map((e) => ({ label: e.en, value: e.en }))}
						value={values.city}
						clickHandler={handleAddressChange}
						message={errors.city}
						disabled={address.city.length < 1}
						required
					/>
					<SelectPicker
						label="Area"
						name="area"
						placeholder="Please choose a option"
						items={address.area.map((e) => ({ label: e.en, value: e.en }))}
						value={values.area}
						clickHandler={handleAddressChange}
						message={errors.area}
						disabled={address.area.length < 1}
						required
					/>
					<FormInput
						label="House"
						name="house"
						placeholder="Apartment, suite, unit, building, floor, etc."
						value={values.house}
						onChange={handleChange}
						message={errors.house}
						required
					/>
				</Col>
				<Col md={6}>
					<FormInput
						label="Phone Number"
						name="phoneNumber"
						value={values.phoneNumber}
						onChange={handleChange}
						message={errors.phoneNumber}
						required
					/>
					<FormInput
						label="Road"
						name="road"
						value={values.road}
						onChange={handleChange}
						message={errors.road}
						required
					/>
					<FormInput
						as="textarea"
						rows={5}
						label="Add delivery instructions"
						name="deliveryInstruction"
						placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
						value={values.deliveryInstruction}
						onChange={handleChange}
					/>
					<SelectPicker
						label="Address Type"
						name="addressType"
						placeholder="Please choose a option"
						items={addressOptions}
						value={values.addressType}
						clickHandler={handleSelectChange}
						message={errors.addressType}
						required
					/>
				</Col>
				<Col md={6}>
					<FormCheck
						type="checkbox"
						name="shipping"
						label="Set as default shipping address"
						checked={values.shipping}
						onChange={handleChange}
					/>
				</Col>
				<Col md={6}>
					<FormCheck
						type="checkbox"
						name="billing"
						label="Set as default billing address"
						checked={values.billing}
						onChange={handleChange}
					/>
				</Col>
			</Row>
			<Button pill type="submit">
				Add Address
			</Button>
		</form>
	);
};

export interface AddressFormProps extends Partial<typeof initialValues> {
	setAddress: (data: IAddAddressPayload) => void;
}
