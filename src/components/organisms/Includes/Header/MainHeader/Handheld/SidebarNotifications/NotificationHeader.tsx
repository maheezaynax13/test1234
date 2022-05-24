import { Button } from '@components/atoms';
import { IconButton } from '@components/molecules';
import { notificationAPI } from '@libs/api';
import { arrowLeft } from '@libs/icons';
import store from '@store';
import { getAppState, setNotificationCount } from '@store/actions';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const NotificationHeader: FC<PropsType> = ({ onHide }) => {
	const { notificationCount } = useSelector(getAppState);

	const handleAllRead = async () => {
		try {
			const { success } = await notificationAPI.readAllNotification();
			if (success) store.dispatch(setNotificationCount());
		} catch (error) {}
	};

	return (
		<HeaderContainer>
			<span>
				<IconButton path={arrowLeft} fill="var(--white)" onClick={onHide} /> Messages
			</span>

			{notificationCount > 0 && (
				<Button className="MarkReadBtn" variant="link" onClick={handleAllRead}>
					Mark all as read
				</Button>
			)}
		</HeaderContainer>
	);
};

type PropsType = {
	onHide?: () => void;
};

const HeaderContainer = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	color: var(--white);
	background-color: #2b2b2b;
`;
