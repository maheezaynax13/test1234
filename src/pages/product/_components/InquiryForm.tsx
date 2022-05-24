import { FormInput } from '@components/old/Form';
import { useOldForm } from '@libs/hooks';
import { validations } from '@libs/validations/productInquiry';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const InquiryForm: FC<PropsType> = ({ productName }) => {
	const router = useRouter();

	useEffect(() => {
		const { asPath } = router;

		if (productName && asPath) {
			const data = { productName, productURL: `${process.env.publicURL}${asPath}` };
			setValues((prevState) => ({ ...prevState, ...data }));
		}
	}, [productName, router]);

	const handleSubmit = () => {
		console.log(values);
	};

	const { values, setValues, errors, changeHandler, submitHandler } = useOldForm(handleSubmit, validations);

	return (
		<Form style={{ maxWidth: '570px' }} onSubmit={submitHandler} noValidate>
			<p className="text-uppercase font-weight-semibold text-dark">Fill-up the inquiry form</p>
			<FormInput
				isInline
				colSize={4}
				label="Product Name"
				name="productName"
				value={values.productName ?? ''}
				onChange={changeHandler}
				errorMessage={errors.productName}
				disabled={!!values.productName}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="Product Url"
				name="productURL"
				value={values.productURL ?? ''}
				onChange={changeHandler}
				errorMessage={errors.productURL}
				disabled={!!values.productURL}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="Quantity"
				name="quantity"
				value={values.quantity ?? ''}
				onChange={changeHandler}
				errorMessage={errors.quantity}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="Target Price (BDT)"
				name="price"
				value={values.price ?? ''}
				onChange={changeHandler}
				errorMessage={errors.price}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="Customer Note"
				name="customerNote"
				as="textarea"
				rows={3}
				value={values.customerNote ?? ''}
				onChange={changeHandler}
			/>
			<FormInput
				isInline
				colSize={4}
				label="Customer Name"
				name="customerName"
				value={values.customerName ?? ''}
				onChange={changeHandler}
				errorMessage={errors.customerName}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="Email Address"
				name="emailAddress"
				value={values.emailAddress ?? ''}
				onChange={changeHandler}
			/>
			<FormInput
				isInline
				colSize={4}
				label="Phone Number"
				name="phoneNumber"
				value={values.phoneNumber ?? ''}
				onChange={changeHandler}
				errorMessage={errors.phoneNumber}
				required
			/>
			<FormInput
				isInline
				colSize={4}
				label="WhatsApp"
				name="whatsApp"
				value={values.whatsApp ?? ''}
				onChange={changeHandler}
			/>
			<Row>
				<Col sm={4}></Col>
				<Col sm={8}>
					<Button block type="submit" className="text-uppercase font-weight-semibold">
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default InquiryForm;

interface PropsType {
	productName: string;
}
