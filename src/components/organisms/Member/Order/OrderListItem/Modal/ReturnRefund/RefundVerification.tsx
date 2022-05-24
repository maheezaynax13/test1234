import { Button, Link, ModalBody } from '@components/atoms';
import { Input } from '@components/organisms/SellOnZdrop/Common/Input';
import { useForm } from '@libs/hooks';
import Icon, { alert, arrowLeft } from '@libs/icons';
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import styled from 'styled-components';
import { PackageProductProps } from '../../PackageProduct';
import { FormPagesType } from './ProductReturnProcess';

const RefundVerification: FC<PropsType> = ({ productInfo, setCurrentPage }) => {
	const onCallback = () => {
		setCurrentPage('REFUND_SUCCESS');
	};

	const { values, errors, handleChange, handleSelectChange, handleSubmit } = useForm({ initialValues, onCallback });
	return (
		<div>
			<ModalHeader className="py-3">
				<PrevBtn className="prev-icon" onClick={() => setCurrentPage('REFUND_REQUEST')}>
					<Icon path={arrowLeft}></Icon>
				</PrevBtn>
				Return Request
			</ModalHeader>
			<ModalBody style={{ borderBottom: '1px solid #ECECEC' }}>
				<div className=" d-flex flex-column">
					<Icon className="mt-2 mx-auto" path={alert} width={80} height={48} fill="var(--primary)" />
					<p className="my-2 text-justify" style={{ fontWeight: 600 }}>
						<span>Note:</span>Note: Please make sure that you read and understand our{' '}
						<Link href="#" style={{ color: 'var(--danger)' }}>
							'Refund Policy'
						</Link>{' '}
						firmly before you submit a refund request.
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<p className="mt-3" style={{ fontWeight: 600 }}>
						Please verify your request
					</p>
					<Input
						onChange={handleChange}
						name="phone"
						className="mb-3"
						style={{ borderRadius: '3px', border: '1px solid #ECECEC' }}
						placeholder="01929459195"
					/>
					<div style={{ borderRadius: '3px', border: '1px solid #ECECEC' }} className="d-flex pr-2">
						<Input
							onChange={handleChange}
							name="code"
							style={{ border: 'none' }}
							placeholder="Enter Code Here"
						/>
						<Button
							type="button"
							style={{
								whiteSpace: 'nowrap',
								padding: '0',
								margin: '0',
								background: 'none',
								color: 'var(--primary)',
								border: 'none',
							}}
						>
							Send Again
						</Button>
					</div>
					<div className="text-center mt-3 mb-2">
						<Button type="submit" className="px-5 m-auto" pill>
							Verify
						</Button>
					</div>
				</form>
			</ModalBody>
		</div>
	);
};

export default RefundVerification;

interface PropsType {
	productInfo: PropsWithChildren<PackageProductProps>;
	setCurrentPage: Dispatch<SetStateAction<FormPagesType>>;
}

const initialValues = {};

const ModalHeader = styled.div`
	font-weight: 600;
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	border-bottom: 1px solid #ececec;
	text-transform: uppercase;
	text-align: center;
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
