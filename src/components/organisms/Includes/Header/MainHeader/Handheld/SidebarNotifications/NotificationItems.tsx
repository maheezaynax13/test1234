import { Image, Link } from '@components/atoms';
import { notificationAPI } from '@libs/api';
import store from '@store';
import { getAppState, setNotificationCount } from '@store/actions';
import dateFormat from 'dateformat';
import Router from 'next/router';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const NotificationItems: FC = () => {
	const { notifications } = useSelector(getAppState);

	const handleRead = async (id: string, link: string) => {
		try {
			const { success } = await notificationAPI.readNotification(id);
			if (success) {
				Router.push(link);
				store.dispatch(setNotificationCount());
			}
		} catch (error) {}
	};

	return (
		<Wrapper>
			{notifications?.length > 0 ? (
				notifications.map(({ id, link, type, read, title, createdAt, imageURL }, i) => (
					<Link key={i} href={link} className={read ? 'text-dark' : ''} onClick={() => handleRead(id, link)}>
						<Row>
							<Col xs="auto">
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
				))
			) : (
				<p className="mt-3 mb-0 text-center">You don&rsquo;t have any notification!</p>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	display: block;
	overflow: hidden;
	overflow-y: auto;

	& > a {
		display: block;
		padding: 0.75rem 0;

		&:not(:last-child) {
			border-bottom: 1px solid var(--border);
		}

		&:hover {
			text-decoration: none;
		}
	}
`;
