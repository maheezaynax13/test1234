import { IconDropdown } from '@components/molecules';
import { notificationAPI } from '@libs/api';
import { bell } from '@libs/icons';
import store from '@store';
import { getAppState, setNotificationCount, updateNotifications } from '@store/actions';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownNotif } from './DropdownNotif';

export const NotificationBtn: FC = () => {
	const { notificationCount } = useSelector(getAppState);
	const dispatch = useDispatch();

	const getNotification = async (type: string) => {
		try {
			const {
				success,
				data: { notifications },
			} = await notificationAPI.getNotifications(type);
			if (success) {
				dispatch(updateNotifications(notifications));
				store.dispatch(setNotificationCount());
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<IconDropdown
			alignRight
			path={bell}
			isCount={notificationCount > 0}
			count={notificationCount}
			onClick={() => getNotification('all')}
		>
			<DropdownNotif getNotification={getNotification} />
		</IconDropdown>
	);
};
