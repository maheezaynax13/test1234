import { FilterByOptions, FilterByOptionsProps, FilterChips } from '@components/molecules';
import { FC } from 'react';
import styled from 'styled-components';

export const SidebarFilters: FC<SidebarFiltersProps> = ({ facets }) => {
	if (facets) {
		return (
			<Wrapper>
				<FilterChips />
				{facets.map((e, i) => (
					<FilterByOptions key={i} isActive={i > 7} type="checkbox" {...e} />
				))}
			</Wrapper>
		);
	}

	return null;
};

export type SidebarFiltersProps = {
	facets: Omit<FilterByOptionsProps, 'type'>[];
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 1rem 0;
	display: block;
	border-right: 1px solid var(--border);
`;
