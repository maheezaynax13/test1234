import { Button, ModalBody } from '@components/atoms';
import Icon, { checkboxCircle } from '@libs/icons';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PackageProductProps } from '../../PackageProduct';

const RefundSuccess: FC<PropsType> = ({ productInfo, clickHandler }) => {
	return (
		<div>
			<ModalHeader className="py-3">Return Request</ModalHeader>
			<ModalBody>
				<div className="text-center">
					<Icon className="mb-2" path={checkboxCircle} width={37} height={37} fill="var(--primary)"></Icon>
					<h5 style={{ fontSize: '16px', fontWeight: 600, color: '#1D1D1E' }}>
						Refund Request Submitted Successfully
					</h5>
					<p style={{ color: '#B5B5B5' }}>Please be patient while we process your refund request.</p>
					<h5 style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '16px' }}>
						Return Ticket Number : RZD010282103
					</h5>
					<p style={{ fontSize: '12px', color: '#B5B5B5' }}>
						Please pack the return product(s) securely and stick the return shipping label or write the
						return ticket number and order number on the outer side of the package.
					</p>
					<Button pill variant="dark" className="px-5" onClick={clickHandler}>
						Close
					</Button>
				</div>
			</ModalBody>
		</div>
	);
};

export default RefundSuccess;

interface PropsType {
	productInfo: PropsWithChildren<PackageProductProps>;
	clickHandler: () => void;
}

const ModalHeader = styled.div`
	font-weight: 600;
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	border-bottom: 1px solid #ececec;
	text-transform: uppercase;
	text-align: center;
	position: relative;
`;
