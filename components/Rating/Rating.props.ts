import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  value: number,
  setNewRating: (ratingValue: number) => void,
}