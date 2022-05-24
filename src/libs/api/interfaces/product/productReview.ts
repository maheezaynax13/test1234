interface RatingPercentage {
	RateFivePerc: number;
	RateFourPerc: number;
	RateThreePerc: number;
	RateTwoPerc: number;
	RateOnePerc: number;
}

interface ChosenVariant {
	Attributes: string;
}

interface ProductInfo {
	slug: string;
	chosenVariant: ChosenVariant;
	imageURL: string;
	productName: string;
}

interface Review {
	customerName: string;
	review: string;
	imageURL: string[];
	productInfo: ProductInfo;
}

export interface IProductReview {
	totalRating: number;
	rating: number;
	ratingPercentage: RatingPercentage;
	reviews: Review[];
}

export interface IAddProductReview {
	productID: string;
	skuID: string;
	rating: number;
	review: string;
	imageURL: string[];
	likeCount: any[];
	disLikeCount: any[];
}
