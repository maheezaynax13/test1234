import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { HandheldMainHeader, HandheldMainFooter, HandheldFloatNavbar } from '@components/organisms';

export const HandheldMainLayout: FC = ({ children }) => (
	<Fragment>
		<HandheldMainHeader />
		<Main>{children}</Main>
		<HandheldMainFooter />
		<HandheldFloatNavbar />
	</Fragment>
);

const Main = styled.main`
	min-height: calc(100vh - 292px);
	padding: 1rem 0.469rem;
`;
