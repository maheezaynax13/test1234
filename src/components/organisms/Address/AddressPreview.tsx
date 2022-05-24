/* eslint-disable no-empty */
import { FC, Fragment, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { IAddAddress, IAddAddressPayload } from '@libs/api/interfaces';
import { Card, CardBody } from '@components/atoms';
import { IconButton } from '@components/molecules';
import Icon, { home, building, pencil } from '@libs/icons';
import { addressAPI } from '@libs/api';
import { TypeHeader, TypeHeaderProps } from './TypeHeader';
import { AddressForm } from './AddressForm';
import { BillingAddress, BillingAddressProps } from './BillingAddress';

export const AddressPreview: FC<AddressPreviewProps> = (props) => {
	const [formType, setFormType] = useState<'add' | 'edit'>(null);
	const { id, header, isBilling, updateHandler, clickHandler, handleAddress, ...rest } = props;
	const headerProps = { header, updateHandler, formType, setFormType };

	const addressHandler = async (payload: IAddAddressPayload) => {
		if (formType === 'edit') {
			try {
				const { success, data } = await addressAPI.updateAddress(id, payload);
				if (success) {
					handleAddress(data);
					setFormType(null);
				}
			} catch (error) {}
		} else {
			try {
				const { success, data } = await addressAPI.addAddress(payload);
				if (success) {
					handleAddress(data);
					setFormType(null);
				}
			} catch (error) {}
		}
	};

	if (formType === 'add') {
		return (
			<Fragment>
				<TypeHeader {...headerProps} />
				<AddressForm setAddress={addressHandler} />
			</Fragment>
		);
	} else if (isBilling) {
		return (
			<BillingAddress
				onClick={() => setFormType('add')}
				clickHandler={clickHandler}
				updateHandler={updateHandler}
			/>
		);
	} else if (rest && Object.keys(rest).length > 0) {
		const { name, phoneNumber, house, road, area, city, region, addressType } = rest;

		if (formType === 'edit') {
			return (
				<Fragment>
					<TypeHeader {...headerProps} />
					<AddressForm {...rest} setAddress={addressHandler} />
				</Fragment>
			);
		}

		return (
			<Fragment>
				<TypeHeader {...headerProps} />
				<Card>
					<CardBody>
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
										{house +
											', ' +
											road +
											', ' +
											area +
											', ' +
											city +
											', ' +
											region +
											', Bangladesh'}
									</p>
								</div>
							</Col>
							<Col md={6}>
								<div className="w-100 text-right">
									<IconButton path={pencil} fill="var(--dark)" onClick={() => setFormType('edit')} />
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
					</CardBody>
				</Card>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<TypeHeader isButton {...headerProps} />
			<AddressForm setAddress={addressHandler} />
		</Fragment>
	);
};

export interface AddressPreviewProps
	extends IAddAddress,
		Pick<TypeHeaderProps, 'header' | 'updateHandler'>,
		Pick<BillingAddressProps, 'clickHandler'> {
	isBilling?: boolean;
	handleAddress: (data: IAddAddress) => void;
}

AddressPreview.defaultProps = {
	isBilling: false,
};

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
