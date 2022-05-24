import { FC } from 'react';
import styled from 'styled-components';
import { OrdersNavbar } from './OrdersNavbar';
import { ServicesNavbar } from './ServicesNavbar';
import { UserDetails } from './UserDetails';
import { ViewedNavbar } from './ViewedNavbar';

const menuWidth = '100%';
export const UserNavbar: FC<PropsType> = ({ isActive, onHide }) => {
	return (
		<Wrapper style={{ right: isActive ? '0' : `-${menuWidth}` }}>
			<UserDetails onClick={onHide} />
			<OrdersNavbar onHide={onHide} />
			<ServicesNavbar onHide={onHide} />
			<ViewedNavbar onHide={onHide} />
		</Wrapper>
	);
};

interface PropsType {
	isActive?: boolean;
	onHide?: () => void;
}

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
