/**
 * Format number to currency based on country
 * @param amount
 * @returns
 */
export const formatPrice = (amount: string | number = 0): string => {
	return new Intl.NumberFormat('en-BD', {
		style: 'currency',
		currency: 'BDT',
		currencyDisplay: 'narrowSymbol',
		minimumFractionDigits: 0,
	})
		.format(Number(amount))
		.replace(/^(\D+)/, '$1 ');
};

/**
 * Format number with comma seperated value
 * @param number
 */
export const formatNumber = (number: string | number = 0): string => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Capitalize string word
 * @param text
 * @returns
 */
export const formatTitleCase = (text: string): string | undefined => {
	const splitStr = text.toLowerCase().split(' ');
	if (splitStr && splitStr.length > 0) {
		splitStr.forEach((e, i) => {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		});

		return splitStr.join(' ');
	}
};

export const formatStatus = (status: string): string => {
	return status
		.toLowerCase()
		.replace(/_/g, ' ')
		.replace(/\b(\w)/g, (x) => x.toUpperCase());
};

export const formatReadable = (value: string): string => {
	return value.replace(/([A-Z])/g, ' $1');
};

export const upperCaseFirstChar = (value: string): string => {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

export const formatValidatorKey = (value: string): string => {
	const val = formatReadable(value);
	return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};
