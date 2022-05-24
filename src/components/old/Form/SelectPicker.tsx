import { useClickOutside } from '@libs/hooks';
import Icon, { arrowDown } from '@libs/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormInput } from '.';

const SelectPicker = ({ label, items, value, clickHandler, ...rest }: propsType): JSX.Element => {
	const [isMenu, setMenu] = useState<boolean>(false);
	const [itemFocused, setItemFocused] = useState<number | string>(null);
	const [itemSelected, setItemSelected] = useState<number | string>(null);
	const { wrapperRef } = useClickOutside(() => setMenu(false));

	useEffect(() => {
		if (value) {
			setItemFocused(value);
			setItemSelected(value);
		}
	}, [value]);

	const handleClick = (value: number | string) => {
		const { name, required } = rest;
		const event = { target: { name, value, required } };
		clickHandler(event);
		setItemSelected(value);
		setMenu(false);
	};

	return (
		<PickerWrapper ref={wrapperRef}>
			<FormInput
				label={label}
				onFocus={() => setMenu(true)}
				value={items?.find(({ value }) => value === itemSelected)?.label ?? ''}
				readOnly
				{...rest}
			>
				<Indicator className={isMenu ? 'isFocused' : ''}>
					<Icon path={arrowDown} width={20} height={20} fill="#cccccc" />
				</Indicator>
			</FormInput>

			{isMenu && items && items.length > 0 && (
				<NavItems>
					{items.map(({ label, value }, i) => (
						<NavItem
							key={i}
							className={`${itemFocused === value ? ' isFocused' : ''}${
								itemSelected === value ? ' isActive' : ''
							}`}
							onMouseOver={() => setItemFocused(value)}
							onClick={() => handleClick(value)}
						>
							{label}
						</NavItem>
					))}
				</NavItems>
			)}
		</PickerWrapper>
	);
};

export default SelectPicker;

interface propsType {
	isInline?: boolean;
	colSize?: number;
	label?: string;
	name?: string;
	items: itemsType[] | null;
	value?: string;
	placeholder?: string;
	clickHandler?: (event: any) => void;
	errorMessage?: string;
	required?: boolean;
	disabled?: boolean;
}

interface itemsType {
	label: string;
	value: string;
}

const Indicator = styled.div`
	position: absolute;
	top: calc(50% - 10px);
	right: 10px;
	transition: 300ms ease all;

	&.isFocused {
		transform: rotate(180deg);
	}
`;

const NavItems = styled.ul`
	width: 100%;
	max-height: 300px;
	overflow: hidden;
	overflow-y: auto;
	position: absolute;
	top: calc(100% + 5px);
	left: 0;
	margin: 0;
	padding: 4px 0;
	border-radius: 0.25rem;
	background-color: var(--white);
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);
	z-index: 99;
`;

const PickerWrapper = styled.div`
	position: relative;

	.form-control[readonly]:not(:disabled) {
		cursor: pointer;
		background-color: transparent;
	}
`;

const NavItem = styled.li`
	width: 100%;
	list-style: none;
	display: block;
	padding: 8px 12px;
	cursor: pointer;

	&.isFocused {
		background-color: rgba(0, 181, 91, 0.2);
	}

	&.isActive {
		color: var(--white);
		background-color: var(--primary);
	}
`;
