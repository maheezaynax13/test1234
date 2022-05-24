import { HoverDropdown } from '@components/atoms';
import { categoryData } from '@utils/constants';
import { FC } from 'react';
import styled from 'styled-components';

export const CategoryList: FC = () => {
	return (
		<Wrapper className="mt-2 ">
			{categoryData?.map((el, i) => {
				return <HoverDropdown key={i} data={el} />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;
