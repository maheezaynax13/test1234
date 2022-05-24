import { IconButton } from '@components/molecules';
import { arrowLeft } from '@libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

const menuWidth = '100%';
export const SpecSidebar: FC<SpecSidebarProps> = (props) => {
	const { isActive, name, onHide, children } = props;

	return (
		<Wrapper style={{ right: isActive ? '0' : `-${menuWidth}` }}>
			<Header>
				<IconButton path={arrowLeft} width={20} height={20} fill="var(--light-gray)" onClick={onHide} />{' '}
				<span className="ml-1">{name}</span>
			</Header>
			<Body>{children}</Body>
		</Wrapper>
	);
};

type SpecSidebarProps = {
	isActive: boolean;
	name: string;
	onHide: () => void;
};

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	overflow-y: auto;
	background-color: var(--white);
	transition: 0.3s;
	z-index: 999;
`;

const Header = styled.div`
	width: 100%;
	height: 2.75rem;
	padding: 0 0.5rem;
	color: var(--dark);
	font-weight: 600;
	display: flex;
	align-items: center;
	box-shadow: 0 0 3px rgba(138, 138, 138, 0.24);
`;

const Body = styled.div`
	width: 100%;
	height: calc(100vh - 2.75rem);
	padding: 0.5rem;
	overflow: hidden;
	overflow-y: auto;
`;
