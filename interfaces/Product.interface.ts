export interface IProduct {
  _id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	description: string;
  characteristics: { value: string, name: string }[];
  createdAt: Date;
	updatedAt: Date;
	__v: number;
	image: string;
	initialRating: number;
  reviews: IReview[];
  reviewCount: number;
	reviewAvg?: number;
	advantages?: string;
	disadvantages?: string;
}

export interface IReview {
  _id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}