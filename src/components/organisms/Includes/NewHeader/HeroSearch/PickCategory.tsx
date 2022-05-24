import { Dropdown, DropdownItem } from '@components/atoms';
import Icon, { arrowDownS } from '@libs/icons';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

export const PickCategory: FC<PropsType> = ({ active, setActive }) => {
	const [categories, setCategories] = useState<any>(null);
	const [isListShow, setListShow] = useState<boolean>(false);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		// try {
		// 	const { success, data } = await pagesAPI.getMegaMenu();
		// 	if (success) {
		// 		data.unshift({ name: 'All Category', slug: 'all-category', children: null });
		// 		setCategories(data);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const handleClick = (slug: string) => {
		setListShow(false);
		setActive(slug);
	};

	if (categories) {
		return (
			<Dropdown
				isOpen={isListShow}
				className="m-0 p-0"
				buttonLabel={
					<div
						className="d-flex align-items-center"
						title={categories?.find((el) => el.slug === active)?.name}
						onClick={() => setListShow(true)}
					>
						<p className="SelectedCat mb-0">{categories?.find((el) => el.slug === active)?.name}</p>
						<Icon path={arrowDownS} fill="var(--dark)" className="pl-1" />
					</div>
				}
			>
				{categories?.length > 0 &&
					categories.map(({ name, slug }, i) => (
						<DropdownItem
							key={i}
							type="button"
							onClick={() => handleClick(slug)}
							className={active === slug ? 'active' : ''}
						>
							{name}
						</DropdownItem>
					))}
			</Dropdown>
		);
	}

	return null;
};

interface PropsType {
	active: string;
	setActive: Dispatch<SetStateAction<string>>;
}
