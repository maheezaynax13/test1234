import { Button, Tab, Tabs as TabsData } from '@components/atoms';
import { notificationAPI } from '@libs/api';
import store from '@store';
import { getAppState, setNotificationCount } from '@store/actions';
import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NotifContent } from './NotifContent';

export const DropdownNotif: FC<PropsType> = ({ getNotification }) => {
	const { notifications, notificationCount } = useSelector(getAppState);

	const handleAllRead = async () => {
		try {
			const { success } = await notificationAPI.readAllNotification();
			if (success) {
				getNotification('all');
				store.dispatch(setNotificationCount());
			}
		} catch (error) {}
	};

	return (
		<Wrapper>
			<Upper className="VerticalScrollerPrimary">
				<Inner>
					<h5 className="mb-0">Notifications</h5>
					<Tabs>
						<Tab title="All" onClick={() => getNotification('all')}>
							{notifications?.length > 0 ? (
								notifications?.map((e, j) => (
									<NotifContent key={j} {...e} updateNotification={() => getNotification('all')} />
								))
							) : (
								<p className="mt-3 mb-0 text-center">You don&rsquo;t have any notification!</p>
							)}
						</Tab>

						<Tab title="Promotion" onClick={() => getNotification('promotion')}>
							{notifications?.length > 0 ? (
								notifications?.map((e, j) => (
									<NotifContent
										key={j}
										{...e}
										updateNotification={() => getNotification('promotion')}
									/>
								))
							) : (
								<p className="mt-3 mb-0 text-center">You don&rsquo;t have any notification!</p>
							)}
						</Tab>

						<Tab title="Order" onClick={() => getNotification('order')}>
							{notifications?.length > 0 ? (
								notifications?.map((e, j) => (
									<NotifContent key={j} {...e} updateNotification={() => getNotification('order')} />
								))
							) : (
								<p className="mt-3 mb-0 text-center">You don&rsquo;t have any notification!</p>
							)}
						</Tab>

						<Tab title="Common" onClick={() => getNotification('commmon')}>
							{notifications?.length > 0 ? (
								notifications?.map((e, j) => (
									<NotifContent key={j} {...e} updateNotification={() => getNotification('common')} />
								))
							) : (
								<p className="mt-3 mb-0 text-center">You don&rsquo;t have any notification!</p>
							)}
						</Tab>
					</Tabs>
				</Inner>
			</Upper>

			{notificationCount > 0 && (
				<Fragment>
					<hr className="my-0" />
					<div className="text-center">
						<Button pill className="py-1 mt-2" onClick={handleAllRead}>
							Clear All Notification
						</Button>
					</div>
				</Fragment>
			)}
		</Wrapper>
	);
};

interface PropsType {
	getNotification: (type: string) => void;
}

const Wrapper = styled.div`
	max-height: 500px;
`;

const Upper = styled.div`
	min-width: 350px;
	max-height: 450px;
	overflow: hidden;
	overflow-y: auto;
`;

const Inner = styled.div`
	min-width: 335px;
	max-height: 450px;
	padding: 15px 15px 5px 15px;
`;

const Tabs = styled(TabsData)`
	border: none;

	.Tab {
		&-Header {
			padding: 0;

			button {
				padding: 1rem;
			}
		}

		&-Content {
			padding: 0;

			a {
				padding: 0.5rem;
				white-space: inherit;

				& + a {
					border-top: 1px solid var(--border);
				}
			}
		}
	}
`;
