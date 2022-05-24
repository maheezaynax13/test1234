import { FormCheck, FormCheckProps } from '@components/atoms';
import Icon, { arrowDown, arrowUpS } from '@libs/icons';
import { formatTitleCase, updateURLSearchParams } from '@utils/helpers';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { SectionWrapper } from './styles';

export const FilterByOptions: FC<FilterByOptionsProps> = (props) => {
	const [selected, setSelected] = useState<string[]>([]);
	const [isOpen, setOpen] = useState<boolean>(false);
	const { name, values, displayName, isActive, ...rest } = props;
	const router = useRouter();
	const { pathname, query } = router;
	const params = updateURLSearchParams(query, {});

	useEffect(() => setOpen(!isActive), [isActive]);

	useEffect(() => {
		setSelected([]);
		for (const [key, value] of Object.entries(query)) {
			if (key === name) {
				setSelected(() => {
					const newArr = [];
					if (Array.isArray(value)) {
						value?.map((e) => {
							if (!newArr.find((el) => el === e)) newArr.push(e);
						});
					} else {
						if (!newArr.find((e) => e === value)) newArr.push(value);
					}
					return newArr;
				});
			}
		}
	}, [query]);

	const handleRoute = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked, name, value } = e.target;
		if (checked) {
			params.append(name, value);
		} else {
			const data = params.getAll(name)?.filter((e) => e !== value);
			params.delete(name);
			if (data?.length > 0) {
				data.forEach((e) => params.append(name, e));
			}
		}
		router.push({ pathname, query: params.toString() });
	};

	return (
		<SectionWrapper isActive={isOpen}>
			<p className="Header" onClick={() => setOpen(!isOpen)}>
				{formatTitleCase(displayName.replace(/[A-Z]/g, (x) => ` ${x.toLowerCase()}`))}
				<Icon path={isOpen ? arrowUpS : arrowDown} width={21} height={21} />
			</p>
			<div className="OptionWrapper VerticalScroller">
				{values.map((e, i) => (
					<FormCheck
						key={i}
						{...rest}
						className="mb-2"
						name={name}
						value={e}
						label={e}
						checked={!!selected.find((el) => el === e)?.[0]}
						onChange={handleRoute}
					/>
				))}
			</div>
		</SectionWrapper>
	);
};

export interface FilterByOptionsProps extends Pick<FormCheckProps, 'type'> {
	name: string;
	values: string[];
	displayName: string;
	isActive?: boolean;
}
