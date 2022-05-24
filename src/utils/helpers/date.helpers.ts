import { monthNames } from '../constants';

type IOldDate = {
	year?: number;
	month?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
	days?:
		| 0
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23
		| 24
		| 25
		| 26
		| 27
		| 28
		| 29
		| 30
		| 31;
};

/**
 * Get month name by month number
 * @param monthNumber
 * @returns
 */
export const getMonthName = (monthNumber: number): string => {
	if (monthNumber >= 0 && monthNumber <= 12) {
		return monthNames[monthNumber];
	}
};

/**
 * Get number of days in a month
 * @param month
 * @param year
 * @returns
 */
export const daysInMonth = (month: number, year: number) => {
	return new Date(year, month, 0).getDate();
};

/**
 * Get old date from a specific date
 * @param newDate
 * @param oldDate
 * @returns
 */
export const getConvertedDate = (newDate: Date, oldDate: IOldDate): Date => {
	let currYear = newDate.getFullYear();
	let currMonth = newDate.getMonth() + 1;
	let currDate = newDate.getDate();

	const { year, month, days } = oldDate;
	if (year > 0) currYear -= year;
	if (month > 0) currMonth -= month;

	const numberOfDays = daysInMonth(currMonth, currYear);
	currDate = numberOfDays;
	if (days >= numberOfDays) {
		const restDays = days - numberOfDays;
		currMonth -= 1;
		currDate = restDays || 1;
	} else if (days > 0) {
		currDate -= days;
	}

	return new Date(`${currYear}-${currMonth}-${currDate}`);
};

