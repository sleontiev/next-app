import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeading extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3',
  children: ReactNode,
}