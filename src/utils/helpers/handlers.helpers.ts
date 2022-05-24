import { TopFiltersProps } from '@components/organisms';
import { KeyboardEvent } from 'react';

type IGetPageShowing = {
	showingFrom: number;
	showingTo: number;
	total: number;
};

export const handleNumberOnly = (e: KeyboardEvent<HTMLInputElement>, moreKeys?: string[]): void | boolean => {
	const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Tab', ...moreKeys];
	const { key } = e;
	if (keys.find((e) => e === key)) return true;
	e.preventDefault();
};

/**
 * Get page showing count
 * @param data
 * @returns
 */
export const getPageShowing = (data: Omit<TopFiltersProps, 'pageHeading'>): IGetPageShowing => {
	const { pageNumber = 1, itemCount = 20, totalPages = 1, total = 20 } = data;
	let showingFrom = 1;
	let showingTo = itemCount;
	if (pageNumber > 1) showingFrom = pageNumber * itemCount;
	if (pageNumber > 1) showingTo = showingFrom + itemCount;
	if (pageNumber === totalPages) showingTo = total;
	if (pageNumber > 1 && showingTo === total) showingFrom = total - itemCount;

	return { showingFrom, showingTo, total };
};

export const setTimeValidation = (props: any) => {
	let count = 59;
	const [isSendCodeDisabled, setIsSendCodeDisabled] = props.iSendCodeDisabled;
	const [timer, setTimer] = props.timer;
	setIsSendCodeDisabled(true);
	const setTime = setInterval(function () {
		if (count <= -1) {
			setIsSendCodeDisabled(false);
			clearInterval(setTime);
		} else {
			setTimer(count--);
		}
	}, 1000);
};
