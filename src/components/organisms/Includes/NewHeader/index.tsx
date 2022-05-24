import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { CategoryList } from './CategoryList';
import { HeaderLinks } from './HeaderLinks';
import { MainHeader } from './MainHeader';

export const NewHeader: FC = () => {
	return (
		<Wrapper>
			<HeaderLinks />
			<MainHeader />
			<CategoryList />
		</Wrapper>
	);
};

const Wrapper = styled(Container)`
	margin: 0.424rem auto;
`;
