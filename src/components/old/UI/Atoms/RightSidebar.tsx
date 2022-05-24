import { useState } from 'react';
import styled, { css } from 'styled-components';

const RightSidebar = (): JSX.Element => {
	const [isActive, setActive] = useState<boolean>(false);

	return <Wrapper isActive={isActive}></Wrapper>;
};

export default RightSidebar;

const Wrapper = styled.div`
	position: sticky;
	right: 0;
	top: 0;
	bottom: 0;
	width: 300px;
	background-color: var(--white);
	${({ isActive }: { isActive: boolean }) => css``}
`;
