import { Button, FormCheck, Link, ModalBody } from '@components/atoms';
import { useForm } from '@libs/hooks';
import Icon, { alert, arrowLeft } from '@libs/icons';
import { Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { PackageProductProps } from '../../PackageProduct';
import PaymentMethod from './PaymentMethod';
import { FormPagesType } from './ProductReturnProcess';

const RefundRequest: FC<PropsType> = ({ productInfo, setCurrentPage }) => {
	const [checkValues, setCheckValues] = useState({
		isBankTransfer: false,
		isViaVoucher: false,
	});

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

	const handleBankTransferChange = (e) => {
		const newValues = { ...checkValues };
		newValues.isBankTransfer = true;
		newValues.isViaVoucher = false;
		setCheckValues(newValues);
	};

	const handleViaVoucherChange = (e) => {
		const newValues = { ...checkValues };
		newValues.isBankTransfer = false;
		newValues.isViaVoucher = true;
		setCheckValues(newValues);
	};

	return (
		<div>
			<ModalHeader className="py-3">
				<PrevBtn className="prev-icon" onClick={() => setCurrentPage('RETURN_REQUEST')}>
					<Icon path={arrowLeft}></Icon>
				</PrevBtn>
				Return Request
			</ModalHeader>
			<ModalBody style={{ borderBottom: '1px solid #ECECEC' }}>
				<div className=" d-flex mx-3">
					<Icon className="mt-2" path={alert} width={80} height={48} fill="var(--primary)" />
					<p className="ml-2 my-2" style={{ fontWeight: 600 }}>
						<span>Note:</span> If your request is not eligible for returning items to us the request may be
						rejected. So, please make sure that you read and understand our{' '}
						<Link href="#" style={{ color: 'var(--danger)' }}>
							'Return Policy'
						</Link>{' '}
						firmly before you submit a return request.
					</p>
				</div>
			</ModalBody>
			<ModalBody className="my-3">
				<RefundDetails>
					<form>
						<div className="d-flex align-items-start">
							<FormCheck
								type="radio"
								id="refund"
								name="refund"
								value="refund"
								onChange={handleBankTransferChange}
							/>

							<div className="ml-3">
								<label
									style={{ fontWeight: 600, color: '#4F4F4F' }}
									className="p-0 my-auto"
									htmlFor="refund"
								>
									Refund via Bank Transfer
								</label>
								<p style={{ color: '#B5B5B5' }} className="p-0 m-0">
									Refund timeline: 4-5 working days after return quality check is completed by zDrop
								</p>
							</div>
						</div>
						{checkValues.isBankTransfer && (
							<PaymentMethod handleSelectChange={handleSelectChange} values={values} />
						)}
						<div className="d-flex align-items-start mt-4">
							<FormCheck
								type="radio"
								id="css"
								name="refund"
								value="CSS"
								onChange={handleViaVoucherChange}
							/>
							<div className="ml-3">
								<label style={{ fontWeight: 600, color: '#4F4F4F' }} className="m-0" htmlFor="css">
									Refund via Voucher
								</label>
								<p style={{ color: '#B5B5B5' }} className="p-0 m-0">
									Refund timeline: 4-5 working days after return quality check is completed by zDrop
								</p>
							</div>
						</div>
					</form>

					<Details>
						<p style={{ color: '#1A1A1A', fontWeight: 600 }}>Refund Details</p>
						<div className="d-flex justify-content-between">
							<p style={{ color: '#828282', fontWeight: 600, fontSize: '12px' }}>Item Price</p>
							<p style={{ color: '#4F4F4F', fontWeight: 600, fontSize: '12px' }}>৳ {price}</p>
						</div>
						<hr />
						<div className="d-flex justify-content-end">
							<p className="mr-3" style={{ color: '#828282', fontWeight: 600, fontSize: '12px' }}>
								Total Refund Amount
							</p>
							<p style={{ fontWeight: 600, color: '#4F4F4F' }}>৳ {price}</p>
						</div>
						<div className="text-right mt-2">
							<Button
								style={{ minWidth: '154px', minHeight: '45px' }}
								onClick={() => setCurrentPage('REFUND_VERIFICATION')}
								pill
								type="submit"
							>
								Next
							</Button>
						</div>
					</Details>
				</RefundDetails>
			</ModalBody>
		</div>
	);
};

export default RefundRequest;

const initialValues = {
	options: '',
	labels: '',
};

interface PropsType {
	productInfo: PropsWithChildren<PackageProductProps>;
	setCurrentPage: Dispatch<SetStateAction<FormPagesType>>;
}

const ModalHeader = styled(ModalBody)`
	background-color: var(--primary);
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	text-transform: uppercase;
	text-align: center;
	color: var(--white);
	position: relative;
	.prev-icon {
		position: absolute;
		left: 9px;
	}
`;

const PrevBtn = styled.button`
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
`;

const RefundDetails = styled.div`
	min-height: 723px;
	position: relative;
`;

const Details = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
