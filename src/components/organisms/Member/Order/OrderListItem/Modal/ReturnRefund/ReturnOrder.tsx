import { Button, Image, SelectPicker } from '@components/atoms';
import { useForm } from '@libs/hooks';
import { FC, PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { PackageProductProps } from '../../PackageProduct';
import Comment from './Comment';
import Header from './Header';
import Shipment from './Shipment';
import UploadImages from './UploadImages';

const ReturnOrder: FC<PropsType> = ({ productInfo, changeCurrentPage }) => {
	const onCallback = (data) => {
		data.productInfo = productInfo;
	};

	const { values, errors, handleChange, handleSelectChange, handleSubmit } = useForm({ initialValues, onCallback });

	const {
		productInfo: { imageURL, productName, chosenVariant },
		quantity,
		price,
		history,
		isSidebar,
		clickHandler,
		hideViewDetail,
	} = productInfo;
	const status = history[history.length - 1].status;

	return (
		<>
			<Header />
			<form className="mx-3 mb-3" onSubmit={handleSubmit}>
				<div className="pt-3 mb-3" style={{ borderBottom: '1px solid #ECECEC' }}>
					<SelectPicker
						srOnly
						items={cancelReason}
						placeholder="Select a reason"
						name="reason"
						value={values.reason}
						clickHandler={handleSelectChange}
					/>
					<Row className="w-100 pb-3">
						<Col md="auto">
							<ProductImage thumbnail src={imageURL} alt={productName} />
						</Col>
						<Col>
							<Title>{productName}</Title>
							{chosenVariant && Object.keys(chosenVariant).length > 0 && (
								<Attributes>
									{Object.entries(chosenVariant).map(([key, value], i) => (
										<span key={i}>
											{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
										</span>
									))}
								</Attributes>
							)}
							<div className="d-flex align-items-center">
								<p className="mr-3">Quantity:</p>
								<SelectPicker
									style={{ width: '65px', marginBottom: '0' }}
									items={Array.from({ length: quantity }, (_, i) => i + 1).map((el) => ({
										label: String(el),
										value: String(el),
									}))}
									srOnly
									placeholder="0"
									name="quantity"
									value={values.quantity}
									clickHandler={handleSelectChange}
								/>
							</div>
						</Col>
					</Row>
				</div>
				<div className="py-3 mb-2" style={{ borderBottom: '1px solid #ECECEC' }}>
					<UploadImages />
				</div>
				<div className="py-3">
					<Shipment />
				</div>
				<div>
					<Comment />
				</div>
				<div className="text-right mt-2">
					<Button
						style={{ minWidth: '154px', minHeight: '45px' }}
						onClick={changeCurrentPage}
						pill
						type="submit"
					>
						Next
					</Button>
				</div>
			</form>
		</>
	);
};

export default ReturnOrder;

const Title = styled.p`
	margin: 0 0 5px 0;
`;
const Attributes = styled.div`
	width: auto;
	display: inline-block;
	margin-bottom: 0.5rem;

	span {
		color: var(--light-gray);
		margin-right: 2rem;
	}
`;

const ProductImage = styled(Image)`
	width: 5.625rem;
	height: 100%;
	display: block;
	object-fit: cover;
`;

const initialValues = {
	productInfo: null,
	reason: '',
	quantity: 0,
	comments: '',
	images: null,
};

interface PropsType {
	productInfo: PropsWithChildren<PackageProductProps>;
	changeCurrentPage: () => void;
}

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
