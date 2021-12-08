import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IPage } from "../../interfaces/Page.interface";
import { IProduct } from "../../interfaces/Product.interface";

export interface IPageComponent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IPage,
  products: IProduct[]
}