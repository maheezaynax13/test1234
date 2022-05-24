import { Button } from '@components/atoms';
import { ISearchSuggestions } from '@libs/api/interfaces';
import { FC } from 'react';
import styled from 'styled-components';

export const SearchPopover: FC<PropsType> = ({ data, onClickHandler }) => {
	return (
		<Wrapper>
			{data?.map(({ name }, i) => (
				<Button key={i} className="searchItem" variant="link" onClick={() => onClickHandler(name)}>
					{name}
				</Button>
			))}
		</Wrapper>
	);
};

type PropsType = {
	data: ISearchSuggestions['search'];
	onClickHandler: (e: string) => void;
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 3.75rem;
	left: 0;
	padding: 1rem;
	background-color: var(--light);
	z-index: 99;

	.searchItem {
		color: var(--link);
	}
`;
