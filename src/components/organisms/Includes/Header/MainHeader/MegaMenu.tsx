/* eslint-disable no-empty */
import { DropdownItem } from '@components/atoms';
import { pagesAPI } from '@libs/api';
import { ICategory } from '@libs/api/interfaces';
import { grid } from '@libs/icons';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LabelDropdown } from '../styles';

const DropdownListItems: FC<{ data: ICategory[] }> = ({ data }) => {
	if (data?.length > 0) {
		return (
			<Wrapper>
				{data.map(({ name, slug, children }, i) => (
					<li key={i}>
						<DropdownItem title={name} href={`/category/${slug}`}>
							{name}
						</DropdownItem>
						<DropdownListItems data={children} />
					</li>
				))}
			</Wrapper>
		);
	}

	return null;
};

export const MegaMenu: FC = () => {
	const [categories, setCategories] = useState<ICategory[]>(null);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		try {
			const { success, data } = await pagesAPI.getMegaMenu();
			if (success) setCategories(data);
		} catch (error) {}
	};

	if (categories?.length > 0) {
		return (
			<MenuContainer>
				<LabelDropdown path={grid} smallLabel="Select" label="Category">
					<DropdownListItems data={categories} />
				</LabelDropdown>
			</MenuContainer>
		);
	}

	return null;
};

const MenuContainer = styled.div`
	.DropdownList {
		padding: 0;
		box-shadow: none;
		background-color: transparent;
	}
`;

const Wrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0.625rem 0;
	min-height: 24.5rem;
	background-color: var(--white);
	border-radius: 0;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

	li {
		width: 12rem;
		list-style: none;

		a,
		button {
			width: 12rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		& > ul {
			display: none;
			position: absolute;
			right: -12rem;
			top: 0;
		}

		&:hover {
			& > a,
			& > button {
				color: var(--primary);
				position: relative;

				&:before {
					content: '';
					width: 4px;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background-color: var(--primary);
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}

			& > ul {
				display: block;
			}
		}
	}
`;
