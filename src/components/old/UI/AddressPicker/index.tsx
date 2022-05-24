/* eslint-disable no-empty */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addressAPI } from '@libs/api';
import { IAddress } from '@libs/api/interfaces';
import Header from './Header';

const initialAddress = { region: null, city: null, area: null };
const AddressPicker = ({ show, onHide, callback }: propsType): JSX.Element => {
	const [items, setItems] = useState<IAddress[]>([]);
	const [address, setAddress] = useState<typeof initialAddress>(initialAddress);

	useEffect(() => {
		setAddress(initialAddress);
		getRegions();
	}, [show]);

	const handleChange = async (name: string, type: keyof typeof initialAddress) => {
		switch (type) {
			case 'region':
				await getCities(name);
				setAddress({ ...initialAddress, region: name });
				break;

			case 'city':
				await getAreas(address.region, name);
				setAddress((prevState) => ({ ...prevState, city: name, area: null }));
				break;

			case 'area':
				const newObj = { ...address };
				newObj.area = name;
				setAddress(newObj);
				callback(newObj);
				onHide();
				break;
		}
	};

	const getRegions = async () => {
		try {
			const { success, data } = await addressAPI.getRegions();
			if (success) setItems(data);
		} catch (error) {}
	};

	const getCities = async (region: string) => {
		try {
			const { success, data } = await addressAPI.getCitiesByRegion(region);
			if (success) setItems(data);
		} catch (error) {}
	};

	const getAreas = async (region: string, city: string) => {
		try {
			const { success, data } = await addressAPI.getAreasByCity(region, city);
			if (success) setItems(data);
		} catch (error) {}
	};

	if (show) {
		return (
			<Container>
				<Header {...address} />

				<ListItems>
					{items &&
						items.length > 0 &&
						items.map(({ en }, i) => (
							<li
								key={i}
								onClick={() => {
									handleChange(en, address.region ? (address.city ? 'area' : 'city') : 'region');
								}}
							>
								<span>{en}</span>
							</li>
						))}
				</ListItems>
			</Container>
		);
	}

	return null;
};

export default AddressPicker;

interface propsType {
	show: boolean;
	onHide: () => void;
	callback: (obj: typeof initialAddress) => void;
}

const Container = styled.div`
	width: 298px;
	text-align: left;
	position: absolute;
	z-index: 1001;
	background-color: var(--white);
	border-radius: 10px;
	box-shadow: 1px 2px 14px #ccc;
`;

const ListItems = styled.ul`
	margin: 0;
	padding: 0;
	max-height: 368px;
	overflow-y: auto;

	li {
		cursor: pointer;
		list-style: none;
		padding: 12px 15px;
		border-bottom: 1px solid #ececec;

		&:last-child {
			border-bottom-color: transparent;
		}

		span {
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
`;
