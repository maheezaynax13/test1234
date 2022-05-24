export interface TagOptions {
	Yes: string;
	No: string;
}

export interface Question {
	questionId: number;
	questionTitle: string;
	answer: string;
	tagQuestion: string;
	tagOptions: TagOptions;
	res: string | null;
}

export interface IFAQContent {
	questionTypeId: number;
	questionTypeName: string;
	questions: Question[];
}

export interface IFAQs {
	title: string;
	titleUrl: string;
	subTitle: string;
	contents: IFAQContent[];
}
