import { FC, Fragment, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Modal, ModalBody, ModalProps, FormCheck, Button } from '@components/atoms';
import { IAddAddress } from '@libs/api/interfaces';

export const AddressesModal: FC<AddressesModalProps> = (props) => {
	const [selected, setSelected] = useState<IAddAddress>(null);
	const { isActive, type, data, selected: selectedItem, setAddress, ...rest } = props;

	useEffect(() => setSelected(selectedItem), [selectedItem]);

	const handleClick = () => {
		setAddress((prevState) => {
			const { shipping, billing } = prevState;
			if (!shipping && !billing) return { shipping: selected, billing: selected };
			if (type === 'shipping') return { ...prevState, shipping: selected };
			if (type === 'billing') return { ...prevState, billing: selected };
		});
		rest.onHide();
	};

	return (
		<Modal closeButton isActive={isActive} {...rest}>
			<ModalBody>
				<h5 className="mt-1">Choose {type} address</h5>
				<hr />
				{data?.map(({ id, name, phoneNumber, house, road, area, city, region }, i) => (
					<FormCheck
						key={i}
						name="addressItem"
						type="radio"
						label={
							<Fragment>
								<span className="font-weight-semibold">{name}</span>
								<p className="text-dark mb-0">{phoneNumber}</p>
								<p className="text-dark mb-0">
									{house + ', ' + road + ', ' + area + ', ' + city + ', ' + region}
								</p>
							</Fragment>
						}
						checked={id === selected?.id}
						onChange={() => setSelected(data[i])}
					/>
				))}
				<hr />
				<div className="d-flex justify-content-space-between">
					<Button pill variant="light" onClick={rest.onHide}>
						Cancel
					</Button>
					<Button pill onClick={handleClick} className="d-block ml-auto">
						Save Changes
					</Button>
				</div>
			</ModalBody>
		</Modal>
	);
};

export interface AddressesModalProps extends Pick<ModalProps, 'onHide'> {
	isActive: boolean;
	type: string;
	data: IAddAddress[];
	selected?: IAddAddress;
	setAddress: Dispatch<SetStateAction<Record<'shipping' | 'billing', IAddAddress>>>;
}
