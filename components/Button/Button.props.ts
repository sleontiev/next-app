import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  prop: 'primary' | 'secondary',
  children: ReactNode,
  iconArrow?: 'right' | 'down' | 'none'
}