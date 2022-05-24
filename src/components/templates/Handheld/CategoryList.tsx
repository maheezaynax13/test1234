import { ChildCategories, ParentCategories } from '@components/organisms';
import { productAPI } from '@libs/api';
import { IParentCats } from '@libs/api/interfaces';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HandheldSecondaryLayout } from '..';

export const CategoryList: FC<CategoryListProps> = (props) => {
	const [childItems, setChildItems] = useState<IParentCats[]>(null);
	const [activeItem, setActiveItem] = useState<IParentCats>(null);
	const { parent, child } = props;

	useEffect(() => {
		if (child?.length > 0) setChildItems(child);
	}, [child]);

	useEffect(() => {
		if (parent?.length > 0) setActiveItem(parent[0]);
	}, [parent]);

	const handleClick = async (id: string) => {
		try {
			const { success, data } = await productAPI.getHChildCats(id);
			if (success) {
				const item = parent.find((e) => e.categoryID === id);
				setActiveItem(item);
				setChildItems(data);
			}
		} catch (error) {}
	};

	return (
		<HandheldSecondaryLayout title={activeItem?.categoryName ?? 'All Categories'}>
			<Wrapper>
				<ParentCategories data={parent} activeID={activeItem?.categoryID} clickHandler={handleClick} />
				<ChildCategories data={childItems} />
			</Wrapper>
		</HandheldSecondaryLayout>
	);
};

export type CategoryListProps = {
	parent: IParentCats[];
	child: IParentCats[];
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: top;
`;
