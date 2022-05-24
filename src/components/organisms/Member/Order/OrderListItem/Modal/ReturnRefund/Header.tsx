import { Link, ModalBody } from '@components/atoms';
import Icon, { alert } from '@libs/icons';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
	return (
		<Fragment>
			<ModalHeader className="py-3">Return Request</ModalHeader>
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
		</Fragment>
	);
};

export default Header;

const ModalHeader = styled(ModalBody)`
	background-color: var(--primary);
	border-top-left-radius: 0.625rem;
	border-top-right-radius: 0.625rem;
	text-transform: uppercase;
	text-align: center;
	color: var(--white);
	position: relative;
	div {
		position: absolute;
		left: 6px;
		padding: 4px;
		cursor: pointer;
	}
`;
