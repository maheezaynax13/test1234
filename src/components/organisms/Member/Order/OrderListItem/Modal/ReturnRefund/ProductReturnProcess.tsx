import { Modal, ModalProps } from '@components/atoms';
import { FC, PropsWithChildren, useState } from 'react';
import { PackageProductProps } from '../../PackageProduct';
import RefundRequest from './RefundRequest';
import RefundSuccess from './RefundSuccess';
import RefundVerification from './RefundVerification';
import ReturnOrder from './ReturnOrder';

export type FormPagesType = 'RETURN_REQUEST' | 'REFUND_REQUEST' | 'REFUND_VERIFICATION' | 'REFUND_SUCCESS';
const ProductReturnProcess: FC<PropsType> = ({ productInfo, ...rest }) => {
	const [currentPage, setCurrentPage] = useState<FormPagesType>('RETURN_REQUEST');
	const modalSize = currentPage === 'REFUND_VERIFICATION' || currentPage === 'REFUND_SUCCESS';

	return (
		<Modal size={modalSize ? 'md' : 'lg'} {...rest} closeButton>
			{(() => {
				switch (currentPage) {
					case 'RETURN_REQUEST':
						return (
							<ReturnOrder
								productInfo={productInfo}
								changeCurrentPage={() => setCurrentPage('REFUND_REQUEST')}
							/>
						);

					case 'REFUND_REQUEST':
						return <RefundRequest productInfo={productInfo} setCurrentPage={setCurrentPage} />;
					case 'REFUND_VERIFICATION':
						return <RefundVerification productInfo={productInfo} setCurrentPage={setCurrentPage} />;
					case 'REFUND_SUCCESS':
						return (
							<RefundSuccess
								clickHandler={() => {
									rest.onHide();
									setCurrentPage('RETURN_REQUEST');
								}}
								productInfo={productInfo}
							/>
						);
				}
			})()}
		</Modal>
	);
};

export default ProductReturnProcess;

interface PropsType extends Omit<ModalProps, 'id'> {
	productInfo: PropsWithChildren<PackageProductProps>;
}
