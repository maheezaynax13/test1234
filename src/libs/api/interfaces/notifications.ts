export interface INotification {
	orderId: string;
	link: string;
	read: boolean;
	title: string;
	type: string;
	imageURL: string;
	zID: string;
	createdAt: Date;
	updatedAt: Date;
	id: string;
}

export interface INotifications {
	count: number;
	notifications: INotification[];
}
