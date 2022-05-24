interface Conditions {
	text: string;
	main: boolean;
}
export interface ICoupon {
	value: any;
	code: string;
	type: string;
	conditions: Conditions[];
	startDate: string;
	endDate: string;
}
