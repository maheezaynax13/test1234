import { FormInput } from '@components/atoms';
import { search } from '@libs/icons';
import { updateURLSearchParams } from '@utils/helpers';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { IconButton } from '../Button';
import { SearchWrapper } from './styles';

export const SearchBox: FC = () => {
	const [value, setValue] = useState<string>('');
	const router = useRouter();

	useEffect(() => {
		const {
			query: { searchKey = '' },
		} = router;
		if (!Array.isArray(searchKey)) setValue(searchKey);
	}, [router]);

	const handleSearch = () => {
		const { pathname, query } = router;
		const params = updateURLSearchParams(query, { searchKey: value });
		router.push({ pathname, query: params.toString() });
	};

	return (
		<SearchWrapper>
			<FormInput
				srOnly
				className="mb-0"
				type="text"
				placeholder="Search"
				value={value}
				onChange={({ target: { value } }) => setValue(value)}
				onKeyDown={({ key }) => key === 'Enter' && handleSearch()}
			/>
			<IconButton path={search} onClick={handleSearch} />
		</SearchWrapper>
	);
};
