import { FormInput, FormInputProps } from '@components/atoms';
import { ISearchSuggestions } from '@libs/api/interfaces';
import Icon, { search } from '@libs/icons';
import { FC, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { SearchButton, IconButton } from '../Button';
import { SearchPopover } from './SearchPopover';

export const HandheldHeroSearch: FC<HandheldHeroSearchProps> = (props) => {
	const { data, onSearch, onClickHandler, ...rest } = props;

	useEffect(() => {
		if (data.isActive) {
			document.querySelector('body').classList.add('modal-open');
		}

		return () => {
			document.querySelector('body').classList.remove('modal-open');
		};
	}, [data]);

	if (data.isActive) {
		return (
			<Fragment>
				<Wrapper>
					<IconButton path={search} width={20} height={20} onClick={() => onClickHandler(data.keywords)} />
					<FormInput srOnly placeholder="Search for products" value={data.keywords} autoFocus {...rest} />
				</Wrapper>
				<SearchPopover data={data.data} onClickHandler={onClickHandler} />
			</Fragment>
		);
	}

	return <SearchButton placeholder="Search for products" onClick={onSearch} />;
};

export interface HandheldHeroSearchProps
	extends Omit<FormInputProps, 'srOnly' | 'label' | 'placeholder' | 'value' | 'autoFocus'> {
	data: {
		isActive: boolean;
		keywords: string;
		data: ISearchSuggestions['search'];
	};
	onSearch?: () => void;
	onClickHandler?: (e: string) => void;
}

HandheldHeroSearch.defaultProps = {
	data: {
		isActive: false,
		keywords: '',
		data: [],
	},
};

const Wrapper = styled.div`
	width: 100%;
	height: 2.5rem;
	padding: 0 0.5rem;
	display: flex;
	align-items: center;
	border-radius: 50rem;
	background-color: var(--light);

	& > div {
		width: calc(100% - 1.25rem);
		margin-bottom: 0;

		input {
			border: none;
			padding: 0 0.5rem;
			background-color: transparent;

			&:focus {
				box-shadow: none;
			}
		}
	}
`;
