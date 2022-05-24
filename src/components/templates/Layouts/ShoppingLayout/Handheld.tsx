import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { HandheldShoppingHeader } from '@components/organisms';

export const HandheldShoppingLayout: FC = ({ children }) => (
	<Fragment>
		<HandheldShoppingHeader />
		<Main>{children}</Main>
	</Fragment>
);

const Main = styled.main`
	min-height: calc(100vh - 292px);
	padding: 1rem 0.469rem;
`;
