interface IBkash {
	paymentID: string;
	createTime: string;
	orgLogo: string;
	orgName: string;
	transactionStatus: string;
	amount: string;
	currency: string;
	intent: string;
	merchantInvoiceNumber: string;
}

type ISSL = string;

type INagad = string;

export interface ICreatePayment {
	nagad: INagad;
	bkash: IBkash;
	ssl: ISSL;
}
