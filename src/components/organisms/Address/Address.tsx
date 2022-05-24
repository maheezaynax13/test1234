import { IconButton, IconButtonProps } from '@components/molecules';
import { IAddAddress } from '@libs/api/interfaces';
import Icon, { building, deleteBin, home, pencil } from '@libs/icons';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Address: FC<AddressProps> = (props) => {
	const { id, name, phoneNumber, house, road, area, city, region, addressType, editHandler, isDelete, ...rest } =
		props;

	return (
		<Row>
			<Col md={6}>
				<div className="w-100 mb-3">
					<h6 className="font-weight-semibold">Contact Details</h6>
					<p className="text-secondary mb-1">{name}</p>
					<p className="text-secondary mb-1">{phoneNumber}</p>
				</div>
				<div className="w-100">
					<h6 className="font-weight-semibold">Address</h6>
					<p className="text-secondary mb-0">
						{house + ', ' + road + ', ' + area + ', ' + city + ', ' + region + ', Bangladesh'}
					</p>
				</div>
			</Col>
			<Col md={6}>
				<div className="w-100 text-right">
					{isDelete && <IconButton path={deleteBin} fill="var(--danger)" className="mr-2" {...rest} />}
					<IconButton path={pencil} fill="var(--dark)" onClick={() => editHandler(id)} />
				</div>
				<Wrapper>
					<h6 className="font-weight-semibold">Address Type</h6>
					<div className="AddressType">
						<Icon
							path={addressType === 'Home' ? home : building}
							width={18}
							height={18}
							fill="var(--dark)"
						/>
						<span className="text-dark ml-1">{addressType} Address</span>
					</div>
				</Wrapper>
			</Col>
		</Row>
	);
};

export interface AddressProps extends IAddAddress, Pick<IconButtonProps, 'onClick' | 'disabled'> {
	editHandler?: (id: string) => void;
	isDelete?: boolean;
}

const Wrapper = styled.div`
	max-width: 18.75rem;
	margin-top: 1.5rem;
	margin-left: auto;

	.AddressType {
		width: 13rem;
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--border);
	}
`;
