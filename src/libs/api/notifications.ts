import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, INotifications } from './interfaces';

class NotificationAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getNotifications = (type: string, ctx?: NextPageContext) =>
		this.get<BR<INotifications>>(`notification/customer/all-notications?type=${type}`, ctx);

	getNotificationCount = (ctx?: NextPageContext) => this.get<BR<number>>('notification/customer/count', ctx);

	readNotification = (id: string) => this.get<BR<string>>(`notification/customer/mark-as-read?id=${id}`);

	readAllNotification = () => this.get<BR<string>>('notification/customer/mark-all-as-read');
}

export const notificationAPI = new NotificationAPI(process.env.apiURL);
