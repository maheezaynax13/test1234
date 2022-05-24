import { Image, Link } from '@components/atoms';
import { notificationAPI } from '@libs/api';
import { INotification } from '@libs/api/interfaces';
import store from '@store';
import { setNotificationCount } from '@store/actions';
import dateFormat from 'dateformat';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const NotifContent: FC<PropsType> = (props) => {
	const { id, link, type, title, createdAt, imageURL, read, updateNotification } = props;

	const handleRead = async () => {
		try {
			const { success } = await notificationAPI.readNotification(id);
			if (success) {
				Router.push(link);
				updateNotification();
				store.dispatch(setNotificationCount());
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Link href={link} onClick={handleRead} className={read ? 'text-dark' : ''} style={{ textDecoration: 'none' }}>
			<Row>
				<Col md="auto">
					<Image fluid src={`/images/${type}.svg`} alt={type} />
				</Col>
				<Col>
					<p className="mb-0">
						{title}
						<small className="d-block mt-1 text-secondary">
							{dateFormat(createdAt, process.env.dateTimeFormat)}
						</small>
					</p>
				</Col>
				{imageURL && (
					<Col xs={12}>
						<Image fluid rounded src={imageURL} alt={title} className="mt-2" />
					</Col>
				)}
			</Row>
		</Link>
	);
};

interface PropsType extends INotification {
	updateNotification: () => void;
}
