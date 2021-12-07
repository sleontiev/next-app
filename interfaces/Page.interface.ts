export interface IPage {
  tags: string[],
  _id: string,
  secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
  firstCategory: FirstCategoryEnum,
  advantages?: IAdvantage[];
  createdAt: Date;
	updatedAt: Date;
  hh?: IHh;
}

export enum FirstCategoryEnum {
  Courses,
	Services,
	Books,
	Products 
}

export interface IAdvantage {
  _id: string;
	title: string;
	description: string;
}

export interface IHh {
  _id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}