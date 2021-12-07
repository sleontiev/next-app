import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IChip extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'primary' | 'secondary' | 'red' | 'green' | 'grey',
  size?: 'big',
  children: ReactNode,
  link?: string,
}