/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty */
import { Button, Card, CardBody, Modal, ModalBody } from '@components/atoms';
import { Address, AddressForm, ContentCard } from '@components/organisms';
import { addressAPI } from '@libs/api';
import { IAddAddress, IAddAddressPayload } from '@libs/api/interfaces';
import { FC, Fragment, useEffect, useState } from 'react';
import { NotFound } from './NotFound';

export const AddressList: FC<AddressListProps> = ({ data }) => {
	const [addresses, setAddresses] = useState<IAddAddress[]>(null);
	const [modal, setModal] = useState<IModal>({ type: null, id: null });

	useEffect(() => {
		if (data?.length > 0) setAddresses(data);
	}, [data]);

	const handleDelete = async (id: string) => {
		if (id) {
			try {
				const { success } = await addressAPI.deleteAddress(id);
				if (success) {
					setAddresses((prevState) => {
						return prevState.filter((e) => e.id !== id);
					});
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	const addressHandler = async (payload: IAddAddressPayload) => {
		if (modal.type === 'edit') {
			try {
				const { success, data } = await addressAPI.updateAddress(modal.id, payload);
				if (success) {
					setAddresses((prevState) => {
						const newArr = [...prevState];
						const index = newArr.findIndex((e) => e.id === data.id);
						newArr[index] = data;
						return newArr;
					});
					setModal({ type: null, id: null });
				}
			} catch (error) {}
		} else {
			try {
				const { success, data } = await addressAPI.addAddress(payload);
				if (success) {
					setAddresses((prevState) => {
						const newArr = [...prevState];
						newArr.push(data);
						return newArr;
					});
					setModal({ type: null, id: null });
				}
			} catch (error) {}
		}
	};

	return (
		<Fragment>
			<ContentCard title="Address Book">
				{addresses?.length > 0 ? (
					addresses.map((e, i) => (
						<Card key={i} className={i > 0 ? 'mt-3' : ''}>
							<CardBody>
								<Address
									isDelete
									{...e}
									onClick={() => handleDelete(e.id)}
									disabled={addresses.length < 2}
									editHandler={(id) => setModal({ type: 'edit', id })}
								/>
							</CardBody>
						</Card>
					))
				) : (
					<NotFound>You don't have any address. Add billing and shipping addresses.</NotFound>
				)}
			</ContentCard>
			<Button
				pill
				className="d-block ml-auto mt-3"
				disabled={addresses?.length > 5}
				onClick={() => setModal({ type: 'add', id: null })}
			>
				Add New Address
			</Button>

			<Modal closeButton isActive={!!modal.type} onHide={() => setModal({ type: null, id: null })}>
				<ModalBody>
					<h4 className="mt-2 mb-3">{modal.type === 'edit' ? 'Edit Your Address' : 'Add New Address'}</h4>
					{modal.type === 'edit' ? (
						<AddressForm {...addresses.find((e) => e.id === modal.id)} setAddress={addressHandler} />
					) : (
						<AddressForm setAddress={addressHandler} />
					)}
				</ModalBody>
			</Modal>
		</Fragment>
	);
};

interface AddressListProps {
	data: IAddAddress[];
}

interface IModal {
	type: 'add' | 'edit';
	id: string;
}
