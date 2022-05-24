import { INotification, ISubHeader } from '@libs/api/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: IInitialState = {
	isInit: false,
	isMobile: false,
	isLoading: false,
	notifications: null,
	notificationCount: 0,
	dealLinks: null,
	isMobileNavbar: false,
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
		toggleMobileNavbar: (state) => {
			state.isMobileNavbar = !state.isMobileNavbar;
		},
		updateLoader: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		updateNotifications: (state, action: PayloadAction<IInitialState['notifications']>) => {
			state.notifications = action.payload;
		},
		updateNotificationCount: (state, action: PayloadAction<number>) => {
			state.notificationCount = action.payload;
		},
		clearNotifications: (state) => {
			state.notifications = null;
			state.notificationCount = 0;
		},
		updateDealLinks: (state, action: PayloadAction<IInitialState['dealLinks']>) => {
			state.dealLinks = action.payload;
		},
	},
});

export default slice.reducer;

export const {
	setMobile,
	toggleMobileNavbar,
	updateLoader,
	updateNotifications,
	updateNotificationCount,
	clearNotifications,
	updateDealLinks,
} = slice.actions;

export const getAppState = (state: AppState): IInitialState => state.app;

interface IInitialState {
	isInit: boolean;
	isMobile: boolean;
	isLoading: boolean;
	notifications: INotification[];
	notificationCount: number;
	dealLinks: ISubHeader[];
	isMobileNavbar: boolean;
}
