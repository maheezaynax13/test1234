/* eslint-disable no-empty */
import { Button, FormInput, FormInputProps } from '@components/atoms';
import { ISearchSuggestions } from '@libs/api/interfaces';
import { useClickOutside, useRouterFilter } from '@libs/hooks';
import Icon, { history, search } from '@libs/icons';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';
import { PickCategory } from './PickCategory';
import { ResultsMenu, Wrapper } from './styles';

export const HeroSearch: FC<HeroSearchProps> = (props) => {
	// api is not valid api
	const router = useRouter();
	const { query } = router;
	const [value, setValue] = useState<string>((query?.query as string) ?? '');
	const [selectedCat, setSelectedCat] = useState<string>((query?.mainCategorySlug as string) ?? 'all-category');
	const [keywords, setKeywords] = useState<ISearchSuggestions>(null);
	const [isFocused, setFocused] = useState<boolean>(false);
	const routerFilter = useRouterFilter();
	const { wrapperRef } = useClickOutside(() => {
		setKeywords(null);
		setFocused(false);
	});

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value) {
			try {
				// const { success, data } = await productAPI.getSearchSuggestions(value);
				// if (success) setKeywords(data);
			} catch (error) {}
		} else {
			setKeywords(null);
		}
	};

	const handleClick = (value: string) => {
		if (value || !query?.query) {
			setKeywords(null);
			setFocused(false);
			if (router?.pathname.includes('search')) {
				routerFilter([
					{ name: 'mainCategorySlug', value: selectedCat },
					{ name: 'query', value },
				]);
			} else {
				router.push(`/search?mainCategorySlug=${selectedCat}&query=${value}`);
			}
		}
	};

	return (
		<Wrapper ref={wrapperRef} className={`${isFocused ? 'isFocused' : ''}${keywords ? ' hasItems' : ''}`}>
			<div className="Searchbar">
				<PickCategory active={selectedCat} setActive={setSelectedCat} />
				<FormInput
					srOnly
					{...props}
					value={value}
					placeholder="Search by keyword"
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={(e) => {
						handleChange(e);
						setValue(e.target.value);
					}}
					onKeyDown={({ code }) => {
						if (code === 'Enter') handleClick(value);
					}}
				/>
				<Button variant="link" onClick={() => handleClick(value)}>
					<Icon path={search} width={20} height={20} />
				</Button>
			</div>
			{keywords && (
				<ResultsMenu>
					{Object.keys(keywords).map((key, i) => {
						const value = keywords[key] as ISearchSuggestions['search'];
						if (value.length > 0) {
							return (
								<ul key={i}>
									{key === 'trending' && (
										<p className="text-dark font-weight-semibold mb-1">Trending</p>
									)}
									{value.map(({ name, value: val }, j) => (
										<li key={j}>
											<button onClick={() => handleClick(val)}>
												<Icon
													path={key === 'trending' ? search : history}
													width={16}
													height={16}
												/>
												{name}
											</button>
										</li>
									))}
								</ul>
							);
						}
					})}
				</ResultsMenu>
			)}
		</Wrapper>
	);
};

export interface HeroSearchProps extends Omit<FormInputProps, 'srOnly' | 'label' | 'placeholder'> {
	onSearch?: () => void;
}
