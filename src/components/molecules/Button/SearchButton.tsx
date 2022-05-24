import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon, { search } from '@libs/icons';

export const SearchButton: FC<SearchButtonProps> = ({ placeholder, ...rest }) => (
	<Wrapper {...rest}>
		<Icon path={search} width={20} height={20} fill="#CBCBCB" />
		{placeholder && <p>{placeholder}</p>}
	</Wrapper>
);

export interface SearchButtonProps extends HTMLAttributes<HTMLDivElement> {
	placeholder?: string;
}

const Wrapper = styled.div`
	width: 100%;
	height: 2.5rem;
	padding: 0 0.5rem;
	display: flex;
	align-items: center;
	border-radius: 50rem;
	background-color: var(--light);

	p {
		color: #cbcbcb;
		padding-left: 0.5rem;
		margin-bottom: 0;
	}
`;
