import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { NotificationHeader } from './NotificationHeader';
import { NotificationList } from './NotificationList';

const menuWidth = '100%';
export const SidebarNotifications: FC<PropsType> = (props) => {
	const { isActive, ...rest } = props;

	useEffect(() => {
		if (isActive) {
			document.querySelector('body').classList.add('modal-open');
		} else {
			document.querySelector('body').classList.remove('modal-open');
		}

		return () => {
			document.querySelector('body').classList.remove('modal-open');
		};
	}, [isActive]);

	return (
		<Wrapper style={{ left: isActive ? '0' : `-${menuWidth}` }}>
			<NotificationHeader {...rest} />
			<NotificationList />
		</Wrapper>
	);
};

type PropsType = {
	isActive?: boolean;
	onHide?: () => void;
};

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: var(--white);
	transition: 0.3s;
	z-index: 999;

	.MarkReadBtn {
		color: var(--white);
		font-size: 0.75rem;
		padding: 0;
	}
`;
