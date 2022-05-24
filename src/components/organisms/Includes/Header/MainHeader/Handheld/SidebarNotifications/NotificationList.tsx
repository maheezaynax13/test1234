import { notificationAPI } from '@libs/api';
import store from '@store';
import { setNotificationCount, updateNotifications } from '@store/actions';
import { FC, Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavbarSlider } from './NavbarSlider';
import { NotificationItems } from './NotificationItems';

const notificationTypes = ['all', 'promotion', 'order', 'common'];
export const NotificationList: FC = () => {
	const [active, setActive] = useState<string>('all');
	const dispatch = useDispatch();

	useEffect(() => {
		getNotification(active);
	}, [active]);

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
		} catch (error) {}
	};

	return (
		<Fragment>
			<NavbarSlider active={active} data={notificationTypes} clickHandler={setActive} />
			<NotificationItems />
		</Fragment>
	);
};
