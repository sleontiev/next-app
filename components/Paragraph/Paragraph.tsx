import cn from "classnames";
import classes from './Paragraph.module.css';
import { IParagraph } from "./Paragraph.props";

export const Paragraph = ({size, children, className, ...props}: IParagraph): JSX.Element => {
  return (
    <p className={cn(classes.p, className, {
      [classes.large]: size === 'large',
      [classes.small]: size === 'small'
    })} {...props}>
      {children}
    </p>
  );
};